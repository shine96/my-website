const skillGroups = [
  {
    title: 'Backend Foundation',
    eyebrow: '01 / Reliability',
    description: '把接口、权限、数据、性能与可维护性作为 AI 应用落地的工程底座。',
    tags: ['Java', 'Spring Boot', 'API Design', 'MySQL', 'Redis'],
  },
  {
    title: 'AI Application',
    eyebrow: '02 / Intelligence',
    description: '围绕大模型构建 RAG、Agent、工具调用与自动化工作流。',
    tags: ['LLM', 'RAG', 'Agent', 'Prompt', 'Tool Calling'],
  },
  {
    title: 'System Delivery',
    eyebrow: '03 / Production',
    description: '关注部署、观测、安全、成本与稳定性，让智能能力进入真实系统。',
    tags: ['Docker', 'CI/CD', 'Observability', 'Security', 'Cloud'],
  },
  {
    title: 'Product Thinking',
    eyebrow: '04 / Experience',
    description: '不只调用模型，更重构业务流程，设计可被用户真正使用的智能体验。',
    tags: ['Workflow', 'UX Logic', 'Automation', 'Internal Tools'],
  },
]

const projects = [
  {
    title: 'AI Agent Workflow',
    description: '面向业务流程自动化的智能 Agent 工具流，连接模型、工具和后端服务。',
    tags: ['Agent', 'Automation', 'Tool Calling'],
    status: 'Planning',
  },
  {
    title: 'RAG Knowledge Base',
    description: '基于私有知识的检索增强生成系统，让知识沉淀可以被安全、准确地调用。',
    tags: ['RAG', 'Embedding', 'Vector DB'],
    status: 'Building',
  },
  {
    title: 'Backend Management System',
    description: '稳定可靠的业务管理平台与后端服务，强调数据一致性、权限与可扩展性。',
    tags: ['Spring Boot', 'MySQL', 'Redis'],
    status: 'Done',
  },
]

const timeline = [
  ['Backend', '服务稳定性、数据建模、业务流程与系统边界。'],
  ['AI Engineering', 'LLM 应用、RAG、Agent、提示词与工具调用。'],
  ['Intelligent Systems', '把 AI 能力整合到可维护、可观测的生产系统。'],
]

function DynamicBackground() {
  return (
    <div className="dynamic-bg" aria-hidden="true">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="perspective-grid" />
      <div className="neural-field">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties} />
        ))}
      </div>
      <div className="grain" />
    </div>
  )
}

function Navbar() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Back to top">
        <span className="brand-mark">AI</span>
        <span>Backend → AI</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#story">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function GlassProfileCard() {
  return (
    <aside className="profile-card glass-panel">
      <div className="card-orbit" />
      <div className="profile-topline">
        <span className="signal-dot" />
        <span>Available for AI-native systems</span>
      </div>
      <div className="avatar-core">
        <span>BE</span>
        <div className="avatar-ring" />
      </div>
      <h2>Backend Engineer</h2>
      <p>evolving into an AI Engineer</p>
      <div className="metric-grid">
        <div>
          <strong>4+</strong>
          <span>Core domains</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>Native workflow</span>
        </div>
      </div>
      <div className="terminal-strip">
        <span>$ build intelligent_system</span>
        <span className="cursor" />
      </div>
    </aside>
  )
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <DynamicBackground />
      <Navbar />
      <main id="top">
        <section className="hero-section section-depth">
          <div className="hero-copy">
            <div className="status-pill">
              <span /> Backend Foundation × AI Builder
            </div>
            <h1>
              从后端工程到 <em>AI Engineering</em>
            </h1>
            <p className="hero-lead">
              构建可落地、可维护、可扩展的智能化系统。以可靠后端为底座，把 LLM、RAG、Agent 与业务流程连接起来。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">查看我的项目</a>
              <a className="secondary-action" href="#skills">了解能力矩阵</a>
            </div>
            <div className="tag-rack" aria-label="Technology tags">
              {['Backend', 'AI Engineering', 'LLM Apps', 'RAG', 'Agent Workflow'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile visual card">
            <div className="liquid-orb" />
            <GlassProfileCard />
          </div>
        </section>

        <section id="story" className="story-section section-depth">
          <SectionHeading eyebrow="Transition Story" title="从可靠系统，到智能系统">
            我过去关注接口、数据、权限、稳定性和业务流程；现在，我正在把这些后端工程经验迁移到 AI 应用开发中。
          </SectionHeading>
          <div className="timeline-3d">
            {timeline.map(([title, description], index) => (
              <article className="timeline-node glass-panel" key={title}>
                <span className="node-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section section-depth">
          <SectionHeading eyebrow="Capability Matrix" title="工程底盘 + 智能能力">
            不是只会调用模型，而是能把 AI 能力接入真实业务系统、工作流和生产环境。
          </SectionHeading>
          <div className="skill-grid">
            {skillGroups.map((skill) => (
              <article className="skill-card glass-panel" key={skill.title}>
                <span className="eyebrow">{skill.eyebrow}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="mini-tags">
                  {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section section-depth">
          <SectionHeading eyebrow="Selected Builds" title="面向 AI 时代的工程作品">
            先展示方向与能力结构，后续可逐步替换为真实项目详情、架构图和在线演示。
          </SectionHeading>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card glass-panel" key={project.title}>
                <div className="project-status">{project.status}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="mini-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="philosophy-section section-depth">
          <p>AI 不只是调用模型，而是重构业务流程。</p>
          <p>后端能力决定 AI 应用能否稳定落地。</p>
          <p>优秀工程师需要同时理解系统、数据和用户。</p>
        </section>

        <section id="contact" className="contact-section glass-panel section-depth">
          <span className="eyebrow">Contact</span>
          <h2>Let’s build something intelligent.</h2>
          <p>如果你正在寻找一个懂后端、也在深入 AI 工程化的开发者，欢迎联系我。</p>
          <div className="contact-actions">
            <a href="mailto:hello@example.com">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#top">Back to top</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
