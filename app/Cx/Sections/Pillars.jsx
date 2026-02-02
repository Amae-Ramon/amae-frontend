import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pillars = () => {
  const pillars = [
    {
      title: 'Sleep',
      image: '/pillar-1.jpg',
      href: '/pillars/sleep',
      description: 'As sleep becomes unpredictable and disrupted when your little one arrives, we want to support new mothers with night nannies and sleep trainers.',
    },
    {
      title: 'Nutrition',
      image: '/pillar-2.png',
      href: '/pillars/nutrition',
      description: 'No time to cook whilst feeding your newborn, we will offer nutritious home cooked meals for new parents.',
    },
    {
      title: 'Household',
      image: '/pillar-3.png',
      href: '/pillars/household',
      description: "'Tidy house, tidy mind' - get a cleaner for a few hours to help with laundry and general housework.",
    },
    {
      title: 'Holistic Beauty',
      image: '/pillar-4.jpg',
      href: '/pillars/holistic-beauty',
      description: 'Desperate to leave the house for a much needed manicure, our service sends beauticians to your home for some much needed TLC.',
    },
  ]

  return (
    <section className="bg-[#4d0809] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white text-center mb-4 md:mb-6">
          Our Four Pillars
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-white/70 text-center max-w-xl mx-auto mb-10 md:mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien eros, cursus a ornare scelerisque, feugiat quis velit. Aliquam mauris tellus, fermentum non viverra ac, maximus vel dui.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.href}
              className="group relative aspect-3/4 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Default Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Default Content - Title & Icon (visible by default, hidden on hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                  {pillar.title}
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Hover Content - Description (hidden by default, visible on hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-sans text-xs sm:text-sm md:text-base text-white leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
