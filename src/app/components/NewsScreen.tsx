import React, { useState } from "react";
import { ArrowLeft, Search, Clock, User } from "lucide-react";

const categories = ["All", "Macro", "Forex", "Gold", "Commodities"];

const articles = [
  {
    id: 1, tag: "Macro", category: "Macro",
    title: "Fed holds rates steady — dollar weakens as traders price in June cut",
    author: "James Whitfield", date: "Jun 7, 2026", readTime: "3 min",
    image: "https://picsum.photos/seed/fed/400/200",
    excerpt: "The Federal Reserve held interest rates steady at its latest meeting, sending the dollar lower as markets interpreted the decision as a signal that cuts could come as early as June.",
  },
  {
    id: 2, tag: "Forex", category: "Forex",
    title: "EUR/USD breaks key resistance at 1.0850 — bulls target 1.0920 next",
    author: "Sophie Laurent", date: "Jun 7, 2026", readTime: "4 min",
    image: "https://picsum.photos/seed/eurusd/400/200",
    excerpt: "The euro pushed through a critical technical level against the dollar on Friday, opening the door for further gains as momentum traders pile in on the breakout.",
  },
  {
    id: 3, tag: "Gold", category: "Gold",
    title: "Gold surges past $2,340 on safe-haven demand amid geopolitical tensions",
    author: "Marcus Chen", date: "Jun 7, 2026", readTime: "3 min",
    image: "https://picsum.photos/seed/gold/400/200",
    excerpt: "Spot gold climbed sharply as investors sought shelter from rising geopolitical uncertainty, with the metal finding support from both physical buying and ETF inflows.",
  },
  {
    id: 4, tag: "Forex", category: "Forex",
    title: "Bank of England holds rate at 5.25% — GBP/USD spikes 40 pips on release",
    author: "Emily Harwood", date: "Jun 7, 2026", readTime: "2 min",
    image: "https://picsum.photos/seed/boe/400/200",
    excerpt: "Sterling surged immediately after the Bank of England's decision, catching short sellers off guard as the vote split suggested a more hawkish committee than expected.",
  },
  {
    id: 5, tag: "Macro", category: "Macro",
    title: "US Non-Farm Payrolls beat expectations — dollar index climbs to 3-week high",
    author: "James Whitfield", date: "Jun 6, 2026", readTime: "4 min",
    image: "https://picsum.photos/seed/nfp/400/200",
    excerpt: "The US economy added more jobs than forecast last month, pushing the dollar broadly higher and forcing traders to reprice the timeline for Federal Reserve rate cuts.",
  },
  {
    id: 6, tag: "Forex", category: "Forex",
    title: "USD/JPY approaches 158.00 as BOJ maintains ultra-loose policy stance",
    author: "Kenji Tanaka", date: "Jun 6, 2026", readTime: "3 min",
    image: "https://picsum.photos/seed/usdjpy/400/200",
    excerpt: "The yen continued its slide against the dollar as the Bank of Japan reaffirmed its commitment to yield curve control, leaving traders watching for any sign of intervention.",
  },
  {
    id: 7, tag: "Commodities", category: "Commodities",
    title: "Oil prices drop 2.3% on surprise inventory build — CAD weakens against dollar",
    author: "Rachel Stone", date: "Jun 6, 2026", readTime: "3 min",
    image: "https://picsum.photos/seed/oil/400/200",
    excerpt: "Crude oil fell sharply after US inventory data showed a larger than expected build, dragging the Canadian dollar lower given the loonie's strong correlation with energy prices.",
  },
  {
    id: 8, tag: "Forex", category: "Forex",
    title: "ECB signals possible rate cut in September — EUR slides across the board",
    author: "Sophie Laurent", date: "Jun 5, 2026", readTime: "4 min",
    image: "https://picsum.photos/seed/ecb/400/200",
    excerpt: "European Central Bank officials hinted at a potential rate reduction in September, sending the euro lower against all major currencies as rate differentials shifted.",
  },
  {
    id: 9, tag: "Gold", category: "Gold",
    title: "Silver breaks above $29.50 — momentum traders eye $31 target next week",
    author: "Marcus Chen", date: "Jun 5, 2026", readTime: "2 min",
    image: "https://picsum.photos/seed/silver/400/200",
    excerpt: "Silver cleared a key technical barrier, drawing in momentum buyers who are now targeting the next resistance zone near $31 as industrial demand remains robust.",
  },
  {
    id: 10, tag: "Forex", category: "Forex",
    title: "AUD/USD falls to 3-month low as RBA flags growth concerns in minutes",
    author: "Liam Porter", date: "Jun 5, 2026", readTime: "3 min",
    image: "https://picsum.photos/seed/aud/400/200",
    excerpt: "The Australian dollar dropped to its weakest level in three months after Reserve Bank minutes revealed deeper concerns about the domestic growth outlook than markets had anticipated.",
  },
];

