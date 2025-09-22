"use client";
import { Calculator, BarChart3, Smartphone, Eye } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      icon: <Calculator className="h-10 w-10 text-[#0D6EFD]" />,
      title: "Instant Results",
      description: "See your annual and monthly net pay in seconds.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#0D6EFD]" />,
      title: "Smart Deductions",
      description:
        "Factor in rent relief, pensions, NHF, and NHIS automatically.",
    },
    {
      icon: <Eye className="h-10 w-10 text-[#0D6EFD]" />,
      title: "Transparent Breakdown",
      description:
        "Understand exactly how each tax band affects your income.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#0D6EFD]" />,
      title: "Mobile Ready",
      description: "Access it anytime, anywhere, on any device.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl"
          data-aos="fade-up"
        >
          Powerful Features for Smarter Planning
        </h2>
        <p
          className="mt-4 font-sans text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get clear, accurate, and instant insights into your take-home pay.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-[1px] border-[#0D6EFD] rounded-lg hover:shadow-sm transition"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // stagger effect
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 font-sans text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
