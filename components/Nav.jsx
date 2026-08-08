const Nav = ({ setCursorState }) => {
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

        <nav className="header-nav-links">
          <a href="#simulador" onMouseEnter={() => setCursorState({ text: 'SIMULAR' })} onMouseLeave={() => setCursorState({ text: null })}>SIMULADOR</a>
          <a href="#como-funciona" onMouseEnter={() => setCursorState({ text: 'PROCESSO' })} onMouseLeave={() => setCursorState({ text: null })}>PROCESSO</a>
          <a href="#servicos" onMouseEnter={() => setCursorState({ text: 'SERVIÇOS' })} onMouseLeave={() => setCursorState({ text: null })}>SERVIÇOS</a>
          <a href="#projetos" onMouseEnter={() => setCursorState({ text: 'PORTFÓLIO' })} onMouseLeave={() => setCursorState({ text: null })}>PROJETOS</a>
          <a href="#faq" onMouseEnter={() => setCursorState({ text: 'DÚVIDAS' })} onMouseLeave={() => setCursorState({ text: null })}>FAQ</a>
        </nav>

        <a
          href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+comercial+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary header-cta"
          style={{ padding: '0.65rem 1.4rem', fontSize: '0.8rem' }}
          onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
          onMouseLeave={() => setCursorState({ text: null })}
        >
          <span>ORÇAMENTO</span>
          <span className="arrow">→</span>
        </a>
      </div>

      <style>{`
        .commercial-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 100;
          background: rgba(247, 246, 241, 0.9);
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
          gap: 2rem;
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

        @media (max-width: 900px) {
          .header-nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

window.Nav = Nav;
