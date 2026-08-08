const { useState } = React;

const Hero = ({ setCursorState, onExploreClick, isExpanding }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-canvas-container">
        <window.SolarSystem isExpanding={isExpanding} />
      </div>

      <div className="hero-content container">
        <div className="hero-badge-wrap">
          <span className="mono-tag">INTERSOLAR</span>
          <span className="hero-badge-divider">/</span>
          <span className="hero-badge-sub">ENERGIA SOLAR · PARAUAPEBAS</span>
        </div>

        <h1 className="hero-heading">
          A energia começa no <span className="solar-word">sol.</span>
          <br />
          <span className="engineering-word">O resto é engenharia.</span>
        </h1>

        <p className="hero-subtext">
          Projeto, instalação e homologação completa para transformar o potencial solar do seu imóvel em energia.
        </p>

        <div className="hero-cta-group">
          <a
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>SOLICITAR ORÇAMENTO</span>
            <span className="arrow">→</span>
          </a>

          <button
            type="button"
            className="btn-secondary"
            onClick={onExploreClick}
            onMouseEnter={() => setCursorState({ text: 'EXPLORAR' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>EXPLORAR A EXPERIÊNCIA</span>
            <span className="down-arrow">↓</span>
          </button>
        </div>
      </div>

      <div className="hero-footer container">
        <div className="hero-footer-left">
          <span className="mono-label">LOCALIZAÇÃO</span>
          <span className="hero-footer-val">PARAUAPEBAS + REGIÃO</span>
        </div>

        <div className="hero-scroll-prompt" onClick={onExploreClick}>
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-bar-line"></div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: calc(var(--header-height) + 2rem);
          padding-bottom: 2rem;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, rgba(21, 24, 23, 0.4) 0%, var(--color-solar-black) 90%);
        }

        .hero-canvas-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin-top: auto;
          margin-bottom: auto;
          padding-top: 3rem;
        }

        .hero-badge-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .hero-badge-divider {
          color: var(--color-border-dark);
          font-family: var(--font-mono);
        }

        .hero-badge-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.1em;
        }

        .hero-subtext {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: rgba(244, 242, 234, 0.82);
          max-width: 680px;
          font-weight: 300;
          line-height: 1.5;
          margin-bottom: 2.75rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-footer {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          border-top: 1px solid rgba(244, 242, 234, 0.08);
          padding-top: 1.5rem;
          margin-top: 2rem;
        }

        .hero-footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mono-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.15em;
        }

        .hero-footer-val {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-warm-white);
        }

        .hero-scroll-prompt {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.12em;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .hero-scroll-prompt:hover {
          color: var(--accent-color);
        }

        .scroll-bar-line {
          width: 40px;
          height: 1px;
          background-color: var(--color-muted-grey);
          position: relative;
          overflow: hidden;
        }

        .scroll-bar-line::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background-color: var(--accent-color);
          animation: slideScrollLine 2s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes slideScrollLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
