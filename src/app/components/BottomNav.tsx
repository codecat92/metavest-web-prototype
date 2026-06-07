import React from "react";
import { Home, Zap, Users, BarChart2, User } from "lucide-react";

const tabs = [
  { id: "home", icon: Home, label: "Home" },
  { id: "signals", icon: Zap, label: "Signals" },
  { id: "traders", icon: Users, label: "Traders" },
  { id: "portfolio", icon: BarChart2, label: "Portfolio" },
  { id: "profile", icon: User, label: "Profile" },
];

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <div
      // absolute = stays inside the mobile frame div, not the whole browser window
      className="absolute flex items-center justify-around"
      style={{
        bottom: 16,
        left: 16,
        right: 16,
        height: 68,
        borderRadius: 28,
        background: "rgba(8,14,30,0.95)",           // deep navy base
        border: "1px solid rgba(201,168,76,0.25)",  // gold border
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.1)",
        zIndex: 100,
        fontFamily: "'Manrope', sans-serif",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="flex flex-col items-center justify-center flex-1 h-full"
            style={{ cursor: "pointer", background: "transparent", border: "none", gap: 3 }}
          >
            {isActive ? (
              // Active tab: gold pill highlight
              <div
                className="flex flex-col items-center justify-center px-4 py-1.5"
                style={{
                  borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.1) 100%)",
                  border: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                <tab.icon size={18} color="#C9A84C" strokeWidth={2.5} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "#C9A84C", marginTop: 1 }}>
                  {tab.label}
                </span>
              </div>
            ) : (
              // Inactive tab: muted silver
              <>
                <tab.icon size={20} color="#8899AA" strokeWidth={1.8} />
                <span style={{ fontSize: 10, fontWeight: 500, color: "#8899AA" }}>
                  {tab.label}
                </span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}