const CleaningFinalCTA = ({ setCursorState }) => {
  const plan = window.CLEANING_PLAN;

  return (
    <section className="cleaning-final-cta section-deep">
      <div className="container cleaning-final-cta-inner">
        <h2 className="cleaning-final-cta-title">
          A poeira volta toda semana.<br />O seu plano de limpeza só precisa ser contratado uma vez por ano.
        </h2>
        <a
          href={`https://wa.me/559491489811?text=${encodeURIComponent(plan.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary cleaning-final-cta-btn"
          onMouseEnter={() => setCursorState && setCursorState({ text: 'WHATSAPP' })}
          onMouseLeave={() => setCursorState && setCursorState({ text: null })}
        >
          <span>Contratar o InterSolar Clean · {plan.priceLabel}/ano</span>
          <window.Icons.ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>

      <style>{`
        .cleaning-final-cta-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2.25rem;
          max-width: 780px;
        }

        .cleaning-final-cta-title {
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          color: var(--color-offwhite);
        }
      `}</style>
    </section>
  );
};

window.CleaningFinalCTA = CleaningFinalCTA;
