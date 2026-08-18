const FinalCTA = ({ setCursorState }) => {
  return (
    <section className="section section-deep final-cta-section" id="contato">
      <div className="cta-sun-glow" aria-hidden="true" />

      <div className="container final-cta-content">
        <span className="mono-tag eyebrow-line">COMECE SUA TRANSIÇÃO PARA A ENERGIA SOLAR</span>

        <h2 className="cta-heading">
          O sol nasce todos os dias.
          <br />
          Sua economia pode começar agora.
        </h2>

        <p className="cta-subtext">Fale com a InterSolar e solicite uma análise para o seu imóvel.</p>

        <a
          href="https://wa.me/559491489811?text=Ol%C3%A1%21+Vim+pelo+site+da+InterSolar+e+gostaria+de+solicitar+um+or%C3%A7amento+para+meu+im%C3%B3vel."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary cta-main-btn"
          onMouseEnter={() => setCursorState && setCursorState({ text: 'ORÇAMENTO' })}
          onMouseLeave={() => setCursorState && setCursorState({ text: null })}
        >
          <span>Solicitar meu orçamento</span>
          <window.Icons.MessageCircle size={18} strokeWidth={2} />
        </a>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .cta-sun-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(400px, 55vw, 800px);
          height: clamp(400px, 55vw, 800px);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 201, 0, 0.14) 0%, rgba(255, 201, 0, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        .final-cta-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading {
          font-size: clamp(2.1rem, 5.2vw, 3.6rem);
          margin-top: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .cta-subtext {
          font-size: 1.15rem;
          color: var(--color-muted-onDark);
          max-width: 520px;
          margin-bottom: 2.5rem;
        }

        .cta-main-btn { font-size: 1rem; padding: 1.25rem 2.5rem; }
      `}</style>
    </section>
  );
};

window.FinalCTA = FinalCTA;
