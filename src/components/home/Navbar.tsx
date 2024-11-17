import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (<nav className="flex justify-between items-center p-6 text-white">
    <div className="text-2xl font-bold">Aidy</div>
    <div className="space-x-6">
      <Link href="/about-us" className="hover:text-gray-300">About</Link>
      <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
      <Link href="/our-team" className="hover:text-gray-300">Team</Link>
      <Link href="/contact-us" className="hover:text-gray-300">Contact us</Link>
    </div>
      <Button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full">Get Started <FaArrowRight /></Button>
  </nav>
    
  )
}

export default Navbar