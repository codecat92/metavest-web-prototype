import React from "react";
import { useState } from "react";
import { Filter, Search, TrendingUp, TrendingDown, Clock, Shield, Users, Copy, Eye } from "lucide-react";

const signals = [
  {
    id: 1,
    trader: "AlphaWave",
    avatar: "AW",
    pair: "EUR/USD",
    type: "BUY",
    confidence: 87,
    accuracy: "78%",
    risk: "Medium",
    timeAgo: "12 min ago",
    entry: "1.0842",
    target: "1.0920",
    stopLoss: "1.0790",
    followers: 1240,
    rr: "2.1",
  },
  {
    id: 2,
    trader: "TradeMind",
    avatar: "TM",
    pair: "GBP/USD",
    type: "BUY",
    confidence: 92,
    accuracy: "71%",
    risk: "Low",
    timeAgo: "28 min ago",
    entry: "1.2680",
    target: "1.2780",
    stopLoss: "1.2620",
    followers: 876,
    rr: "2.4",
  },
  {
    id: 3,
    trader: "NovaStar",
    avatar: "NS",
    pair: "XAU/USD",
    type: "SELL",
    confidence: 74,
    accuracy: "83%",
    risk: "High",
    timeAgo: "1h ago",
    entry: "2,342.50",
    target: "2,290.00",
    stopLoss: "2,375.00",
    followers: 2140,
    rr: "2.5",
  },
  {
    id: 4,
    trader: "FX Sentinel",
    avatar: "FS",
    pair: "USD/JPY",
    type: "BUY",
    confidence: 68,
    accuracy: "65%",
    risk: "Medium",
    timeAgo: "2h ago",
    entry: "157.20",
    target: "158.80",
    stopLoss: "156.40",
    followers: 534,
    rr: "2.3",
  },
];

const riskColor: Record<string, string> = {
  Low: "#2FEFC4",
  Medium: "#F7C948",
  High: "#FF4B6E",
};

