import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        {/* Left side */}
        <p className="mb-4 sm:mb-0">
          © {new Date().getFullYear()} TaxEase. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4">
          <Link
            href="https://wa.me/?text=Check%20out%20TaxEase%20Nigeria's%20free%20tax%20calculator%20https://taxease.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            Share on WhatsApp
          </Link>
          <Link
            href="https://github.com/egokiemute"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
