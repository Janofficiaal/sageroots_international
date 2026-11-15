import type { MetadataRoute } from 'next'
import { universities } from '@/data/universities'
import { destinations } from '@/data/destinations'
import { facebookPosts } from '@/data/facebookPosts'

const BASE_URL = 'https://www.sagerootsinternational.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/universities',
    '/destinations',
    '/courses',
    '/scholarships',
    '/services',
    '/foundation',
    '/success-stories',
    '/posts',
    '/eligibility-checker',
    '/study-abroad',
    '/best-study-abroad-consultancy-in-the-world',
    '/study-in-uk-without-ielts-moi-accepted-universities',
    '/uk-student-visa-bank-statement-guide-28-day-rule',
    '/uk-universities-with-low-cas-deposit-tuition-fees',
    '/study-in-uk-with-study-gap-accepted-universities',
    '/second-masters-in-uk-after-psw',
    '/uk-january-2027-intake-universities-deadlines',
    '/courses/data-science-ai-uk',
    '/courses/mba-business-uk',
    '/courses/cyber-security-uk',
    '/courses/healthcare-nursing-uk',
    '/dhaka',
    '/sylhet',
    '/chittagong',
    '/rajshahi',
    '/khulna',
    '/study-abroad-consultancy-in-khulna',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/posts' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route === '/posts' ? 0.9 : 0.8,
  }))

  const universityRoutes = universities.map((u) => ({
    url: `${BASE_URL}/universities/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const destinationRoutes = destinations.map((d) => ({
    url: `${BASE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const postRoutes = facebookPosts.map((p) => ({
    url: `${BASE_URL}/posts/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...postRoutes, ...destinationRoutes, ...universityRoutes]
}
