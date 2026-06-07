# Metavest Web Prototype

> Dark luxury social trading platform UI — built with React + Vite.
> Visual prototype for client presentation prior to full mobile (React Native) development.

🔗 **Live Demo:** [metavest-web-prototype.vercel.app](https://metavest-web-prototype.vercel.app)

---

## Overview

Metavest is a **Social Trading Platform** targeted at forex traders — conceptually similar to eToro or ZuluTrade, with a focus on copy trading, PAMM investment, and live trading signals via broker partnership with JDR Securities.

This repository contains the **web prototype** — a fully interactive UI built for client review and design validation. All data is currently dummy/static. Backend integration is planned for the next development phase.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend framework and build tool |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Recharts | Sparkline and area charts |
| Lucide React | Icon library |
| Vercel | Deployment and hosting |

---

## Screens

| Screen | Description |
|---|---|
| **Login** | Entry screen with email/password form and social login options |
| **Home** | Dashboard with portfolio summary, quick actions, markets carousel, top traders, and news feed |
| **Market** | Full list of 10 forex pairs with search and category filter (Major, Commodity, Cross) |
| **Signal** | Live trading signals with expandable cards showing entry, target, stop loss, and R:R |
| **Traders** | Leaderboard of top traders with follow functionality, sorting, and search |
| **Follow Trade** | Copy trading configuration — allocation amount, risk level, and expected return |
| **Portfolio** | Portfolio overview with area chart, holdings breakdown, active follows P&L, and performance analytics |
| **Profile** | User profile with Metapoint balance, tier progress, achievement badges, and settings |
| **PAMM** | Broker partnership page for JDR Securities with external links to Open Broker and PAMM Invest portals |

---

## Design Direction

**Dark Luxury Trading** — Bloomberg meets Revolut Black.

| Token | Value | Usage |
|---|---|---|
| Background | `#20143D` | Deep purple-navy base |
| Accent Gold | `#C9A84C` | Primary accent — used sparingly |
| Purple | `#AB4BFF` | Interactive elements, active states |
| Silver | `#8899AA` | Secondary text, inactive icons |
| Green | `#2FEFC4` | Positive change, profit |
| Red | `#FF4B6E` | Negative change, loss |

Font: **Manrope** — geometric, modern, financial feel.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/codecat92/metavest-web-prototype.git
cd metavest-web-prototype

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Status

| Area | Status |
|---|---|
| UI / All Screens | ✅ Complete |
| Navigation | ✅ Complete |
| Dummy Data | ✅ In place |
| Forex Content | ✅ Replaced from crypto |
| Real API Integration | ⏳ Planned — next phase |
| Backend (FastAPI) | ⏳ Planned — pending SRS |
| React Native App | ⏳ Planned — after UI validation |

---

## Project Context

This prototype was built to replace a previous Flutter implementation that was delivered incomplete and with minimal functionality. The rebuild was done from scratch using React to:

1. Validate the UI/UX direction with the client before mobile development
2. Establish a design system and component structure
3. Demonstrate a working, deployable product quickly

---

## Folder Structure

```
src/
└── app/
    ├── components/
    │   ├── LoginScreen.tsx
    │   ├── HomeScreen.tsx
    │   ├── MarketScreen.tsx
    │   ├── SignalScreen.tsx
    │   ├── TradersScreen.tsx
    │   ├── FollowTradeScreen.tsx
    │   ├── PortfolioScreen.tsx
    │   ├── ProfileScreen.tsx
    │   ├── PAMMScreen.tsx
    │   └── BottomNav.tsx
    └── App.tsx
public/
└── metavest-logo.png
```

---

## Developer

**Fernando Siahaan (Nando)**
Software Engineer
