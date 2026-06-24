import React from 'react'

/* ── Data ── */

const timeline = [
  { label: 'Backend', desc: '服务稳定性、数据建模、业务流程与系统边界。' },
  { label: 'AI Engineering', desc: 'LLM 应用、RAG、Agent、提示词与工具调用。' },
  { label: 'Intelligent Systems', desc: '把 AI 能力整合到可维护、可观测的生产系统。' },
]

const quotes = [
  'AI 不是替代工程，而是放大工程。',
  '系统的边界，决定智能的边界。',
  '后端思维，让 AI 应用从 demo 走向 production。',
]

const techStack = [
  'Java', 'Spring Boot', 'Python', 'TypeScript', 'Go',
  'PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'Elasticsearch',
  'Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform',
  'OpenAI', 'Claude', 'LangChain', 'LlamaIndex', 'Vector DB',
  'RAG', 'Prompt Engineering', 'Agent', 'FastAPI', 'Next.js',
]

const stats = [
  { value: '4+',  label: '工程领域',  sub: 'Backend · AI · Cloud · Product' },
  { value: '50+', label: '交付项目',  sub: 'API · System · AI Apps' },
  { value: '∞',  label: '好奇心',    sub: 'Always learning' },
  { value: 'AI', label: '当前方向',  sub: 'LLM · RAG · Agent' },
]

