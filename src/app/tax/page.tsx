"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useMemo, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EncircoBanner from "@/components/EncircoBanner";

export default function Page() {
  const [monthlySalary, setMonthlySalary] = useState<string | number>(350000);
  const [sideIncomeAnnual, setSideIncomeAnnual] = useState<string | number>(
    300000
  );
  const [annualRent, setAnnualRent] = useState<string | number>(600000);
  const [pension, setPension] = useState<string | number>(0);
  const [otherDeductions, setOtherDeductions] = useState<string | number>(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Helper: format Naira
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(Math.round(n));

  const results = useMemo(() => {
    // Convert all inputs to numbers (empty string → 0)
    const salaryNum = Number(monthlySalary) || 0;
    const sideIncomeNum = Number(sideIncomeAnnual) || 0;
    const rentNum = Number(annualRent) || 0;
    const pensionNum = Number(pension) || 0;
    const otherDeductionsNum = Number(otherDeductions) || 0;

    const annualSalary = salaryNum * 12;
    const totalIncome = annualSalary + sideIncomeNum;

    const rentRelief = Math.min(500000, 0.2 * rentNum);
    const totalDeductions = pensionNum + otherDeductionsNum + rentRelief;

    let taxableIncome = totalIncome - totalDeductions;
    if (taxableIncome < 0) taxableIncome = 0;

    const bands = [
      { cap: 800000, rate: 0 }, // ₦0 – ₦800k = 0%
      { cap: 2200000, rate: 0.15 }, // next ₦2.2M (₦800k – ₦3M) = 15%
      { cap: 9000000, rate: 0.18 }, // next ₦9M (₦3M – ₦12M) = 18%
      { cap: 13000000, rate: 0.21 }, // next ₦13M (₦12M – ₦25M) = 21%
      { cap: 25000000, rate: 0.23 }, // next ₦25M (₦25M – ₦50M) = 23%
      { cap: Infinity, rate: 0.25 }, // above ₦50M = 25%
    ];

    let remaining = taxableIncome;
    const bandBreakdown: {
      index: number;
      lowerBound: number;
      cap: number;
      amount: number;
      rate: number;
      tax: number;
    }[] = [];
    let lowerBound = 0;

    for (let i = 0; i < bands.length; i++) {
      const { cap, rate } = bands[i];
      const bandAmount = Math.min(cap, Math.max(0, remaining));
      const tax = bandAmount * rate;
      bandBreakdown.push({
        index: i + 1,
        lowerBound,
        cap,
        amount: bandAmount,
        rate,
        tax,
      });
      remaining -= bandAmount;
      lowerBound += cap;
      if (remaining <= 0) break;
    }

    const totalTax = bandBreakdown.reduce((s, b) => s + b.tax, 0);
    const netAnnual = totalIncome - totalTax;
    const netTaxMonthly = totalTax / 12;
    const netMonthly = netAnnual / 12;

    return {
      annualSalary,
      totalIncome,
      rentRelief,
      totalDeductions,
      taxableIncome,
      bandBreakdown,
      totalTax,
      netTaxMonthly,
      netAnnual,
      netMonthly,
    };
  }, [monthlySalary, sideIncomeAnnual, annualRent, pension, otherDeductions]);

  return (
    <>
      <Header />
      <div className="content-container pt-10 pb-20">
        <div
          className="max-w-3xl mx-auto p-6 bg-white rounded-2xl border border-[#0D6EFD] mt-12 shadow-sm font-sans"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-semibold mb-4 text-gray-900">
            Nigeria 2026 PIT — Interactive Calculator
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Plug your numbers below. All values are annual/monthly where
            indicated.
          </p>

          {/* Inputs */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <label className="flex flex-col">
              <span className="text-xs text-gray-700">Monthly Salary (₦)</span>
              <input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                className="mt-1 p-2 rounded border focus:ring-2 focus:ring-[#0D6EFD] outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-700">
                Side / Freelance Income (Annual ₦)
              </span>
              <input
                type="number"
                value={sideIncomeAnnual}
                onChange={(e) => setSideIncomeAnnual(Number(e.target.value))}
                className="mt-1 p-2 rounded border focus:ring-2 focus:ring-[#0D6EFD] outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-700">
                Annual Rent Paid (₦)
              </span>
              <input
                type="number"
                value={annualRent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                className="mt-1 p-2 rounded border focus:ring-2 focus:ring-[#0D6EFD] outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-700">
                Pension Contribution (₦)
              </span>
              <input
                type="number"
                value={pension}
                onChange={(e) => setPension(Number(e.target.value))}
                className="mt-1 p-2 rounded border focus:ring-2 focus:ring-[#0D6EFD] outline-none"
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              <span className="text-xs text-gray-700">
                Other Deductions (NHF, NHIS, etc.) (₦)
              </span>
              <input
                type="number"
                value={otherDeductions}
                onChange={(e) => setOtherDeductions(Number(e.target.value))}
                className="mt-1 p-2 rounded border focus:ring-2 focus:ring-[#0D6EFD] outline-none"
              />
            </label>
          </div>

          {/* Results */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="p-4 bg-[#f7fafd] rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700">
                Income Summary
              </h3>
              <div className="mt-3 text-sm text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <span>Annual Salary</span>
                  <span>{fmt(results.annualSalary)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Side Income (annual)</span>
                  <span>{fmt(Number(sideIncomeAnnual || 0))}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total Income</span>
                  <span>{fmt(results.totalIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rent Relief</span>
                  <span>{fmt(results.rentRelief)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Deductions</span>
                  <span>{fmt(results.totalDeductions)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Taxable Income</span>
                  <span>{fmt(results.taxableIncome)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#f7fafd] rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700">Net & Tax</h3>
              <div className="mt-3 text-sm text-gray-800 space-y-2">
                <div className="flex justify-between">
                  <span>Total Tax (annual)</span>
                  <span className="text-red-600 font-semibold">
                    {fmt(results.totalTax)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Net Income (annual)</span>
                  <span className="font-semibold">
                    {fmt(results.netAnnual)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Net Income (monthly)</span>
                  <span className="font-semibold">
                    {fmt(results.netMonthly)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Net Tax (monthly)</span>
                  <span className="font-semibold">
                    {fmt(results.netTaxMonthly)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Tax Band Breakdown
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Band</th>
                    <th className="p-2 text-right">Amount (₦)</th>
                    <th className="p-2 text-right">Rate</th>
                    <th className="p-2 text-right">Tax (₦)</th>
                  </tr>
                </thead>
                <tbody>
                  {results.bandBreakdown.map((b, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{`Band ${b.index}`}</td>
                      <td className="p-2 text-right">{fmt(b.amount)}</td>
                      <td className="p-2 text-right">{`${b.rate * 100}%`}</td>
                      <td className="p-2 text-right">{fmt(b.tax)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Copy Summary */}
          <div
            className="flex flex-col gap-4 items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="text-xs text-gray-500 text-center">
              Assumptions: rates & bands based on Nigeria 2026 tax reform. Use
              as a guide — confirm with a tax advisor.
            </div>
            <button
              onClick={() => {
                const rows = [
                  ["Label", "Value"],
                  ["Monthly Salary (₦)", monthlySalary],
                  ["Side Income (annual)", sideIncomeAnnual],
                  ["Annual Rent (₦)", annualRent],
                  ["Rent Relief (₦)", results.rentRelief],
                  ["Total Income (₦)", results.totalIncome],
                  ["Total Tax (₦)", results.totalTax],
                  ["Net Annual (₦)", results.netAnnual],
                ];
                const csv = rows.map((r) => r.join(",")).join("\n");
                navigator.clipboard.writeText(csv);
                alert("Summary copied to clipboard (CSV)");
              }}
              className="px-4 py-2 bg-[#0D6EFD] text-white text-sm rounded-full shadow hover:bg-[#3d77cd] transition"
            >
              Copy summary (CSV)
            </button>
          </div>
        </div>
      </div>
      <EncircoBanner />
      <Footer />
    </>
  );
}
