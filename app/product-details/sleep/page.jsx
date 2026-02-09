import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/Cx/Layout/Nav'
import Footer from '@/app/Cx/Sections/Footer'

const SleepServiceDetails = () => {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/how-it-works.png"
          alt="Service Details"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-maroon/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#8B4513]/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Subtitle */}
          <span className="text-white/90 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Ready to Buy?
          </span>

          {/* Main Title */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl mb-8">
            Service Details
          </h1>

          {/* Go Back Button */}
          <Link
            href="/pillars/sleep"
            className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
          >
            Go Back
          </Link>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Product Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/pillar-1.jpg"
                alt="The Baby Experience"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Product Info */}
            <div className="flex flex-col">
              {/* Category */}
              <span className="text-maroon/70 text-sm font-sans mb-3">
                Category: Sleep
              </span>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-maroon leading-tight mb-4">
                The Baby Experience: New parents home visit (London area only)
              </h2>

              {/* Price */}
              <span className="font-serif text-3xl sm:text-4xl text-maroon mb-6">
                £85
              </span>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-maroon/80 leading-relaxed mb-8">
                The baby experience is founded by Lou Toosley (NCT Breastfeeding Counsellor, Holistic Sleep Coach, NCT antenatal teacher and NCT trained birth and postnatal doula, Baby Massage Teacher IAIMS & Peter Walker Developmental Massage) and Sarah Johnson (NCT breastfeeding counsellor, Holistic Sleep Coach, Wise Hippo hypnobirthing practitioner, recognised birth and postnatal doula (Doula UK, Nurturing Birth) and NCT antenatal teacher). They offer warm, practical, evidence-based support from pregnancy through early childhood. Empathetic, realistic, and genuinely caring with a calm, reassuring approach. They're here to help families feel confident, supported, and able to enjoy the transition to parenthood while building strong foundations for family life.
              </p>

              {/* Add to Cart Button */}
              <button 
                className="w-full py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 hover:opacity-90"
                style={{ backgroundColor: '#711111', color: '#ffffff' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-medium tracking-wider">ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You Might Also Like Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-maroon text-center mb-4 md:mb-6">
            You Might Also Like
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-maroon/70 text-center max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius pharetra turpis eget facilisis. Sed interdum suscipit nunc ac faucibus.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 - Sleep */}
            <Link
              href="/pillars/sleep"
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/pillar-1.jpg"
                alt="Sleep"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
                  Sleep
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </Link>

            {/* Card 2 - Nutrition */}
            <Link
              href="/pillars/nutrition"
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/pillar-2.png"
                alt="Nutrition"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
                  Nutrition
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </Link>

            {/* Card 3 - Household */}
            <Link
              href="/pillars/household"
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/pillar-3.png"
                alt="Household"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
                  Household
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </Link>

            {/* Card 4 - Holistic Beauty */}
            <Link
              href="/pillars/holistic-beauty"
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/pillar-4.jpg"
                alt="Holistic Beauty"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
                  Holistic<br />Beauty
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-maroon text-center mb-10 md:mb-14">
            Featured Providers
          </h2>

          {/* Provider Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Milk It */}
            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              {/* Default Content - Logo */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/milk-it.png"
                  alt="Milk It"
                  width={150}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/providers/milk-it"
                  className="px-6 py-2 bg-beige text-maroon text-sm font-medium rounded-full hover:bg-beige/80 transition-colors duration-200"
                >
                  View Provider
                </Link>
              </div>
            </div>

            {/* Card 2 - The Baby Experience */}
            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              {/* Default Content - Logo */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/baby-e.png"
                  alt="The Baby Experience"
                  width={150}
                  height={80}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/providers/baby-experience"
                  className="px-6 py-2 bg-beige text-maroon text-sm font-medium rounded-full hover:bg-beige/80 transition-colors duration-200"
                >
                  View Provider
                </Link>
              </div>
            </div>

            {/* Card 3 - The Mindful Sleep Coach */}
            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              {/* Default Content - Logo */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/sleep.png"
                  alt="The Mindful Sleep Coach"
                  width={150}
                  height={80}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/providers/mindful-sleep-coach"
                  className="px-6 py-2 bg-beige text-maroon text-sm font-medium rounded-full hover:bg-beige/80 transition-colors duration-200"
                >
                  View Provider
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section 
        className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(/main-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-beige uppercase mb-4 sm:mb-6 font-light">
            Gift Now
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 sm:mb-10">
            Support That New Mom Today!
          </h2>

          {/* Button */}
          <Link
            href="/gift"
            className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/90 transition-all duration-300 hover:scale-105"
          >
            Gift Support Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SleepServiceDetails
