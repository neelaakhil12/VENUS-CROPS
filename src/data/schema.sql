-- Schema for Venus Crop Science MySQL Migration

-- 1. Company Information
CREATE TABLE IF NOT EXISTS company_info (
    id INT PRIMARY KEY DEFAULT 1,
    name VARCHAR(255),
    founder VARCHAR(255),
    established INT,
    tagline VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    CONSTRAINT single_row CHECK (id = 1)
);

-- 2. Home Page Content
CREATE TABLE IF NOT EXISTS home_content (
    id INT PRIMARY KEY DEFAULT 1,
    hero_title VARCHAR(255),
    hero_description TEXT,
    about_title VARCHAR(255),
    about_description TEXT,
    CONSTRAINT single_row CHECK (id = 1)
);

-- 3. Product Categories
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- 4. Product Varieties
CREATE TABLE IF NOT EXISTS varieties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    packing VARCHAR(100),
    seed_per_acre VARCHAR(100),
    height VARCHAR(100),
    duration VARCHAR(100),
    grain_type VARCHAR(100),
    panicle_length VARCHAR(100),
    grains_per_panicle VARCHAR(100),
    disease_reaction VARCHAR(255),
    sowing_time VARCHAR(255),
    resistant_to VARCHAR(255),
    image VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 5. Gallery Items
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    category VARCHAR(100),
    type ENUM('image', 'video') DEFAULT 'image'
);

-- Initial Data Seed (Optional but recommended)
INSERT INTO company_info (id, name, founder, established, tagline, email, phone, address) 
VALUES (1, 'Venus Crop Science', 'Praneeth Lakkaram', 2021, 'The Solution for Agriculture Needs', 'Venuscropscience@gmail.com', '+91 8639171139', 'Near NH-44 Highway, Govindpet Road, Brahmanpally Village, Telangana – 503224')
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO home_content (id, hero_title, hero_description, about_title, about_description)
VALUES (1, 'Nurturing Life with Superior Seeds', 'Venus Crop Science - Providing high-quality seeds to farmers for better productivity, higher yield, and sustainable farming solutions.', 'A Dedicated Partner in Agricultural Success', 'Venus Crop Science is a dedicated agricultural seeds company committed to providing high-quality seeds to farmers for better productivity and profitability.')
ON DUPLICATE KEY UPDATE hero_title=hero_title;
