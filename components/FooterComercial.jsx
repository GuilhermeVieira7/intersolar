const FooterComercial = ({ setCursorState }) => {
  return (
    <footer className="footer-comercial">
      <div className="container">
        <div className="footer-com-top">
          <div className="footer-brand-col">
            <a href="#hero-comercial" className="logo-brand">
              <div className="logo-icon">
                <span style={{ fontSize: '0.8rem', color: '#0B0D0C', fontWeight: 'bold' }}>☀️</span>
              </div>
              <span className="logo-text" style={{ color: 'var(--color-offwhite)' }}>INTERSOLAR</span>
            </a>
            <span className="footer-sub-label">ENERGIA SOLAR · PARAUAPEBAS + REGIÃO</span>
            <p className="footer-desc">
              Especialistas em energia solar. Projeto, instalação e homologação completa para o seu imóvel.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-hdr">NAVEGAÇÃO</span>
            <ul className="footer-ul">
              <li><a href="#hero-comercial" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>INÍCIO</a></li>
              <li><a href="#simulador" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>SOLUÇÃO</a></li>
              <li><a href="#servicos" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>SERVIÇOS</a></li>
              <li><a href="#como-funciona" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>PROCESSO</a></li>
              <li><a href="#faq" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>FAQ</a></li>
              <li><a href="#contato" onMouseEnter={() => setCursorState({ text: 'GOTO' })} onMouseLeave={() => setCursorState({ text: null })}>CONTATO</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-hdr">CONTATO DIRETO</span>
            <div className="contact-details">
              <a
                href="https://www.instagram.com/intersolarpa"
                target="_blank"
                rel="noopener noreferrer"
                className="f-link"
                onMouseEnter={() => setCursorState({ text: 'INSTAGRAM' })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                INSTAGRAM: @INTERSOLARPA
              </a>
              <a
                href="https://wa.me/5594999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="f-link"
                onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                WHATSAPP: [WHATSAPP REAL]
              </a>
              <span className="f-text">ENDEREÇO: [ENDEREÇO REAL]</span>
            </div>
          </div>
        </div>

        <div className="footer-com-bottom">
          <span>© 2026 INTERSOLAR. Todos os direitos reservados.</span>
          <span style={{ color: 'var(--accent-color)' }}>PARAUAPEBAS E REGIÃO / PA</span>
        </div>
      </div>

      <style>{`
        .footer-comercial {
          background: #060707;
          color: var(--color-offwhite);
          border-top: 1px solid var(--color-border-dark);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-com-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-sub-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-color);
          letter-spacing: 0.1em;
          margin-top: 0.5rem;
        }

        .footer-desc {
          font-size: 0.95rem;
          color: var(--color-grey-muted);
          max-width: 400px;
          margin-top: 0.5rem;
        }

        .footer-hdr {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          display: block;
        }

        .footer-ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-ul a {
          color: var(--color-offwhite);
          text-decoration: none;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .footer-ul a:hover {
          color: var(--accent-color);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .f-link {
          color: var(--color-offwhite);
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: color var(--transition-fast);
        }

        .f-link:hover {
          color: var(--accent-color);
        }

        .f-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-grey-muted);
        }

        .footer-com-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-dark);
          padding-top: 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-grey-muted);
        }

        @media (max-width: 768px) {
          .footer-com-top {
            grid-template-columns: 1fr;
          }
          .footer-com-bottom {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

window.FooterComercial = FooterComercial;
