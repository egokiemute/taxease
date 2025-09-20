"use client";
import { motion } from "framer-motion";

export default function WhyItMatters() {
  const items = [
    {
      title: "Clarity & Transparency",
      description:
        "No more guesswork — instantly see how much tax you owe and what you actually take home.",
    },
    {
      title: "Smarter Financial Planning",
      description:
        "Plan your budget, savings, and investments with confidence by knowing your net income upfront.",
    },
    {
      title: "Made for Nigerians",
      description:
        "Designed specifically for the Nigerian tax system, including reliefs, allowances, and deductions.",
    },
    {
      title: "Free & Easy to Use",
      description:
        "Our calculator is 100% free, simple, and mobile-friendly — built to make tax stress-free.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Why This Matters
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 leading-relaxed"
        >
          Nigeria&apos;s <span className="font-semibold">2026 Tax Reform</span> is
          changing the way personal income tax is calculated. For many
          employees, freelancers, and business owners, understanding how these
          new rules affect their take-home pay can be confusing.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
