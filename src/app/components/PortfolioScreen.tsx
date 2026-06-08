import React from "react";
import { useState } from "react";
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const chartData = [
  { date: "Jan", value: 14200 },
  { date: "Feb", value: 15800 },
  { date: "Mar", value: 13900 },
  { date: "Apr", value: 17400 },
  { date: "May", value: 20100 },
  { date: "Jun", value: 19200 },
  { date: "Jul", value: 22400 },
  { date: "Aug", value: 24810 },
];

const holdings = [
  { name: "Euro / US Dollar", symbol: "EUR/USD", amount: "2.5 Lots", value: "$12,208", change: "+0.32%", up: true, pct: 49 },
  { name: "Gold / US Dollar", symbol: "XAU/USD", amount: "1.2 Lots", value: "$7,576", change: "-0.45%", up: false, pct: 30.5 },
  { name: "British Pound / USD", symbol: "GBP/USD", amount: "1.8 Lots", value: "$4,980", change: "+0.18%", up: true, pct: 20.5 },
];

// Pie Colors for the holdings
const pieColors = ["#AB4BFF", "#F7C948", "#2FEFC4"];

const activeFollows = [
  { trader: "AlphaWave", avatar: "AW", pnl: "+$1,240", pct: "+14.2%", up: true },
  { trader: "TradeMind", avatar: "TM", pnl: "+$680", pct: "+8.9%", up: true },
  { trader: "FX Sentinel", avatar: "FS", pnl: "-$120", pct: "-1.2%", up: false },
];

const periods = ["1W", "1M", "3M", "6M", "1Y", "ALL"];

