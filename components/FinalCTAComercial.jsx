const FinalCTAComercial = ({ setCursorState, onCalculateClick }) => {
  return (
    <section className="section section-dark-theme final-cta-com-section" id="contato">
      <div className="solar-glow-backdrop" />

      <div className="container final-cta-com-content">
        <span className="mono-tag">DECISÃO PATRIMONIAL</span>

        <h2 className="cta-head-1">
          Seu imóvel já recebe o sol.
        </h2>

        <h2 className="cta-head-2">
          Agora descubra o que ele pode gerar.
        </h2>

        <div className="cta-com-actions">
          <button
            type="button"
            className="btn-primary cta-btn-big"
            onClick={onCalculateClick}
            onMouseEnter={() => setCursorState({ text: 'SIMULAR' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>CALCULAR MEU POTENCIAL</span>
            <span className="arrow">→</span>
          </button>

          <a
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+comercial+e+gostaria+de+falar+com+a+Intersolar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ borderColor: 'rgba(247, 246, 241, 0.2)', color: 'var(--color-offwhite)' }}
            onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>FALAR COM A INTERSOLAR</span>
          </a>
        </div>

        {/* Final Phrase of the Experience */}
        <div className="experience-final-quote">
          <p className="quote-line-1">"O sol já está fazendo a parte dele."</p>
          <p className="quote-line-2">"Agora é a sua vez."</p>
          <a
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+meu+im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary final-quote-btn"
            onMouseEnter={() => setCursorState({ text: 'ORÇAMENTO' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>SOLICITAR ORÇAMENTO →</span>
          </a>
        </div>
      </div>

      <style>{`
        .final-cta-com-section {
          position: relative;
          background: #080908;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 8rem 0;
        }

        .solar-glow-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(450px, 70vw, 950px);
          height: clamp(450px, 70vw, 950px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 196, 0, 0.16) 0%, rgba(255, 122, 0, 0.06) 45%, rgba(8, 9, 8, 0) 70%);
          pointer-events: none;
        }

        .final-cta-com-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 950px;
        }

        .cta-head-1 {
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          color: var(--color-offwhite);
          margin-top: 1.5rem;
        }

        .cta-head-2 {
          font-size: clamp(2.5rem, 6vw, 5.5rem);
          color: var(--accent-color);
          margin-top: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .cta-com-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .cta-btn-big {
          font-size: 1.1rem;
          padding: 1.35rem 2.75rem;
        }

        .experience-final-quote {
          border-top: 1px solid var(--color-border-dark);
          padding-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .quote-line-1 {
          font-size: 1.5rem;
          color: rgba(247, 246, 241, 0.7);
          font-style: italic;
        }

        .quote-line-2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-offwhite);
          margin-bottom: 1.5rem;
        }

        .final-quote-btn {
          background-color: #FFFFFF;
          color: var(--color-dark-bg);
          border-color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};

window.FinalCTAComercial = FinalCTAComercial;
