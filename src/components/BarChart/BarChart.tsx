"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];

interface Props {
  data: any;
}

const BarChartComponent: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={480}
        height={280}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="organisation" />
        <YAxis />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Legend />
        <Bar dataKey="gender" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

// interface Props{
//     active:any,
//     payload:any,
//     label:any
// }

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
//         <p className="text-medium text-lg">{label}</p>
//         <p className="text-sm text-blue-400">
//           Revenue:
//           <span className="ml-2">${payload[0].value}</span>
//         </p>
//         <p className="text-sm text-indigo-400">
//           Profit:
//           <span className="ml-2">${payload[1].value}</span>
//         </p>
//       </div>
//     );
//   }
// };
