"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // animate only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-20 pt-32 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      {/* Badge */}
      {/* <div
        className="flex items-center gap-2 bg-[#0D6EFD] rounded-full px-4 py-2 w-fit"
        data-aos="fade-down"
      >
        <span className="flex items-center justify-center bg-[#000000] text-white px-2 py-0.5 text-xs rounded-full">
          New
        </span>
        <p className="font-twk text-sm font-medium text-[#fff]">
          Tax Calculation
        </p>
      </div> */}

      {/* Heading */}
      <h1
        className="text-4xl md:text-6xl font-serif font-medium leading-[110%] text-black mt-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Understand exactly what you owe, not what you&apos;re told.
      </h1>

      {/* Subtext */}
      <p
        className="text-base font-sans md:text-[16.54px] leading-[161%] font-twk text-[#6F6F6F] max-w-3xl mt-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        No more guesswork. Instantly calculate your taxes, deductions, and net
        income with Nigeria&apos;s most accurate online tax calculator.
      </p>

      {/* CTA */}
      <Link
        href="/tax"
        className="mt-6 px-5 py-3 bg-[#0D6EFD] text-white border-[#0D6EFD] border-[1px] rounded-full text-sm font-sans font-medium"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Calculate My Tax
      </Link>
    </section>
  );
}
