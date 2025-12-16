import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Sostituisci con il tuo dominio vero quando lo comprerai
    sitemap: 'https://www.alimentaricinelli.it/sitemap.xml',
  }
}