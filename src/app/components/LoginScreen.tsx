import React from "react";
import { useState } from "react";
import { Eye, EyeOff, TrendingUp } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex flex-col min-h-full relative overflow-hidden"
      style={{ fontFamily: "'Manrope', sans-serif", background: "#20143D" }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,75,255,0.28) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[60px] right-[-80px] w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(89,19,184,0.22) 0%, transparent 70%)" }}
      />

      {/* Safe area top */}
      <div className="pt-14 px-6 flex flex-col flex-1">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center mt-6 mb-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
            style={{
              background: "linear-gradient(135deg, #AB4BFF 0%, #5913B8 100%)",
              boxShadow: "0 0 32px rgba(171,75,255,0.45)",
            }}
          >
            <TrendingUp size={28} color="#fff" strokeWidth={2.5} />
          </div>
          <h1
            className="text-white mb-1"
            style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px" }}
          >
            Metavest
          </h1>
          <p style={{ fontSize: 15, color: "#9B8EC4", fontWeight: 400 }}>
            Smart Social Trading Platform
          </p>
        </div>

        {/* Welcome text */}
        <div className="mb-8">
          <h2 className="text-white mb-1" style={{ fontSize: 24, fontWeight: 700 }}>
            Welcome back
          </h2>
          <p style={{ fontSize: 15, color: "#9B8EC4" }}>Sign in to your account</p>
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label style={{ fontSize: 12, fontWeight: 600, color: "#9B8EC4", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            Email
          </label>
          <div
            className="mt-2 flex items-center px-4"
            style={{
              height: 52,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(171,75,255,0.2)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-transparent outline-none text-white"
              style={{ fontSize: 15, fontFamily: "'Manrope', sans-serif" }}
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label style={{ fontSize: 12, fontWeight: 600, color: "#9B8EC4", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            Password
          </label>
          <div
            className="mt-2 flex items-center px-4"
            style={{
              height: 52,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(171,75,255,0.2)",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 bg-transparent outline-none text-white"
              style={{ fontSize: 15, fontFamily: "'Manrope', sans-serif" }}
            />
            <button onClick={() => setShowPassword(!showPassword)} className="ml-2 opacity-60">
              {showPassword ? <EyeOff size={18} color="#9B8EC4" /> : <Eye size={18} color="#9B8EC4" />}
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button style={{ fontSize: 13, color: "#AB4BFF", fontWeight: 600 }}>Forgot password?</button>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onLogin}
          className="w-full flex items-center justify-center"
          style={{
            height: 56,
            borderRadius: 18,
            background: "linear-gradient(135deg, #AB4BFF 0%, #671FA8 100%)",
            boxShadow: "0 8px 32px rgba(171,75,255,0.4)",
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Manrope', sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1" style={{ height: 1, background: "rgba(171,75,255,0.15)" }} />
          <span style={{ fontSize: 13, color: "#9B8EC4", margin: "0 12px" }}>or continue with</span>
          <div className="flex-1" style={{ height: 1, background: "rgba(171,75,255,0.15)" }} />
        </div>

        {/* Social logins */}
        <div className="flex gap-3 mb-8">
          {["G", "𝕏", "in"].map((icon, i) => (
            <button
              key={i}
              className="flex-1 flex items-center justify-center"
              style={{
                height: 52,
                borderRadius: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(171,75,255,0.18)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Register CTA */}
        <div className="flex justify-center pb-8">
          <span style={{ fontSize: 14, color: "#9B8EC4" }}>
            Don't have an account?{" "}
          </span>
          <button style={{ fontSize: 14, color: "#AB4BFF", fontWeight: 700, marginLeft: 4 }}>
            Sign up free
          </button>
        </div>
      </div>
    </div>
  );
}
