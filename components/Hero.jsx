const Hero = ({ setCursorState }) => {
  return (
    <section className="hero-section section-deep" id="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="mono-tag eyebrow-line">ENERGIA SOLAR EM PARAUAPEBAS E REGIÃO</span>

          <h1 className="hero-heading">
            Transforme <span className="solar-word">sol</span> em economia.
          </h1>

          <p className="hero-subtext">
            Projetos de energia solar para residências e empresas, com atendimento especializado do início à instalação.
          </p>

          <div className="hero-cta-group">
            <a
              href="https://wa.me/559491489811?text=Ol%C3%A1%21+Vim+pelo+site+da+InterSolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onMouseEnter={() => setCursorState && setCursorState({ text: 'WHATSAPP' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Solicitar orçamento</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </a>

            <a
              href="https://wa.me/559491489811?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista+da+InterSolar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Falar com especialista</span>
            </a>
          </div>

          <ul className="hero-trust-row">
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Projeto personalizado</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Atendimento especializado</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Energia limpa</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-photo-frame">
            <img
              src="fotos/hero-residencial.webp"
              alt="Residência com painéis solares instalados pela InterSolar em Parauapebas"
              className="hero-photo"
              width="1400"
              height="787"
              fetchpriority="high"
            />
            <div className="hero-photo-overlay" />
            <span className="hero-photo-accent" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: calc(var(--header-height) + 2.5rem);
          padding-bottom: 3.5rem;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          min-height: calc(100vh - var(--header-height) - 3rem);
        }

        .hero-heading {
          font-size: clamp(2.6rem, 6.2vw, 5.4rem);
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .hero-subtext {
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          color: var(--color-muted-onDark);
          max-width: 520px;
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.75rem;
        }

        .hero-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          list-style: none;
          border-top: 1px solid var(--color-border-onDark);
          padding-top: 1.5rem;
        }

        .hero-trust-row li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-offwhite);
        }

        .hero-trust-row li svg { color: var(--color-yellow); }

        .hero-visual { position: relative; }

        .hero-photo-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(8, 46, 32, 0.55) 0%, rgba(8, 46, 32, 0.05) 45%, rgba(8, 46, 32, 0.35) 100%);
          pointer-events: none;
        }

        .hero-photo-accent {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 64px;
          height: 5px;
          background: var(--color-yellow);
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .hero-visual { order: -1; max-width: 380px; margin: 0 auto; }
          .hero-section { padding-top: calc(var(--header-height) + 1.5rem); }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
