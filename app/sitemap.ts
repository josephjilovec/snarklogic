import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://snarklogic.com'; const routes=['','/platform','/lab','/agents','/studio','/marketplace','/enterprise','/council','/investors','/about','/contact']
  return routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency: route===''?'weekly':'monthly',priority: route===''?1:0.7}))
}