export function SignalScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [activeTab, setActiveTab] = useState<"all" | "buy" | "sell">("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = signals.filter((s) => {
    if (activeTab === "buy") return s.type === "BUY";
    if (activeTab === "sell") return s.type === "SELL";
    return true;
  });

  return (
    <div className="flex flex-col min-h-full pb-28" style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-white" style={{ fontSize: 24, fontWeight: 800 }}>Signals</h2>
            <p style={{ fontSize: 13, color: "#9B8EC4" }}>Live trading intelligence</p>
          </div>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(171,75,255,0.2)" }}
            >
              <Search size={16} color="#9B8EC4" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(171,75,255,0.2)" }}
            >
              <Filter size={16} color="#9B8EC4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1"
          style={{ borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(171,75,255,0.15)" }}
        >
          {(["all", "buy", "sell"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2"
              style={{
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                textTransform: "capitalize",
                background: activeTab === tab ? "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)" : "transparent",
                color: activeTab === tab ? "#fff" : "#9B8EC4",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab === "all" ? "All Signals" : tab === "buy" ? "🟢 Buy" : "🔴 Sell"}
            </button>
          ))}
        </div>
      </div>

      {/* Signal Cards */}
      <div className="px-6 flex flex-col gap-4">
        {filtered.map((signal) => {
          const expanded = expandedId === signal.id;
          const isBuy = signal.type === "BUY";
          return (
            <div
              key={signal.id}
              style={{
                borderRadius: 24,
                background: "rgba(30,18,60,0.85)",
                border: expanded
                  ? "1px solid rgba(171,75,255,0.5)"
                  : "1px solid rgba(171,75,255,0.15)",
                overflow: "hidden",
                boxShadow: expanded ? "0 0 32px rgba(171,75,255,0.15)" : "none",
                transition: "all 0.2s",
              }}
            >
              {/* Card header */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #AB4BFF 0%, #5913B8 100%)" }}
                    >
                      <span className="text-white" style={{ fontSize: 12, fontWeight: 800 }}>{signal.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{signal.trader}</p>
                      <p style={{ fontSize: 11, color: "#9B8EC4" }}>Accuracy: {signal.accuracy}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-1 px-3 py-1"
                      style={{
                        borderRadius: 10,
                        background: isBuy ? "rgba(47,239,196,0.12)" : "rgba(255,75,110,0.12)",
                        border: `1px solid ${isBuy ? "rgba(47,239,196,0.3)" : "rgba(255,75,110,0.3)"}`,
                      }}
                    >
                      {isBuy ? <TrendingUp size={13} color="#2FEFC4" /> : <TrendingDown size={13} color="#FF4B6E" />}
                      <span style={{ fontSize: 13, fontWeight: 800, color: isBuy ? "#2FEFC4" : "#FF4B6E" }}>
                        {signal.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pair + Confidence */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 500 }}>TRADING PAIR</p>
                    <p className="text-white" style={{ fontSize: 22, fontWeight: 800 }}>{signal.pair}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 500 }}>CONFIDENCE</p>
                    <p style={{ fontSize: 22, fontWeight: 800, color: "#AB4BFF" }}>{signal.confidence}%</p>
                  </div>
                </div>

                {/* Confidence bar */}
                <div className="mb-4" style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${signal.confidence}%`,
                      borderRadius: 3,
                      background: "linear-gradient(90deg, #671FA8 0%, #AB4BFF 100%)",
                      boxShadow: "0 0 8px rgba(171,75,255,0.5)",
                    }}
                  />
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Clock size={12} color="#9B8EC4" />
                    <span style={{ fontSize: 11, color: "#9B8EC4" }}>{signal.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={12} color={riskColor[signal.risk]} />
                    <span style={{ fontSize: 11, color: riskColor[signal.risk], fontWeight: 600 }}>
                      {signal.risk} Risk
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} color="#9B8EC4" />
                    <span style={{ fontSize: 11, color: "#9B8EC4" }}>{signal.followers.toLocaleString()} following</span>
                  </div>
                </div>

                {/* Expanded details */}
                {expanded && (
                  <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(171,75,255,0.15)" }}>
                    <div className="flex justify-between mb-3">
                      {[
                        { label: "Entry", value: signal.entry },
                        { label: "Target", value: signal.target },
                        { label: "Stop Loss", value: signal.stopLoss },
                        { label: "R:R", value: `1:${signal.rr}` },
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center">
                          <p style={{ fontSize: 10, color: "#9B8EC4", fontWeight: 500 }}>{item.label}</p>
                          <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-3">
                      <button
                        className="flex-1 flex items-center justify-center gap-2 py-3"
                        style={{
                          borderRadius: 14,
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(171,75,255,0.2)",
                          color: "#9B8EC4",
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "'Manrope', sans-serif",
                          cursor: "pointer",
                        }}
                      >
                        <Eye size={14} /> View
                      </button>
                      <button
                        className="flex-1 flex items-center justify-center gap-2 py-3"
                        style={{
                          borderRadius: 14,
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(171,75,255,0.2)",
                          color: "#9B8EC4",
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "'Manrope', sans-serif",
                          cursor: "pointer",
                        }}
                      >
                        <Users size={14} /> Follow
                      </button>
                      <button
                        onClick={() => onNavigate("followTrade")}
                        className="flex-1 flex items-center justify-center gap-2 py-3"
                        style={{
                          borderRadius: 14,
                          background: "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
                          border: "none",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 700,
                          fontFamily: "'Manrope', sans-serif",
                          cursor: "pointer",
                          boxShadow: "0 4px 16px rgba(171,75,255,0.4)",
                        }}
                      >
                        <Copy size={14} /> Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => setExpandedId(expanded ? null : signal.id)}
                className="w-full py-2 flex items-center justify-center"
                style={{
                  background: "rgba(171,75,255,0.06)",
                  borderTop: "1px solid rgba(171,75,255,0.1)",
                  color: "#AB4BFF",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {expanded ? "Show less ▲" : "View details ▼"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
