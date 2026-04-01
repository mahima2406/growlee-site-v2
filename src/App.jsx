import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── helpers ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

const FLIP_WORDS = ['Think', 'Monitor', 'Act', 'Fix', 'Scale']

function FlipWord() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FLIP_WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])
  return <span style={{ color: '#E8582A', fontWeight: 600 }}>{FLIP_WORDS[idx]}</span>
}

/* ── styles ──────────────────────────────────────────── */
const s = {
  page: { fontFamily: "'Inter', -apple-system, sans-serif", background: '#FAF8F2', color: '#1a1a1a', WebkitFontSmoothing: 'antialiased' },
  serif: { fontFamily: "'DM Serif Display', serif" },
  serifItalic: { fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontWeight: 400 },
  brand: '#E8582A',
  dark: '#0C0C0C',
  cream: '#FAF8F2',
  section: { maxWidth: 960, margin: '0 auto', padding: '0 24px' },
  sectionNarrow: { maxWidth: 700, margin: '0 auto', padding: '0 24px' },
  center: { textAlign: 'center' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, fontWeight: 600, color: '#E8582A', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 32 },
  h1: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 32 },
  sub: { fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.6 },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#E8582A', color: '#fff', padding: '16px 36px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' },
  btnSecondary: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '16px 36px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none' },
  trust: { fontSize: 12, color: '#aaa', letterSpacing: '0.03em', marginTop: 32 },
  sLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#E8582A', marginBottom: 16, textAlign: 'center' },
}

