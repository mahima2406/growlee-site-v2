import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    agent: 'Revenue Agent',
    color: '#E8582A',
    bg: '#FFF7F2',
    title: 'Revenue dropping? Know why before it hits your P&L.',
    action: 'Connects with Shopify, Amazon, and WooCommerce. Detects revenue drop-offs, recovers abandoned carts, syncs omnichannel orders — fixing issues through AI-driven automations before they hit your bottom line.',
    metric: '↓42%',
    metricLabel: 'wasted ad spend',
    layout: 'wide',
    visual: 'revenue',
  },
  {
    num: '02',
    agent: 'Marketing Agent',
    color: '#2563EB',
    bg: '#F0F4FF',
    title: 'Your best campaign just stopped performing.',
    action: 'Connects with Google Ads and Meta Ads. Spots underperforming campaigns, detects creative fatigue, identifies revenue leakage — optimizing spend through AI before performance drops.',
    metric: '↓35%',
    metricLabel: 'wasted ad spend identified',
    layout: 'left',
    visual: 'marketing',
  },
  {
    num: '03',
    agent: 'Inventory Agent',
    color: '#16A34A',
    bg: '#EEFBF3',
    title: 'Bestseller about to go out of stock?',
    action: 'Connects with Shopify and EasyEcom. Detects stock shortages, automates reorders through POs, predicts stockouts — resolving issues before they disrupt operations.',
    metric: '↑3.8x',
    metricLabel: 'stockouts reduced',
    layout: 'right',
    visual: 'inventory',
  },
  {
    num: '04',
    agent: 'Shipping Agent',
    color: '#7C3AED',
    bg: '#F5F0FF',
    title: 'High-risk COD order just placed.',
    action: 'Connects with Shiprocket, Delhivery, and BlueDart. Detects risky pincodes, reduces RTOs, flags delivery delays — optimizing logistics before they impact customer experience.',
    metric: '↓27%',
    metricLabel: 'RTO reduction',
    layout: 'left',
    visual: 'shipping',
  },
  {
    num: '05',
    agent: 'Finance Agent',
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Stuck transactions eating your cash flow?',
    action: 'Connects with Razorpay, Cashfree, and Stripe. Identifies stuck transactions, COD vs prepaid mismatches, and multi-channel discrepancies — resolving them before they affect cash flow.',
    metric: '↑2.4x',
    metricLabel: 'reconciliation speed',
    layout: 'right',
    visual: 'finance',
  },
  {
    num: '06',
    agent: 'Retention Agent',
    color: '#E11D63',
    bg: '#FFF0F5',
    title: 'Day 25. Product running out. Customer going silent.',
    action: 'Tracks purchase cycles across your customer base. Triggers reorder nudges timed to product usage. Identifies churn risk and activates win-back sequences before customers leave.',
    metric: '3x',
    metricLabel: 'repeat purchase rate',
    layout: 'left',
    visual: 'retention',
  },
]

