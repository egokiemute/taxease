import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const EncircoBanner = () => {
  return (
    <section className="mx-auto">
      <div className="px-4 md:px-10 py-10 bg-[#1877F2] container relative rounded-2xl grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Left side text */}
        <div className="text-white space-y-6">
          <h2 className="text-2xl font-sans font-bold leading-snug">
            Register your business with Encirco now.
            <br />
            Let&apos;s change that.
          </h2>
          <p className="text-[16.5px] text-white/90">
            Get your business registered, with SCUML, CAC, and more, all in one
            place. Fast, easy, and hassle-free.
          </p>

          <Link
            type="button"
            href="https://wa.me/+2349137487869"
            target="_blank"
            className="flex items-center gap-2 w-fit rounded-full font-semibold px-8 py-4 bg-white text-[#1877F2] hover:bg-gray-100"
          >
            Book a demo
            <MoveRight size={16} />
          </Link>
        </div>

        {/* Right side image */}
        <div className="overflow-hidden">
          <Image
            src="/image.png"
            alt="Dashboard preview"
            width={600}
            height={400}
            className="rounded-tl-xl absolute -right-4 -bottom-4 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default EncircoBanner;
