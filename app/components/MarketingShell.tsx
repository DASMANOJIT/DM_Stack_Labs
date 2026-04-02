import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-slate-900 dark:bg-black">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 sm:pt-28">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