const experience = [
  {
    role: 'Senior Backend Engineer',
    company: '某互联网公司',
    period: '2022 — Now',
    location: 'Shanghai',
    points: [
      '负责核心交易链路的可用性与一致性，沉淀高并发场景的工程范式',
      '推动团队把后端能力产品化，把内部服务改造成可对外复用的智能工作流',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MySQL'],
  },
  {
    role: 'Backend Engineer',
    company: '某 SaaS 创业公司',
    period: '2020 — 2022',
    location: 'Hangzhou',
    points: [
      '从 0 到 1 搭建多租户后台系统，覆盖权限、计费、可观测性',
      '把 AI 能力引入工单系统，自动归类与摘要，节省 60% 人工分流',
    ],
    stack: ['Go', 'PostgreSQL', 'gRPC', 'Docker', 'OpenAI'],
  },
  {
    role: 'Software Engineer',
    company: '某金融科技公司',
    period: '2018 — 2020',
    location: 'Beijing',
    points: [
      '负责账户与支付核心系统，参与日千万级交易链路的稳定性治理',
      '把混沌工程与全链路压测引入团队，建立 release-ready 的发布标准',
    ],
    stack: ['Java', 'Spring Cloud', 'Oracle', 'RocketMQ'],
  },
]

const capabilities = [
  {
    title: 'Backend Reliability',
    eyebrow: 'Reliability',
    description: '把可用性、一致性、可观测性、可扩展性视为基础设施，而不是事后补救。',
    tags: ['Java', 'Spring Boot', 'Distributed Systems', 'Observability'],
    icon: 'shield',
    featured: true,
  },
  {
    title: 'AI Application',
    eyebrow: 'Intelligence',
    description: '围绕 LLM 设计 RAG、Agent、工具调用与多模型路由，构建可用、可控的智能体。',
    tags: ['LLM', 'RAG', 'Agent', 'Prompt', 'Tool Calling'],
    icon: 'spark',
  },
  {
    title: 'System Delivery',
    eyebrow: 'Production',
    description: '把代码变成可灰度、可回滚、可观测的服务，建立 AI 时代的工程交付标准。',
    tags: ['Docker', 'CI/CD', 'Kubernetes', 'Terraform'],
    icon: 'rocket',
  },
  {
    title: 'Product Thinking',
    eyebrow: 'Experience',
    description: '把 AI 能力嵌入到真实业务流程，而不是把它当作一个炫酷的 demo。',
    tags: ['Workflow', 'UX', 'Internal Tools'],
    icon: 'compass',
  },
  {
    title: 'Data Engineering',
    eyebrow: 'Data',
    description: '在数据建模、向量索引、Embedding 流水线之间找到工程化的最优路径。',
    tags: ['PostgreSQL', 'Vector DB', 'ETL', 'Embedding'],
    icon: 'database',
  },
  {
    title: 'Team Enablement',
    eyebrow: 'Collaboration',
    description: '通过文档、demo、code review，把团队整体拉到 AI-native 的工作方式。',
    tags: ['Mentoring', 'Docs', 'Code Review'],
    icon: 'team',
  },
]

const showcases = [
  {
    title: 'AI Agent Workflow Platform',
    description: '面向业务流程自动化的智能体平台。把模型、工具、审批、回调编排成可灰度的生产工作流。',
    bullets: [
      '可视化编排：把业务流程画出来，自动生成 Agent DAG',
      '工具市场：内置 30+ 常用工具，支持私有工具注册',
      '可观测：每一步 token、耗时、错误率全链路追踪',
    ],
    tags: ['Agent', 'LangGraph', 'Workflow', 'Observability'],
    status: 'building',
    link: '#',
    repo: '#',
  },
  {
    title: 'RAG Knowledge Base',
    description: '面向团队私有知识的检索增强生成系统，让知识沉淀可以被准确、可信地调用。',
    bullets: [
      '多源接入：Notion / Confluence / GitHub / Slack',
      '混合检索：BM25 + 向量召回 + 重排，准确率 +28%',
      '权限隔离：按团队、空间、文档级别精细授权',
    ],
    tags: ['RAG', 'Embedding', 'Vector DB', 'Hybrid Search'],
    status: 'planning',
    link: '#',
    repo: '#',
  },
  {
    title: 'Backend Platform · Nexa',
    description: '稳定可靠的后端服务底座，强调一致性、可观测性与权限隔离。',
    bullets: [
      '多租户架构 + 软隔离，单集群支撑 200+ 业务方',
      '全链路 OpenTelemetry + 业务埋点，问题定位 10x 提速',
      '内置灰度、限流、降级开关，发布事故率下降 70%',
    ],
    tags: ['Java', 'Spring Boot', 'OpenTelemetry', 'Multi-tenant'],
    status: 'done',
    link: '#',
    repo: '#',
  },
]

const nowItems = [
  {
    label: 'Building',
    title: 'AI-native Backend',
    desc: '把后端工程能力抽象成可编排的工作流，让 LLM 主动调用工具、数据与服务。',
  },
  {
    label: 'Learning',
    title: 'Agent Memory & Eval',
    desc: '深入研究 Agent 的长期记忆机制与可评测的执行轨迹，把 demo 推向 production。',
  },
  {
    label: 'Writing',
    title: '《后端工程师的 AI 转型手记》',
    desc: '把过去一年的实践整理成系列文章：从 RAG 起步，到 Agent 设计，再到系统稳定性。',
  },
  {
    label: 'Open Source',
    title: 'ai-toolkit',
    desc: '面向后端工程师的 AI 工具集合：Prompt 模板、Agent 脚手架、可观测集成。',
  },
]

const articles = [
  {
    eyebrow: 'RAG',
    title: '为什么你的 RAG 检索不准？从 Embedding 到 Re-rank 的 6 个工程动作',
    excerpt: '从分块策略、Embedding 模型、混合检索到重排序，把检索质量从 60% 提到 90% 的真实工程经验。',
    readTime: '12 min',
    date: '2026-04',
  },
  {
    eyebrow: 'Agent',
    title: 'Agent 不只是 Prompt：从工作流设计到生产可观测',
    excerpt: '把 Agent 当作一个分布式系统来设计：状态、工具、重试、降级、追踪，每一环都不能省。',
    readTime: '16 min',
    date: '2026-03',
  },
  {
    eyebrow: 'Backend',
    title: '后端工程师转型 AI：需要补齐的 5 个非技术能力',
    excerpt: '从系统设计到产品思维，从跨团队协作到用户访谈 — 这些能力决定 AI 应用的真实价值。',
    readTime: '9 min',
    date: '2026-02',
  },
]

const services = [
  {
    icon: 'compass',
    eyebrow: 'Engagement',
    title: 'AI 系统咨询',
    desc: '帮团队把 AI 能力嵌入真实业务：从场景拆解、PoC 验证，到生产架构、稳定性治理。',
    bullets: ['业务场景拆解', 'PoC → Production', '架构评审 & 风险评估'],
    tag: 'Consulting',
  },
  {
    icon: 'spark',
    eyebrow: 'Build',
    title: '智能体 & RAG 落地',
    desc: '搭建可灰度、可观测的 RAG / Agent 工作流，强调数据治理、工具注册、回调编排。',
    bullets: ['Agent Workflow', 'RAG & 检索增强', '工具与回调编排'],
    tag: 'Project',
  },
  {
    icon: 'rocket',
    eyebrow: 'Hire',
    title: '工程团队协作',
    desc: '与后端 / AI 团队结对，建立 release-ready 的发布标准、灰度流程与可观测体系。',
    bullets: ['Backend Reliability', '可观测与发布治理', 'Code Review & 培训'],
    tag: 'Team',
  },
  {
    icon: 'shield',
    eyebrow: 'Speak',
    title: '技术分享 / 写作',
    desc: '把 AI 工程化的实践整理成可复用的笔记、workshop 与内部分享。',
    bullets: ['内部分享 & Workshop', '技术写作 & 评审', '开源协作'],
    tag: 'Community',
  },
]

const highlights = [
  { year: '2026', label: '主持团队 AI Native 转型工作坊', detail: '把后端工程团队整体拉到 AI-native 的工作方式。' },
  { year: '2025', label: '开源 ai-toolkit（GitHub 1.2k+ star）', detail: '面向后端工程师的 AI 工具集合：Prompt 模板、Agent 脚手架。' },
  { year: '2025', label: 'QCon 大会讲师：AI 应用的 release-ready 标准', detail: '分享 LLM 应用从 demo 到 production 的工程化路径。' },
  { year: '2024', label: '主导工单系统 AI 升级，节省 60% 人工分流', detail: '在 SaaS 创业公司从 0 到 1 推动 AI 落地。' },
  { year: '2023', label: '公司级最佳工程贡献奖', detail: '沉淀交易链路的高并发范式与发布治理标准。' },
  { year: '2022', label: '技术博客《后端工程师的 AI 转型手记》开篇', detail: '记录从后端到 AI 工程师的真实路径与思考。' },
]

const interests = [
  { label: 'System Design', desc: '把复杂系统拆成可演化的小模块' },
  { label: 'AI for Work', desc: '让 AI 真正帮人完成工作，不只是 demo' },
  { label: 'Open Source', desc: '持续维护 ai-toolkit 与若干小工具' },
  { label: 'Writing', desc: '把工程经验沉淀成可复用的笔记' },
  { label: 'Photography', desc: '用镜头记录城市与光影' },
  { label: 'Coffee', desc: '每天一杯手冲，是写代码的仪式感' },
  { label: 'Cycling', desc: '周末骑行，保持身体与思维在线' },
  { label: 'Reading', desc: '设计、工程、认知科学，三类书交替看' },
]

/* ── Dynamic Background ── */

function DynamicBackground() {
  return (
    <div className="dynamic-bg" aria-hidden="true">
      <div className="bg-aurora bg-aurora-1" />
      <div className="bg-aurora bg-aurora-2" />
      <div className="bg-aurora bg-aurora-3" />
      <div className="bg-aurora bg-aurora-4" />
      <div className="bg-caustics" />
      <div className="bg-beams">
        <div className="bg-beam" /><div className="bg-beam" />
        <div className="bg-beam" /><div className="bg-beam" />
        <div className="bg-beam" />
      </div>
      <div className="bg-grid" />
      <div className="bg-nodes">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>
      <div className="bg-grain" />
    </div>
  )
}

/* ── Glass Orbs ── */

function GlassOrbs() {
  return (
    <div aria-hidden="true">
      <div className="glass-orb gorb-1" />
      <div className="glass-orb gorb-2" />
      <div className="glass-orb gorb-3" />
      <div className="glass-orb gorb-4" />
    </div>
  )
}

/* ── Divider ── */

function Divider() {
  return <div className="glass-divider" aria-hidden="true" />
}

/* ── Global effects (mouse parallax + scroll reveal) ── */

function useGlobalEffects() {
  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const els = document.querySelectorAll('.card-hover')
      els.forEach(el => {
        const r = (el as HTMLElement).getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width) * 100
        const y = ((e.clientY - r.top) / r.height) * 100
        ;(el as HTMLElement).style.setProperty('--mx', x + '%')
        ;(el as HTMLElement).style.setProperty('--my', y + '%')
      })

      // Magnetic effect on .magnetic elements
      const mags = document.querySelectorAll<HTMLElement>('.magnetic')
      mags.forEach(m => {
        const r = m.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy)
        const max = 90
        if (dist < max) {
          const strength = (1 - dist / max) * 0.18
          m.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
        } else {
          m.style.transform = ''
        }
      })
    }
    window.addEventListener('mousemove', onMove)

    // Scroll-reveal observer — runs once and observes dynamically too
    const setupReveals = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-scale, .reveal-mask')
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io.unobserve(en.target)
            }
          })
        },
        { rootMargin: '-8% 0px -8% 0px', threshold: 0.05 }
      )
      reveals.forEach(r => io.observe(r))
      return io
    }
    let io = setupReveals()

    // Re-scan for reveals added later (e.g. new content injected via state)
    const mo = new MutationObserver(() => {
      io.disconnect()
      io = setupReveals()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}

/* ── Loading Screen ── */

function LoadingScreen({ done }: { done: () => void }) {
  const [phase, setPhase] = React.useState(0)

  React.useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 1900),
      setTimeout(() => setPhase(3), 2700),
      setTimeout(() => done(), 3200),
    ]
    return () => t.forEach(clearTimeout)
  }, [done])

  const cn = 'loading-screen' + (phase >= 3 ? ' loading-out' : '')

  return (
    <div className={cn} aria-hidden="true">
      <div className="load-pulse" />
      <div className="load-rings">
        <div className="load-ring lr-1" />
        <div className="load-ring lr-2" />
        <div className="load-ring lr-3" />
      </div>
      <div className="load-core">
        <span className={'load-logo' + (phase >= 1 ? ' load-logo-big' : '')}>AI</span>
        <div className="load-glare" />
      </div>
      <div className="load-term">
        <span className="load-prompt">&gt;&nbsp;</span>
        <span className={'load-text' + (phase >= 1 ? ' load-text-on' : '')}>
          initializing intelligent_system
          <span className="load-cur">_</span>
        </span>
      </div>
      <div className="load-dots">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className={'load-dot' + (phase >= 1 ? ' load-dot-on' : '')}
            style={{ animationDelay: i * 0.18 + 's' }}
          />
        ))}
      </div>
    </div>
  )
}

