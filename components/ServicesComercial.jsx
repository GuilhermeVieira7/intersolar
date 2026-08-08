const { useState } = React;

const ServicesComercial = ({ setCursorState }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      id: '01',
      title: 'PROJETO FOTOVOLTAICO',
      subtitle: 'ENGENHARIA E MODELAGEM 3D',
      desc: 'Solução dimensionada minuciosamente de acordo com as características arquitetônicas e a curva de consumo do imóvel.'
    },
    {
      id: '02',
      title: 'DIMENSIONAMENTO',
      subtitle: 'CÁLCULO TÉCNICO DE POTÊNCIA',
      desc: 'Análise rigorosa da demanda de pico para definir a estrutura fotovoltaica adequada sem subdimensionamento.'
    },
    {
      id: '03',
      title: 'INSTALAÇÃO',
      subtitle: 'MONTAGEM FISICA NORMATIZADA',
      desc: 'Execução do sistema fotovoltaico com equipes qualificadas, estrutura de alta resistência e equipamentos certificados.'
    },
    {
      id: '04',
      title: 'HOMOLOGAÇÃO',
      subtitle: 'TRAMITAÇÃO JUNTO À CONCESSIONÁRIA',
      desc: 'Acompanhamento integral do processo de aprovação do projeto e troca do medidor para o modelo bidirecional.'
    }
  ];

  return (
    <section className="section section-dark-theme" id="servicos">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '4rem' }}>
          <span className="mono-tag">ESCOPO TÉCNICO COMPLETO</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)', marginTop: '0.75rem', color: 'var(--color-offwhite)' }}>Tudo começa no projeto.</h2>
        </div>

        <div className="services-comercial-stack">
          {services.map((srv, idx) => {
            const isHovered = activeIdx === idx;
            return (
              <div
                key={srv.id}
                className={`service-item-row ${isHovered ? 'active' : ''}`}
                onMouseEnter={() => { setActiveIdx(idx); setCursorState({ text: 'VER SERVIÇO' }); }}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <div className="service-row-main">
                  <div className="service-left">
                    <span className="service-num">{srv.id}</span>
                    <h3 className="service-title">{srv.title}</h3>
                  </div>

                  <div className="service-right">
                    <span className="service-sub">{srv.subtitle}</span>
                    <span className="service-arrow">{isHovered ? '→' : '↘'}</span>
                  </div>
                </div>

                <div className="service-expand-box">
                  <p className="service-desc">{srv.desc}</p>
                  <div className="service-micro-solar">
                    <span className="micro-line" />
                    <span className="micro-label">GARANTIA DE EXECUÇÃO INCLUÍDA</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-comercial-stack {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--color-border-dark);
        }

        .service-item-row {
          border-top: 1px solid var(--color-border-dark);
          padding: 2.25rem 0;
          cursor: pointer;
          transition: background-color var(--transition-fast), padding var(--transition-fast);
        }

        .service-item-row.active {
          background: rgba(255, 196, 0, 0.04);
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          border-radius: 16px;
        }

        .service-row-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .service-num {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .service-title {
          font-size: clamp(1.8rem, 4vw, 3.8rem);
          color: var(--color-offwhite);
        }

        .service-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .service-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-grey-muted);
        }

        .service-arrow {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          color: var(--accent-color);
        }

        .service-expand-box {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          opacity: 0;
        }

        .service-item-row.active .service-expand-box {
          max-height: 180px;
          opacity: 1;
          margin-top: 1.5rem;
          padding-left: 3.5rem;
        }

        .service-desc {
          font-size: 1.1rem;
          color: rgba(247, 246, 241, 0.85);
          line-height: 1.6;
          max-width: 750px;
          margin-bottom: 1rem;
        }

        .service-micro-solar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .micro-line {
          height: 2px;
          width: 30px;
          background: var(--accent-color);
        }

        .micro-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .service-row-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .service-item-row.active .service-expand-box {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

window.ServicesComercial = ServicesComercial;