const tagColors: Record<string, string> = {
  Macro:       "#C9A84C",
  Forex:       "#AB4BFF",
  Gold:        "#C9A84C",
  Commodities: "#2FEFC4",
};

interface NewsScreenProps {
  onBack: () => void;
}

export function NewsScreen({ onBack }: NewsScreenProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div
      className="flex flex-col min-h-full pb-10"
      style={{ fontFamily: "'Manrope', sans-serif", background: "#0E1439" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[260px] h-[260px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,75,255,0.18) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-4">
        <div className="flex items-center gap-4 mb-1">
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
            <h2 className="text-white" style={{ fontSize: 24, fontWeight: 800 }}>Today's News</h2>
            <p style={{ fontSize: 12, color: "#8899AA" }}>
              {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 mt-4 mb-4 px-4"
          style={{
            height: 46,
            borderRadius: 14,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(171,75,255,0.2)",
          }}
        >
          <Search size={15} color="#8899AA" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news..."
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 14, color: "#F0EEFF", fontFamily: "'Manrope', sans-serif" }}
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-4 py-1.5"
              style={{
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                background: activeCategory === cat ? "rgba(171,75,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${activeCategory === cat ? "rgba(171,75,255,0.5)" : "rgba(171,75,255,0.15)"}`,
                color: activeCategory === cat ? "#AB4BFF" : "#8899AA",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="px-6 flex flex-col gap-4">
        {filtered.map((article) => {
          const tagColor = tagColors[article.tag] ?? "#8899AA";
          return (
            <div
              key={article.id}
              style={{
                borderRadius: 20,
                background: "rgba(14,20,57,0.85)",
                border: "1px solid rgba(171,75,255,0.12)",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
              />

              {/* Content */}
              <div style={{ padding: "14px 16px 16px" }}>
                {/* Tag + meta row */}
                <div className="flex items-center gap-2 mb-2">
                  <div style={{
                    padding: "3px 10px",
                    borderRadius: 8,
                    background: `${tagColor}18`,
                    border: `1px solid ${tagColor}44`,
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: tagColor }}>
                      {article.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={10} color="#8899AA" />
                    <span style={{ fontSize: 11, color: "#8899AA" }}>{article.author}</span>
                  </div>
                  <span style={{ fontSize: 11, color: "#8899AA" }}>·</span>
                  <span style={{ fontSize: 11, color: "#8899AA" }}>{article.date}</span>
                </div>

                {/* Title */}
                <p className="text-white" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4, margin: "0 0 8px" }}>
                  {article.title}
                </p>

                {/* Excerpt */}
                <p style={{ fontSize: 12, color: "#8899AA", lineHeight: 1.5, margin: 0 }}>
                  {article.excerpt}
                </p>

                {/* Read time */}
                <div className="flex items-center gap-1 mt-3">
                  <Clock size={11} color="#8899AA" />
                  <span style={{ fontSize: 11, color: "#8899AA" }}>{article.readTime} read</span>
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center py-16">
            <p style={{ fontSize: 14, color: "#8899AA" }}>No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
}