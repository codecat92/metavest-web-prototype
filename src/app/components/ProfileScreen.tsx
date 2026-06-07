import React from "react";
import { useState } from "react";
import { Zap, Shield, Bell, ChevronRight, LogOut, Copy, Star, Award, Trophy, Target, Flame, Gem, Moon } from "lucide-react";

const badges = [
  { icon: "🏆", label: "Elite Trader", unlocked: true },
  { icon: "⚡", label: "Signal King", unlocked: true },
  { icon: "🎯", label: "Precision Pro", unlocked: true },
  { icon: "🔥", label: "Hot Streak", unlocked: true },
  { icon: "💎", label: "Diamond Hands", unlocked: false },
  { icon: "🌙", label: "Night Trader", unlocked: false },
];

const tiers = [
  { name: "Starter", points: 0, color: "#9B8EC4" },
  { name: "Pro", points: 2500, color: "#671FA8" },
  { name: "Elite", points: 5000, color: "#AB4BFF" },
  { name: "Legend", points: 10000, color: "#2FEFC4" },
];

const currentPoints = 4820;
const currentTierIndex = 2; // Elite
const nextTierPoints = tiers[3].points;
const progress = ((currentPoints - tiers[2].points) / (nextTierPoints - tiers[2].points)) * 100;

const settingsGroups = [
  {
    title: "Account",
    items: [
      { icon: Shield, label: "Security & Privacy" },
      { icon: Bell, label: "Notifications" },
      { icon: Copy, label: "Referral Code" },
    ],
  },
  {
    title: "Trading",
    items: [
      { icon: Zap, label: "Auto-Trading Settings" },
      { icon: Star, label: "Subscription Plan" },
      { icon: Award, label: "Achievement History" },
    ],
  },
];

