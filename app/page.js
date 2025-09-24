import './globals.css'

export default function Home() {
  return (
    <div className="poster">
      <div className="background-pattern"></div>
      <div className="robot-icon">🤖</div>

      <div className="header">
        <h1 className="main-title">AI编程</h1>
        <p className="subtitle">编程的未来，今天开始</p>
      </div>

      <div className="content">
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">智能代码生成</h3>
            <p className="feature-desc">AI助手帮你快速生成高质量代码，提升开发效率10倍</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">智能调试</h3>
            <p className="feature-desc">自动检测并修复代码bug，让调试变得轻松简单</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">代码优化</h3>
            <p className="feature-desc">AI分析代码性能，提供最佳实践建议和优化方案</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">学习助手</h3>
            <p className="feature-desc">个性化编程学习路径，从零基础到专业开发</p>
          </div>
        </div>

        <div className="tech-stack">
          <h2 className="tech-title">支持技术栈</h2>
          <div className="tech-icons">
            <div className="tech-item">Python</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">Java</div>
            <div className="tech-item">C++</div>
            <div className="tech-item">React</div>
            <div className="tech-item">Node.js</div>
          </div>
        </div>

        <div className="cta">
          <div className="cta-text">🌟 拥抱AI编程时代 🌟</div>
          <div className="cta-subtitle">让人工智能成为你最好的编程伙伴</div>
        </div>
      </div>
    </div>
  )
}