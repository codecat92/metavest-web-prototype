import React from "react";
import { ArrowLeft, TrendingUp, TrendingDown, Search } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const sparkUp = [{ v: 40 }, { v: 55 }, { v: 48 }, { v: 70 }, { v: 65 }, { v: 80 }, { v: 75 }, { v: 90 }];
const sparkDown = [{ v: 80 }, { v: 72 }, { v: 78 }, { v: 60 }, { v: 65 }, { v: 55 }, { v: 50 }, { v: 42 }];
const sparkFlat = [{ v: 60 }, { v: 58 }, { v: 63 }, { v: 61 }, { v: 64 }, { v: 60 }, { v: 62 }, { v: 61 }];

const pairs = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.32%", up: true,  category: "Major",     data: sparkUp   },
  { pair: "GBP/USD", price: "1.2681", change: "+0.18%", up: true,  category: "Major",     data: sparkUp   },
  { pair: "USD/JPY", price: "157.24", change: "+0.21%", up: true,  category: "Major",     data: sparkUp   },
  { pair: "USD/CHF", price: "0.9043", change: "-0.14%", up: false, category: "Major",     data: sparkDown },
  { pair: "AUD/USD", price: "0.6521", change: "-0.38%", up: false, category: "Major",     data: sparkDown },
  { pair: "USD/CAD", price: "1.3687", change: "+0.09%", up: true,  category: "Major",     data: sparkFlat },
  { pair: "NZD/USD", price: "0.5934", change: "-0.22%", up: false, category: "Major",     data: sparkDown },
  { pair: "XAU/USD", price: "2,341.80", change: "-0.45%", up: false, category: "Commodity", data: sparkDown },
  { pair: "XAG/USD", price: "29.42",  change: "+0.67%", up: true,  category: "Commodity", data: sparkUp   },
  { pair: "GBP/JPY", price: "198.84", change: "+0.41%", up: true,  category: "Cross",     data: sparkUp   },
];

const categoryColors: Record<string, string> = {
  Major:     "#AB4BFF",
  Commodity: "#C9A84C",
  Cross:     "#2FEFC4",
};

interface MarketScreenProps {
  onBack: () => void;
}

export function MarketScreen({ onBack }: MarketScreenProps) {
  const [search, setSearch] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<"All" | "Major" | "Commodity" | "Cross">("All");

  const filtered = pairs.filter((p) => {
    const matchSearch = p.pair.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div
      className="flex flex-col min-h-full pb-28"
      style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[260px] h-[260px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,75,255,0.2) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-4">
        <div className="flex items-center gap-4 mb-5">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(171,75,255,0.2)",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={18} color="#8899AA" />
          </button>
          <div>
            <h2 className="text-white" style={{ fontSize: 24, fontWeight: 800 }}>Markets</h2>
            <p style={{ fontSize: 13, color: "#9B8EC4" }}>Live forex rates</p>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 mb-4 px-4"
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
            placeholder="Search pair..."
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 14, color: "#F0EEFF", fontFamily: "'Manrope', sans-serif" }}
          />
        </div>

        {/* Category filter */}
        <div className="flex gap-2">
          {(["All", "Major", "Commodity", "Cross"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 flex-shrink-0"
              style={{
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                background: activeCategory === cat ? "rgba(171,75,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${activeCategory === cat ? "rgba(171,75,255,0.5)" : "rgba(171,75,255,0.15)"}`,
                color: activeCategory === cat ? "#AB4BFF" : "#9B8EC4",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Pairs List */}
      <div className="px-6 flex flex-col gap-3">
        {filtered.map((m) => (
          <div
            key={m.pair}
            className="flex items-center gap-3 p-4"
            style={{
              borderRadius: 20,
              background: "rgba(30,18,60,0.85)",
              border: "1px solid rgba(171,75,255,0.12)",
            }}
          >
            {/* Symbol badge */}
            <div
              className="flex-shrink-0"
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${categoryColors[m.category]}18`,
                border: `1.5px solid ${categoryColors[m.category]}55`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 800, color: categoryColors[m.category], letterSpacing: "-0.5px" }}>
                {m.pair.split("/")[0]}
              </span>
              <span style={{ fontSize: 8, color: `${categoryColors[m.category]}99` }}>
                {m.pair.split("/")[1]}
              </span>
            </div>

            {/* Pair info */}
            <div className="flex-1">
              <p className="text-white" style={{ fontSize: 15, fontWeight: 700 }}>{m.pair}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span
                  className="px-1.5 py-0.5"
                  style={{
                    borderRadius: 6,
                    fontSize: 10,
                    fontWeight: 700,
                    background: `${categoryColors[m.category]}18`,
                    color: categoryColors[m.category],
                  }}
                >
                  {m.category}
                </span>
              </div>
            </div>

            {/* Sparkline */}
            <div style={{ width: 60, height: 36 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={m.data}>
                  <defs>
                    <linearGradient id={`grad-${m.pair.replace("/", "-")}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={m.up ? "#2FEFC4" : "#FF4B6E"} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={m.up ? "#2FEFC4" : "#FF4B6E"} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke={m.up ? "#2FEFC4" : "#FF4B6E"}
                    strokeWidth={1.5}
                    fill={`url(#grad-${m.pair.replace("/", "-")})`}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Price + change */}
            <div className="text-right" style={{ minWidth: 72 }}>
              <p className="text-white" style={{ fontSize: 14, fontWeight: 800 }}>{m.price}</p>
              <div className="flex items-center gap-1 justify-end mt-0.5">
                {m.up
                  ? <TrendingUp size={11} color="#2FEFC4" />
                  : <TrendingDown size={11} color="#FF4B6E" />
                }
                <span style={{ fontSize: 12, fontWeight: 700, color: m.up ? "#2FEFC4" : "#FF4B6E" }}>
                  {m.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}