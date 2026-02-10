'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', hasDropdown: true },
    { name: 'Shop', href: '/shop', hasDropdown: true },
    { name: 'Gift', href: '/gift', hasDropdown: true },
    { name: 'Community', href: '/community' },
    { name: 'Partner', href: '/partner' },
  ]

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 lg:px-16 xl:px-24">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between bg-white backdrop-blur-sm rounded-full px-8 py-3 shadow-lg max-w-6xl mx-auto">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Amae"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Nav Links - Centered */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <button
                  onClick={() => link.hasDropdown && toggleDropdown(link.name)}
                  className="flex items-center text-base font-medium font-serif text-maroon hover:text-maroon/70 transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <button className="text-maroon hover:text-maroon/70 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Cart Icon */}
            <Link href="/cart" className="text-maroon hover:text-maroon/70 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            {/* User Icon */}
            <button className="text-maroon hover:text-maroon/70 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Amae"
              width={70}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-3">
            <button className="text-maroon hover:text-maroon/70 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/cart" className="text-maroon hover:text-maroon/70 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-maroon hover:text-maroon/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => link.hasDropdown && toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-sm font-medium font-serif text-maroon hover:text-maroon/70 transition-colors py-2"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
              {/* User Icon in Mobile */}
              <button className="flex items-center text-sm font-medium font-serif text-maroon hover:text-maroon/70 transition-colors py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
