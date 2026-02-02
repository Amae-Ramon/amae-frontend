import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Curated = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: '#ebdcc8' }}>
      {/* Left Art */}
      <div className="absolute left-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
        <Image
          src="/white-art-1.png"
          alt="Decorative illustration"
          width={320}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Right Art */}
      <div className="absolute right-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
        <Image
          src="/white-art-2.png"
          alt="Decorative illustration"
          width={320}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 text-center">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon leading-tight mb-6 md:mb-8">
          A curated gifting
          <br />
          platform for new families
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-maroon/80 leading-relaxed mb-8 md:mb-10">
          We've taken influence from Japanese postpartum culture, where community care, rituals and support systems nurture new families. Inspired by the Japanese concept of Amae - the instinct to be cared for and connected - our platform empowers others to give meaningful, thoughtful, hands-on support through the raw yet rewarding months after birth. It takes a village - <span className="font-semibold text-maroon">and we've built one for you.</span>
        </p>

        {/* Button */}
        <Link
          href="/about"
          className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/80 transition-all duration-300 hover:scale-105"
        >
          About us
        </Link>
      </div>
    </section>
  )
}

export default Curated