/* ── NAV ─────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.5s', background: scrolled ? 'rgba(250,248,242,0.95)' : 'rgba(12,12,12,0.5)', backdropFilter: 'blur(20px)', borderBottom: scrolled ? '1px solid rgba(0,0,0,0.04)' : '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontSize: 20, fontWeight: 700, color: scrolled ? '#0C0C0C' : '#fff', textDecoration: 'none', transition: 'color 0.5s' }}>
          grow<span style={{ ...s.serifItalic, color: '#E8582A' }}>lee</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="#agents" style={{ fontSize: 13, fontWeight: 500, color: scrolled ? '#888' : 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.5s' }}>Solutions</a>
          <a href="#how" style={{ fontSize: 13, fontWeight: 500, color: scrolled ? '#888' : 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.5s' }}>How it works</a>
          <a href="#" style={{ fontSize: 13, fontWeight: 500, color: scrolled ? '#888' : 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.5s' }}>Blog</a>
          <a href="https://cal.com/mahima-arora-0f2025/30min" target="_blank" style={{ fontSize: 13, fontWeight: 600, color: '#fff', background: '#E8582A', padding: '10px 20px', borderRadius: 8, textDecoration: 'none' }}>
            Book a Demo →
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ── HERO ────────────────────────────────────────────── */
function Hero() {
  const integrations = ['Shopify', 'Shiprocket', 'Razorpay', 'Meta Ads', 'Google Ads', 'Delhivery', 'WhatsApp', 'WooCommerce', 'Zoho', 'Unicommerce']
  return (
    <section style={{ paddingTop: 176, paddingBottom: 96, position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #0C0C0C 0%, #1a1a2e 40%, #0C0C0C 100%)', minHeight: '100vh' }}>
      {/* Animated gradient orbs */}
      <div style={{ position: 'absolute', top: '-20%', left: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,88,42,0.15) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float1 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'float2 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '0%', left: '40%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,106,0.1) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'float3 12s ease-in-out infinite' }} />

      {/* Dot grid overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 0.5px, transparent 0.5px)', backgroundSize: '28px 28px' }} />

      {/* Subtle top glow line */}
      <div style={{ position: 'absolute', top: 72, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(232,88,42,0.3), transparent)' }} />

      <div style={{ ...s.section, maxWidth: 900, textAlign: 'center', position: 'relative' }}>
        <FadeIn>
          <div style={s.badge}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8582A' }} />
            AI Ops Layer for D2C Brands →
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={s.h1}>
            Your all-in-one AI<br />
            <span style={{ ...s.serifItalic, color: '#E8582A' }}>ops team</span>{' '}
            you never had
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={s.sub}>
            A team of AI agents that thinks, monitors, and acts so you don't have to. From revenue tracking to shipping to retention.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40 }}>
            AI agents that <FlipWord /> so you don't have to.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
            <a href="https://cal.com/mahima-arora-0f2025/30min" target="_blank" style={s.btnPrimary}>
              Talk to Founders <span>→</span>
            </a>
            <a href="#agents" style={s.btnSecondary}>See Solutions</a>
          </div>
        </FadeIn>

        {/* Built by experts */}
        <FadeIn delay={0.5}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Built by experts from</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/logos/iitk.svg" alt="IIT Kanpur" style={{ height: 36, opacity: 0.3, filter: 'brightness(10)' }} />
              <span style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>IIT Kanpur</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logos/ms.svg" alt="Microsoft" style={{ height: 20, opacity: 0.3, filter: 'brightness(10)' }} />
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Spinny</span>
          </div>
        </FadeIn>

        {/* Integrates with */}
        <FadeIn delay={0.6}>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Integrates with</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
              {integrations.map((name, i) => (
                <span key={i} style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.35)' }}>{name}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── PROBLEMS ────────────────────────────────────────── */
const painPoints = [
  '10 Excel sheets to create and manage every month',
  'Shopify, Meta Ads, Amazon and 10+ tools to look at',
  'No visibility when something goes wrong',
  'No communication between teams. You are the center of everything',
  'Revenue fades away while you\'re scratching your head',
]

function Problems() {
  return (
    <section style={{ padding: '128px 0', background: '#fff' }}>
      <div style={{ ...s.sectionNarrow, textAlign: 'center' }}>
        <FadeIn>
          <p style={s.sLabel}>WE GET YOUR PROBLEMS</p>
          <h2 style={{ ...s.serif, fontSize: 'clamp(30px, 4vw, 48px)', color: '#0C0C0C', marginBottom: 48, lineHeight: 1.15 }}>
            You didn't start a brand to<br />babysit dashboards.
          </h2>
        </FadeIn>

        <div style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto 48px' }}>
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <span style={{ color: '#E8582A', marginTop: 2, fontSize: 18, lineHeight: 1 }}>×</span>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p style={{ ...s.serifItalic, fontSize: 'clamp(22px, 3vw, 32px)', color: '#E8582A' }}>
            So we built Growlee.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── AGENTS ──────────────────────────────────────────── */
const agents = [
  { num: '01', name: 'Revenue Agent', color: '#E8582A', bg: '#FFF7F2', title: 'Revenue dropping? Know why before it hits your P&L.', desc: 'Connects with Shopify, Amazon, and WooCommerce. Detects revenue drop-offs, recovers abandoned carts, syncs omnichannel orders. Fixes issues through AI-driven automations before they hit your bottom line.', metric: '↓42%', metricLabel: 'wasted ad spend', tags: ['Shopify', 'Amazon', 'WooCommerce'] },
  { num: '02', name: 'Marketing Agent', color: '#2563EB', bg: '#F0F4FF', title: 'Your best campaign just stopped performing.', desc: 'Connects with Google Ads and Meta Ads. Spots underperforming campaigns, detects creative fatigue, identifies revenue leakage. Optimizes spend through AI before performance drops.', metric: '↓35%', metricLabel: 'wasted ad spend identified', tags: ['Google Ads', 'Meta Ads'] },
  { num: '03', name: 'Inventory Agent', color: '#16A34A', bg: '#EEFBF3', title: 'Bestseller about to go out of stock?', desc: 'Connects with Shopify and EasyEcom. Detects stock shortages, automates reorders through POs, predicts stockouts. Resolves issues before they disrupt operations.', metric: '↑3.8x', metricLabel: 'stockouts reduced', tags: ['Shopify', 'EasyEcom', 'Zoho'] },
  { num: '04', name: 'Shipping Agent', color: '#7C3AED', bg: '#F5F0FF', title: 'High-risk COD order just placed.', desc: 'Connects with Shiprocket, Delhivery, and BlueDart. Detects risky pincodes, reduces RTOs, flags delivery delays. Optimizes logistics before they impact customer experience.', metric: '↓27%', metricLabel: 'RTO reduction', tags: ['Shiprocket', 'Delhivery', 'BlueDart'] },
  { num: '05', name: 'Finance Agent', color: '#D97706', bg: '#FFFBEB', title: 'Stuck transactions eating your cash flow?', desc: 'Connects with Razorpay, Cashfree, and Stripe. Identifies stuck transactions, COD vs prepaid mismatches, and multi-channel discrepancies. Resolves them before they affect cash flow.', metric: '↑2.4x', metricLabel: 'reconciliation speed', tags: ['Razorpay', 'Cashfree', 'Stripe'] },
  { num: '06', name: 'Retention Agent', color: '#E11D63', bg: '#FFF0F5', title: 'Day 25. Product running out. Customer going silent.', desc: 'Tracks purchase cycles across your customer base. Triggers reorder nudges timed to product usage. Identifies churn risk and activates win-back sequences before customers leave.', metric: '3x', metricLabel: 'repeat purchase rate', tags: ['WhatsApp', 'Voice AI', 'SMS'] },
]

function AgentCard({ agent, index }) {
  const isEven = index % 2 === 0
  return (
    <FadeIn delay={0.1}>
      <div style={{ background: agent.bg, borderRadius: 16, border: '1px solid rgba(0,0,0,0.04)', marginBottom: 24, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ padding: 40, order: isEven ? 1 : 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: agent.color, color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{agent.num}</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: agent.color }}>{agent.name}</span>
            </div>
            <h3 style={{ ...s.serif, fontSize: 24, color: '#0C0C0C', marginBottom: 12, lineHeight: 1.25 }}>{agent.title}</h3>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{agent.desc}</p>
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ ...s.serif, fontSize: 40, color: agent.color }}>{agent.metric}</span>
              <span style={{ fontSize: 14, color: '#999' }}>{agent.metricLabel}</span>
            </div>
          </div>
          <div style={{ padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${agent.color}08`, borderLeft: isEven ? '1px solid rgba(0,0,0,0.04)' : 'none', borderRight: !isEven ? '1px solid rgba(0,0,0,0.04)' : 'none', order: isEven ? 2 : 1, minHeight: 200 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: agent.color, opacity: 0.6 }}>Connects with</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {agent.tags.map((tag, ti) => (
                  <span key={ti} style={{ padding: '8px 16px', borderRadius: 999, background: '#fff', border: `1.5px solid ${agent.color}30`, fontSize: 13, fontWeight: 600, color: agent.color }}>{tag}</span>
                ))}
              </div>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: agent.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
                <span style={{ color: '#fff', fontSize: 20 }}>⚡</span>
              </div>
              <p style={{ fontSize: 12, color: '#999', fontWeight: 500 }}>Real-time monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function Agents() {
  return (
    <section style={{ padding: '128px 0' }} id="agents">
      <div style={s.section}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={s.sLabel}>MEET YOUR AI TEAM</p>
            <h2 style={{ ...s.serif, fontSize: 'clamp(32px, 4vw, 48px)', color: '#0C0C0C', marginBottom: 16 }}>
              Specialized AI agents working<br />around the clock.
            </h2>
            <p style={{ fontSize: 16, color: '#555', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
              All communicating. All collaborating. Powered by natural language.interact with your agents like you would with a colleague.
            </p>
          </div>
        </FadeIn>

        {agents.map((a, i) => <AgentCard key={i} agent={a} index={i} />)}

        <FadeIn>
          <div style={{ background: '#0C0C0C', borderRadius: 16, padding: 40, color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#0C0C0C', fontSize: 16 }}>✓</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Full Ops Suite</span>
            </div>
            <p style={{ ...s.serif, fontSize: 24, marginBottom: 8 }}>Revenue tracked. Marketing optimized. Inventory managed. Shipping secured. Payments reconciled. Customers retained.</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 600 }}>Six agents. One operating system. Zero tabs.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── HOW IT WORKS ────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Connect', desc: 'Plug in Shopify, your ad accounts, and delivery partners. Takes 15 minutes.', icon: '🔌' },
    { n: '02', title: 'Deploy', desc: 'Pick which agents you need. Revenue, Marketing, Shipping, Retention, or all six.', icon: '🎯' },
    { n: '03', title: 'Autopilot', desc: 'Agents monitor, detect, and act 24/7. You watch results on your dashboard.', icon: '🚀' },
  ]
  return (
    <section style={{ padding: '128px 0', background: '#fff' }} id="how">
      <div style={{ ...s.section, maxWidth: 900, textAlign: 'center' }}>
        <FadeIn>
          <p style={s.sLabel}>HOW IT WORKS</p>
          <h2 style={{ ...s.serif, fontSize: 'clamp(30px, 4vw, 44px)', color: '#0C0C0C', marginBottom: 16 }}>Live in 48 hours</h2>
          <p style={{ fontSize: 15, color: '#555', maxWidth: 380, margin: '0 auto 64px', lineHeight: 1.6 }}>No six-month integration. No dedicated IT team. Just connect and go.</p>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ background: '#FAF8F2', borderRadius: 16, border: '1px solid rgba(0,0,0,0.04)', padding: 32, textAlign: 'center' }}>
                <span style={{ fontSize: 30, display: 'block', marginBottom: 16 }}>{step.icon}</span>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#E8582A', marginBottom: 8 }}>{step.n}</p>
                <h3 style={{ ...s.serif, fontSize: 20, color: '#0C0C0C', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── STATS ───────────────────────────────────────────── */
function Stats() {
  const stats = [
    { prefix: '↓', value: '42%', label: 'Wasted ad spend saved' },
    { prefix: '↑', value: '3.8x', label: 'Inventory stockouts reduced' },
    { prefix: '↓', value: '27%', label: 'Revenue unlocked from RTO' },
    { prefix: '↑', value: '2.4x', label: 'Reconciliation time saved' },
  ]
  return (
    <section style={{ padding: '80px 0', background: '#0C0C0C' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center' }}>
        {stats.map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div>
              <span style={{ ...s.serif, fontSize: 'clamp(36px, 5vw, 52px)', color: '#fff' }}>{stat.prefix}{stat.value}</span>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4, fontWeight: 500 }}>{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

/* ── MARKET DATA ─────────────────────────────────────── */
function MarketData() {
  const data = [
    { number: '$60B', label: 'D2C channel in India by 2030', source: 'McKinsey, Feb 2026' },
    { number: '53%', label: 'MSMEs prefer D2C over marketplaces', source: 'McKinsey MSME Survey' },
    { number: '3x', label: 'D2C growing faster than marketplace e-commerce', source: 'McKinsey, Feb 2026' },
  ]
  return (
    <section style={{ padding: '112px 0', background: '#FAF8F2' }}>
      <div style={{ ...s.section, maxWidth: 900 }}>
        <FadeIn>
          <p style={s.sLabel}>THE OPPORTUNITY</p>
          <h2 style={{ ...s.serif, fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#0C0C0C', marginBottom: 64, textAlign: 'center' }}>D2C is the future. But ops is stuck in 2019.</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {data.map((d, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.04)', padding: 32, textAlign: 'center' }}>
                <p style={{ ...s.serif, fontSize: 'clamp(40px, 5vw, 56px)', color: '#E8582A', marginBottom: 12 }}>{d.number}</p>
                <p style={{ fontSize: 15, color: '#0C0C0C', fontWeight: 500, marginBottom: 8, lineHeight: 1.4 }}>{d.label}</p>
                <p style={{ fontSize: 11, color: '#bbb' }}>{d.source}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ─────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ padding: '128px 0', textAlign: 'center' }} id="cta">
      <div style={{ ...s.section, maxWidth: 900 }}>
        <FadeIn>
          <div style={{ maxWidth: 600, margin: '0 auto', padding: 56, borderRadius: 24, background: '#fff', border: '1px solid rgba(0,0,0,0.04)' }}>
            <h2 style={{ ...s.serif, fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#0C0C0C', marginBottom: 16 }}>
              Ready to put your D2C ops on autopilot?
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, marginBottom: 32 }}>
              See how Growlee's AI agents can transform your operations. Book a call with our founding team today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
              <a href="https://cal.com/mahima-arora-0f2025/30min" target="_blank" style={s.btnPrimary}>
                Book a Demo <span>→</span>
              </a>
              <a href="https://wa.me/919988295839" target="_blank" style={{ ...s.btnSecondary, borderColor: '#E8582A', borderWidth: 2, borderStyle: 'solid', color: '#E8582A' }}>
                WhatsApp Us
              </a>
            </div>
            <p style={{ fontSize: 11, color: '#bbb' }}>IIT Kanpur & ex-Microsoft team · Based in Gurgaon · 14-day free trial</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ padding: '64px 0', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <a href="#" style={{ fontSize: 18, fontWeight: 700, color: '#0C0C0C', textDecoration: 'none', display: 'block', marginBottom: 16 }}>
              grow<span style={{ ...s.serifItalic, color: '#E8582A' }}>lee</span>
            </a>
            <p style={{ fontSize: 13, color: '#999', lineHeight: 1.6 }}>AI ops layer for D2C brands. Built by IIT Kanpur & Microsoft alumni.</p>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Navigation</p>
            {['Solutions', 'How it works', 'Blog', 'Pricing'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>{l}</a>
            ))}
            <a href="https://cal.com/mahima-arora-0f2025/30min" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>Book a Demo</a>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Solutions</p>
            {agents.map(a => (
              <a key={a.name} href="#agents" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>{a.name}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Connect</p>
            <a href="#" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>LinkedIn</a>
            <a href="https://wa.me/919988295839" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>WhatsApp</a>
            <a href="mailto:hello@growlee.in" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>hello@growlee.in</a>
            <a href="#" style={{ display: 'block', fontSize: 13, color: '#666', textDecoration: 'none', padding: '4px 0' }}>Twitter/X</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.04)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#bbb' }}>© 2026 Growlee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/* ── APP ─────────────────────────────────────────────── */
export default function App() {
  return (
    <div style={s.page}>
      <Nav />
      <Hero />
      <Problems />
      <Agents />
      <HowItWorks />
      <Stats />
      {/* MarketData removed */}
      <CTA />
      <Footer />
    </div>
  )
}
