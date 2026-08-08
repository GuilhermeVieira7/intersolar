const Footer = ({ setCursorState }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="logo-brand">
              <div className="logo-icon">
                <span style={{ fontSize: '0.8rem', color: '#0B0D0C', fontWeight: 'bold' }}>☀️</span>
              </div>
              <span className="logo-text">INTERSOLAR</span>
            </a>
            <span className="footer-subtext">ENERGIA SOLAR · PARAUAPEBAS + REGIÃO</span>
            <p className="footer-tagline">
              Projeto, instalação e homologação completa para transformar o potencial solar em energia patrimonial.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">NAVEGAÇÃO</span>
            <ul className="footer-links">
              <li><a href="#da-luz-a-energia" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>SOLUÇÃO</a></li>
              <li><a href="#sistema-jornada" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>PROCESSO</a></li>
              <li><a href="#projetos" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>PROJETOS</a></li>
              <li><a href="#faq" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>FAQ</a></li>
              <li><a href="#contato" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>CONTATO</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-col-title">CONTATO & REDES</span>
            <div className="contact-items">
              <a
                href="https://www.instagram.com/intersolarpa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                onMouseEnter={() => setCursorState({ text: 'INSTAGRAM' })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <span>INSTAGRAM: @INTERSOLARPA</span>
              </a>

              <a
                href="https://wa.me/5594999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <span>WHATSAPP DE ATENDIMENTO</span>
              </a>

              <span className="footer-location-text">
                📍 PARAUAPEBAS E REGIÃO / PA
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copy-text">© 2026 Intersolar. Todos os direitos reservados.</span>
          <span className="footer-accent-badge">INTERSOLAR · REGIONAL PREMIUM SOLAR INFRASTRUCTURE</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-solar-black);
          border-top: 1px solid var(--color-border-dark);
          padding-top: 5rem;
          padding-bottom: 3rem;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-subtext {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-color);
          letter-spacing: 0.1em;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--color-muted-grey);
          max-width: 400px;
          margin-top: 0.5rem;
        }

        .footer-col-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          letter-spacing: 0.15em;
          margin-bottom: 1.25rem;
          display: block;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: var(--color-warm-white);
          text-decoration: none;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-color);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-contact-link {
          color: var(--color-warm-white);
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          transition: color var(--transition-fast);
        }

        .footer-contact-link:hover {
          color: var(--accent-color);
        }

        .footer-location-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-muted-grey);
          margin-top: 0.5rem;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-dark);
          padding-top: 2rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
        }

        .footer-accent-badge {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

window.Footer = Footer;
