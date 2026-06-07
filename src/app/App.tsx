import React from "react";
import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";
import { SignalScreen } from "./components/SignalScreen";
import { TradersScreen } from "./components/TradersScreen";
import { FollowTradeScreen } from "./components/FollowTradeScreen";
import { PortfolioScreen } from "./components/PortfolioScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { PAMMScreen } from "./components/PAMMScreen";
import { BottomNav } from "./components/BottomNav";

// MARKER-MAKE-KIT-INVOKED

type Screen = "login" | "home" | "signals" | "traders" | "followTrade" | "portfolio" | "profile" | "pamm";
const NAV_SCREENS: Screen[] = ["home", "signals", "traders", "portfolio", "profile"];

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [prevScreen, setPrevScreen] = useState<Screen>("home");

  const navigate = (s: string) => {
    if (screen !== "login") setPrevScreen(screen);
    setScreen(s as Screen);
  };

  const goBack = () => setScreen(prevScreen);

  const showNav = NAV_SCREENS.includes(screen);

  return (
    <div
      className="size-full flex items-center justify-center"
      style={{ background: "#0E0B1E", minHeight: "100vh" }}
    >
      {/* Mobile frame */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          width: "100%",
          maxWidth: 393,
          height: "100vh",
          maxHeight: 852,
          background: "#20143D",
          position: "relative",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {screen === "login" && (
            <LoginScreen onLogin={() => navigate("home")} />
          )}
          {screen === "home" && (
            <HomeScreen onNavigate={navigate} />
          )}
          {screen === "signals" && (
            <SignalScreen onNavigate={navigate} />
          )}
          {screen === "traders" && (
            <TradersScreen onNavigate={navigate} />
          )}
          {screen === "followTrade" && (
            <FollowTradeScreen onBack={goBack} />
          )}
          {screen === "portfolio" && (
            <PortfolioScreen />
          )}
          {screen === "profile" && (
            <ProfileScreen onLogout={() => setScreen("login")} />
          )}
          {screen === "pamm" && (
            <PAMMScreen onBack={goBack} />
          )}
        </div>

        {/* Bottom navigation */}
        {showNav && (
          <BottomNav
            active={screen}
            onNavigate={navigate}
          />
        )}
      </div>
    </div>
  );
}
