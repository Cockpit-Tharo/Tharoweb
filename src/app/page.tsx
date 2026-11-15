"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import ScrollBlueprintHud from "@/components/ScrollBlueprintHud";
import InteractiveHeroConsole from "@/components/InteractiveHeroConsole";
import CinematicPictureComplete from "@/components/CinematicPictureComplete";
import CinematicAsymmetricGallery from "@/components/CinematicAsymmetricGallery";
import SystemAnatomyStage from "@/components/SystemAnatomyStage";
import {
  CinematicLineMaskHeading,
  CinematicSubhead,
} from "@/components/CinematicText";
import {
  SectionStamp,
  ScrollParallaxReveal,
  ApertureReveal,
  BlueprintReveal,
  FadeInSection,
} from "@/components/SectionEntrance";
import styles from "./page.module.css";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import IntegrationMatrix from "@/components/IntegrationMatrix";
import LollipopCarousel from "@/components/LollipopCarousel";
import SectorPillShowcase from "@/components/SectorPillShowcase";
import RoiCalculator from "@/components/RoiCalculator";
import FaqSection from "@/components/FaqSection";
import ResultsShowcase from "@/components/ResultsShowcase";
import DocketTestimonials from "@/components/DocketTestimonials";
import { ThermalReceipt } from "@/components/ThermalReceipt";
import { getAllSectors } from "@/data/sectors";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const sectors = getAllSectors();
  const [revealReady, setRevealReady] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => {
      setHeroRevealed(true);
      setRevealReady(true);
    }, 7000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      <Preloader
        onStartReveal={() => setHeroRevealed(true)}
        onFinish={() => {
          setHeroRevealed(true);
          setRevealReady(true);
          if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();
            });
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 120);
          }
        }}
      />
      <LenisScrollProvider />
      <ScrollBlueprintHud />

      {/* ─── THARO INTERACTIVE HARDWARE HERO CONSOLE ─── */}
      <InteractiveHeroConsole
        revealReady={revealReady}
        heroRevealed={heroRevealed}
      />

      {/* ─── CINEMATIC SCROLL PICTURE COMPLETION (SKELETON TO REAL IMAGE) ─── */}
      <div id="sec-system" style={{ scrollMarginTop: "6rem" }}>
        <CinematicPictureComplete />
      </div>

      {/* ─── ASYMMETRIC SCROLL GALLERY (CARGOKITE VIGNETTES) ─── */}
      <div id="sec-gallery" style={{ scrollMarginTop: "6rem" }}>
        <CinematicAsymmetricGallery />
      </div>

      {/* ─── TRANSFORMATION ENGINE & PINNED ANATOMY ─── */}
      <div id="sec-flow" style={{ paddingTop: "1rem", scrollMarginTop: "6rem" }}>
        <SectionStamp label="System Anatomy" note="Voice & WhatsApp to ERP" />
        <SystemAnatomyStage />
      </div>

      {/* ─── MARQUEE ─── */}
      <FadeInSection>
        <SocialProofMarquee />
      </FadeInSection>

      {/* ─── SOFTWARE & DASHBOARD INTEGRATION HUB ─── */}
      <div id="integrations" style={{ scrollMarginTop: "6rem" }}>
        <BlueprintReveal tag="Connected Software Stack">
          <IntegrationMatrix />
        </BlueprintReveal>
      </div>

      {/* ─── WHY THARO TECHNOLOGIES (FOREST SECTION) ─── */}
      <div id="sec-results" style={{ scrollMarginTop: "6rem" }}>
        <FadeInSection>
          <ResultsShowcase />
        </FadeInSection>
      </div>

      {/* ─── AUTOMATION CAPSULES (LOLLIPOP CAROUSEL) ─── */}
      <section className={styles.capsulesSection}>
        <SectionStamp label="Automations in Motion" note="Real business flows" />
        <div className="container">
          <div className={styles.sectionHead}>
            <CinematicLineMaskHeading
              lines={[
                { text: "Automations" },
                { text: "in motion.", italic: true },
              ]}
            />
            <CinematicSubhead className={styles.sectionSubtitle}>
              Swipe through automated workflows running for active businesses.
            </CinematicSubhead>
          </div>
        </div>

        <ApertureReveal>
          <LollipopCarousel />
        </ApertureReveal>
      </section>

      {/* ─── ALL SECTORS (CHARCOAL SECTION) ─── */}
      <section
        id="sec-sectors"
        className={`theme-dark rounded-top rounded-bottom ${styles.sectorsSection}`}
        style={{ scrollMarginTop: "6rem" }}
      >
        <SectionStamp label="Industry Solutions" note={`${sectors.length} ready workflows`} dark />
        <div className="container">
          <div className={styles.sectionHead}>
            <CinematicLineMaskHeading
              dark
              lines={[
                { text: "Built for" },
                { text: "your industry.", italic: true },
              ]}
            />
            <CinematicSubhead dark className={styles.sectionSubtitle}>
              Ready workflows for {sectors.length} industries.
            </CinematicSubhead>
          </div>

          <ApertureReveal>
            <SectorPillShowcase />
          </ApertureReveal>
        </div>
      </section>

      {/* ─── INTERACTIVE PRICE & ROI CALCULATOR ─── */}
      <div id="sec-pricing" style={{ scrollMarginTop: "6rem" }}>
        <BlueprintReveal tag="Transparent Savings Model">
          <RoiCalculator />
          <div className="container" style={{ textAlign: "center" }}>
            <p className={styles.pricingNote}>
              <strong>How pricing works:</strong> You pay for our system and AI workflows. Rest, Meta charges you directly per message you send at wholesale cost with 0% markup.
              <Link href="/pricing/meta-charges" className={styles.pricingNoteLink}>
                Learn how Meta charges per message &rarr;
              </Link>
            </p>
          </div>
        </BlueprintReveal>
      </div>

      {/* ─── CLIENT TESTIMONIALS (DOCKET DRAWER) ─── */}
      <div id="sec-proof" style={{ paddingTop: "1.5rem", scrollMarginTop: "6rem" }}>
        <SectionStamp label="Client Stories" note="Verified results" />
        <BlueprintReveal>
          <DocketTestimonials />
        </BlueprintReveal>
      </div>

      {/* ─── FAQS SECTION ─── */}
      <FaqSection />

      {/* ─── FINAL CTA + LIVE BILLING RECEIPT ─── */}
      <section className={styles.ctaBanner}>
        <SectionStamp label="Ready to Deploy" note="5-day setup" />
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.ctaSplit}>
            <div className={styles.ctaCopy}>
              <CinematicLineMaskHeading
                lines={[
                  { text: "Ready to" },
                  { text: "simplify daily work?", italic: true },
                ]}
              />
              <CinematicSubhead className={styles.ctaBody}>
                How pricing works: You pay for our system, rest Meta charges you per message you send at 0% markup.
              </CinematicSubhead>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className="btn-primary">Book a Free Demo</Link>
                <Link href="/pricing" className="btn-secondary">View Pricing</Link>
              </div>
            </div>

            <div className={styles.ctaReceipt}>
              <ThermalReceipt
                maxWidth={360}
                storeName="THARO.TECH"
                storeAddress="Transparent Billing · 0% Meta Markup"
                status="Receipt settled"
                orderNumber="TH-2026"
                date="12 Nov 2026"
                customer="Growth Clinic"
                paymentMethod="Direct Meta + UPI"
                items={[
                  { name: "Tharo Growth Plan", qty: 1, price: 9999 },
                  { name: "Meta Messages (At Cost)", qty: 1, price: 1200 },
                ]}
                taxRate={0}
                showShipping
                shipping={0}
                currency="INR"
                locale="en-IN"
                footerMessage="You pay for our system, rest Meta charges per message"
                stampText="PAID"
                buttonLabel="Print sample bill"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
