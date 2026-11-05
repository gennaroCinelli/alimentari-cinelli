import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alimentari Cinelli',
    short_name: 'Cinelli',
    description: 'Alimentari e Frutta Cinelli Domenico - Qualità e Tradizione dal 1986.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0b',
    theme_color: '#ff6b2c', // Arancione del brand
    icons: [
      {
        src: '/icon.png', // Assicurati di avere questa icona in public
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}