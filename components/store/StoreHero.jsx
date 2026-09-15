const StoreHero = ({ setCursorState }) => {
  const scrollToCatalog = (e) => {
    e.preventDefault();
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="store-hero-section section-deep" id="loja-hero">
      <div className="store-hero-grid container">
        <div className="store-hero-copy">
          <span className="mono-tag eyebrow-line">LOJA INTERSOLAR</span>

          <h1 className="store-hero-heading">
            Tecnologia solar para quem quer produzir a <span className="solar-word">própria energia</span>.
          </h1>

          <p className="store-hero-subtext">
            Equipamentos selecionados pela InterSolar para entregar eficiência, segurança e desempenho por muitos anos.
          </p>

          <div className="hero-cta-group">
            <a
              href="#catalogo"
              onClick={scrollToCatalog}
              className="btn-primary"
              onMouseEnter={() => setCursorState && setCursorState({ text: 'VER LOJA' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Ver equipamentos</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </a>

            <a
              href="https://wa.me/559491489811?text=Ol%C3%A1%21+Preciso+de+ajuda+para+escolher+equipamentos+de+energia+solar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Preciso de ajuda para escolher</span>
            </a>
          </div>

          <ul className="hero-trust-row">
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Equipamentos selecionados</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Garantia dos fabricantes</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Suporte InterSolar</li>
          </ul>
        </div>

        <div className="store-hero-visual" aria-hidden="true">
          <div className="store-hero-visual-frame">
            <window.ProductVisual category="modulos" variant={1} />
          </div>
        </div>
      </div>

      <style>{`
        .store-hero-section {
          position: relative;
          padding-top: calc(var(--header-height) + 2.5rem);
          padding-bottom: 3.5rem;
          overflow: hidden;
        }

        .store-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .store-hero-heading {
          font-size: clamp(2.4rem, 5.4vw, 4.4rem);
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .store-hero-heading .solar-word { color: var(--color-yellow); }

        .store-hero-subtext {
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
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

        .store-hero-visual { position: relative; }

        .store-hero-visual-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          border: 1px solid var(--color-border-onDark);
        }

        @media (max-width: 900px) {
          .store-hero-grid { grid-template-columns: 1fr; }
          .store-hero-visual { order: -1; max-width: 380px; margin: 0 auto; }
          .store-hero-section { padding-top: calc(var(--header-height) + 1.5rem); }
        }
      `}</style>
    </section>
  );
};

window.StoreHero = StoreHero;
