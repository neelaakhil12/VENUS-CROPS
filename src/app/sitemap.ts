import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://venuscropscience.in'
  
  const routes = [
    '',
    '/about',
    '/products',
    '/gallery',
    '/rd',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
