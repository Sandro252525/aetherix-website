import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import BackToTop from "@/components/ui/BackToTop";
import FloatingContact from "@/components/ui/FloatingContact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Technologies />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Portfolio />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <Faq />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />

      <FloatingContact />
      <BackToTop />
    </>
  );
}