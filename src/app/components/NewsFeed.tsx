import React from "react";

const news = [
  { title: "Fed holds rates steady — dollar weakens as traders price in June cut", time: "2h ago", tag: "Macro" },
  { title: "EUR/USD breaks key resistance at 1.0850 — bulls target 1.0920 next", time: "4h ago", tag: "EUR/USD" },
  { title: "Gold surges past $2,340 on safe-haven demand amid geopolitical tensions", time: "6h ago", tag: "XAU/USD" },
  { title: "Bank of England holds rate at 5.25% — GBP/USD spikes 40 pips on release", time: "8h ago", tag: "GBP/USD" },
  { title: "US Non-Farm Payrolls beat expectations — dollar index climbs to 3-week high", time: "10h ago", tag: "Macro" },
  { title: "USD/JPY approaches 158.00 as BOJ maintains ultra-loose policy stance", time: "12h ago", tag: "USD/JPY" },
  { title: "Oil prices drop 2.3% on surprise inventory build — CAD weakens against dollar", time: "14h ago", tag: "USD/CAD" },
  { title: "ECB signals possible rate cut in September — EUR slides across the board", time: "16h ago", tag: "EUR/USD" },
  { title: "Silver breaks above $29.50 — momentum traders eye $31 target next week", time: "18h ago", tag: "XAG/USD" },
  { title: "AUD/USD falls to 3-month low as RBA flags growth concerns in minutes", time: "20h ago", tag: "AUD/USD" },
];

const tagColors: Record<string, string> = {
  Macro:     "#C9A84C",
  "EUR/USD": "#AB4BFF",
  "XAU/USD": "#C9A84C",
  "GBP/USD": "#2FEFC4",
  "USD/JPY": "#AB4BFF",
  "USD/CAD": "#2FEFC4",
  "XAG/USD": "#8899AA",
  "AUD/USD": "#2FEFC4",
};

export function NewsFeed() {
  return (
    <>
      <style>{`
        @keyframes news-scroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .news-track {
          animation: news-scroll 28s linear infinite;
        }
        .news-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{
        height: 300,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Top fade */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 48, zIndex: 2,
          background: "linear-gradient(to bottom, #0E1439, transparent)",
          pointerEvents: "none",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 48, zIndex: 2,
          background: "linear-gradient(to top, #0E1439, transparent)",
          pointerEvents: "none",
        }} />

        {/* Scrolling track — doubled for seamless loop */}
        <div className="news-track" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[...news, ...news].map((item, i) => {
            const tagColor = tagColors[item.tag] ?? "#8899AA";
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: 12,
                  padding: "12px 14px",
                  borderRadius: 16,
                  background: "rgba(14,20,57,0.85)",
                  border: "1px solid rgba(171,75,255,0.12)",
                  flexShrink: 0,
                }}
              >
                {/* Tag */}
                <div style={{
                  flexShrink: 0,
                  width: 72,
                  textAlign: "center",
                  padding: "4px 0",
                  borderRadius: 8,
                  background: `${tagColor}18`,
                  border: `1px solid ${tagColor}44`,
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: tagColor, fontFamily: "'Manrope', sans-serif" }}>
                    {item.tag}
                  </span>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#F0EEFF",
                    fontFamily: "'Manrope', sans-serif",
                    lineHeight: 1.4,
                    margin: 0,
                  }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 11, color: "#8899AA", margin: "4px 0 0", fontFamily: "'Manrope', sans-serif" }}>
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}