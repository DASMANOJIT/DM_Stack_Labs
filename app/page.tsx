import CTA from "./components/CTA";
import CTAInline from "./components/CTAInline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-slate-900 dark:bg-black">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTAInline
          title="Ready to start your website?"
          description="Get a clear plan, timeline, and pricing from a website development company focused on results."
        />
        <WhyUs />
        <Process />
        <CTAInline
          title="Want an SEO-optimized website that converts?"
          description="We build SEO optimized websites with fast loading performance and responsive website design."
        />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
