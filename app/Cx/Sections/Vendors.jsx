import React from 'react'
import Image from 'next/image'

const Vendors = () => {
  const vendors = [
    { name: 'Milk It', logo: '/milk-it.png' },
    { name: 'The Baby Experience', logo: '/baby-e.png' },
    { name: 'The Mindful Sleep Coach', logo: '/sleep.png' },
    { name: 'bYOUty', logo: '/byouty.png' },
  ]

  return (
    <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#4d0809] text-center mb-6 md:mb-8">
          We only work with providers we trust
        </h2>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#fefcf3]/20 mb-8 md:mb-12"></div>

        {/* Vendor Logos */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {vendors.map((vendor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={vendor.logo}
                alt={vendor.name}
                width={100}
                height={60}
                className="h-12 sm:h-12 md:h-14 w-auto object-contain grayscale-0 hover:grayscale transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vendors