export function PortfolioScreen() {
  const [activePeriod, setActivePeriod] = useState("ALL");

  const totalChange = "+$10,610";
  const totalChangePct = "+74.5%";

  return (
    <div className="flex flex-col min-h-full pb-28" style={{ fontFamily: "'Manrope', sans-serif", background: "#0E1439" }}>
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,75,255,0.18) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-2">
        <h2 className="text-white" style={{ fontSize: 24, fontWeight: 800 }}>Portfolio</h2>
        <p style={{ fontSize: 13, color: "#9B8EC4" }}>Your performance overview</p>
      </div>

      {/* Total Value */}
      <div className="px-6 py-4">
        <p style={{ fontSize: 13, color: "#9B8EC4", fontWeight: 500 }}>Total Value</p>
        <p className="text-white" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-1.5px" }}>$24,810</p>
        <div className="flex items-center gap-2 mt-1">
          <ArrowUpRight size={16} color="#2FEFC4" />
          <span style={{ fontSize: 15, color: "#2FEFC4", fontWeight: 700 }}>{totalChange}</span>
          <span
            className="px-2 py-0.5"
            style={{ borderRadius: 8, background: "rgba(47,239,196,0.12)", fontSize: 13, color: "#2FEFC4", fontWeight: 700 }}
          >
            {totalChangePct}
          </span>
        </div>
      </div>

      {/* Period selector */}
      <div className="flex gap-1 mx-6 mb-2 p-1" style={{ borderRadius: 12, background: "rgba(255,255,255,0.05)" }}>
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setActivePeriod(p)}
            className="flex-1 py-1.5"
            style={{
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
              background: activePeriod === p ? "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)" : "transparent",
              color: activePeriod === p ? "#fff" : "#9B8EC4",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="px-4 mb-6" style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -28, bottom: 0 }}>
            <defs>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop key="stop-0" offset="0%" stopColor="#AB4BFF" stopOpacity={0.4} />
              <stop key="stop-1" offset="100%" stopColor="#F7C948" stopOpacity={0} />
            </linearGradient>
            </defs>
            <CartesianGrid key="grid" strokeDasharray="3 3" stroke="rgba(171,75,255,0.1)" vertical={false} />
            <XAxis key="xaxis" dataKey="date" tick={{ fill: "#9B8EC4", fontSize: 10, fontFamily: "'Manrope', sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis key="yaxis" tick={{ fill: "#9B8EC4", fontSize: 10, fontFamily: "'Manrope', sans-serif" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              key="tooltip"
              contentStyle={{
                background: "rgba(14,20,57,0.95)",
                border: "1px solid rgba(171,75,255,0.3)",
                borderRadius: 12,
                color: "#F0EEFF",
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
              }}
              formatter={(val: number) => [`$${val.toLocaleString()}`, "Value"]}
            />
            <Area
              key="area-portfolio"
              type="monotone"
              dataKey="value"
              stroke="#AB4BFF"
              strokeWidth={2}
              fill="url(#portfolioGrad)"
              dot={false}
              activeDot={{ r: 5, fill: "#AB4BFF", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Holdings + Allocation */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>Holdings</h3>
          <div style={{ width: 90, height: 90 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={holdings.map(h => ({ name: h.symbol, value: h.pct }))} cx="50%" cy="50%" outerRadius={40} innerRadius={24} dataKey="value" nameKey="name" strokeWidth={0}>
                  {holdings.map((h, i) => (
                    <Cell key={`cell-${h.symbol}`} fill={pieColors[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {holdings.map((h, i) => (
            <div
              key={h.symbol}
              className="flex items-center gap-3 p-4"
              style={{
                borderRadius: 18,
                background: "rgba(14,20,57,0.85)",
                border: "1px solid rgba(171,75,255,0.12)",
              }}
            >
              <div
                className="flex-shrink-0"
                style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: `${pieColors[i]}25`,
                border: `1.5px solid ${pieColors[i]}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, color: pieColors[i], letterSpacing: "-0.5px" }}>
                {h.symbol.split("/")[0]}
              </span>
              <span style={{ fontSize: 9, color: `${pieColors[i]}99` }}>
                {h.symbol.split("/")[1]}
              </span>
              </div>
              <div className="flex-1">
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{h.name}</p>
                <p style={{ fontSize: 12, color: "#9B8EC4" }}>{h.amount}</p>
                <div className="mt-1.5" style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
                  <div style={{ width: `${h.pct}%`, height: "100%", borderRadius: 2, background: pieColors[i] }} />
                </div>
              </div>
              <div className="text-right">
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{h.value}</p>
                <div className="flex items-center gap-1 justify-end">
                  {h.up ? <ArrowUpRight size={11} color="#2FEFC4" /> : <ArrowDownRight size={11} color="#FF4B6E" />}
                  <span style={{ fontSize: 12, fontWeight: 700, color: h.up ? "#2FEFC4" : "#FF4B6E" }}>{h.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Follows P&L */}
      <div className="px-6 mb-6">
        <h3 className="text-white mb-3" style={{ fontSize: 18, fontWeight: 700 }}>Active Follows</h3>
        <div className="flex flex-col gap-3">
          {activeFollows.map((f) => (
            <div
              key={f.trader}
              className="flex items-center gap-3 p-4"
              style={{
                borderRadius: 18,
                background: "rgba(14,20,57,0.85)",
                border: "1px solid rgba(171,75,255,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #AB4BFF 0%, #5913B8 100%)" }}
              >
                <span className="text-white" style={{ fontSize: 12, fontWeight: 800 }}>{f.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{f.trader}</p>
                <div className="flex items-center gap-1">
                  {f.up ? <TrendingUp size={11} color="#2FEFC4" /> : <TrendingDown size={11} color="#FF4B6E" />}
                  <span style={{ fontSize: 12, color: f.up ? "#2FEFC4" : "#FF4B6E", fontWeight: 600 }}>
                    Copy Trading Active
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p style={{ fontSize: 15, fontWeight: 800, color: f.up ? "#2FEFC4" : "#FF4B6E" }}>{f.pnl}</p>
                <p style={{ fontSize: 12, color: f.up ? "#2FEFC4" : "#FF4B6E", fontWeight: 600 }}>{f.pct}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="px-6">
        <div
          className="p-5"
          style={{
            borderRadius: 24,
            background: "rgba(14,20,57,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          <h3 className="text-white mb-4" style={{ fontSize: 16, fontWeight: 700 }}>Performance Analytics</h3>
          <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {[
              { label: "Best Month", value: "+38.7%", color: "#2FEFC4" },
              { label: "Win Rate", value: "74%", color: "#AB4BFF" },
              { label: "Avg Trade", value: "+2.3%", color: "#2FEFC4" },
              { label: "Max Drawdown", value: "-8.4%", color: "#FF4B6E" },
              { label: "Sharpe Ratio", value: "1.84", color: "#F7C948" },
              { label: "Total Trades", value: "142", color: "#AB4BFF" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col p-3"
                style={{
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(171,75,255,0.1)",
                }}
              >
                <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 500 }}>{stat.label}</p>
                <p style={{ fontSize: 18, fontWeight: 800, color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
