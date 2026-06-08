import React from "react";
import { ArrowLeft, Bell, MapPin, Calendar, Globe, Shield, CheckCircle } from "lucide-react";

interface PAMMScreenProps {
  onBack: () => void;
}

export function PAMMScreen({ onBack }: PAMMScreenProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="flex flex-col min-h-full pb-10"
      style={{ fontFamily: "'Manrope', sans-serif", background: "#0E1439" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(171,75,255,0.2) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="px-6 pt-14 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={18} color="#8899AA" />
          </button>
          <h2 className="text-white" style={{ fontSize: 20, fontWeight: 800 }}>
            PAMM
          </h2>
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: "pointer",
          }}
        >
          <Bell size={18} color="#8899AA" />
        </button>
      </div>

      {/* Broker Identity Card */}
      <div className="px-6 mb-6">
        <div
          className="flex flex-col items-center py-8"
          style={{
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(171,75,255,0.18) 0%, rgba(89,19,184,0.25) 100%)",
            border: "1px solid rgba(171,75,255,0.3)",
          }}
        >
          {/* Logo placeholder — circle with JDR initials */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
            style={{
              background: "#fff",
              border: "3px solid rgba(201,168,76,0.4)",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 900, color: "#080E1E", letterSpacing: "-1px" }}>
              JDR
            </span>
          </div>
          <h3 className="text-white" style={{ fontSize: 20, fontWeight: 800 }}>
            JDR Securities
          </h3>
          <p style={{ fontSize: 13, color: "#8899AA", marginTop: 4 }}>
            Authorised Forex Broker
          </p>
        </div>
      </div>

      {/* Broker Specs */}
      <div className="px-6 mb-6">
        <div
          className="p-5"
          style={{
            borderRadius: 20,
            background: "rgba(14,20,57,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          {/* Row 1 */}
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <Calendar size={15} color="#8899AA" />
              <div>
                <p style={{ fontSize: 11, color: "#8899AA", fontWeight: 500 }}>ESTABLISHED</p>
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={15} color="#8899AA" />
              <div>
                <p style={{ fontSize: 11, color: "#8899AA", fontWeight: 500 }}>PLATFORM</p>
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>MT4</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between mb-5">
            <div>
              <p style={{ fontSize: 11, color: "#8899AA", fontWeight: 500 }}>MIN. DEPOSIT</p>
              <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>$0</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#8899AA", fontWeight: 500 }}>MAX LEVERAGE</p>
              <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>Up to 400:1</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#8899AA", fontWeight: 500 }}>SPREAD</p>
              <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>1 pip (Std)</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin size={15} color="#8899AA" style={{ marginTop: 1, flexShrink: 0 }} />
            <p style={{ fontSize: 13, color: "#8899AA", lineHeight: 1.5 }}>
              Suite 2 Level 15, 60 Margaret St Sydney NSW 2000 Australia
            </p>
          </div>
        </div>
      </div>

      {/* Regulations */}
      <div className="px-6 mb-6">
        <h4 className="text-white mb-3" style={{ fontSize: 15, fontWeight: 700 }}>
          Regulations
        </h4>
        <div className="flex gap-3">
          {[
            { label: "ASIC", sub: "Regulated" },
            { label: "NZ FSPR", sub: "1005237" },
          ].map((reg) => (
            <div
              key={reg.label}
              className="flex-1 flex items-center gap-3 p-4"
              style={{
                borderRadius: 16,
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <Shield size={18} color="#C9A84C" />
              <div>
                <p className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{reg.label}</p>
                <p style={{ fontSize: 11, color: "#8899AA" }}>{reg.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-6 mb-8">
        <h4 className="text-white mb-3" style={{ fontSize: 15, fontWeight: 700 }}>
          Description
        </h4>
        <div
          className="p-5 flex flex-col gap-3"
          style={{
            borderRadius: 20,
            background: "rgba(14,20,57,0.85)",
            border: "1px solid rgba(171,75,255,0.15)",
          }}
        >
          {[
            "A range of trading instruments",
            "Demo accounts available",
            "MT4 supported",
            "No minimum deposit requirement",
            "Multi-channel support to contact",
            "ASIC Regulated",
            "FSPR Registered",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={15} color="#C9A84C" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: "#D0D8E4" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="px-6 flex gap-3">
        <button
          onClick={() => openLink("https://secure.jdrsecurities.vc/login")}
          className="flex-1 py-4 flex items-center justify-center"
          style={{
            borderRadius: 16,
            background: "linear-gradient(135deg, #C9A84C 0%, #A8832A 100%)",
            border: "none",
            fontSize: 15,
            fontWeight: 700,
            color: "#080E1E",
            fontFamily: "'Manrope', sans-serif",
            cursor: "pointer",
          }}
        >
          Open Broker
        </button>
        <button
          onClick={() => openLink("https://pamm_investor.jdrsecurities.vc/app/auth/investor")}
          className="flex-1 py-4 flex items-center justify-center"
          style={{
            borderRadius: 16,
            background: "transparent",
            border: "1.5px solid #C9A84C",
            fontSize: 15,
            fontWeight: 700,
            color: "#C9A84C",
            fontFamily: "'Manrope', sans-serif",
            cursor: "pointer",
          }}
        >
          PAMM Invest
        </button>
      </div>
    </div>
  );
}