// "use client";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { useState } from "react";

// export default function Results({ gross, net, deductions }) {
//   const data = [
//     { name: "Take-Home", value: net },
//     { name: "Deductions", value: deductions },
//   ];
//   const COLORS = ["#4CAF50", "#F44336"]; // green vs red

//   return (
//     <section className="py-12 bg-gray-50 rounded-2xl shadow-md mt-10">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold">
//           🎉 Your Results Are In!
//         </h2>
//         <p className="mt-2 text-gray-700">
//           You take home <span className="font-semibold">₦{net.toLocaleString()}</span> 
//           out of ₦{gross.toLocaleString()} this month.
//         </p>
//       </div>

//       {/* Progress bar */}
//       <div className="mt-6 w-full bg-gray-200 rounded-full h-4">
//         <div
//           className="bg-green-500 h-4 rounded-full transition-all"
//           style={{ width: `${(net / gross) * 100}%` }}
//         ></div>
//       </div>
//       <p className="text-sm mt-2 text-gray-600 text-center">
//         ✅ {(net / gross * 100).toFixed(1)}% take-home | 💸 {(deductions / gross * 100).toFixed(1)}% tax
//       </p>

//       {/* Chart */}
//       <div className="h-64 mt-8">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               dataKey="value"
//               label={({ name, value }) => `${name}: ₦${value.toLocaleString()}`}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </section>
//   );
// }
