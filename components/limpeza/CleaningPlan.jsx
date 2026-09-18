const QUARTERS = ['Trimestre 1', 'Trimestre 2', 'Trimestre 3', 'Trimestre 4'];

const CleaningPlan = ({ setCursorState }) => {
  const plan = window.CLEANING_PLAN;

  return (
    <section className="cleaning-plan section-white" id="plano">
      <div className="container">
        <div className="cleaning-plan-header">
          <span className="mono-tag eyebrow-line">O PLANO</span>
          <h2 className="cleaning-plan-title">
            Um único plano. Feito para durar o ano inteiro.
          </h2>
          <p className="cleaning-plan-subtitle">
            Sem mensalidades soltas, sem pacotes confusos. Um compromisso anual para manter seu sistema gerando no que ele tem de melhor.
          </p>
        </div>

        <div className="cleaning-plan-card">
          <span className="cleaning-plan-ribbon">Plano único · tudo incluso</span>
          <div className="cleaning-plan-price-col">
            <span className="cleaning-plan-name">{plan.name}</span>
            <div className="cleaning-plan-price-row">
              <span className="cleaning-plan-price">{plan.priceLabel}</span>
              <span className="cleaning-plan-price-period">/ ano</span>
            </div>
            <span className="cleaning-plan-price-equiv">equivalente a R$ {plan.monthlyEquivalent}/mês</span>

            <a
              href={`https://wa.me/559491489811?text=${encodeURIComponent(plan.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cleaning-plan-cta"
              onMouseEnter={() => setCursorState && setCursorState({ text: 'CONTRATAR' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Contratar o plano</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </a>
            <span className="cleaning-plan-note">Condições de pagamento combinadas diretamente com a equipe InterSolar.</span>
          </div>

          <div className="cleaning-plan-details-col">
            <ul className="cleaning-plan-inclusions">
              {plan.inclusions.map((item) => (
                <li key={item}>
                  <window.Icons.Check size={17} strokeWidth={2.4} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="cleaning-plan-calendar">
              <span className="cleaning-plan-calendar-label">SUAS 4 VISITAS AO LONGO DO ANO</span>
              <div className="cleaning-plan-calendar-row">
                {QUARTERS.map((q, i) => (
                  <div className="cleaning-plan-calendar-item" key={q}>
                    <span className="cleaning-plan-calendar-dot">{i + 1}</span>
                    <span className="cleaning-plan-calendar-text">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cleaning-plan-header { max-width: 680px; margin-bottom: 3rem; }

        .cleaning-plan-title {
          font-size: clamp(2rem, 4.2vw, 3rem);
          margin-top: 1rem;
          margin-bottom: 1.1rem;
          color: var(--color-text);
        }

        .cleaning-plan-subtitle { font-size: 1.05rem; color: var(--color-muted); line-height: 1.6; }

        .cleaning-plan-card {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          background: var(--color-green-deep);
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--color-yellow);
          box-shadow: 0 30px 70px -20px rgba(255, 201, 0, 0.35);
        }

        .cleaning-plan-ribbon {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-yellow);
          color: var(--color-green-deep);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          white-space: nowrap;
          z-index: 3;
          box-shadow: 0 6px 16px rgba(0,0,0,0.25);
        }

        .cleaning-plan-price-col {
          padding: clamp(2.75rem, 4vw, 3.75rem) clamp(2.25rem, 4vw, 3.5rem) clamp(2.25rem, 4vw, 3.5rem);
          display: flex;
          flex-direction: column;
          background: linear-gradient(155deg, var(--color-green-deep) 0%, var(--color-green-dark) 100%);
          border-right: 1px solid var(--color-border-onDark);
        }

        .cleaning-plan-name {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-yellow-light);
          margin-bottom: 1.5rem;
        }

        .cleaning-plan-price-row { display: flex; align-items: baseline; gap: 0.5rem; }

        .cleaning-plan-price {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3.1rem, 5.6vw, 4.1rem);
          color: var(--color-offwhite);
          letter-spacing: -0.02em;
        }

        .cleaning-plan-price-period { font-family: var(--font-display); font-weight: 600; color: var(--color-muted-onDark); font-size: 1.1rem; }

        .cleaning-plan-price-equiv {
          font-size: 0.9rem;
          color: var(--color-muted-onDark);
          margin-top: 0.5rem;
          margin-bottom: 2.25rem;
        }

        .cleaning-plan-cta { margin-bottom: 1rem; }

        .cleaning-plan-note { font-size: 0.78rem; color: var(--color-muted-onDark); line-height: 1.5; }

        .cleaning-plan-details-col { padding: clamp(2.75rem, 4vw, 3.75rem) clamp(2.25rem, 4vw, 3.5rem) clamp(2.25rem, 4vw, 3.5rem); }

        .cleaning-plan-inclusions { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 2.5rem; }

        .cleaning-plan-inclusions li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 1rem;
          color: var(--color-offwhite);
          line-height: 1.5;
        }

        .cleaning-plan-inclusions li svg { flex-shrink: 0; margin-top: 0.15rem; color: var(--color-yellow); }

        .cleaning-plan-calendar { border-top: 1px solid var(--color-border-onDark); padding-top: 1.75rem; }

        .cleaning-plan-calendar-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--color-muted-onDark);
          display: block;
          margin-bottom: 1.1rem;
        }

        .cleaning-plan-calendar-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .cleaning-plan-calendar-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.9rem 0.85rem;
          border-radius: 14px;
          background: rgba(247, 245, 238, 0.05);
          border: 1px solid var(--color-border-onDark);
        }

        .cleaning-plan-calendar-dot {
          width: 26px; height: 26px; border-radius: 50%;
          background: var(--color-yellow); color: var(--color-green-deep);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 800; font-size: 0.8rem;
        }

        .cleaning-plan-calendar-text { font-size: 0.78rem; color: var(--color-muted-onDark); font-family: var(--font-mono); }

        @media (max-width: 900px) {
          .cleaning-plan-card { grid-template-columns: 1fr; }
          .cleaning-plan-price-col { border-right: none; border-bottom: 1px solid var(--color-border-onDark); }
          .cleaning-plan-calendar-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
};

window.CleaningPlan = CleaningPlan;
