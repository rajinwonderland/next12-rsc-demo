import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface LineChartProps {
  data: any[];
  xKey: string;
  lines: {
    dataKey: string;
    stroke: string;
  }[];
  height?: number;
}

export default function Chart({ data, xKey, lines, height }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height || 350}>
      <LineChart
        width={500}
        height={height || 350}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines?.map(({ dataKey, stroke }) => (
          <Line
            key={dataKey}
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
