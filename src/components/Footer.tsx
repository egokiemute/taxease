import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        {/* Left side */}
        <p className="mb-4 sm:mb-0 flex items-center gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="Penless" width={100} height={20} />
          </Link>{" "}
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4">
          <Link
            href="https://wa.me/?text=Check%20out%20TaxEase%20Nigeria's%20free%20tax%20calculator%20https://penless.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0D6EFD] transition"
          >
            Share on WhatsApp
          </Link>
          <Link
            href="https://southcircle.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0D6EFD] hover:underline transition"
          >
            Built by southcircle.cc
          </Link>
        </div>
      </div>
    </footer>
  );
}
