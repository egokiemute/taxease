"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Your website URL
  const siteUrl = "https://penless.co/";

  // WhatsApp share message
  const shareText = encodeURIComponent(
    `Hey! I just found this free Nigerian tax calculator that helps you see your take-home pay under the new 2026 tax reform. Try it here: ${siteUrl}`
  );

  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  return (
    <header className="flex-1 pt-6 sticky top-0 bg-white z-50 py-2">
      <div className="flex items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
        >
          <Image src="/logo.png" alt="Penless" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white border-[1px] border-[#0D6EFD] rounded-full text-xs font-medium"
          >
            Share with Friends
          </Link>

          {/* For Businesses Button with Superscript */}
          <div className="relative inline-block">
            <button
              disabled={true}
              className="px-3 py-2 bg-[#5174a1] text-white border-[#5174a1] border-[1px] rounded-full text-xs font-medium"
            >
              For businesses
            </button>
            <span className="absolute -top-2 right-0 text-[10px] bg-white rounded-full px-[4px] border-gray-500 text-red-500 font-bold">
              coming soon
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden p-2 rounded-md border border-[#0D6EFD]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-4 px-4 space-y-3">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-neutral-100 border-[1px] rounded-full text-xs font-medium text-center"
          >
            Share with Friends
          </Link>

          {/* For Businesses Button with Superscript */}
          <div className="text-center w-full mt-4">
            <div className="relative inline-block">
              <button
              disabled={true}
              className="px-3 py-2 bg-[#5174a1] text-white border-[#5174a1] border-[1px] rounded-full text-xs font-medium"
            >
              For businesses
            </button>
            <span className="absolute -top-2 right-0 text-[10px] bg-white rounded-full px-[4px] border-gray-500 text-red-500 font-bold">
              coming soon
            </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
