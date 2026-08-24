import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MyAreaChart({ isAnimationActive = true }) {
  const data = [
    { label: "Sun", x: 20, y: 10 },
    { label: "Mon", x: 60, y: 90 },
    { label: "Tue", x: 80, y: 50 },
    { label: "Wed", x: 20, y: 10 },
    { label: "Thu", x: 50, y: 90 },
    { label: "Fri", x: 10, y: 80 },
    { label: "Sat", x: 5, y: 50 },
  ];
  return (
    <AreaChart
      style={{
        width: "100%",
        height: "100%",
        paddingRight: "10px",
      }}
      responsive
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="red" stopOpacity={0.8} />
          <stop offset="95%" stopColor="red" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#9a6363" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#9a6363" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="x"
        stroke="red"
        activeDot={{ stroke: "red" }}
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={isAnimationActive}
        animationBegin={200}
        animationDuration={1300}
      />
      <Area
        type="monotone"
        dataKey="y"
        stroke="#9a6363"
        activeDot={{ stroke: "#9a6363" }}
        fillOpacity={1}
        fill="url(#colorPv)"
        isAnimationActive={isAnimationActive}
        animationBegin={200}
        animationDuration={1300}
      />
    </AreaChart>
  );
}
