import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sage Roots International — UK & Global University Admissions',
    short_name: 'Sage Roots Int.',
    description:
      'Official UK, Cyprus, Malta & Dubai university admissions, MOI pathways, scholarships, and UKVI student visa guidance from Stratford, London.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAF9',
    theme_color: '#042017',
    icons: [
      {
        src: '/images/sri-logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
