"use client";

import { Key } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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
  data?: any;
}

const SingleBarChartComponent: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="40%"
      height="30%"
      style={{
        border: "solid 3px rgb(11, 64, 156)",
        padding: "14px",
        borderRadius: "12px",
      }}
    >
      <BarChart
        width={480}
        height={280}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Legend />
        <Bar dataKey="welfare" fill="#2563eb" />;
        <Bar dataKey="day_born['Mon']" fill="#2585eb" name="Mon" />;
        <Bar dataKey="day_born['Tues']" fill="#35859b" name="Tues" />;
        <Bar dataKey="day_born['Wed']" fill="#2505eb" name="Wed" />;
        <Bar dataKey="day_born['Thur']" fill="#2545eb" name="Thur" />;
        <Bar dataKey="day_born['Fri']" fill="#25f5eb" name="Fri" />;
        <Bar dataKey="day_born['Sat']" fill="#2555e0" name="Sat" />;
        <Bar dataKey="day_born['Sun']" fill="#05356b" name="Sun" />;
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SingleBarChartComponent;
