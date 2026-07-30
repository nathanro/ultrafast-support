'use client'

import dynamic from 'next/dynamic'

const ServiceSelector = dynamic(() => import('@/components/ServiceSelector'), { ssr: false })

export default function HomeContent() {
  return <ServiceSelector />
}
