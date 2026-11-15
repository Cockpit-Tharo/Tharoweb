"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { ScrollableTabs } from "@/components/ScrollableTabs";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Check,
  Mic,
  BarChart3,
  Lock,
} from "lucide-react";
import { getSectorBySlug } from "@/data/sectors";

export default function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }> | { sector: string };
}) {
  const resolvedParams =
    params && typeof (params as Promise<{ sector: string }>).then === "function"
      ? use(params as Promise<{ sector: string }>)
      : (params as { sector: string });

  const data = getSectorBySlug(resolvedParams.sector);

  if (!data) {
    notFound();
  }

  // Active module tab
  const [activeModule, setActiveModule] = useState(0);

  const hasModules = data.systemScreenshots && data.systemScreenshots.length > 0;
  const currentModule = hasModules ? data.systemScreenshots![activeModule] : null;

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className={styles.hero}>
        <div className="container">
          <Link href="/solutions" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to all solutions
          </Link>

          <h1 className={styles.title}>
            {data.title} <br />
            <em className="italic-serif">{data.titleItalic}</em>
          </h1>

          <p className={styles.subtitle}>{data.subtitle}</p>

          <div className={styles.heroCopy}>
            <p>{data.copyBlock}</p>
          </div>

          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn-primary">
              <MessageSquare size={16} />
              <span>Book Architecture Walkthrough</span>
            </Link>
            {hasModules && (
              <a href="#core-modules" className="btn-secondary">
                <span>View Core Modules</span>
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ─── CORE ARCHITECTURE & MODULES (IP-PROTECTED TEASER) ─── */}
      {hasModules && (
        <section id="core-modules" className={styles.showcaseSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Five modules, <em className="italic-serif">one workspace.</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Connect WhatsApp bookings with back-office records, billing, and follow-ups.
              </p>
            </div>

            {/* Tab Controls */}
            <ScrollableTabs
              tone="forestDark"
              className={styles.tabControlsShell}
              trackClassName={styles.tabControls}
              role="tablist"
              ariaLabel="Core modules"
            >
              {data.systemScreenshots!.map((shot, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={activeModule === idx}
                  className={`${styles.tabBtn} ${activeModule === idx ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveModule(idx)}
                >
                  {shot.tabLabel}
                </button>
              ))}
            </ScrollableTabs>

            {/* Curated Module Card */}
            {currentModule && (
              <div className={styles.moduleDisplayCard}>
                <div className={styles.moduleCardTop}>
                  <div>
                    <h3 className={styles.moduleTitle}>{currentModule.title}</h3>
                    <p className={styles.moduleDesc}>{currentModule.description}</p>
                  </div>

                  <div className={styles.sandboxBox}>
                    <div className={styles.sandboxLockIcon}>
                      <Lock size={18} />
                    </div>
                    <div>
                      <div className={styles.sandboxHeadline}>Live Sandbox Access</div>
                      <div className={styles.sandboxSub}>Experience this module live in a private demo</div>
                    </div>
                    <Link href="/contact" className={styles.sandboxBtn}>
                      <span>Request Walkthrough</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className={styles.moduleHighlightsGrid}>
                  {currentModule.highlights.map((item, i) => (
                    <div key={i} className={styles.highlightCard}>
                      <Check size={14} className={styles.highlightCheck} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── PIPO AI OPERATIONAL COPILOT ─── */}
      {data.pipoRole && (
        <section className={styles.pipoSection}>
          <div className="container">
            <div className={styles.pipoHead}>
              <h2>
                {data.pipoRole.headline.split(":")[0]}: <br />
                <em className="italic-serif">{data.pipoRole.headline.split(":")[1] || "The Operations All-Rounder"}</em>
              </h2>
              <p>{data.pipoRole.overview}</p>
            </div>

            <div className={styles.pipoGrid}>
              {/* Pillar 1: Executive Q&A & Performance Summaries */}
              <div className={styles.pipoCard}>
                <div className={styles.pipoCardHeader}>
                  <div className={styles.pipoIconWrap}>
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h3>Executive Q&amp;A Analytics</h3>
                    <span style={{ fontSize: "0.8125rem", color: "#666" }}>Ask plain questions about numbers, weak/strong spots</span>
                  </div>
                </div>

                <div>
                  {data.pipoRole.sampleQueries.map((q, i) => (
                    <div key={i} className={styles.qaItem}>
                      <div className={styles.qaQuery}>&ldquo;{q.query}&rdquo;</div>
                      <div className={styles.qaAnswer}>{q.answerSummary}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 2: Voice & Spoken Workflow Execution */}
              <div className={styles.pipoCard}>
                <div className={styles.pipoCardHeader}>
                  <div className={styles.pipoIconWrap}>
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3>Voice Commands &amp; Workflow Execution</h3>
                    <span style={{ fontSize: "0.8125rem", color: "#666" }}>Speak natural commands in Hinglish or English</span>
                  </div>
                </div>

                <div>
                  {data.pipoRole.voiceCommands.map((v, i) => (
                    <div key={i} className={styles.voiceItem}>
                      <div className={styles.voiceSpoken}>&ldquo;{v.spokenText}&rdquo;</div>
                      <div className={styles.voiceAction}>Action: {v.executedAction}</div>
                      <div className={styles.voiceResult}>Impact: {v.businessResult}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: WhatsApp Autopilot & Message Ingestion */}
            {data.pipoRole.autopilotFlow && (
              <div className={styles.autopilotBanner}>
                <h3>Automated WhatsApp Reading &amp; Message Autopilot</h3>
                <div className={styles.autopilotSteps}>
                  {data.pipoRole.autopilotFlow.map((step, i) => (
                    <div key={i} className={styles.autoStep}>
                      <div className={styles.autoStepTitle}>
                        Step 0{i + 1}: {step.stage}
                      </div>
                      <div className={styles.autoStepAction}>{step.action}</div>
                      <div className={styles.autoStepOutcome}>{step.outcome}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── END-TO-END OPERATIONAL LIFECYCLE ─── */}
      {data.operationalLifecycle && (
        <section className={styles.lifecycleSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                How chats update <em className="italic-serif">your ledgers.</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Four stages linking client WhatsApp replies directly to your database and billing.
              </p>
            </div>

            <div className={styles.lifecycleGrid}>
              {data.operationalLifecycle.map((stage) => (
                <div key={stage.stageNumber} className={styles.lifecycleCard}>
                  <div className={styles.stageNumber}>{stage.stageNumber}</div>
                  <h3 className={styles.stageTitle}>{stage.stageTitle}</h3>
                  <div className={styles.lifecycleDetail}>
                    <span className={styles.detailLabel}>Trigger</span>
                    <span className={styles.detailText}>{stage.trigger}</span>
                  </div>
                  <div className={styles.lifecycleDetail}>
                    <span className={styles.detailLabel}>Database Action</span>
                    <span className={styles.detailText}>{stage.erpAction}</span>
                  </div>
                  <div className={styles.lifecycleDetail} style={{ marginTop: "auto" }}>
                    <span className={styles.detailLabel}>WhatsApp Touchpoint</span>
                    <span className={styles.detailText}>{stage.customerTouchpoint}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── DEEP CAPABILITIES MATRIX ─── */}
      {data.detailedCapabilities && (
        <section className={styles.capabilitiesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
                Built for <em className="italic-serif">daily work.</em>
              </h2>
              <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
                {data.painPoints}
              </p>
            </div>

            <div className={styles.capabilitiesGrid}>
              {data.detailedCapabilities.map((cap, i) => (
                <div key={i} className={styles.capabilityCard}>
                  <div className={styles.capCategory}>{cap.category}</div>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDesc}>{cap.description}</p>
                  <div className={styles.capSpec}>
                    <strong>Technical Specification:</strong> {cap.specification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── WHATSAPP TEMPLATES & META UTILITY FLOWS ─── */}
      {data.whatsappTemplates && (
        <section className={styles.templatesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Direct WhatsApp messages, <em className="italic-serif">zero spam risk.</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Every message is delivered via official Meta Cloud APIs with pre-approved utility templates,
                high deliverability, and interactive action buttons.
              </p>
            </div>

            <div className={styles.templatesGrid}>
              {data.whatsappTemplates.map((tmpl, idx) => (
                <div key={idx} className={styles.templateCard}>
                  <div className={styles.templateHeader}>
                    <span className={styles.templateCategory}>{tmpl.category}</span>
                    <span className={styles.templateCode}>{tmpl.templateName}</span>
                  </div>
                  <div className={styles.waBubble}>
                    <p className={styles.waText}>{tmpl.messagePreview}</p>
                    <div className={styles.waButtons}>
                      {tmpl.interactiveButtons.map((btn, bIdx) => (
                        <div key={bIdx} className={styles.waBtn}>
                          {btn}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      {data.faqs && (
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} style={{ color: "var(--text-dark, #161616)" }}>
                Frequently Asked <em className="italic-serif">Questions</em>
              </h2>
              <p className={styles.sectionSubtitle} style={{ color: "var(--text-dark-muted, #555)" }}>
                Common operational and technical questions from business owners and IT leaders.
              </p>
            </div>

            <div className={styles.faqGrid}>
              {data.faqs.map((faq, i) => (
                <div key={i} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CONVERSION CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
            <h2 className={styles.ctaTitle}>
              Ready to set this up for <br />
              <em className="italic-serif">{data.name}?</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Book a walkthrough to review your workflow and test your shared WhatsApp number.
            </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn-primary" style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}>
              <MessageSquare size={18} />
              <span>Book Architecture Walkthrough</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