function AgentVisual({ type, color }) {
  if (type === 'revenue') return (
    <svg viewBox="0 0 300 220" fill="none" className="w-full h-full">
      <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <rect x="10" y="20" width="70" height="32" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.2"/>
        <text x="45" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Shopify</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        <rect x="10" y="70" width="70" height="32" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.2"/>
        <text x="45" y="90" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Amazon</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
        <rect x="10" y="120" width="70" height="32" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.2"/>
        <text x="45" y="140" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>WooComm</text>
      </motion.g>

      <motion.path d="M85 36 L120 95" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}/>
      <motion.path d="M85 86 L120 95" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.6 }}/>
      <motion.path d="M85 136 L120 105" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}/>

      <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, type: 'spring' }}>
        <rect x="120" y="70" width="70" height="60" rx="14" fill={color}/>
        <text x="155" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">DETECT</text>
        <text x="155" y="112" textAnchor="middle" fontSize="8" fill="white" opacity=".7">+ RESOLVE</text>
      </motion.g>

      <motion.path d="M194 85 L225 55" stroke={color} strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }}/>
      <motion.path d="M194 110 L225 140" stroke={color} strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.85, duration: 0.5 }}/>

      <motion.g initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
        <rect x="225" y="35" width="65" height="40" rx="10" fill="white" stroke={color} strokeWidth="1.2"/>
        <text x="257" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Alerts</text>
        <text x="257" y="66" textAnchor="middle" fontSize="7" fill="#999">Fix / Scale</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1 }}>
        <rect x="225" y="125" width="65" height="40" rx="10" fill="white" stroke={color} strokeWidth="1.2"/>
        <text x="257" y="142" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Actions</text>
        <text x="257" y="156" textAnchor="middle" fontSize="7" fill="#999">Auto-resolve</text>
      </motion.g>

      <motion.circle r="3" fill={color} animate={{ cx: [85, 120], cy: [36, 95], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}/>
      <motion.circle r="3" fill={color} animate={{ cx: [194, 225], cy: [85, 55], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 1 }}/>
    </svg>
  )

  if (type === 'marketing') return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      <motion.rect x="30" y="15" width="240" height="170" rx="12" fill="white" stroke="#eee" strokeWidth="1.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}/>
      <motion.text x="50" y="40" fontSize="9" fontWeight="700" fill="#333" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>Campaign Performance Issues</motion.text>

      {[
        { label: 'Creative fatigue', pct: 40, w: 140 },
        { label: 'Budget exhausted', pct: 30, w: 105 },
        { label: 'Audience saturated', pct: 20, w: 70 },
        { label: 'Low ROAS', pct: 10, w: 35 },
      ].map((bar, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
          <text x="50" y={65 + i * 32} fontSize="8" fill="#666">{bar.label}</text>
          <motion.rect x="50" y={70 + i * 32} height="12" rx="3" fill={color} initial={{ width: 0 }} whileInView={{ width: bar.w }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}/>
          <motion.text x={55 + bar.w} y={80 + i * 32} fontSize="8" fontWeight="700" fill={color} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.15 }}>{bar.pct}%</motion.text>
        </motion.g>
      ))}
    </svg>
  )

  if (type === 'inventory') return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <rect x="30" y="20" width="240" height="160" rx="12" fill="white" stroke="#eee" strokeWidth="1.5"/>
      </motion.g>

      {[
        { label: 'Vitamin C Serum — 12 units left', risk: 'LOW', riskColor: '#EF4444', action: 'Reorder' },
        { label: 'Protein Whey 1kg — 340 units', risk: 'OK', riskColor: '#22C55E', action: 'OK' },
        { label: 'Face Wash — 5 units left', risk: 'LOW', riskColor: '#EF4444', action: 'Reorder' },
      ].map((item, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2 }}>
          <rect x="45" y={40 + i * 45} width="210" height="35" rx="8" fill={i === 1 ? '#F0FDF4' : '#FEF2F2'} stroke={i === 1 ? '#22C55E30' : '#EF444430'} strokeWidth="1"/>
          <text x="55" y={55 + i * 45} fontSize="8" fill="#333">{item.label}</text>
          <rect x="55" y={60 + i * 45} width="35" height="10" rx="3" fill={item.riskColor}/>
          <text x="72" y={68 + i * 45} textAnchor="middle" fontSize="6" fontWeight="700" fill="white">{item.risk}</text>
          <motion.rect x="205" y={48 + i * 45} width="40" height="18" rx="5" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.15, type: 'spring' }}/>
          <motion.text x="225" y={60 + i * 45} textAnchor="middle" fontSize="7" fontWeight="700" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.15 }}>{item.action}</motion.text>
        </motion.g>
      ))}
    </svg>
  )

  if (type === 'shipping') return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <rect x="30" y="20" width="240" height="160" rx="12" fill="white" stroke="#eee" strokeWidth="1.5"/>
      </motion.g>

      {[
        { label: 'Order #5012 — New customer, Tier 3 COD', risk: 'HIGH', riskColor: '#EF4444', action: 'Verify' },
        { label: 'Order #5013 — Repeat buyer, prepaid', risk: 'LOW', riskColor: '#22C55E', action: 'Ship' },
        { label: 'Order #5014 — Flagged pincode, COD ₹4.8K', risk: 'HIGH', riskColor: '#EF4444', action: 'Verify' },
      ].map((item, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2 }}>
          <rect x="45" y={40 + i * 45} width="210" height="35" rx="8" fill={i === 1 ? '#F0FDF4' : '#FEF2F2'} stroke={i === 1 ? '#22C55E30' : '#EF444430'} strokeWidth="1"/>
          <text x="55" y={55 + i * 45} fontSize="7.5" fill="#333">{item.label}</text>
          <rect x="55" y={60 + i * 45} width="30" height="10" rx="3" fill={item.riskColor}/>
          <text x="70" y={68 + i * 45} textAnchor="middle" fontSize="6" fontWeight="700" fill="white">{item.risk}</text>
          <motion.rect x="210" y={48 + i * 45} width="35" height="18" rx="5" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.15, type: 'spring' }}/>
          <motion.text x="227" y={60 + i * 45} textAnchor="middle" fontSize="7" fontWeight="700" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.15 }}>{item.action}</motion.text>
        </motion.g>
      ))}
    </svg>
  )

  if (type === 'finance') return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      <motion.rect x="30" y="15" width="240" height="170" rx="12" fill="white" stroke="#eee" strokeWidth="1.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}/>

      {[0,1,2,3].map(i => (
        <motion.g key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15 }}>
          <rect x="45" y={35 + i * 38} width="210" height="30" rx="6" fill={i < 3 ? `${color}08` : '#f9f9f9'} stroke={i < 3 ? `${color}30` : '#eee'} strokeWidth="1"/>
          <text x="55" y={53 + i * 38} fontSize="8" fill="#666">{['₹45,200 stuck — Razorpay', 'COD mismatch — Order #5821', 'Prepaid refund pending ₹12K', 'Multi-channel variance ₹8.4K'][i]}</text>
          <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.2, type: 'spring' }}>
            {i < 3 ? (
              <>
                <rect x="212" y={38 + i * 38} width="35" height="16" rx="4" fill={color}/>
                <text x="229" y={50 + i * 38} textAnchor="middle" fontSize="6" fontWeight="700" fill="white">RESOLVE</text>
              </>
            ) : (
              <>
                <rect x="212" y={38 + i * 38} width="35" height="16" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="0.5"/>
                <text x="229" y={50 + i * 38} textAnchor="middle" fontSize="6" fontWeight="600" fill="#999">FLAG</text>
              </>
            )}
          </motion.g>
        </motion.g>
      ))}

      <motion.text x="150" y="178" textAnchor="middle" fontSize="9" fontWeight="600" fill={color} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>₹2.3L auto-reconciled this week</motion.text>
    </svg>
  )

  if (type === 'retention') return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      <motion.rect x="30" y="15" width="240" height="170" rx="12" fill="white" stroke="#eee" strokeWidth="1.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}/>

      <motion.line x1="50" y1="100" x2="260" y2="100" stroke="#eee" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}/>

      {[
        { x: 70, label: 'Bought', sub: 'Day 1', filled: true },
        { x: 150, label: 'Nudge', sub: 'Day 25', filled: false, special: true },
        { x: 230, label: 'Rebought', sub: 'Day 26', filled: true },
      ].map((dot, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.3, type: 'spring' }}>
          <circle cx={dot.x} cy="100" r={dot.special ? 10 : 8} fill={dot.filled ? color : 'white'} stroke={color} strokeWidth="2"/>
          {dot.special && <motion.circle cx={dot.x} cy="100" r="14" stroke={color} strokeWidth="1" fill="none" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }}/>}
          <text x={dot.x} y="80" textAnchor="middle" fontSize="9" fontWeight="600" fill="#333">{dot.label}</text>
          <text x={dot.x} y="125" textAnchor="middle" fontSize="8" fill="#999">{dot.sub}</text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>
        <rect x="100" y="140" width="100" height="28" rx="8" fill="#E5FFE0" stroke="#25D36620" strokeWidth="1"/>
        <text x="150" y="155" textAnchor="middle" fontSize="7" fill="#333">"Your product is running low"</text>
        <text x="150" y="164" textAnchor="middle" fontSize="6" fill={color} fontWeight="600">Tap to reorder</text>
      </motion.g>
    </svg>
  )

  return null
}

function JourneyCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isWide = step.layout === 'wide'
  const isRight = step.layout === 'right'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6"
    >
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
        className="rounded-2xl border border-black/[0.04] overflow-hidden transition-shadow"
        style={{ background: step.bg }}
      >
        {isWide ? (
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: step.color }}>{step.num}</span>
                <span className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: step.color }}>{step.agent}</span>
              </div>
              <h3 className="font-serif text-[26px] mb-4 text-[#0C0C0C] leading-tight">{step.title}</h3>
              <p className="text-[15px] text-[#555] leading-relaxed">{step.action}</p>
              <div className="mt-6 flex items-baseline gap-3">
                <motion.span className="font-serif text-5xl" style={{ color: step.color }}
                  initial={{ opacity: 0, scale: 0.5 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, type: 'spring' }}>{step.metric}</motion.span>
                <span className="text-sm text-[#999]">{step.metricLabel}</span>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center border-l border-black/[0.04]" style={{ background: `${step.color}05` }}>
              <AgentVisual type={step.visual} color={step.color} />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2">
            <div className={`p-10 ${isRight ? 'md:order-2' : ''}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: step.color }}>{step.num}</span>
                <span className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: step.color }}>{step.agent}</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[#0C0C0C] leading-tight">{step.title}</h3>
              <p className="text-[15px] text-[#555] leading-relaxed">{step.action}</p>
              <div className="mt-6 flex items-baseline gap-3">
                <motion.span className="font-serif text-4xl" style={{ color: step.color }}
                  initial={{ opacity: 0, scale: 0.5 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, type: 'spring' }}>{step.metric}</motion.span>
                <span className="text-sm text-[#999]">{step.metricLabel}</span>
              </div>
            </div>
            <div className={`p-6 flex items-center justify-center ${isRight ? 'md:order-1 md:border-r' : 'md:border-l'} border-black/[0.04]`} style={{ background: `${step.color}05` }}>
              <AgentVisual type={step.visual} color={step.color} />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function JourneyFlow() {
  return (
    <section className="py-32" id="agents">
      <div className="max-w-[960px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-brand mb-4">MEET YOUR AI TEAM</p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C0C0C] mb-4">
            Specialized AI agents working<br />around the clock.
          </h2>
          <p className="text-base text-[#555] max-w-[480px] mx-auto leading-relaxed">
            All communicating. All collaborating. Powered by natural language — interact with your agents like you would with a colleague.
          </p>
        </motion.div>

        <div>
          {steps.map((step, i) => (
            <JourneyCard key={i} step={step} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
              className="rounded-2xl bg-[#0C0C0C] text-white p-10 transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0.3)', '0 0 0 10px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0.3)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0C0C0C" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </motion.div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/50">Full Ops Suite</span>
              </div>
              <p className="font-serif text-2xl mb-2">Revenue tracked. Marketing optimized. Inventory managed. Shipping secured. Payments reconciled. Customers retained.</p>
              <p className="text-sm text-white/40 max-w-[600px]">Six agents. One operating system. Zero tabs.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
