"use client";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={600}
        height={400}
        data={productSales}
        margin={{ right: 30, top: 10, bottom: 10 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Legend />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        ></Area>
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        ></Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

//const CustomTooltip = ({ active, payload, label }) => {};

export default AreaChartComponent;
