import Footer from './Footer'
import React from 'react'
import FAQ from './FAQ'

export default function FAQF() {
  return (
<section className="relative px-10">
  <FAQ />
  <Footer />

  <div
    className="absolute -bottom-24 left-0 w-full h-[50dvh] bg-island bg-no-repeat bg-bottom bg-contain -z-30 bg-[#54E2D9]"
    
  />
</section>

  )
}
