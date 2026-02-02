import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose a Gift',
      description: 'Select a thoughtful gift or voucher from our curated range of postpartum support, from sleep and nutrition to home and holistic care.',
    },
    {
      number: '2',
      title: 'Redeem with Ease',
      description: 'The recipient redeems their voucher through Amae and is connected with a trusted provider that suits their needs.',
    },
    {
      number: '3',
      title: 'Enjoy the Support',
      description: 'They book directly with their provider and receive the care they need, while Amae handles everything behind the scenes.',
    },
  ]

  return (
    <section className="relative bg-white">
      {/* Top Section - Heading & Description */}
      <div className="pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4d0809] mb-4 md:mb-6">
            How It Works
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#4d0809]/80 max-w-2xl mx-auto leading-relaxed">
            Choose a service or gift amount, and we'll match it with trusted providers who specialise in postpartum care. The mother redeems the gift when she's ready, in a way that fits her needs and routine. <span className="font-semibold text-[#4d0809]">Thoughtful support, delivered with ease.</span>
          </p>
        </div>
      </div>

      {/* Card + Image Section */}
      <div className="relative mt-10 md:mt-14">
        {/* Pink Card */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-32 sm:pb-40 md:pb-48">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#ebdcc8] rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#4d0809] flex items-center justify-center mb-4">
                      <span className="font-serif text-lg sm:text-xl text-[#4d0809]">{step.number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#4d0809] mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-[#4d0809]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-8 md:mt-10 text-center">
                <Link
                  href="/gifts"
                  className="inline-block font-sans px-8 py-3 bg-[#fefccd] text-[#4d0809] rounded-full text-sm font-medium hover:bg-[#fefccd]/80 transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Browse Gift Options
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Positioned behind the card's bottom portion */}
        <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-72 md:h-80 lg:h-96">
          <Image
            src="/how-it-works.png"
            alt="How it works"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
