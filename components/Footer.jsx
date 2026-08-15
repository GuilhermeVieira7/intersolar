const Footer = ({ setCursorState }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo">
              <img src="fotos/logo%20inter%20solar.png" alt="InterSolar Energia Renovável" width="38" height="38" />
              <span className="footer-logo-text">INTERSOLAR</span>
            </a>
            <span className="footer-subtext">ENERGIA SOLAR · PARAUAPEBAS + REGIÃO</span>
            <p className="footer-tagline">
              Projetos de energia solar residencial e comercial, com atendimento especializado do início à instalação.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">NAVEGAÇÃO</span>
            <ul className="footer-links">
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-col-title">CONTATO</span>
            <div className="contact-items">
              <a href="https://wa.me/5594999999999" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <window.Icons.MessageCircle size={16} strokeWidth={1.8} />
                <span>WhatsApp de atendimento</span>
              </a>
              <a href="https://www.instagram.com/intersolarpa" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <window.Icons.Instagram size={16} strokeWidth={1.8} />
                <span>@intersolarpa</span>
              </a>
              <span className="footer-location-text">
                <window.Icons.MapPin size={16} strokeWidth={1.8} />
                Parauapebas e região / PA
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copy-text">© 2026 InterSolar Energia Renovável. Todos os direitos reservados.</span>
          <span className="footer-accent-badge">ENERGIA SOLAR EM PARAUAPEBAS</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-green-deep);
          color: var(--color-offwhite);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.4fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand-col { display: flex; flex-direction: column; gap: 0.75rem; }

        .footer-logo { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; color: var(--color-offwhite); }
        .footer-logo img { object-fit: contain; }
        .footer-logo-text { font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; }

        .footer-subtext {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--color-yellow-light);
          letter-spacing: 0.08em;
        }

        .footer-tagline { font-size: 0.95rem; color: var(--color-muted-onDark); max-width: 380px; margin-top: 0.4rem; }

        .footer-col-title {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--color-yellow-light);
          letter-spacing: 0.12em;
          margin-bottom: 1.1rem;
          display: block;
        }

        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
        .footer-links a { color: var(--color-offwhite); text-decoration: none; font-family: var(--font-display); font-weight: 600; font-size: 0.95rem; transition: color var(--transition-fast); }
        .footer-links a:hover { color: var(--color-yellow); }

        .contact-items { display: flex; flex-direction: column; gap: 0.85rem; }

        .footer-contact-link, .footer-location-text {
          display: flex; align-items: center; gap: 0.55rem;
          color: var(--color-offwhite); text-decoration: none;
          font-family: var(--font-mono); font-size: 0.85rem;
        }

        .footer-contact-link { transition: color var(--transition-fast); }
        .footer-contact-link:hover { color: var(--color-yellow); }
        .footer-location-text { color: var(--color-muted-onDark); }

        .footer-bottom {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--color-border-onDark);
          padding-top: 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--color-muted-onDark);
        }

        .footer-accent-badge { color: var(--color-yellow-light); }

        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 2.25rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

window.Footer = Footer;
