const DustProblem = () => {
  return (
    <section className="dust-problem section-deep" id="problema">
      <div className="container dust-problem-grid">
        <div className="dust-problem-text">
          <span className="mono-tag eyebrow-line">O QUE NINGUÉM CONTA</span>
          <h2 className="dust-problem-title">
            Aqui, poeira é sinônimo de minério. E minério gruda no vidro.
          </h2>
          <p className="dust-problem-copy">
            A operação de mineração em Parauapebas lança no ar uma poeira fina e avermelhada que se deposita sobre qualquer superfície exposta — inclusive o vidro dos módulos fotovoltaicos. Diferente da poeira comum, ela não sai só com chuva: forma uma película que bloqueia parte da luz antes de chegar à célula solar.
          </p>
          <p className="dust-problem-copy">
            O sistema continua ligado, o inversor continua funcionando normalmente — mas a geração cai silenciosamente, mês após mês, sem nenhum alarme para avisar.
          </p>
        </div>

        <div className="dust-problem-stat">
          <span className="dust-problem-stat-number">−25%</span>
          <span className="dust-problem-stat-label">
            é o quanto a geração de um sistema fotovoltaico pode cair em regiões de alta concentração de poeira, quando os módulos ficam longos períodos sem limpeza especializada.
          </span>
          <span className="dust-problem-stat-source">Estimativa baseada em estudos do setor fotovoltaico sobre perda por sujidade (soiling loss).</span>
        </div>
      </div>

      <style>{`
        .dust-problem { position: relative; overflow: hidden; }

        .dust-problem::before {
          content: '';
          position: absolute;
          right: -10%;
          top: -20%;
          width: 60%;
          height: 140%;
          background: radial-gradient(circle, rgba(164, 74, 42, 0.16) 0%, transparent 65%);
          pointer-events: none;
        }

        .dust-problem-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .dust-problem-title {
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          color: var(--color-offwhite);
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          max-width: 620px;
        }

        .dust-problem-copy {
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--color-muted-onDark);
          max-width: 560px;
          margin-bottom: 1.1rem;
        }

        .dust-problem-stat {
          display: flex;
          flex-direction: column;
          border-left: 2px solid var(--color-rust);
          padding-left: clamp(1.25rem, 3vw, 2rem);
        }

        .dust-problem-stat-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3.4rem, 8vw, 5.5rem);
          line-height: 0.95;
          color: var(--color-rust-light);
          letter-spacing: -0.02em;
        }

        .dust-problem-stat-label {
          font-size: 1.02rem;
          color: var(--color-offwhite);
          margin-top: 1rem;
          line-height: 1.6;
          max-width: 340px;
        }

        .dust-problem-stat-source {
          margin-top: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-muted-onDark);
          letter-spacing: 0.02em;
        }

        @media (max-width: 900px) {
          .dust-problem-grid { grid-template-columns: 1fr; }
          .dust-problem-stat { border-left: none; border-top: 2px solid var(--color-rust); padding-left: 0; padding-top: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

window.DustProblem = DustProblem;
