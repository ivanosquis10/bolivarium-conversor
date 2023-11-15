/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import type { Metadata } from 'next'
import { config } from './config'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title} | ${config.meta.title}`,
      description: description ?? config.meta.description,
      url: './',
      siteName: config.meta.title,
      images: image ? [image] : [config.meta.socialBanner],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      title: `${title} | ${config.meta.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [config.meta.socialBanner]
    },
    ...rest
  }
}
