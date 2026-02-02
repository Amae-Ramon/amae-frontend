import React from 'react'
import Image from 'next/image'

const Philosophy = () => {
  const philosophies = [
    {
      icon: '/phi-1.png',
      bgColor: 'bg-blue-100',
      title: 'Curated & vetted providers',
      description: 'We partner with only trusted specialists, ensuring safe and reliable care for new mothers.',
    },
    {
      icon: '/phi-2.png',
      bgColor: 'bg-pink-100',
      title: 'Guilt-free, practical gifting',
      description: "Offer support that truly matters. Amae gifts are flexible, thoughtful and designed to ease, not add to, new moms' lives.",
    },
    {
      icon: '/phi-3.png',
      bgColor: 'bg-yellow-100',
      title: 'Your village, personally delivered',
      description: 'Bring the warm, nurturing support of a village right to her door, with Amae making gifting personal and intuitive.',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4d0809] text-center mb-12 md:mb-16">
          Our Philosophy
        </h2>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {philosophies.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${item.bgColor} flex items-center justify-center mb-6`}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-[#4d0809] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#4d0809]/70 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
