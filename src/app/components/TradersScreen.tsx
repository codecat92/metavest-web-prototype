import React from "react";
import { useState } from "react";
import { Search, SlidersHorizontal, TrendingUp, Users, Shield, Star } from "lucide-react";

const traders = [
  {
    id: 1, name: "AlphaWave", handle: "@alphawave", avatar: "AW",
    avatar_url: "https://picsum.photos/seed/alphawave/100/100",
    winRate: "78%", followers: "12.4K", roi: "+142%", risk: "Medium",
    monthlyReturn: "+24.3%", totalTrades: 847,
    bio: "Macro + momentum trader. EUR/USD & GBP/USD specialist.",
    verified: true, tier: "Elite",
  },
  {
    id: 2, name: "TradeMind", handle: "@trademind", avatar: "TM",
    avatar_url: "https://picsum.photos/seed/trademind/100/100",
    winRate: "71%", followers: "8.7K", roi: "+89%", risk: "Low",
    monthlyReturn: "+11.2%", totalTrades: 1240,
    bio: "Risk-managed systematic forex. Low drawdown focus.",
    verified: true, tier: "Pro",
  },
  {
    id: 3, name: "FX Sentinel", handle: "@fxsentinel", avatar: "FS",
    avatar_url: "https://picsum.photos/seed/fxsentinel/100/100",
    winRate: "83%", followers: "21.4K", roi: "+231%", risk: "High",
    monthlyReturn: "+38.7%", totalTrades: 523,
    bio: "Aggressive scalping on majors & gold. High risk, high reward.",
    verified: true, tier: "Elite",
  },
  {
    id: 4, name: "PipMaster", handle: "@pipmaster", avatar: "PM",
    avatar_url: "https://picsum.photos/seed/pipmaster/100/100",
    winRate: "65%", followers: "5.3K", roi: "+67%", risk: "Medium",
    monthlyReturn: "+9.4%", totalTrades: 1890,
    bio: "Multi-pair portfolio trader. Specializes in USD crosses.",
    verified: false, tier: "Pro",
  },
  {
    id: 5, name: "ZenTrader", handle: "@zentrader", avatar: "ZT",
    avatar_url: "https://picsum.photos/seed/zentrader/100/100",
    winRate: "69%", followers: "3.1K", roi: "+54%", risk: "Low",
    monthlyReturn: "+7.8%", totalTrades: 678,
    bio: "Swing trading only. Patient setups, clean entries on majors.",
    verified: false, tier: "Starter",
  },
];

const riskColor: Record<string, string> = { Low: "#2FEFC4", Medium: "#F7C948", High: "#FF4B6E" };
const tierColor: Record<string, string> = { Elite: "#AB4BFF", Pro: "#671FA8", Starter: "#5913B8" };

