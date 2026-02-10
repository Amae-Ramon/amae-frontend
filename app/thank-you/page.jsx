import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/Cx/Layout/Nav'
import Footer from '@/app/Cx/Sections/Footer'
import { BsCheckCircleFill } from 'react-icons/bs'

const ThankYouPage = () => {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pillar-3.png"
          alt="Thank You"
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
            All Done
          </span>

          {/* Main Title */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl mb-8">
            Thank You
          </h1>

          {/* Go Back Button */}
          <Link
            href="/"
            className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
          >
            Go Home
          </Link>
        </div>
      </section>

      {/* Success Message Section */}
      <section className="bg-[#fefcf3] py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <BsCheckCircleFill className="w-16 h-16 text-green-500" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: '#4d0809' }}>
            Your order code is successfully sent!
          </h2>

          {/* Description */}
          <p className="text-sm mb-10" style={{ color: '#4d0809', opacity: 0.7 }}>
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-6 py-3 border border-[#4d0809] text-[#4d0809] rounded-full text-sm font-medium transition-colors hover:bg-[#4d0809] hover:text-white"
            >
              <BsCheckCircleFill className="w-4 h-4 group-hover:text-white" />
              BROWSE OTHER PILLARS
            </Link>
            <Link
              href="/orders"
              className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors"
              style={{ backgroundColor: '#711111', color: '#ffffff' }}
            >
              VIEW ORDER
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ThankYouPage
