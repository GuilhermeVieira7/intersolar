const { useState, useEffect } = React;

const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'Perguntas frequentes' },
];

const WHATSAPP_HREF = 'https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+da+InterSolar+e+gostaria+de+solicitar+um+or%C3%A7amento.';

const Nav = ({ setCursorState }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cursorProps = setCursorState
    ? { onMouseEnter: () => setCursorState({ text: null }) }
    : {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container container">
        <a href="#hero" className="logo-brand" aria-label="InterSolar Energia Renovável — início">
          <img src="fotos/logo-horizontal-color.png" alt="InterSolar Energia Renovável" className="logo-img" height="34" />
          <span className="logo-sub">PARAUAPEBAS + REGIÃO</span>
        </a>

        <nav className="header-nav-links desktop-only" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary header-cta desktop-only"
        >
          <span>Solicitar orçamento</span>
          <window.Icons.ArrowRight size={16} strokeWidth={2} />
        </a>

        <button
          type="button"
          className="mobile-hamburger-btn mobile-only"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <window.Icons.X size={22} /> : <window.Icons.Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" role="dialog" aria-modal="true">
          <nav className="mobile-drawer-links" aria-label="Navegação mobile">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}>{l.label}</a>
            ))}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-drawer-cta"
            >
              <span>Solicitar orçamento</span>
              <window.Icons.ArrowRight size={16} strokeWidth={2} />
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          background: rgba(247, 245, 238, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(23, 35, 28, 0.08);
          display: flex;
          align-items: center;
          transition: height var(--transition-fast), background-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .site-header.is-scrolled {
          height: calc(var(--header-height) - 14px);
          box-shadow: 0 8px 24px rgba(8, 46, 32, 0.06);
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
          color: var(--color-text);
        }

        .logo-img {
          height: 34px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }

        .logo-sub {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--color-green);
          font-weight: 500;
          letter-spacing: 0.08em;
          padding-left: 0.75rem;
          border-left: 1px solid var(--color-border);
        }

        @media (max-width: 480px) {
          .logo-sub { display: none; }
        }

        .header-nav-links {
          display: flex;
          align-items: center;
          gap: 1.85rem;
        }

        .header-nav-links a {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .header-nav-links a:hover { color: var(--color-green); }

        .header-cta { padding: 0.75rem 1.4rem; font-size: 0.85rem; }

        .mobile-only { display: none; }

        .mobile-hamburger-btn {
          background: var(--color-green-deep);
          color: var(--color-yellow);
          border: none;
          width: 44px;
          height: 44px;
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
          background: rgba(8, 46, 32, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 2rem 1.5rem;
          overflow-y: auto;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .mobile-drawer-links a {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-offwhite);
          text-decoration: none;
          border-bottom: 1px solid rgba(247, 245, 238, 0.12);
          padding-bottom: 0.9rem;
        }

        .mobile-drawer-cta {
          margin-top: 1.25rem;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

window.Nav = Nav;
