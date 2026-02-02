import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
  const footerLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: SiNotion, href: 'https://notion.so', label: 'Notion' },
    { icon: RiTwitterXFill, href: 'https://x.com', label: 'X' },
  ]

  return (
    <footer className="bg-[#4d0809] py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {/* Left - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo-beige.png"
              alt="Amae"
              width={100}
              height={40}
              className="h-10 md:h-12 w-auto mb-4"
            />
            <p className="font-sans text-xs sm:text-sm text-[#fefccd]/70">
              Amae 2026. All rights reserved.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-sans text-sm text-[#fefccd] hover:text-[#fefccd]/70 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-end justify-center md:justify-end h-full">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#fefccd] hover:text-[#fefccd]/70 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
