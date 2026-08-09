import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://snarklogic.josephjilovec.com'
  return ['', '/creators', '/enterprise', '/engine', '/lab', '/agents', '/about', '/contact', '/investors'].map(path => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : .75,
  }))
}