/* ── Theme Toggle ── */

function useTheme() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = window.localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])
  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

/* ── Navbar ── */

function Navbar() {
  const links = ['About', 'Work', 'Services', 'Skills', 'Projects', 'Highlights', 'Now', 'Writing', 'Life', 'Contact']
  const ids = ['story', 'experience', 'services', 'capabilities', 'projects', 'highlights', 'now', 'articles', 'interests', 'contact']
  const [active, setActive] = React.useState(-1)
  const navRef = React.useRef<HTMLElement>(null)
  const refs = React.useRef<(HTMLAnchorElement | null)[]>([])

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = ids.indexOf(e.target.id)
            if (i >= 0) setActive(i)
          }
        }
      },
      { rootMargin: '-44% 0px -52% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const pill: React.CSSProperties =
    active >= 0 && refs.current[active]
      ? { left: refs.current[active]!.offsetLeft, width: refs.current[active]!.offsetWidth }
      : { display: 'none' as const }

  return (
    <header className="nav">
      <a className="nav-brand" href="#top" aria-label="Home">
        <span className="nav-logo">AI</span>
        <span>Backend → AI</span>
      </a>
      <nav ref={navRef} className="nav-links" aria-label="Primary">
        <div className="nav-pill" style={pill} />
        {links.map((l, i) => (
          <a
            key={l}
            href={'#' + ids[i]}
            className={active === i ? 'nav-active' : ''}
            ref={el => { refs.current[i] = el }}
          >
            {l}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  )
}

/* ── Profile Card ── */

function ProfileCard() {
  return (
    <aside className="profile glass">
      <div className="card-orbit" />
      <div className="profile-top">
        <span className="signal-dot" />
        Available for AI-native systems
      </div>
      <div className="avatar-core">
        <span>BE</span>
        <div className="avatar-ring" />
      </div>
      <h2>Backend Engineer</h2>
      <p>evolving into an AI Engineer</p>
      <div className="metric-grid">
        <div><strong>4+</strong><span>Core domains</span></div>
        <div><strong>AI</strong><span>Native workflow</span></div>
      </div>
      <div className="terminal">
        <span>$ build intelligent_system</span>
        <span className="cursor" />
      </div>
    </aside>
  )
}

/* ── Section Heading ── */


/* ── Marquee — infinite tech strip ── */
function Marquee() {
  const items = [...techStack, ...techStack]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Stats Counter ── */
function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <div className="stat-cell reveal-scale" key={s.label} style={{ ['--reveal-delay' as any]: (i * 90) + 'ms' }}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
          <div className="stat-sub">{s.sub}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Experience Timeline ── */
function ExperienceTimeline() {
  return (
    <div className="exp-list">
      {experience.map((e, i) => (
        <article className="exp-item glass card-hover reveal-scale" key={e.role + e.company} style={{ ['--reveal-delay' as any]: (i * 100) + 'ms' }}>
          <div className="exp-rail">
            <span className="exp-dot" />
            {i < experience.length - 1 && <span className="exp-line" />}
          </div>
          <div className="exp-body">
            <header className="exp-head">
              <div>
                <h3>{e.role}</h3>
                <div className="exp-company">
                  <span>{e.company}</span>
                  <span className="exp-dot-sep">·</span>
                  <span>{e.location}</span>
                </div>
              </div>
              <span className="exp-period">{e.period}</span>
            </header>
            <ul className="exp-points">
              {e.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
            <div className="mini-tags">
              {e.stack.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

/* ── Capabilities Bento ── */
const iconMap: Record<string, React.ReactNode> = {
  shield:  <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />,
  spark:   <path d="M12 2v6m0 8v6m-10-10h6m4 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4" />,
  rocket:  <path d="M5 19c2-1 4-3 6-5m-2 7 5-5c3-3 5-7 5-12-5 0-9 2-12 5l-5 5m7-2 3 3m-3-3-2 5 5-2 3 3" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m9 15 2-6 6-2-2 6-6 2Z" /></>,
  database:<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" /></>,
  team:    <><circle cx="9" cy="8" r="3.5" /><path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" /><circle cx="17" cy="6" r="2.5" /><path d="M22 18c0-2.5-2-4.5-5-4.5" /></>,
}

function CapabilitiesBento() {
  return (
    <div className="bento-grid">
      {capabilities.map((c, i) => (
        <article
          className={'glass card-hover cap-card' + (c.featured ? ' cap-card--featured' : '')}
          key={c.title}
          style={{ ['--reveal-delay' as any]: (i * 80) + 'ms' }}
        >
          {c.icon && (
            <div className="cap-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {iconMap[c.icon]}
              </svg>
            </div>
          )}
          <span className="eyebrow">{c.eyebrow}</span>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <div className="mini-tags">
            {c.tags.map(t => <span key={t}>{t}</span>)}
          </div>
        </article>
      ))}
    </div>
  )
}

/* ── Project Showcase ── */
function ProjectShowcase() {
  return (
    <div className="showcase-grid">
      {showcases.map((p, i) => (
        <article className="glass card-hover showcase reveal-scale" key={p.title} style={{ ['--reveal-delay' as any]: (i * 120) + 'ms' }}>
          <div className="showcase-head">
            <div className={'project-status status-' + p.status}>
              {p.status === 'building' ? 'Building' : p.status === 'planning' ? 'Planning' : 'Live'}
            </div>
            <h3>{p.title}</h3>
            <p className="showcase-desc">{p.description}</p>
          </div>
          <ul className="showcase-bullets">
            {p.bullets.map((b, j) => (
              <li key={j}>
                <span className="bullet-dot" />
                {b}
              </li>
            ))}
          </ul>
          <footer className="showcase-foot">
            <div className="mini-tags">
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="showcase-actions">
              <a className="link-arrow" href={p.link}>View →</a>
              <a className="link-arrow" href={p.repo}>Source ↗</a>
            </div>
          </footer>
        </article>
      ))}
    </div>
  )
}

/* ── Now Section ── */
function NowSection() {
  return (
    <div className="now-grid">
      {nowItems.map((it, i) => (
        <article className="glass card-hover now-card reveal-scale" key={it.title} style={{ ['--reveal-delay' as any]: (i * 80) + 'ms' }}>
          <span className="now-tag">{it.label}</span>
          <h3>{it.title}</h3>
          <p>{it.desc}</p>
        </article>
      ))}
    </div>
  )
}

/* ── Articles Section ── */
function ArticlesSection() {
  return (
    <div className="article-grid">
      {articles.map((a, i) => (
        <article className="glass card-hover article-card reveal-scale" key={a.title} style={{ ['--reveal-delay' as any]: (i * 100) + 'ms' }}>
          <div className="article-head">
            <span className="eyebrow">{a.eyebrow}</span>
            <span className="article-meta">{a.date} · {a.readTime}</span>
          </div>
          <h3>{a.title}</h3>
          <p>{a.excerpt}</p>
          <a className="link-arrow" href="#">Read article →</a>
        </article>
      ))}
    </div>
  )
}

/* ── Services Section ── */
function ServicesSection() {
  return (
    <div className="service-grid">
      {services.map((s, i) => (
        <article className="glass card-hover service-card reveal-scale" key={s.title} style={{ ['--reveal-delay' as any]: (i * 90) + 'ms' }}>
          <div className="service-top">
            <div className="cap-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {iconMap[s.icon] || iconMap.spark}
              </svg>
            </div>
            <span className="service-tag">{s.tag}</span>
          </div>
          <span className="eyebrow">{s.eyebrow}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <ul className="service-bullets">
            {s.bullets.map((b, j) => (
              <li key={j}>
                <span className="bullet-dot" />
                {b}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

/* ── Highlights Section ── */
function HighlightsSection() {
  return (
    <div className="highlight-list">
      {highlights.map((h, i) => (
        <article className="glass card-hover highlight-item reveal-scale" key={h.label + h.year} style={{ ['--reveal-delay' as any]: (i * 70) + 'ms' }}>
          <span className="highlight-year">{h.year}</span>
          <div className="highlight-body">
            <h3>{h.label}</h3>
            <p>{h.detail}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

/* ── Interests Section ── */
function InterestsSection() {
  return (
    <div className="interest-cloud">
      {interests.map((it, i) => (
        <article className="glass card-hover interest-chip reveal-scale" key={it.label} style={{ ['--reveal-delay' as any]: (i * 60) + 'ms' }}>
          <h4>{it.label}</h4>
          <p>{it.desc}</p>
        </article>
      ))}
    </div>
  )
}

function SecHeading({ e, t, c }: { e: string; t: string; c?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{e}</span>
      <h2>{t}</h2>
      {c && <p>{c}</p>}
    </div>
  )
}

/* ── Page ── */

function Page() {
  return (
    <>
      <DynamicBackground />
      <GlassOrbs />
      <Navbar />
      <main id="top">

        {/* Hero */}
        <section className="hero section-in">
          <div className="hero-text">
            <div className="pill">
              <span /> Backend Foundation × AI Builder
            </div>
            <h1>
              从后端工程到 <em>AI Engineering</em>
            </h1>
            <p className="hero-desc">
              构建可落地、可维护、可扩展的智能化系统。以可靠后端为底座，把 LLM、RAG、Agent
              与业务流程连接起来。
            </p>
            <div className="hero-btns">
              <a className="btn-primary magnetic" href="#projects">查看我的项目</a>
              <a className="btn-secondary" href="#capabilities">了解能力矩阵</a>
            </div>
            <div className="tags">
              {['Backend', 'AI Engineering', 'LLM Apps', 'RAG', 'Agent Workflow'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb" />
            <ProfileCard />
          </div>
          <div className="hero-scroll" aria-hidden="true">scroll</div>
        </section>

        {/* Marquee */}
        <Marquee />

        {/* Stats */}
        <section className="stats-section">
          <StatsStrip />
        </section>

        <Divider />

        {/* Story */}
        <section id="story" className="story-section section-in reveal">
          <SecHeading e="Transition Story" t="从可靠系统，到智能系统" c="我过去关注接口、数据、权限、稳定性和业务流程；现在，我正在把这些后端工程经验迁移到 AI 应用开发中。" />
          <div className="timeline">
            {timeline.map((it, i) => (
              <article className="glass card-hover timeline-node reveal-scale" key={it.label} style={{ ['--reveal-delay' as any]: (i * 90) + 'ms' }}>
                <span className="node-index">0{i + 1}</span>
                <h3>{it.label}</h3>
                <p>{it.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="experience-section section-in reveal">
          <SecHeading e="Experience" t="一段持续向前的工程路径" c="从金融科技到 SaaS 再到 AI 工程化，每一次转变都是把后端能力扩展到新的领域。" />
          <ExperienceTimeline />
        </section>

        <Divider />

        {/* Services / Engagement */}
        <section id="services" className="services-section section-in reveal">
          <SecHeading e="Engagement" t="可以一起做的事" c="如果你正在做与 AI 相关的项目、团队转型，或者想深入 Agent / RAG 工程化，欢迎聊一聊。" />
          <ServicesSection />
        </section>

        <Divider />

        {/* Capabilities (Bento) */}
        <section id="capabilities" className="capabilities-section section-in reveal">
          <SecHeading e="Capability Matrix" t="工程底盘 × 智能能力" c="不是只会调用模型，而是能把 AI 能力接入真实业务系统、工作流和生产环境。" />
          <CapabilitiesBento />
        </section>

        <Divider />

        {/* Project Showcase */}
        <section id="projects" className="projects-section section-in reveal">
          <SecHeading e="Selected Builds" t="面向 AI 时代的工程作品" c="先展示方向与能力结构，后续可逐步替换为真实项目详情、架构图和在线演示。" />
          <ProjectShowcase />
        </section>

        <Divider />

        {/* Highlights / Recognition */}
        <section id="highlights" className="highlights-section section-in reveal">
          <SecHeading e="Highlights" t="路上的高光时刻" c="把过去几年值得记录的事写在这里 — 包括开源、分享、奖项与重要里程碑。" />
          <HighlightsSection />
        </section>

        <Divider />

        {/* Now / Currently building */}
        <section id="now" className="now-section section-in reveal">
          <SecHeading e="Now" t="此刻在做的事" c="把 AI 能力做成长期可持续的工程能力，而不是短暂的 demo。" />
          <NowSection />
        </section>

        <Divider />

        {/* Articles */}
        <section id="articles" className="articles-section section-in reveal">
          <SecHeading e="Writing" t="把实践写下来" c="把工程经验沉淀成可复用的笔记 — 包括 RAG 调优、Agent 设计和后端稳定性。" />
          <ArticlesSection />
        </section>

        <Divider />

        {/* Interests / Beyond Code */}
        <section id="interests" className="interests-section section-in reveal">
          <SecHeading e="Beyond Code" t="代码之外的我" c="工程师只是一面，镜头、骑行、阅读、写作 — 这些是我保持好奇与平衡的方式。" />
          <InterestsSection />
        </section>

        <Divider />

        {/* Philosophy / Quotes */}
        <section className="philo-section section-in reveal">
          <div className="quote-card">
            {quotes.map((q, i) => (
              <p className="reveal" key={i} style={{ ['--reveal-delay' as any]: (i * 120) + 'ms' }}>{q}</p>
            ))}
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="glass contact-section section-in reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something intelligent.</h2>
          <p>如果你正在寻找一个懂后端、也在深入 AI 工程化的开发者，欢迎联系我。</p>
          <div className="contact-actions">
            <a className="btn-secondary magnetic" href="mailto:hello@example.com">Email</a>
            <a className="btn-secondary magnetic" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-secondary magnetic" href="#top">Back to top</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-logo">AI</span>
            <div>
              <strong>Backend × AI Engineer</strong>
              <p>构建可落地、可维护、可扩展的智能化系统。</p>
            </div>
          </div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span>Built with care · Vite · React · TypeScript</span>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ── App ── */

export default function App() {
  const [loading, setLoading] = React.useState(true)
  useGlobalEffects()
  return (
    <>
      {loading && <LoadingScreen done={() => setLoading(false)} />}
      <div className={'page' + (loading ? ' page-off' : ' page-on')}>
        <Page />
      </div>
    </>
  )
}
