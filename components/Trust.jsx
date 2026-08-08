const Trust = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="confianca">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">PROVA DE CONFIANÇA VERIFICADA</span>
          <h2 className="section-title">Tecnologia importa. Confiança também.</h2>
          <p className="section-desc">
            Apresentamos exclusivamente métricas reais verificáveis da nossa presença oficial no mercado regional.
          </p>
        </div>

        <div className="trust-grid">
          {/* Main Instagram Verified Profile Box */}
          <div className="trust-insta-card glass-card">
            <div className="insta-header">
              <div className="insta-avatar">
                <span className="avatar-icon">☀️</span>
              </div>
              <div className="insta-handle-info">
                <h3 className="insta-username">@intersolarpa</h3>
                <span className="insta-badge">CONTA OFICIAL VERIFICADA</span>
              </div>
            </div>

            <p className="insta-bio">
              ☀️ Especialistas em Energia Solar
              <br />
              📍 Parauapebas e região
              <br />
              🔧 Projeto, instalação e homologação completa
            </p>

            <div className="insta-stats-row">
              <div className="stat-box">
                <span className="stat-num">2.555</span>
                <span className="stat-label">SEGUIDORES REAIS</span>
              </div>

              <div className="stat-box">
                <span className="stat-num">275</span>
                <span className="stat-label">PUBLICAÇÕES</span>
              </div>

              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-label">REGIONAL</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/intersolarpa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary insta-cta"
              onMouseEnter={() => setCursorState({ text: 'INSTAGRAM' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span>VISITAR PERFIL INSTAGRAM @INTERSOLARPA</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          {/* Authentic Regional Commitment Cards */}
          <div className="trust-pillars-col">
            <div className="pillar-box glass-card">
              <span className="pillar-icon">📍</span>
              <h4 className="pillar-title">Parauapebas + Região</h4>
              <p className="pillar-text">
                Atuação direta presencial no ecossistema solar da região de Carajás, com apoio técnico técnico local e rápido tempo de resposta.
              </p>
            </div>

            <div className="pillar-box glass-card">
              <span className="pillar-icon">🔧</span>
              <h4 className="pillar-title">Projeto, Instalação e Homologação</h4>
              <p className="pillar-text">
                Três pilares fundamentais gerenciados por equipe dedicada para assegurar a conformidade junto às normas da concessionária local.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
        }

        .trust-insta-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .insta-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .insta-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, var(--accent-color), var(--color-solar-orange));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .insta-username {
          font-size: 1.5rem;
          color: var(--color-warm-white);
          margin-bottom: 0.2rem;
        }

        .insta-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-color);
          letter-spacing: 0.1em;
        }

        .insta-bio {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(244, 242, 234, 0.85);
          background: rgba(11, 13, 12, 0.5);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 2rem;
        }

        .insta-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
          border-top: 1px solid var(--color-border-dark);
          border-bottom: 1px solid var(--color-border-dark);
          padding: 1.25rem 0;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.05em;
        }

        .insta-cta {
          width: 100%;
          justify-content: center;
        }

        .trust-pillars-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .pillar-box {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pillar-icon {
          font-size: 1.75rem;
        }

        .pillar-title {
          font-size: 1.35rem;
          color: var(--color-warm-white);
        }

        .pillar-text {
          font-size: 1rem;
          color: var(--color-muted-grey);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.Trust = Trust;
