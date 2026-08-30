import { Cell, Legend, Pie, PieChart, Sector } from "recharts";
import { useState } from "react";

const data = [
  { name: "Group A", value: 500, color: "#e74c3c" },
  { name: "Group B", value: 125, color: "#3498db" },
  { name: "Group C", value: 150, color: "#2ecc71" },
  { name: "Group D", value: 250, color: "#f1c40f" },
];

const renderActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  percent,
  value,
}) => {
  return (
    <g>
      <rect
        x={cx - 35}
        y={cy - 23}
        width={70}
        height={46}
        rx={5}
        fill="white"
        stroke={fill}
        strokeWidth={2}
      />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#333" fontSize={12}>
        {value}
      </text>
      <text x={cx} y={cy + 13} textAnchor="middle" fill={fill} fontSize={11}>
        {((percent ?? 0) * 100).toFixed(2)}%
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default function MyPieChart({ isAnimationActive = true }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <PieChart
      className="pie-chart"
      responsive
      margin={{
        top: 5,
        right: 10,
        bottom: 30,
        left: 10,
      }}
    >
      <Pie
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        dataKey="value"
        nameKey="name"
        isAnimationActive={isAnimationActive}
        activeIndex={activeIndex}
        onMouseEnter={(_, index) => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {data.map((entry) => (
          <Cell key={entry.name} fill={entry.color} />
        ))}
      </Pie>
      <Legend
        layout="horizontal"
        iconType="circle"
        iconSize={8}
        formatter={(value) => <span className="pie-legend-label">{value}</span>}
        className="pie-legend"
      />
    </PieChart>
  );
}
