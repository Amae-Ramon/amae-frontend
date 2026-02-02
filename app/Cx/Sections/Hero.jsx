'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 3

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: 'url(/main-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-beige uppercase mb-4 sm:mb-6 font-light">
            For New Mothers
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 sm:mb-10">
            Gift the support
            <br />
            she actually needs
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/buy-gift"
              className="font-sans w-full sm:w-auto px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/90 transition-all duration-300 hover:scale-105"
            >
              Buy a Gift
            </Link>
            <Link
              href="/redeem"
              className="font-sans w-full sm:w-auto px-8 py-3 bg-transparent border border-white text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Redeem a Voucher
            </Link>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-white w-2.5 h-2.5'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
