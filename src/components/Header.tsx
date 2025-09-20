"use client";
import { useContinueStore } from "@/hooks/use-continue-store";
import useUploadDataStore from "@/hooks/use-upload-data";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  const { onOpenContinuos } = useContinueStore();
  const { entries } = useUploadDataStore();
  const [isOpen, setIsOpen] = useState(false);

  // Your website URL
  const siteUrl = "https://taxease.ng";

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
          className="px-3 py-2 border-[1px] rounded-full text-xs font-medium"
        >
          TaxEase
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-neutral-100 border-[1px] rounded-full text-xs font-medium"
          >
            Share with Friends
          </Link>
          <Link
            href="https://github.com/egokiemute"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-[#CAF695] text-black border-[#CAF695] border-[1px] rounded-full text-xs font-medium"
          >
            Built by Okiemute
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden p-2 rounded-md border border-gray-200"
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
          <Link
            href="https://github.com/egokiemute"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-[#CAF695] text-black border-[#CAF695] border-[1px] rounded-full text-xs font-medium text-center"
          >
            Built by Okiemute
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
