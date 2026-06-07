import { useState } from "react";
import { ArrowLeft, Shield, TrendingUp, CheckCircle, Info } from "lucide-react";

interface FollowTradeScreenProps {
  onBack: () => void;
}

export function FollowTradeScreen({ onBack }: FollowTradeScreenProps) {
  const [allocation, setAllocation] = useState(500);
  const [risk, setRisk] = useState<"conservative" | "balanced" | "aggressive">("balanced");
  const [confirmed, setConfirmed] = useState(false);

  const riskSettings = {
    conservative: { stopMultiplier: 0.5, label: "Conservative", color: "#2FEFC4", desc: "50% of signal stop" },
    balanced: { stopMultiplier: 1.0, label: "Balanced", color: "#F7C948", desc: "Match signal exactly" },
    aggressive: { stopMultiplier: 1.5, label: "Aggressive", color: "#FF4B6E", desc: "150% of signal stop" },
  };

  const roiEstimate = (allocation * 0.142).toFixed(0);
  const maxLoss = (allocation * (risk === "conservative" ? 0.04 : risk === "balanced" ? 0.07 : 0.12)).toFixed(0);

  if (confirmed) {
    return (
      <div
        className="flex flex-col min-h-full items-center justify-center px-6"
        style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(171,75,255,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{
            background: "linear-gradient(135deg, #AB4BFF 0%, #2FEFC4 100%)",
            boxShadow: "0 0 60px rgba(171,75,255,0.5)",
          }}
        >
          <CheckCircle size={36} color="#fff" strokeWidth={2.5} />
        </div>
        <h2 className="text-white text-center mb-2" style={{ fontSize: 28, fontWeight: 800 }}>
          You're now following!
        </h2>
        <p className="text-center mb-2" style={{ fontSize: 15, color: "#9B8EC4" }}>
          Copying <span style={{ color: "#AB4BFF", fontWeight: 700 }}>AlphaWave</span> with ${allocation} allocation
        </p>
        <p style={{ fontSize: 13, color: "rgba(240,238,255,0.4)" }}>Signals will auto-execute in your account</p>

        <div
          className="w-full mt-8 p-5"
          style={{
            borderRadius: 24,
            background: "rgba(47,239,196,0.08)",
            border: "1px solid rgba(47,239,196,0.2)",
          }}
        >
          <div className="flex justify-between mb-3">
            <span style={{ fontSize: 14, color: "#9B8EC4" }}>Allocation</span>
            <span className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>${allocation}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span style={{ fontSize: 14, color: "#9B8EC4" }}>Risk Mode</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: riskSettings[risk].color }}>{riskSettings[risk].label}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ fontSize: 14, color: "#9B8EC4" }}>Expected (30d)</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#2FEFC4" }}>+${roiEstimate}</span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-6 py-4"
          style={{
            borderRadius: 18,
            background: "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
            boxShadow: "0 8px 32px rgba(171,75,255,0.4)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "'Manrope', sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back to Traders
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full pb-10" style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}>
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(171,75,255,0.15) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-6 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(171,75,255,0.2)", cursor: "pointer" }}
        >
          <ArrowLeft size={18} color="#9B8EC4" />
        </button>
        <div>
          <h2 className="text-white" style={{ fontSize: 22, fontWeight: 800 }}>Follow Trade</h2>
          <p style={{ fontSize: 13, color: "#9B8EC4" }}>Configure your copy settings</p>
        </div>
      </div>

      {/* Trader summary card */}
      <div className="px-6 mb-6">
        <div
          className="flex items-center gap-4 p-5"
          style={{
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(171,75,255,0.18) 0%, rgba(89,19,184,0.25) 100%)",
            border: "1px solid rgba(171,75,255,0.3)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #AB4BFF 0%, #5913B8 100%)", boxShadow: "0 0 20px rgba(171,75,255,0.4)" }}
          >
            <span className="text-white" style={{ fontSize: 16, fontWeight: 800 }}>AW</span>
          </div>
          <div className="flex-1">
            <p className="text-white" style={{ fontSize: 17, fontWeight: 800 }}>AlphaWave</p>
            <p style={{ fontSize: 13, color: "#9B8EC4" }}>@alphawave · Elite Trader</p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: 12, color: "#9B8EC4" }}>All-time ROI</p>
            <p style={{ fontSize: 22, fontWeight: 800, color: "#2FEFC4" }}>+142%</p>
            <div className="flex items-center gap-1 justify-end">
              <TrendingUp size={11} color="#2FEFC4" />
              <p style={{ fontSize: 12, color: "#2FEFC4" }}>78% win rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation Slider */}
      <div className="px-6 mb-6">
        <div
          className="p-5"
          style={{
            borderRadius: 24,
            background: "rgba(30,18,60,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>Allocation Amount</p>
            <div
              className="px-3 py-1"
              style={{ borderRadius: 10, background: "rgba(171,75,255,0.15)", border: "1px solid rgba(171,75,255,0.3)" }}
            >
              <span style={{ fontSize: 16, fontWeight: 800, color: "#AB4BFF" }}>${allocation}</span>
            </div>
          </div>
          <input
            type="range"
            min={100}
            max={5000}
            step={100}
            value={allocation}
            onChange={(e) => setAllocation(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: "#AB4BFF", height: 4 }}
          />
          <div className="flex justify-between mt-1">
            <span style={{ fontSize: 11, color: "#9B8EC4" }}>$100</span>
            <span style={{ fontSize: 11, color: "#9B8EC4" }}>$5,000</span>
          </div>

          {/* Quick amounts */}
          <div className="flex gap-2 mt-3">
            {[250, 500, 1000, 2500].map((amt) => (
              <button
                key={amt}
                onClick={() => setAllocation(amt)}
                className="flex-1 py-2"
                style={{
                  borderRadius: 10,
                  background: allocation === amt ? "rgba(171,75,255,0.2)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${allocation === amt ? "rgba(171,75,255,0.5)" : "rgba(171,75,255,0.12)"}`,
                  color: allocation === amt ? "#AB4BFF" : "#9B8EC4",
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'Manrope', sans-serif",
                  cursor: "pointer",
                }}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Selector */}
      <div className="px-6 mb-6">
        <p className="text-white mb-3" style={{ fontSize: 16, fontWeight: 700 }}>Risk Level</p>
        <div className="flex flex-col gap-3">
          {(["conservative", "balanced", "aggressive"] as const).map((r) => {
            const s = riskSettings[r];
            const active = risk === r;
            return (
              <button
                key={r}
                onClick={() => setRisk(r)}
                className="flex items-center gap-4 p-4"
                style={{
                  borderRadius: 18,
                  background: active ? `${s.color}12` : "rgba(30,18,60,0.85)",
                  border: `1px solid ${active ? `${s.color}44` : "rgba(171,75,255,0.12)"}`,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}20`, border: `2px solid ${active ? s.color : "transparent"}` }}
                >
                  <Shield size={18} color={s.color} />
                </div>
                <div className="flex-1">
                  <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{s.label}</p>
                  <p style={{ fontSize: 12, color: "#9B8EC4" }}>{s.desc}</p>
                </div>
                {active && (
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: s.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expected outcome */}
      <div className="px-6 mb-6">
        <div
          className="p-5"
          style={{
            borderRadius: 24,
            background: "rgba(30,18,60,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Info size={14} color="#9B8EC4" />
            <p style={{ fontSize: 13, color: "#9B8EC4" }}>Based on 30-day historical performance</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 500 }}>EXPECTED RETURN</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#2FEFC4" }}>+${roiEstimate}</p>
            </div>
            <div className="text-right">
              <p style={{ fontSize: 11, color: "#9B8EC4", fontWeight: 500 }}>MAX LOSS</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#FF4B6E" }}>-${maxLoss}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6">
        <button
          onClick={() => setConfirmed(true)}
          className="w-full flex items-center justify-center py-4"
          style={{
            borderRadius: 18,
            background: "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
            boxShadow: "0 8px 32px rgba(171,75,255,0.45)",
            color: "#fff",
            fontSize: 17,
            fontWeight: 800,
            fontFamily: "'Manrope', sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Following · ${allocation}
        </button>
        <p className="text-center mt-3" style={{ fontSize: 11, color: "#9B8EC4" }}>
          You can stop copying at any time. No lock-in period.
        </p>
      </div>
    </div>
  );
}
