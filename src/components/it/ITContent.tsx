'use client'

import dynamic from 'next/dynamic'

const ITHero = dynamic(() => import('@/components/it/ITHero'), { ssr: false })
const ITServices = dynamic(() => import('@/components/it/ITServices'), { ssr: false })
const ITQuoteForm = dynamic(() => import('@/components/it/ITQuoteForm'), { ssr: false })
const ITUseCases = dynamic(() => import('@/components/it/ITUseCases'), { ssr: false })
const ITTechStack = dynamic(() => import('@/components/it/ITTechStack'), { ssr: false })
const ITCTA = dynamic(() => import('@/components/it/ITCTA'), { ssr: false })

export default function ITContent() {
  return (
    <>
      <ITHero />
      <ITServices />
      <ITQuoteForm />
      <ITUseCases />
      <ITTechStack />
      <ITCTA />
    </>
  )
}
