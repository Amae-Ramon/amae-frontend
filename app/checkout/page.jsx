import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/Cx/Layout/Nav'
import Footer from '@/app/Cx/Sections/Footer'
import { BsCashCoin, BsCreditCard2Front } from 'react-icons/bs'

const CheckoutPage = () => {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pillar-3.png"
          alt="Checkout"
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
            Checkout
          </h1>

          {/* Go Back Button */}
          <Link
            href="/cart"
            className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
          >
            Go Back
          </Link>
        </div>
      </section>

      {/* Checkout Content Section */}
      <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left - Checkout Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl sm:text-3xl mb-6" style={{ color: '#4d0809' }}>
                Your/Giftee Information
              </h2>

              {/* Checkboxes */}
              <div className="flex items-center gap-6 mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#4d0809]" />
                  <span className="text-sm" style={{ color: '#4d0809' }}>Buying For Myself</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#4d0809]" />
                  <span className="text-sm" style={{ color: '#4d0809' }}>Gifting it to a friend</span>
                </label>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Your name/Giftee name</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white placeholder-[#4d0809]/50"
                      style={{ color: '#4d0809' }}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white placeholder-[#4d0809]/50"
                      style={{ color: '#4d0809' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>
                    Company Name <span style={{ color: '#4d0809', opacity: 0.5 }}>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white"
                    style={{ color: '#4d0809' }}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white"
                  style={{ color: '#4d0809' }}
                />
              </div>

              {/* Country, Region, City, Zip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Country</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white appearance-none"
                    style={{ color: '#4d0809' }}
                  >
                    <option>Select...</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Region/State</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white appearance-none"
                    style={{ color: '#4d0809' }}
                  >
                    <option>Select...</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>City</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white appearance-none"
                    style={{ color: '#4d0809' }}
                  >
                    <option>Select...</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Zip Code</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white"
                    style={{ color: '#4d0809' }}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white"
                    style={{ color: '#4d0809' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] bg-white"
                    style={{ color: '#4d0809' }}
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-medium text-lg mb-6" style={{ color: '#4d0809' }}>Payment Options</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {/* Cash on Delivery */}
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <BsCashCoin className="w-8 h-8" style={{ color: '#4d0809' }} />
                    </div>
                    <span className="text-xs text-center" style={{ color: '#4d0809' }}>Cash on Delivery</span>
                    <input type="radio" name="payment" className="accent-[#4d0809]" />
                  </label>

                  {/* Venmo */}
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/venmo.png"
                        alt="Venmo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-center" style={{ color: '#4d0809' }}>Venmo</span>
                    <input type="radio" name="payment" className="accent-[#4d0809]" />
                  </label>

                  {/* Paypal */}
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/paypal.png"
                        alt="Paypal"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-center" style={{ color: '#4d0809' }}>Paypal</span>
                    <input type="radio" name="payment" className="accent-[#4d0809]" />
                  </label>

                  {/* Amazon Pay */}
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/amazon-pay.png"
                        alt="Amazon Pay"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-center" style={{ color: '#4d0809' }}>Amazon Pay</span>
                    <input type="radio" name="payment" className="accent-[#4d0809]" />
                  </label>

                  {/* Debit/Credit Card */}
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <BsCreditCard2Front className="w-8 h-8" style={{ color: '#4d0809' }} />
                    </div>
                    <span className="text-xs text-center" style={{ color: '#4d0809' }}>Debit/Credit Card</span>
                    <input type="radio" name="payment" className="accent-[#4d0809]" defaultChecked />
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4" style={{ color: '#4d0809' }}>Additional Information</h3>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#4d0809' }}>
                    Order Notes <span style={{ color: '#4d0809', opacity: 0.5 }}>(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4d0809] resize-none bg-white placeholder-gray-400"
                    style={{ color: '#4d0809' }}
                  />
                </div>
              </div>
            </div>

            {/* Right - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl mb-6" style={{ color: '#4d0809' }}>
                  Order Summary
                </h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/pillar-1.jpg"
                        alt="The Baby Experience"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-tight" style={{ color: '#4d0809' }}>
                        The Baby Experience: New parents home...
                      </p>
                      <p className="text-sm">
                        <span style={{ color: '#4d0809' }}>1 x </span>
                        <span style={{ color: '#4d0809', fontWeight: 500 }}>£300</span>
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/nutrition-feature-2.png"
                        alt="The Food Doula"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-tight" style={{ color: '#4d0809' }}>
                        The Food Doula 3 day package (1 P)
                      </p>
                      <p className="text-sm">
                        <span style={{ color: '#4d0809' }}>3 x </span>
                        <span style={{ color: '#4d0809', fontWeight: 500 }}>£125</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
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
                  <span className="font-serif text-2xl font-medium" style={{ color: '#4d0809' }}>£500</span>
                </div>

                {/* Place Order Button */}
                <Link 
                  href="/thank-you"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#711111', color: '#ffffff' }}
                >
                  PLACE ORDER
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CheckoutPage
