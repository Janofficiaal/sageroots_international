'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'United Kingdom', href: '/destinations/united-kingdom' },
      { label: 'Cyprus', href: '/destinations/cyprus' },
      { label: 'Malta', href: '/destinations/malta' },
      { label: 'Dubai (UAE)', href: '/destinations/dubai' },
      { label: 'Australia', href: '/destinations/australia' },
      { label: 'Canada', href: '/destinations/canada' },
      { label: 'Germany', href: '/destinations/germany' },
      { label: 'Ireland', href: '/destinations/ireland' },
      { label: 'New Zealand', href: '/destinations/new-zealand' },
      { label: 'United States', href: '/destinations/united-states' },
    ],
  },
  { label: 'Universities', href: '/universities' },
  { label: 'Courses', href: '/courses' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Posts', href: '/posts' },
  {
    label: 'About & Contact',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileDropdown(null)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#042017]/95 backdrop-blur-xl py-2.5 shadow-2xl border-b border-white/10'
            : 'bg-transparent pt-4 sm:pt-6 pb-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Mobile view: Logo + Swipeable horizontal single-line ribbon + Quick Menu Button */}
          <div className="flex lg:hidden items-center justify-between gap-2">
            {/* Mobile Official SRI Logo */}
            <Link
              href="/"
              aria-label="Sage Roots International Home"
              className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-400/60 shadow-md"
            >
              <Image
                src="/images/sri-logo.jpg"
                alt="Sage Roots International Logo"
                fill
                className="object-cover scale-[1.04]"
                sizes="36px"
                priority
              />
            </Link>

            {/* Horizontal scroll of category rectangles for mobile (Single Line) */}
            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center flex-nowrap gap-2 py-1 scroll-smooth">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href + '/')) ||
                  Boolean(item.children?.some((c) => pathname === c.href))

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shadow-sm border ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/40'
                        : 'bg-black/50 hover:bg-black/70 text-white/95 border-white/20 backdrop-blur-md active:scale-95'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex-shrink-0 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 text-white border border-white/25 backdrop-blur-md shadow-md transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop view: Official Circular SRI Logo + Category rectangles aligned in a SINGLE LINE */}
          <nav
            className="hidden lg:flex items-center justify-center flex-nowrap gap-2 xl:gap-3"
            aria-label="Category navigation"
          >
            {/* Official SRI Logo Emblem */}
            <Link
              href="/"
              aria-label="Sage Roots International Home"
              className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 mr-1 ring-2 ring-amber-400/70 shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src="/images/sri-logo.jpg"
                alt="Sage Roots International Logo"
                fill
                className="object-cover scale-[1.04]"
                sizes="44px"
                priority
              />
            </Link>

            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href + '/')) ||
                Boolean(item.children?.some((c) => pathname === c.href))
              const hasDropdown = Boolean(item.children && item.children.length > 0)
              const isOpen = openDropdown === item.label

              return (
                <div
                  key={item.label}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-1.5 px-4 xl:px-4.5 py-2.5 rounded-xl text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 shadow-md border ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/40 scale-105 font-bold ring-2 ring-emerald-400/30'
                        : 'bg-black/45 hover:bg-black/70 text-white/95 border-white/20 hover:border-white/40 backdrop-blur-md hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 opacity-70 group-hover:opacity-100 ${
                          isOpen ? 'rotate-180 text-emerald-400 opacity-100' : ''
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-56 bg-[#042017]/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/60 border border-white/15 p-2 z-50 animate-fade-in">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all"
                        >
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Content */}
          <nav
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-brand-midnight text-white shadow-2xl overflow-y-auto flex flex-col justify-between z-10 border-l border-white/10"
            aria-label="Mobile full navigation"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-amber-400/60">
                    <Image
                      src="/images/sri-logo.jpg"
                      alt="Sage Roots International"
                      fill
                      className="object-cover scale-[1.04]"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Sage Roots Int.
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Clean Category Rectangles in Drawer */}
              <div className="mt-4 space-y-2">
                {navItems.map((item) => {
                  const hasDropdown = Boolean(item.children && item.children.length > 0)
                  const isDropdownOpen = mobileDropdown === item.label
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href + '/')) ||
                    Boolean(item.children?.some((c) => pathname === c.href))

                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!hasDropdown) setMobileOpen(false)
                          }}
                          className={`flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                            isActive
                              ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                              : 'bg-white/5 hover:bg-white/10 text-white/90 border-white/10'
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                        {hasDropdown && (
                          <button
                            onClick={() => setMobileDropdown(isDropdownOpen ? null : item.label)}
                            className="p-2.5 text-white/60 hover:text-white ml-1"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isDropdownOpen ? 'rotate-180 text-emerald-400' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Submenu for Mobile */}
                      {hasDropdown && isDropdownOpen && (
                        <div className="ml-5 mt-1.5 mb-2 space-y-1 border-l-2 border-emerald-500/40 pl-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 rounded-lg text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="p-5 border-t border-white/10 bg-black/30 space-y-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-lg shadow-emerald-600/25"
              >
                <span>Book Free Consultation</span>
              </Link>
              <a
                href="https://wa.me/447776181483?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20UK%20study%20abroad%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#20bd5a] transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