export function TradersScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [followed, setFollowed] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<"roi" | "winrate" | "followers">("roi");
  const [search, setSearch] = useState("");

  const sorted = [...traders]
    .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) || t.handle.includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "roi") return parseFloat(b.roi) - parseFloat(a.roi);
      if (sortBy === "winrate") return parseFloat(b.winRate) - parseFloat(a.winRate);
      return parseFloat(b.followers) - parseFloat(a.followers);
    });

  const toggleFollow = (id: number) => {
    const next = new Set(followed);
    next.has(id) ? next.delete(id) : next.add(id);
    setFollowed(next);
  };

  return (
    <div className="flex flex-col min-h-full pb-28" style={{ fontFamily: "'Manrope', sans-serif", background: "#0E1439" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-4">
        <h2 className="text-white mb-1" style={{ fontSize: 24, fontWeight: 800 }}>Traders</h2>
        <p style={{ fontSize: 13, color: "#9B8EC4" }}>Discover top performers</p>

        {/* Search */}
        <div
          className="flex items-center gap-3 mt-4 px-4"
          style={{
            height: 48,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(171,75,255,0.2)",
          }}
        >
          <Search size={16} color="#9B8EC4" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search traders..."
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 14, color: "#F0EEFF", fontFamily: "'Manrope', sans-serif" }}
          />
        </div>

        {/* Sort / Filter */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 flex-shrink-0"
            style={{
              borderRadius: 10,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(171,75,255,0.2)",
              color: "#9B8EC4",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'Manrope', sans-serif",
              cursor: "pointer",
            }}
          >
            <SlidersHorizontal size={12} /> Filter
          </button>
          {(["roi", "winrate", "followers"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className="flex-shrink-0 px-3 py-1.5"
              style={{
                borderRadius: 10,
                background: sortBy === s ? "rgba(171,75,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${sortBy === s ? "rgba(171,75,255,0.5)" : "rgba(171,75,255,0.15)"}`,
                color: sortBy === s ? "#AB4BFF" : "#9B8EC4",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {s === "winrate" ? "Win Rate" : s === "roi" ? "ROI" : "Followers"}
            </button>
          ))}
        </div>
      </div>

      {/* Trader Cards */}
      <div className="px-6 flex flex-col gap-4">
        {sorted.map((trader) => {
          const isFollowed = followed.has(trader.id);
          return (
            <div
              key={trader.id}
              style={{
                borderRadius: 24,
                background: "rgba(14,20,57,0.85)",
                border: "1px solid rgba(171,75,255,0.15)",
                padding: "18px 18px 14px",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                <img
                  src={trader.avatar_url}
                  alt={trader.name}
                  style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  border: "2px solid rgba(171,75,255,0.4)",
                }}
              />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-white" style={{ fontSize: 15, fontWeight: 700 }}>{trader.name}</p>
                      {trader.verified && <Star size={12} color="#AB4BFF" fill="#AB4BFF" />}
                      <span
                        className="px-1.5 py-0.5"
                        style={{
                          borderRadius: 6,
                          background: `${tierColor[trader.tier]}22`,
                          fontSize: 10,
                          fontWeight: 700,
                          color: tierColor[trader.tier],
                        }}
                      >
                        {trader.tier}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "#9B8EC4" }}>{trader.handle}</p>
                    <p style={{ fontSize: 12, color: "rgba(240,238,255,0.5)", marginTop: 2 }}>{trader.bio}</p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="flex gap-2 mb-4">
                {[
                  { label: "ROI", value: trader.roi, color: "#2FEFC4" },
                  { label: "Win Rate", value: trader.winRate, color: "#AB4BFF" },
                  { label: "Monthly", value: trader.monthlyReturn, color: "#2FEFC4" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 flex flex-col items-center py-2"
                    style={{
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(171,75,255,0.1)",
                    }}
                  >
                    <p style={{ fontSize: 10, color: "#9B8EC4", fontWeight: 500 }}>{stat.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 800, color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Users size={12} color="#9B8EC4" />
                    <span style={{ fontSize: 12, color: "#9B8EC4" }}>{trader.followers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={12} color={riskColor[trader.risk]} />
                    <span style={{ fontSize: 12, color: riskColor[trader.risk], fontWeight: 600 }}>{trader.risk}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={12} color="#9B8EC4" />
                    <span style={{ fontSize: 12, color: "#9B8EC4" }}>{trader.totalTrades} trades</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    toggleFollow(trader.id);
                    if (!isFollowed) onNavigate("followTrade");
                  }}
                  style={{
                    height: 36,
                    paddingLeft: 16,
                    paddingRight: 16,
                    borderRadius: 12,
                    background: isFollowed
                      ? "rgba(171,75,255,0.15)"
                      : "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
                    border: isFollowed ? "1px solid rgba(171,75,255,0.35)" : "none",
                    color: isFollowed ? "#AB4BFF" : "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "'Manrope', sans-serif",
                    cursor: "pointer",
                    boxShadow: isFollowed ? "none" : "0 4px 16px rgba(171,75,255,0.35)",
                  }}
                >
                  {isFollowed ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
