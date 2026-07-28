"use client"

import * as React from "react";
import { verifyAdminPassword } from "./actions";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function AdminLoginClient() {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    
    setLoading(true);
    setError("");
    
    try {
      const res = await verifyAdminPassword(password);
      if (res.success) {
        window.location.reload();
      } else {
        setError(res.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none"></div>

      <div className="w-full max-w-md bg-white border-brutal border-dark shadow-brutal p-8 z-10 relative">
        {/* CAD Registration Marks */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-[3px] border-l-[3px] border-dark z-20 opacity-50" />
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-[3px] border-r-[3px] border-dark z-20 opacity-50" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-[3px] border-l-[3px] border-dark z-20 opacity-50" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-[3px] border-r-[3px] border-dark z-20 opacity-50" />

        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary p-4 border-brutal border-dark text-white mb-4">
            <Lock size={32} />
          </div>
          <h1 className="font-heading font-black text-2xl uppercase tracking-wider text-center">
            Samarthya 2026
          </h1>
          <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">
            Admin Authentication
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-dark mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 border-[3px] border-dark font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-brutal-sm"
              placeholder="Enter secure password"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="bg-primary/10 border-[2px] border-primary p-3 text-primary text-sm font-bold uppercase tracking-wide">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-primary text-white border-[3px] border-dark shadow-brutal font-heading font-black uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[var(--brutal-offset)] active:translate-y-[var(--brutal-offset)] active:shadow-none transition-all disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Access Console"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-bold text-dark/60 hover:text-primary uppercase tracking-widest underline underline-offset-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
