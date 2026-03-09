import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const [company] = await pool.query('SELECT * FROM company_info WHERE id = 1');
        const [home] = await pool.query('SELECT * FROM home_content WHERE id = 1');
        const [categories] = await pool.query('SELECT * FROM categories');
        const [varieties] = await pool.query('SELECT * FROM varieties');
        const [gallery] = await pool.query('SELECT * FROM gallery');

        // Reconstruct the JSON structure expected by the frontend
        const products = (categories as any[]).map(cat => ({
            category: cat.name,
            varieties: (varieties as any[]).filter(v => v.category_id === cat.id)
        }));

        const responseData = {
            company: {
                name: (company as any)[0]?.name || "",
                founder: (company as any)[0]?.founder || "",
                established: (company as any)[0]?.established || 2021,
                tagline: (company as any)[0]?.tagline || "",
                contact: {
                    email: (company as any)[0]?.email || "",
                    phone: (company as any)[0]?.phone || "",
                    address: (company as any)[0]?.address || ""
                }
            },
            home: {
                hero: {
                    title: (home as any)[0]?.hero_title || "",
                    description: (home as any)[0]?.hero_description || ""
                },
                about: {
                    title: (home as any)[0]?.about_title || "",
                    description: (home as any)[0]?.about_description || ""
                }
            },
            products: products || [],
            gallery: gallery || []
        };

        return NextResponse.json(responseData);
    } catch (error: any) {
        console.error('Database GET Error:', error);
        if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED' || error.message.includes('DATABASE_HOST_IP')) {
            return NextResponse.json({
                error: "DATABASE_NOT_CONFIGURED",
                message: "Database connection failed. Please update your .env file with real Hostinger credentials."
            }, { status: 200 }); // Return 200 so frontend can handle it gracefully
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const connection = await pool.getConnection();
    try {
        const data = await request.json();
        await connection.beginTransaction();

        // 1. Update Company Info
        await connection.query(
            'UPDATE company_info SET name=?, founder=?, established=?, tagline=?, email=?, phone=?, address=? WHERE id=1',
            [data.company.name, data.company.founder, data.company.established, data.company.tagline, data.company.contact.email, data.company.contact.phone, data.company.contact.address]
        );

        // 2. Update Home Content
        await connection.query(
            'UPDATE home_content SET hero_title=?, hero_description=?, about_title=?, about_description=? WHERE id=1',
            [data.home.hero.title, data.home.hero.description, data.home.about.title, data.home.about.description]
        );

        // 3. Update Products & Categories (Clear and Re-insert for simplicity/consistency with Sync All)
        await connection.query('DELETE FROM categories'); // Cascades to varieties
        for (const cat of data.products) {
            const [catResult] = await connection.query('INSERT INTO categories (name) VALUES (?)', [cat.category]);
            const categoryId = (catResult as any).insertId;
            for (const v of cat.varieties) {
                await connection.query(
                    'INSERT INTO varieties (category_id, name, type, packing, seed_per_acre, height, duration, grain_type, panicle_length, grains_per_panicle, disease_reaction, sowing_time, resistant_to, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [categoryId, v.name, v.type, v.packing, v.seed_per_acre, v.height, v.duration, v.grain_type, v.panicle_length, v.grains_per_panicle, v.disease_reaction, v.sowing_time, v.resistant_to, v.image, v.description]
                );
            }
        }

        // 4. Update Gallery
        await connection.query('DELETE FROM gallery');
        for (const item of data.gallery) {
            await connection.query(
                'INSERT INTO gallery (url, title, category, type) VALUES (?, ?, ?, ?)',
                [item.url, item.title, item.category, item.type]
            );
        }

        await connection.commit();
        return NextResponse.json({ success: true });
    } catch (error: any) {
        await connection.rollback();
        console.error('Database POST Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        connection.release();
    }
}
