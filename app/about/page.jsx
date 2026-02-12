import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/Cx/Layout/Nav";
import Footer from "@/app/Cx/Sections/Footer";

const AboutPage = () => {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/main-bg.png"
          alt="About Amae"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-maroon/30 to-maroon/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#8B4513]/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-sans">
            Get to Know Us
          </span>

          <h1 className="font-serif text-white text-6xl md:text-7xl lg:text-8xl mb-10">
            About Amae
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/gift"
              className="px-8 py-3 bg-beige text-maroon font-medium rounded-full hover:bg-beige/90 transition-all duration-300 text-sm md:text-base min-w-[180px]"
            >
              Send a Gift
            </Link>
            <Link
              href="/pillars/sleep"
              className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base min-w-[180px]"
            >
              Explore Pillars
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 - Our Story */}
      <section
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "#ebdcc8" }}
      >
        {/* Left Art */}
        <div className="absolute left-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
          <Image
            src="/white-art-1.png"
            alt="Decorative illustration"
            width={320}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Right Art */}
        <div className="absolute right-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-60">
          <Image
            src="/white-art-2.png"
            alt="Decorative illustration"
            width={320}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon leading-tight mb-6 md:mb-8">
            Our Story
          </h2>

          <p className="font-sans text-sm sm:text-base text-maroon/80 leading-relaxed mb-6">
            Amae was born from a simple truth: new mothers deserve more than flowers and casseroles. 
            They deserve care that truly supports their journey — from sleepless nights to finding 
            their new rhythm.
          </p>

          <p className="font-sans text-sm sm:text-base text-maroon/80 leading-relaxed">
            We connect new parents with vetted specialists across sleep, nutrition, home support, 
            and holistic beauty — creating a modern village of care that meets mothers where they are.
          </p>
        </div>
      </section>

      {/* Section 2 - Our Mission */}
      <section className="bg-[#4d0809] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pillar-1.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 md:mb-8">
                Our Mission
              </h2>

              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                At Amae, we believe that supporting a new mother is one of the most meaningful 
                gifts you can give. Our mission is to make postpartum care accessible, thoughtful, 
                and deeply personal.
              </p>

              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                We&apos;ve built a curated network of trusted providers who understand the unique 
                needs of new parents. From sleep consultants to nutritionists, from home organizers 
                to beauty therapists — every partner is hand-selected for their expertise and compassion.
              </p>

              <Link
                href="/providers"
                className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/80 transition-all duration-300 hover:scale-105"
              >
                Meet Our Providers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Values */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon mb-4 md:mb-6">
              Our Values
            </h2>
            <p className="font-sans text-sm sm:text-base text-maroon/80 max-w-2xl mx-auto leading-relaxed">
              Everything we do is guided by these core principles that keep mothers at the heart of our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f8e8e8] flex items-center justify-center mb-6">
                <Image
                  src="/phi-1.png"
                  alt="Compassion"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                Compassion First
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                We approach every interaction with empathy, understanding that the postpartum 
                journey is unique and deeply personal for each mother.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f8e8e8] flex items-center justify-center mb-6">
                <Image
                  src="/phi-2.png"
                  alt="Quality"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                Uncompromising Quality
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                Every provider in our network is thoroughly vetted, ensuring that mothers 
                receive only the highest standard of care and support.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f8e8e8] flex items-center justify-center mb-6">
                <Image
                  src="/phi-3.png"
                  alt="Community"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-maroon mb-4">
                Building Community
              </h3>
              <p className="font-sans text-sm text-maroon/70 leading-relaxed max-w-xs">
                We believe in the power of the village. Amae brings together experts, 
                families, and communities to support new mothers collectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section
        className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url(/pillar-3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-beige uppercase mb-4 sm:mb-6 font-light">
            Join Our Mission
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 sm:mb-10">
            Ready to Support a New Mom?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gift"
              className="inline-block font-sans px-8 py-3 bg-beige text-maroon rounded-full text-sm font-medium hover:bg-beige/90 transition-all duration-300 hover:scale-105"
            >
              Send a Gift Today
            </Link>
            <Link
              href="/partner"
              className="inline-block font-sans px-8 py-3 bg-transparent border border-white/60 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
