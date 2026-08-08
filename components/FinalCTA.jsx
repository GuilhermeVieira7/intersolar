const { useState } = React;

const FinalCTA = ({ setCursorState }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
    setMouseOffset({ x, y });
  };

  return (
    <section
      className="section section-dark final-cta-section"
      id="contato"
      onMouseMove={handleMouseMove}
    >
      <div className="solar-ring-bg" style={{
        transform: `translate(calc(-50% + ${mouseOffset.x}px), calc(-50% + ${mouseOffset.y}px))`
      }} />

      <div className="container final-cta-content">
        <span className="mono-tag">CAPÍTULO 06 · O FUTURO</span>

        <h2 className="cta-heading-1">
          O próximo passo começa com uma pergunta.
        </h2>

        <h2 className="cta-heading-2">
          Quanto o seu imóvel pode gerar?
        </h2>

        <p className="cta-subtext">
          Solicite uma análise fotovoltaica técnica sem compromisso para o seu imóvel em Parauapebas e região.
        </p>

        <div className="cta-btn-group">
          <a
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento+para+meu+im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-main-btn"
            onMouseEnter={() => setCursorState({ text: 'ORÇAMENTO' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>SOLICITAR ORÇAMENTO</span>
            <span className="arrow">→</span>
          </a>

          <a
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+equipe+Intersolar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            onMouseEnter={() => setCursorState({ text: 'FALAR COM A INTERSOLAR' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>FALAR COM A INTERSOLAR</span>
          </a>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          background-color: #060707;
        }

        .solar-ring-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(400px, 60vw, 900px);
          height: clamp(400px, 60vw, 900px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 196, 0, 0.15) 0%, rgba(255, 122, 0, 0.08) 40%, rgba(11, 13, 12, 0) 70%);
          border: 1px solid rgba(255, 196, 0, 0.25);
          box-shadow: 0 0 80px rgba(255, 196, 0, 0.12);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .final-cta-content {
          position: relative;
          z-index: 10;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading-1 {
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          margin-top: 1.5rem;
          color: var(--color-warm-white);
        }

        .cta-heading-2 {
          font-size: clamp(2.5rem, 6vw, 5.5rem);
          margin-top: 0.5rem;
          margin-bottom: 1.5rem;
          color: transparent;
          background: linear-gradient(135deg, #ffffff 0%, var(--accent-color) 70%, var(--color-solar-orange) 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .cta-subtext {
          font-size: 1.25rem;
          color: rgba(244, 242, 234, 0.8);
          max-width: 650px;
          margin-bottom: 3rem;
        }

        .cta-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-main-btn {
          font-size: 1.1rem;
          padding: 1.4rem 3rem;
        }
      `}</style>
    </section>
  );
};

window.FinalCTA = FinalCTA;
