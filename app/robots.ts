import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  const normalizedEnvUrl = envUrl
    ? envUrl.match(/^https?:\/\//i)
      ? envUrl
      : `https://${envUrl.replace(/^\/+/, '')}`
    : null
  const baseUrl = (normalizedEnvUrl || 'https://istanbulofistasimasirketi.com.tr').replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/karakar/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
