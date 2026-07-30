'use client'

import dynamic from 'next/dynamic'

const WPHero = dynamic(() => import('@/components/wordpress/WPHero'), { ssr: false })
const WPFeatures = dynamic(() => import('@/components/wordpress/WPFeatures'), { ssr: false })
const WPPricing = dynamic(() => import('@/components/wordpress/WPPricing'), { ssr: false })
const WPProcess = dynamic(() => import('@/components/wordpress/WPProcess'), { ssr: false })
const WPTestimonials = dynamic(() => import('@/components/wordpress/WPTestimonials'), { ssr: false })
const WPCTA = dynamic(() => import('@/components/wordpress/WPCTA'), { ssr: false })

export default function WPContent() {
  return (
    <>
      <WPHero />
      <WPFeatures />
      <WPPricing />
      <WPProcess />
      <WPTestimonials />
      <WPCTA />
    </>
  )
}
