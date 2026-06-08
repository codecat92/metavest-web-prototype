import React from "react";
import { useEffect, useState } from "react";
import { Bell, Zap, TrendingUp, TrendingDown, ChevronRight, ArrowUpRight, Users, BarChart2, Building2 } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { NewsFeed } from "./NewsFeed";


const sparkData = [
  { v: 40 }, { v: 55 }, { v: 48 }, { v: 70 }, { v: 65 }, { v: 80 }, { v: 75 }, { v: 90 },
];
const sparkDown = [
  { v: 80 }, { v: 72 }, { v: 78 }, { v: 60 }, { v: 65 }, { v: 55 }, { v: 50 }, { v: 42 },
];

const markets = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.32%", up: true, data: sparkData },
  { pair: "GBP/USD", price: "1.2681", change: "+0.18%", up: true, data: sparkData },
  { pair: "XAU/USD", price: "2,341.80", change: "-0.45%", up: false, data: sparkDown },
  { pair: "USD/JPY", price: "157.24", change: "+0.21%", up: true, data: sparkData },
];

const traders = [
  { name: "AlphaWave", handle: "@alphawave", roi: "+142%", winRate: "78%", avatar: "AW", avatar_url: "https://picsum.photos/seed/alphawave/100/100" },
  { name: "TradeMind", handle: "@trademind", roi: "+89%",  winRate: "71%", avatar: "TM", avatar_url: "https://picsum.photos/seed/trademind/100/100" },
  { name: "FX Sentinel", handle: "@fxsentinel", roi: "+231%", winRate: "83%", avatar: "FS", avatar_url: "https://picsum.photos/seed/fxsentinel/100/100" },
];

const news = [
  { title: "Fed holds rates steady — dollar weakens as traders price in June cut", time: "2h ago", tag: "Macro" },
  { title: "Gold surges past $2,340 on safe-haven demand amid geopolitical tensions", time: "4h ago", tag: "XAU/USD" },
  { title: "EUR/USD breaks key resistance at 1.0850 — bulls target 1.0920 next", time: "6h ago", tag: "EUR/USD" },
];

