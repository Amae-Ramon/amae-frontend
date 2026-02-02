import React from 'react'
import Link from 'next/link'

const Quote = () => {
  return (
    <section 
      className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/quote-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-[#fefccd] uppercase mb-4 sm:mb-6 font-light">
          For Trusted Providers
        </p>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 sm:mb-10">
          Join a thoughtfully curated
          <br />
          network supporting new families
        </h2>

        {/* Button */}
        <Link
          href="/partner"
          className="inline-block font-sans px-8 py-3 bg-[#fefccd] text-[#4d0809] rounded-full text-sm font-medium hover:bg-[#fefccd]/90 transition-all duration-300 hover:scale-105"
        >
          Partner with Amae
        </Link>
      </div>
    </section>
  )
}

export default Quote
