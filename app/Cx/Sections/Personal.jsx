import React from 'react'
import Image from 'next/image'

const Personal = () => {
  const cards = [
    {
      title: 'Digital or physical gifts',
      image: '/per-1.png',
    },
    {
      title: 'Personal messages',
      image: '/per-2.png',
    },
    {
      title: 'Gift Add-Ons',
      image: '/per-3.png',
    },
  ]

  return (
    <section className="relative bg-[#ebdcc8] py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Art - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-72 opacity-60 pointer-events-none">
        <Image
          src="/per-art-1.png"
          alt="Decorative art"
          width={320}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Decorative Art - Top Right (near card 3) */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-56 lg:w-64 opacity-60 pointer-events-none">
        <Image
          src="/per-art-2.png"
          alt="Decorative art"
          width={320}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4d0809] text-center mb-4 md:mb-6">
          Make It Personal
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-[#4d0809]/80 text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Personal messages, digital or physical delivery, and optional gift or wellness add-ons, all chosen at checkout.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative aspect-3/4 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 drop-shadow-lg">
                  {card.title}
                </h3>
                <Image
                  src="/brand-mark.png"
                  alt="Amae"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Personal
