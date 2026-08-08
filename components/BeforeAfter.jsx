const BeforeAfter = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="antes-depois">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">VISÃO DE IMPACTO PATRIMONIAL</span>
          <h2 className="section-title">A Transformação do Imóvel.</h2>
        </div>

        <div className="before-after-grid">
          {/* ANTES Card */}
          <div className="ba-card ba-before">
            <div className="ba-card-top">
              <span className="ba-badge red-badge">ESTADO CONVENCIONAL</span>
              <h3 className="ba-title">ANTES</h3>
            </div>

            <div className="ba-items-list">
              <div className="ba-item">
                <span className="ba-item-title">Conta Passiva</span>
                <p className="ba-item-desc">Pagamento contínuo sem geração de ativo ou retorno financeiro patrimonial.</p>
                <div className="ba-bar-wrap"><div className="ba-bar red-bar" style={{ width: '85%' }} /></div>
              </div>

              <div className="ba-item">
                <span className="ba-item-title">Vulnerabilidade Tarifária</span>
                <p className="ba-item-desc">Exposição direta a aumentos das bandeiras tarifárias e reajustes anuais.</p>
                <div className="ba-bar-wrap"><div className="ba-bar red-bar" style={{ width: '92%' }} /></div>
              </div>

              <div className="ba-item">
                <span className="ba-item-title">Processo Fragmentado</span>
                <p className="ba-item-desc">Contratação isolada sem garantia de eficiência técnica e homologação integrada.</p>
                <div className="ba-bar-wrap"><div className="ba-bar red-bar" style={{ width: '70%' }} /></div>
              </div>
            </div>
          </div>

          {/* DEPOIS Card */}
          <div className="ba-card ba-after">
            <div className="ba-card-top">
              <span className="ba-badge yellow-badge">COM A INTERSOLAR</span>
              <h3 className="ba-title">DEPOIS</h3>
            </div>

            <div className="ba-items-list">
              <div className="ba-item">
                <span className="ba-item-title">Ativo de Geração Própria</span>
                <p className="ba-item-desc">Transformação da despesa operacional em infraestrutura geradora de energia.</p>
                <div className="ba-bar-wrap"><div className="ba-bar yellow-bar" style={{ width: '95%' }} /></div>
              </div>

              <div className="ba-item">
                <span className="ba-item-title">Previsibilidade Energética</span>
                <p className="ba-item-desc">Independência e controle estratégico dos custos operacionais do imóvel.</p>
                <div className="ba-bar-wrap"><div className="ba-bar yellow-bar" style={{ width: '98%' }} /></div>
              </div>

              <div className="ba-item">
                <span className="ba-item-title">Solução Integrada de Ponta a Ponta</span>
                <p className="ba-item-desc">Engenharia, instalação técnica e homologação completa realizada pela Intersolar.</p>
                <div className="ba-bar-wrap"><div className="ba-bar yellow-bar" style={{ width: '100%' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .ba-card {
          background: rgba(21, 24, 23, 0.6);
          border: 1px solid var(--color-border-dark);
          border-radius: 20px;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          backdrop-filter: blur(10px);
        }

        .ba-before {
          border-left: 3px solid #D32F2F;
        }

        .ba-after {
          border-left: 3px solid var(--accent-color);
        }

        .ba-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
        }

        .ba-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          font-weight: 700;
        }

        .red-badge {
          background: rgba(211, 47, 47, 0.15);
          color: #FF5252;
        }

        .yellow-badge {
          background: rgba(255, 196, 0, 0.15);
          color: var(--accent-color);
        }

        .ba-title {
          font-size: 2.25rem;
          color: var(--color-warm-white);
        }

        .ba-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .ba-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .ba-item-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-warm-white);
        }

        .ba-item-desc {
          font-size: 0.95rem;
          color: var(--color-muted-grey);
        }

        .ba-bar-wrap {
          height: 4px;
          width: 100%;
          background: rgba(244, 242, 234, 0.08);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 0.4rem;
        }

        .ba-bar {
          height: 100%;
          border-radius: 2px;
        }

        .red-bar { background-color: #D32F2F; }
        .yellow-bar { background-color: var(--accent-color); }

        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.BeforeAfter = BeforeAfter;
