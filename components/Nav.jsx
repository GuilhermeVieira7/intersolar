const { useState } = React;

const Nav = ({ setCursorState }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="commercial-header">
      <div className="nav-container container">
        <a href="#hero-comercial" className="logo-brand" onMouseEnter={() => setCursorState({ text: 'INTERSOLAR' })} onMouseLeave={() => setCursorState({ text: null })}>
          <div className="logo-icon">
            <span style={{ fontSize: '0.8rem', color: '#0B0D0C', fontWeight: 'bold' }}>☀️</span>
          </div>
          <div className="logo-text-group">
            <span className="logo-text">INTERSOLAR</span>
            <span className="logo-sub">PARAUAPEBAS + REGIÃO</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="header-nav-links desktop-only">
          <a href="#simulador" onMouseEnter={() => setCursorState({ text: 'SIMULAR' })} onMouseLeave={() => setCursorState({ text: null })}>SIMULADOR</a>
          <a href="#como-funciona" onMouseEnter={() => setCursorState({ text: 'PROCESSO' })} onMouseLeave={() => setCursorState({ text: null })}>PROCESSO</a>
          <a href="#servicos" onMouseEnter={() => setCursorState({ text: 'SERVIÇOS' })} onMouseLeave={() => setCursorState({ text: null })}>SERVIÇOS</a>
          <a href="#projetos" onMouseEnter={() => setCursorState({ text: 'PORTFÓLIO' })} onMouseLeave={() => setCursorState({ text: null })}>PROJETOS</a>
          <a href="#faq" onMouseEnter={() => setCursorState({ text: 'DÚVIDAS' })} onMouseLeave={() => setCursorState({ text: null })}>FAQ</a>
          <a href="/imersivo" className="btn-nav-immersive">✨ EXPERIÊNCIA IMERSIVA</a>
        </nav>

        <a
          href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+comercial+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary header-cta desktop-only"
          style={{ padding: '0.65rem 1.4rem', fontSize: '0.8rem' }}
          onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
          onMouseLeave={() => setCursorState({ text: null })}
        >
          <span>ORÇAMENTO</span>
          <span className="arrow">→</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-hamburger-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu Mobile"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <nav className="mobile-drawer-links">
            <a href="#simulador" onClick={() => setMobileMenuOpen(false)}>SIMULADOR</a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)}>PROCESSO</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>SERVIÇOS</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)}>PROJETOS</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="/imersivo" onClick={() => setMobileMenuOpen(false)} className="mobile-btn-immersive">✨ EXPERIÊNCIA IMERSIVA</a>
            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+comercial+da+Intersolar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-drawer-cta"
            >
              <span>SOLICITAR ORÇAMENTO →</span>
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .commercial-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          background: rgba(247, 246, 241, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(8, 9, 8, 0.08);
          display: flex;
          align-items: center;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--color-black-text);
        }

        .logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, var(--accent-color), var(--color-solar-orange));
          box-shadow: 0 0 12px var(--accent-glow);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.2rem;
          line-height: 1;
        }

        .logo-sub {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--color-tech-green);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .header-nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .header-nav-links a {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-black-text);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color var(--transition-fast);
        }

        .header-nav-links a:hover {
          color: var(--color-tech-green);
        }

        .btn-nav-immersive {
          font-family: var(--font-mono) !important;
          font-size: 0.7rem !important;
          font-weight: 700 !important;
          color: var(--accent-color) !important;
          background: var(--color-dark-bg);
          padding: 0.4rem 0.85rem;
          border-radius: 99px;
          text-decoration: none;
        }

        .mobile-only {
          display: none;
        }

        .mobile-hamburger-btn {
          background: var(--color-dark-bg);
          color: var(--accent-color);
          border: none;
          font-size: 1.5rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-drawer-overlay {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100vw;
          height: calc(100vh - var(--header-height));
          background: rgba(11, 13, 12, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-drawer-links a {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-offwhite);
          text-decoration: none;
          border-bottom: 1px solid rgba(247, 246, 241, 0.1);
          padding-bottom: 0.75rem;
        }

        .mobile-btn-immersive {
          color: var(--accent-color) !important;
        }

        .mobile-drawer-cta {
          margin-top: 1.5rem;
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

window.Nav = Nav;