export function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"overview" | "badges">("overview");

  return (
    <div className="flex flex-col min-h-full pb-28" style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}>
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-full h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(171,75,255,0.2) 0%, transparent 60%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-6">
        {/* User card */}
        <div
          className="p-6 relative overflow-hidden"
          style={{
            borderRadius: 28,
            background: "linear-gradient(135deg, rgba(171,75,255,0.2) 0%, rgba(89,19,184,0.3) 100%)",
            border: "1px solid rgba(171,75,255,0.3)",
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(171,75,255,0.25) 0%, transparent 70%)" }} />
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #AB4BFF 0%, #5913B8 100%)",
                boxShadow: "0 0 24px rgba(171,75,255,0.5)",
              }}
            >
              <span className="text-white" style={{ fontSize: 22, fontWeight: 800 }}>AM</span>
            </div>
            <div>
              <p className="text-white" style={{ fontSize: 20, fontWeight: 800 }}>Alex Mercer</p>
              <p style={{ fontSize: 13, color: "#9B8EC4" }}>@alexmercer</p>
              <div className="flex items-center gap-1.5 mt-1">
                <div
                  className="flex items-center gap-1 px-2 py-0.5"
                  style={{ borderRadius: 8, background: "rgba(171,75,255,0.2)", border: "1px solid rgba(171,75,255,0.4)" }}
                >
                  <Award size={11} color="#AB4BFF" />
                  <span style={{ fontSize: 11, color: "#AB4BFF", fontWeight: 700 }}>Elite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-5">
            {[
              { label: "Following", value: "7" },
              { label: "Followers", value: "284" },
              { label: "Signals", value: "12" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <p className="text-white" style={{ fontSize: 18, fontWeight: 800 }}>{s.value}</p>
                <p style={{ fontSize: 11, color: "#9B8EC4" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Metapoint balance */}
          <div
            className="flex items-center justify-between p-4"
            style={{
              borderRadius: 18,
              background: "rgba(0,0,0,0.25)",
              border: "1px solid rgba(171,75,255,0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(171,75,255,0.2)" }}
              >
                <Zap size={14} color="#AB4BFF" fill="#AB4BFF" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: "#9B8EC4" }}>Metapoint Balance</p>
                <p className="text-white" style={{ fontSize: 18, fontWeight: 800 }}>{currentPoints.toLocaleString()} MP</p>
              </div>
            </div>
            <button
              style={{
                height: 34,
                paddingLeft: 14,
                paddingRight: 14,
                borderRadius: 10,
                background: "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                border: "none",
                cursor: "pointer",
              }}
            >
              Earn More
            </button>
          </div>
        </div>
      </div>

      {/* Tier Progress */}
      <div className="px-6 mb-6">
        <div
          className="p-5"
          style={{
            borderRadius: 24,
            background: "rgba(30,18,60,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>Tier Progress</p>
            <span
              className="px-2 py-1"
              style={{ borderRadius: 8, background: "rgba(47,239,196,0.1)", fontSize: 12, color: "#2FEFC4", fontWeight: 700 }}
            >
              {Math.round(progress)}% to Legend
            </span>
          </div>

          {/* Tier track */}
          <div className="relative mb-4">
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
              <div
                style={{
                  width: `${(currentTierIndex / (tiers.length - 1)) * 100 + (progress / (tiers.length - 1))}%`,
                  height: "100%",
                  borderRadius: 3,
                  background: "linear-gradient(90deg, #5913B8 0%, #AB4BFF 70%, #2FEFC4 100%)",
                  boxShadow: "0 0 10px rgba(171,75,255,0.4)",
                  maxWidth: "100%",
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {tiers.map((tier, i) => (
                <div key={tier.name} className="flex flex-col items-center" style={{ width: "25%" }}>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: i <= currentTierIndex ? tier.color : "rgba(255,255,255,0.1)",
                      boxShadow: i === currentTierIndex ? `0 0 8px ${tier.color}` : "none",
                    }}
                  />
                  <p style={{ fontSize: 9, color: i <= currentTierIndex ? tier.color : "#9B8EC4", fontWeight: 700, marginTop: 4 }}>
                    {tier.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#9B8EC4" }}>
            {nextTierPoints - currentPoints} MP needed for <span style={{ color: "#2FEFC4", fontWeight: 700 }}>Legend</span>
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>Achievements</h3>
          <button style={{ fontSize: 13, color: "#AB4BFF", fontWeight: 600 }}>View all</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center py-4 px-2"
              style={{
                borderRadius: 18,
                background: badge.unlocked
                  ? `radial-gradient(ellipse at 50% 0%, ${{ "Hot Streak": "rgba(247,201,72,0.13)", "Diamond Hands": "rgba(47,239,196,0.1)" }[badge.label] ?? "rgba(171,75,255,0.12)"} 0%, rgba(30,18,60,0.95) 75%)`
                  : "rgba(255,255,255,0.03)",
                border: badge.unlocked
                  ? `1px solid ${{ "Hot Streak": "rgba(247,201,72,0.3)", "Diamond Hands": "rgba(47,239,196,0.25)" }[badge.label] ?? "rgba(171,75,255,0.35)"}`
                  : "1px solid rgba(255,255,255,0.06)",
                opacity: badge.unlocked ? 1 : 0.45,
                boxShadow: badge.unlocked
                  ? `0 0 18px 0 ${{ "Hot Streak": "rgba(247,201,72,0.18)", "Diamond Hands": "rgba(47,239,196,0.15)" }[badge.label] ?? "rgba(171,75,255,0.22)"}, inset 0 1px 0 rgba(255,255,255,0.06)`
                  : "none",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: badge.unlocked
                    ? `radial-gradient(circle, ${{ "Hot Streak": "rgba(247,201,72,0.2)", "Diamond Hands": "rgba(47,239,196,0.18)" }[badge.label] ?? "rgba(171,75,255,0.22)"} 0%, transparent 70%)`
                    : "transparent",
                  boxShadow: badge.unlocked
                    ? `0 0 12px 2px ${{ "Hot Streak": "rgba(247,201,72,0.25)", "Diamond Hands": "rgba(47,239,196,0.2)" }[badge.label] ?? "rgba(171,75,255,0.3)"}`
                    : "none",
                }}
              >
                {{
                  "Elite Trader": <Trophy size={22} color={badge.unlocked ? "#AB4BFF" : "#9B8EC4"} strokeWidth={1.5} />,
                  "Signal King": <Zap size={22} color={badge.unlocked ? "#AB4BFF" : "#9B8EC4"} strokeWidth={1.5} />,
                  "Precision Pro": <Target size={22} color={badge.unlocked ? "#AB4BFF" : "#9B8EC4"} strokeWidth={1.5} />,
                  "Hot Streak": <Flame size={22} color={badge.unlocked ? "#F7C948" : "#9B8EC4"} strokeWidth={1.5} />,
                  "Diamond Hands": <Gem size={22} color={badge.unlocked ? "#2FEFC4" : "#9B8EC4"} strokeWidth={1.5} />,
                  "Night Trader": <Moon size={22} color={badge.unlocked ? "#AB4BFF" : "#9B8EC4"} strokeWidth={1.5} />,
                }[badge.label]}
              </div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: badge.unlocked
                    ? ({ "Hot Streak": "#F7C948", "Diamond Hands": "#2FEFC4" }[badge.label] ?? "#D4BAFF")
                    : "#9B8EC4",
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="px-6">
        {settingsGroups.map((group) => (
          <div key={group.title} className="mb-4">
            <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8, paddingLeft: 4 }}>
              {group.title}
            </p>
            <div
              style={{
                borderRadius: 20,
                background: "rgba(30,18,60,0.85)",
                border: "1px solid rgba(171,75,255,0.12)",
                overflow: "hidden",
              }}
            >
              {group.items.map((item, i) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-5 py-4"
                  style={{
                    borderBottom: i < group.items.length - 1 ? "1px solid rgba(171,75,255,0.08)" : "none",
                    cursor: "pointer",
                    background: "transparent",
                    textAlign: "left",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(171,75,255,0.12)" }}
                  >
                    <item.icon size={15} color="#AB4BFF" />
                  </div>
                  <span className="flex-1 text-white" style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
                  <ChevronRight size={16} color="#9B8EC4" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 py-4 mb-6"
          style={{
            borderRadius: 18,
            background: "rgba(255,75,110,0.08)",
            border: "1px solid rgba(255,75,110,0.2)",
            color: "#FF4B6E",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'Manrope', sans-serif",
            cursor: "pointer",
          }}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
