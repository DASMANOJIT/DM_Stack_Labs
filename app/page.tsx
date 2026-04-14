import AmbientCanvas from "./components/AmbientCanvas";
import CTA from "./components/CTA";
import CTAInline from "./components/CTAInline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import SectionTransition from "./components/SectionTransition";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--brand-bg)] text-slate-900 dark:bg-black">
      <AmbientCanvas />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="relative z-10">
        <Navbar />
        <main>
          <SectionTransition>
            <Hero />
          </SectionTransition>
          <SectionTransition>
            <Services />
          </SectionTransition>
          <SectionTransition>
            <CTAInline
              title="Ready to start your website?"
              description="Get a clear plan, timeline, and pricing from a website development company focused on results."
            />
          </SectionTransition>
          <SectionTransition>
            <WhyUs />
          </SectionTransition>
          <SectionTransition>
            <Process />
          </SectionTransition>
          <SectionTransition>
            <CTAInline
              title="Want an SEO-optimized website that converts?"
              description="We build SEO optimized websites with fast loading performance and responsive website design."
            />
          </SectionTransition>
          <SectionTransition>
            <Portfolio />
          </SectionTransition>
          <SectionTransition amount={0.04} margin="0px 0px -4% 0px">
            <GoogleReviews />
          </SectionTransition>
          <SectionTransition>
            <CTA />
          </SectionTransition>
          <SectionTransition>
            <Contact />
          </SectionTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
