import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/Cx/Layout/Nav'
import Footer from '@/app/Cx/Sections/Footer'

const CartPage = () => {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pillar-3.png"
          alt="Your Cart"
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
            Viewing
          </span>

          {/* Main Title */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl mb-8">
            Your Cart
          </h1>

          {/* Go Back Button */}
          <Link
            href="/"
            className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
          >
            Go Back
          </Link>
        </div>
      </section>

      {/* Cart Content Section */}
      <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left - Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl mb-6" style={{ color: '#4d0809' }}>
                Items in your cart
              </h2>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-[#ebdcc8] rounded-lg px-4 py-3 mb-4">
                <div className="col-span-5 text-sm font-medium" style={{ color: '#4d0809' }}>Service</div>
                <div className="col-span-2 text-sm font-medium text-center" style={{ color: '#4d0809' }}>Price</div>
                <div className="col-span-3 text-sm font-medium text-center" style={{ color: '#4d0809' }}>Weeks</div>
                <div className="col-span-2 text-sm font-medium text-center" style={{ color: '#4d0809' }}>Sub-Total</div>
              </div>

              {/* Cart Item 1 */}
              <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100">
                {/* Remove & Image & Name */}
                <div className="col-span-5 flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center transition-colors shrink-0" style={{ borderColor: '#4d0809', color: '#4d0809' }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/pillar-1.jpg"
                      alt="The Baby Experience"
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm leading-tight" style={{ color: '#4d0809' }}>
                    The Baby Experience: New parents home visit (London area only)
                  </span>
                </div>
                {/* Price */}
                <div className="col-span-2 text-sm text-center" style={{ color: '#4d0809' }}>£300</div>
                {/* Quantity */}
                <div className="col-span-3 flex items-center justify-center gap-2">
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" style={{ color: '#4d0809' }}>
                    <span className="text-lg">−</span>
                  </button>
                  <span className="w-8 text-center text-sm" style={{ color: '#4d0809' }}>01</span>
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" style={{ color: '#4d0809' }}>
                    <span className="text-lg">+</span>
                  </button>
                </div>
                {/* Sub-Total */}
                <div className="col-span-2 text-sm font-medium text-center" style={{ color: '#4d0809' }}>£300</div>
              </div>

              {/* Cart Item 2 */}
              <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100">
                {/* Remove & Image & Name */}
                <div className="col-span-5 flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center transition-colors shrink-0" style={{ borderColor: '#4d0809', color: '#4d0809' }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/nutrition-feature-2.png"
                      alt="The Food Doula"
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm leading-tight" style={{ color: '#4d0809' }}>
                    The Food Doula 3 day package (1 P)
                  </span>
                </div>
                {/* Price */}
                <div className="col-span-2 text-sm text-center" style={{ color: '#4d0809' }}>£125</div>
                {/* Quantity */}
                <div className="col-span-3 flex items-center justify-center gap-2">
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" style={{ color: '#4d0809' }}>
                    <span className="text-lg">−</span>
                  </button>
                  <span className="w-8 text-center text-sm" style={{ color: '#4d0809' }}>03</span>
                  <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" style={{ color: '#4d0809' }}>
                    <span className="text-lg">+</span>
                  </button>
                </div>
                {/* Sub-Total */}
                <div className="col-span-2 text-sm font-medium text-center" style={{ color: '#4d0809' }}>£125</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-medium hover:text-white transition-colors"
                  style={{ borderColor: '#4d0809', color: '#4d0809' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  RETURN TO PILLARS
                </Link>
                <button 
                  className="px-8 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#711111', color: '#ffffff' }}
                >
                  UPDATE CART
                </button>
              </div>
            </div>

            {/* Right - Cart Totals */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl mb-6" style={{ color: '#4d0809' }}>
                  Cart Totals
                </h2>

                {/* Totals List */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: '#4d0809', opacity: 0.7 }}>Sub-total</span>
                    <span style={{ color: '#4d0809' }}>£425</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: '#4d0809', opacity: 0.7 }}>Addons</span>
                    <span style={{ color: '#4d0809' }}>None</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: '#4d0809', opacity: 0.7 }}>Discount</span>
                    <span style={{ color: '#4d0809' }}>£0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: '#4d0809', opacity: 0.7 }}>Tax</span>
                    <span style={{ color: '#4d0809' }}>£25</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mb-8">
                  <span className="font-serif text-xl" style={{ color: '#4d0809' }}>Total</span>
                  <span className="font-serif text-2xl font-medium" style={{ color: '#4d0809' }}>£450</span>
                </div>

                {/* Checkout Button */}
                <Link 
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#711111', color: '#ffffff' }}
                >
                  PROCEED TO CHECKOUT
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Wellbeing CTA Section */}
      <section 
        className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(/therapy.png)',
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
            Corporate Wellbeing
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 sm:mb-10">
            Supporting Working Parents
          </h2>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/90 transition-all duration-300 hover:scale-105"
            style={{ color: '#4d0809' }}
          >
            Enquire Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CartPage