export function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }){
  const [glowIndex, setGlowIndex] = useState<number | null>(null);

  useEffect(() => {
    [0, 1, 2, 3].forEach((index) => {
      setTimeout(() => setGlowIndex(index), index * 900 + 400);
    });
    // Only reset to null after the last card finishes
    setTimeout(() => setGlowIndex(null), 3 * 900 + 1300);
  }, []);

  return (
    <div className="flex flex-col min-h-full pb-28" style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}>
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[260px] h-[260px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,75,255,0.2) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-4 flex items-center justify-between">
        <div>
          <p style={{ fontSize: 13, color: "#9B8EC4", fontWeight: 500 }}>Good morning 👋</p>
          <h2 className="text-white" style={{ fontSize: 22, fontWeight: 800 }}>Alex Mercer</h2>
        </div>
        <div className="flex items-center gap-3">
          {/* Metapoint badge */}
          <div
          className="flex items-center gap-1.5 px-3 py-1.5"  style={{
          borderRadius: 20,
          background: "rgba(201,168,76,0.12)",       // gold tint background
          border: "1px solid rgba(201,168,76,0.35)", // gold border
         }}>
        <Zap size={13} color="#C9A84C" fill="#C9A84C" /> 
        <span style={{ fontSize: 13, fontWeight: 700, color: "#C9A84C" }}>4,820 MP</span>
        </div>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(171,75,255,0.2)" }}
          >
            <Bell size={18} color="#9B8EC4" />
          </button>
        </div>
      </div>

      {/* Portfolio summary card */}
      <div className="px-6 mb-6">
        <div
          className="p-5 relative overflow-hidden"
          style={{
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(171,75,255,0.22) 0%, rgba(89,19,184,0.35) 100%)",
            border: "1px solid rgba(171,75,255,0.25)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32"
            style={{ background: "radial-gradient(circle, rgba(171,75,255,0.3) 0%, transparent 70%)" }}
          />
          <p style={{ fontSize: 13, color: "rgba(240,238,255,0.6)", fontWeight: 500 }}>Total Portfolio</p>
          <p className="text-white mt-1" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-1px" }}>$24,810.50</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <ArrowUpRight size={14} color="#2FEFC4" />
              <span style={{ fontSize: 14, color: "#2FEFC4", fontWeight: 700 }}>+$1,240.30</span>
            </div>
            <span style={{ fontSize: 13, color: "rgba(240,238,255,0.5)" }}>today</span>
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <p style={{ fontSize: 11, color: "rgba(240,238,255,0.5)", fontWeight: 500 }}>FOLLOWING</p>
              <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>7 Traders</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "rgba(240,238,255,0.5)", fontWeight: 500 }}>WIN RATE</p>
              <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>74%</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "rgba(240,238,255,0.5)", fontWeight: 500 }}>SIGNALS</p>
              <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>12 Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
  <div className="flex gap-3">
    {[
      { label: "Signals",   screen: "signals"   },
      { label: "Traders",   screen: "traders"   },
      { label: "Portfolio", screen: "portfolio" },
      { label: "PAMM",      screen: "pamm"      },
    ].map((a, index) => {
      const isGlowing = glowIndex === index;
      return (
        <button
          key={a.label}
          onClick={() => onNavigate(a.screen)}
          className="flex-1 flex flex-col items-center py-3"
          style={{
            borderRadius: 18,
            background: isGlowing
              ? "radial-gradient(ellipse at 50% -10%, rgba(247,201,72,0.18) 0%, rgba(255,255,255,0.05) 75%)"
              : "rgba(255,255,255,0.05)",
            border: isGlowing
              ? "1px solid rgba(247,201,72,0.35)"
              : "1px solid rgba(171,75,255,0.15)",
            boxShadow: isGlowing
              ? "0 0 22px rgba(247,201,72,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "none",
            cursor: "pointer",
            transition: "background 0.6s, border 0.6s, box-shadow 0.6s",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "radial-gradient(ellipse at 50% -10%, rgba(247,201,72,0.18) 0%, rgba(255,255,255,0.05) 75%)";
            btn.style.border = "1px solid rgba(247,201,72,0.35)";
            btn.style.boxShadow = "0 0 22px rgba(247,201,72,0.15), inset 0 1px 0 rgba(255,255,255,0.06)";
            const svg = btn.querySelector("svg");
            if (svg) (svg as SVGElement).style.filter = "brightness(0) saturate(100%) invert(88%) sepia(55%) saturate(600%) hue-rotate(5deg) brightness(1.05)";
            const label = btn.querySelector("span");
            if (label) (label as HTMLElement).style.color = "#F7C948";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.background = "rgba(255,255,255,0.05)";
            btn.style.border = "1px solid rgba(171,75,255,0.15)";
            btn.style.boxShadow = "none";
            const svg = btn.querySelector("svg");
            if (svg) (svg as SVGElement).style.filter = "none";
            const label = btn.querySelector("span");
            if (label) (label as HTMLElement).style.color = "#9B8EC4";
          }}
        >
          {{
            signals:   <Zap       size={20} color={isGlowing ? "#F7C948" : "#AB4BFF"} strokeWidth={1.8} />,
            traders:   <Users     size={20} color={isGlowing ? "#F7C948" : "#AB4BFF"} strokeWidth={1.8} />,
            portfolio: <BarChart2 size={20} color={isGlowing ? "#F7C948" : "#AB4BFF"} strokeWidth={1.8} />,
            pamm:      <Building2 size={20} color={isGlowing ? "#F7C948" : "#AB4BFF"} strokeWidth={1.8} />,
          }[a.screen]}
          <span style={{
            fontSize: 11,
            color: isGlowing ? "#F7C948" : "#9B8EC4",
            marginTop: 4,
            fontWeight: 600,
            transition: "color 0.6s",
          }}>
            {a.label}
          </span>
        </button>
      );
    })}
  </div>
