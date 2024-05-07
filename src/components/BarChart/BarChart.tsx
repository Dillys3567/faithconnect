"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data?: any;
}

const BarChartComponent: React.FC<Props> = ({ data }) => {
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
        <Bar dataKey="females" fill="#2563eb" />;
        <Bar dataKey="males" fill="#2585eb" />;
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
