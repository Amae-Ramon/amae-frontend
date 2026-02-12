import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/Cx/Layout/Nav";
import HowItWorks from "@/app/Cx/Sections/HowItWorks";
import Vendors from "@/app/Cx/Sections/Vendors";
import Footer from "@/app/Cx/Sections/Footer";

const HouseholdPage = () => {
  const services = [
    {
      price: "£135",
      title: "The Baby Experience: in home infant feeding consultation (London area only)",
      desc: "The baby experience is founded by Lou Toseby (NCT Breastfeeding Counsellor, Holistic Sleep Coach, NCT…).",
      img: "/pillar-3.png",
    },
    {
      price: "£60",
      title: "Remote infant feeding consultation by video for 90 minutes",
      desc: "The baby experience is founded by Lou Toseby (NCT Breastfeeding Counsellor, Holistic Sleep Coach, NCT…).",
      img: "/pillar-3.png",
    },
    {
      price: "£165",
      title: "Postnatal Doula and New Parent Confidence session for 3 hours",
      desc: "The baby experience is founded by Lou Toseby (NCT Breastfeeding Counsellor, Holistic Sleep Coach, NCT…).",
      img: "/pillar-3.png",
    },
    {
      price: "£325",
      title: "Home Organizer",
      desc: "The baby experience is founded by Lou Toseby (NCT Breastfeeding Counsellor, Holistic Sleep Coach, NCT…).",
      img: "/pillar-3.png",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/pillar-3.png"
          alt="Household support"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-maroon/30 to-maroon/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#8B4513]/20" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-sans">
            Our Four Pillars
          </span>

          <h1 className="font-serif text-white text-6xl md:text-7xl lg:text-8xl mb-10">
            Household
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/gift"
              className="px-8 py-3 bg-beige text-maroon font-medium rounded-full hover:bg-beige/90 transition-all duration-300 text-sm md:text-base min-w-[180px]"
            >
              Buy as a Gift
            </Link>
            <Link
              href="/providers"
              className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base min-w-[180px]"
            >
              Explore Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "#ebdcc8" }}
      >
        <div className="absolute left-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
          <Image
            src="/white-art-1.png"
            alt="Decorative illustration"
            width={320}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="absolute right-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
          <Image
            src="/white-art-2.png"
            alt="Decorative illustration"
            width={320}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon leading-tight mb-6 md:mb-8">
            Practical help that eases the
            <br />
            daily load
          </h2>

          <p className="font-sans text-sm sm:text-base text-maroon/80 leading-relaxed">
            Allowing families to focus on rest and connection.
          </p>
        </div>
      </section>

      {/* Services Provided (EXACT CARD SYSTEM LIKE OTHER PAGES) */}
      <section className="bg-[#4d0809] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 md:gap-6 mb-10 md:mb-14 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Services Provided
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sapien eros, cursus a ornare scelerisque, feugiat quis velit.
              Aliquam mauris tellus, fermentum non viverra ac, maximus vel dui.
            </p>
          </div>

          {/* Cards (tall, text on image, NOT CUT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, idx) => (
              <div
                key={`${s.title}-${idx}`}
                className="relative overflow-hidden rounded-2xl bg-[#f3e1c9] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[520px] sm:h-[560px] md:h-[600px]">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />

                  {/* Same soft fade so text is readable + matches your other pages */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-[#f3e1c9]/75" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="font-serif text-4xl md:text-5xl text-maroon mb-2">
                      {s.price}
                    </div>

                    <h3 className="font-sans font-semibold text-maroon text-sm leading-snug mb-2">
                      {s.title}
                    </h3>

                    <p className="font-sans text-[12px] text-maroon/70 leading-relaxed line-clamp-3">
                      {s.desc}
                    </p>

                    <button
                      type="button"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                      style={{ backgroundColor: '#711111', color: '#ffffff' }}
                    >
                      <span aria-hidden>🛒</span>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Link
              href="/product-details/household"
              className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/80 transition-all duration-300 hover:scale-105"
            >
              Explore This Pillar
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-white">
        <div className="pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon mb-4 md:mb-6">
              How It Works
            </h2>

            <p className="font-sans text-sm sm:text-base text-maroon/80 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius pharetra turpis eget facilisis. Sed interdum suscipit nunc
              ac faucibus.
            </p>
          </div>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-32 sm:pb-40 md:pb-48">
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#ebdcc8] rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-maroon flex items-center justify-center mb-4">
                      <span className="font-serif text-lg sm:text-xl text-maroon">
                        1
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-3">
                      Choose Service or Value
                    </h3>
                    <p className="font-sans text-sm text-maroon/70 leading-relaxed">
                      Select a thoughtful gift or voucher from our curated range
                      of postpartum support, from sleep and nutrition to home and
                      holistic care.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-maroon flex items-center justify-center mb-4">
                      <span className="font-serif text-lg sm:text-xl text-maroon">
                        2
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-3">
                      Add Message & Delivery
                    </h3>
                    <p className="font-sans text-sm text-maroon/70 leading-relaxed">
                      The recipient redeems their voucher through Amae and is
                      connected with a trusted provider that suits their needs.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-maroon flex items-center justify-center mb-4">
                      <span className="font-serif text-lg sm:text-xl text-maroon">
                        3
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-3">
                      Recipients Book Directly
                    </h3>
                    <p className="font-sans text-sm text-maroon/70 leading-relaxed">
                      They book directly with their provider and receive the care
                      they need, while Amae handles everything behind the scenes.
                    </p>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 text-center">
                  <Link
                    href="/providers/household"
                    className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/80 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    Explore Providers
                  </Link>
                </div>
              </div>
            </div>
          </div>

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

      {/* Trust / Reassurance Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon text-center mb-12 md:mb-16">
            Trust / Reassurance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Image
                  src="/phi-1.png"
                  alt="Vetted providers"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                Vetted providers
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                We partner with only trusted specialists, ensuring safe and reliable
                care for new mothers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <Image
                  src="/phi-2.png"
                  alt="12 Month Validity"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                12 Month Validity
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                Offer support that truly matters. Amae gifts are flexible, thoughtful
                and designed to ease, not add to, new moms&apos; lives.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                <Image
                  src="/phi-3.png"
                  alt="Flexible booking"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                Flexible booking
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                Bring the warm, nurturing support of a village right to her door,
                with Amae making gifting personal and intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="bg-[#fefcf3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-maroon text-center mb-10 md:mb-14">
            Featured Providers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/milk-it.png"
                  alt="Milk It"
                  width={150}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/providers/milk-it"
                  className="px-6 py-2 bg-beige text-maroon text-sm font-medium rounded-full hover:bg-beige/80 transition-colors duration-200"
                >
                  View Provider
                </Link>
              </div>
            </div>

            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/baby-e.png"
                  alt="The Baby Experience"
                  width={150}
                  height={80}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/providers/baby-experience"
                  className="px-6 py-2 bg-beige text-maroon text-sm font-medium rounded-full hover:bg-beige/80 transition-colors duration-200"
                >
                  View Provider
                </Link>
              </div>
            </div>

            <div className="group relative bg-[#f8e8e8] hover:bg-[#d8e8ed] rounded-2xl p-8 md:p-10 aspect-[4/3] cursor-pointer transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="/sleep.png"
                  alt="The Mindful Sleep Coach"
                  width={150}
                  height={80}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-maroon text-sm leading-relaxed text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          backgroundImage: "url(/pg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-beige uppercase mb-4 sm:mb-6 font-light">
            Gift Now
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 sm:mb-10">
            Support That New Mom Today!
          </h2>

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
  );
};

export default HouseholdPage;