</div>

      {/* Market Overview — infinite carousel */}
      <div className="mb-6">
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 22s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="px-6 flex items-center justify-between mb-3">
          <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>Markets</h3>
          <button
            onClick={() => onNavigate("market")}
            style={{ fontSize: 13, color: "#AB4BFF", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}
          >
            See all
          </button>
        </div>
        {/* Overflow clip with edge fade */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            paddingBottom: 4,
          }}
        >
          {/* Left fade */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 32, zIndex: 2, background: "linear-gradient(to right, #20143D, transparent)", pointerEvents: "none" }} />
          {/* Right fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 32, zIndex: 2, background: "linear-gradient(to left, #20143D, transparent)", pointerEvents: "none" }} />

          {/* Scrolling track — doubled for seamless loop */}
          <div className="marquee-track" style={{ display: "flex", gap: 12, width: "max-content", paddingLeft: 24 }}>
            {[...markets, ...markets].map((m, idx) => (
              <div
                key={`${m.pair}-${idx}`}
                className="flex-shrink-0"
                style={{
                  width: 150,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(171,75,255,0.15)",
                  padding: "14px 14px 10px",
                }}
              >
                <p className="text-white" style={{ fontSize: 13, fontWeight: 700 }}>{m.pair}</p>
                <p className="text-white" style={{ fontSize: 16, fontWeight: 800, marginTop: 2 }}>{m.price}</p>
                <div className="flex items-center gap-1 mt-1">
                  {m.up ? <TrendingUp size={12} color="#2FEFC4" /> : <TrendingDown size={12} color="#FF4B6E" />}
                  <span style={{ fontSize: 12, color: m.up ? "#2FEFC4" : "#FF4B6E", fontWeight: 700 }}>{m.change}</span>
                </div>
                <div className="mt-2" style={{ height: 36 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={m.data}>
                      <defs>
                        <linearGradient id={`g-${m.pair.replace("/", "-")}-${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop key="s0" offset="5%" stopColor={m.up ? "#2FEFC4" : "#FF4B6E"} stopOpacity={0.3} />
                          <stop key="s1" offset="95%" stopColor={m.up ? "#2FEFC4" : "#FF4B6E"} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area key={`area-${m.pair}-${idx}`} type="monotone" dataKey="v" stroke={m.up ? "#2FEFC4" : "#FF4B6E"} strokeWidth={1.5} fill={`url(#g-${m.pair.replace("/", "-")}-${idx})`} dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Traders */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>Top Traders</h3>
          <button onClick={() => onNavigate("traders")} style={{ fontSize: 13, color: "#AB4BFF", fontWeight: 600 }}>See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {traders.map((t) => (
            <button
              key={t.name}
              onClick={() => onNavigate("traders")}
              className="flex-shrink-0 flex flex-col items-center"
              style={{
                width: 110,
                borderRadius: 20,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(171,75,255,0.15)",
                padding: "14px 10px",
                cursor: "pointer",
              }}
            >
              <img
                src={t.avatar_url}
                alt={t.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 8,
                  border: "2px solid rgba(171,75,255,0.4)",
              }}
              />
              <p className="text-white" style={{ fontSize: 12, fontWeight: 700 }}>{t.name}</p>
              <p style={{ fontSize: 11, color: "#9B8EC4" }}>{t.handle}</p>
              <div
                className="mt-2 px-2 py-0.5"
                style={{ borderRadius: 8, background: "rgba(47,239,196,0.12)" }}
              >
                <span style={{ fontSize: 12, color: "#2FEFC4", fontWeight: 700 }}>{t.roi}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* News Feed */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>Latest News</h3>
          <button
            onClick={() => onNavigate("news")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
          <ChevronRight size={18} color="#9B8EC4" />
          </button>
      </div>
      <div onClick={() => onNavigate("news")} style={{ cursor: "pointer" }}>
        <NewsFeed />
      </div>
</div>
    </div>
  );
}
