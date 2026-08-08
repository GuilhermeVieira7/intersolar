const { useState } = React;

const Services = ({ setCursorState }) => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const servicesList = [
    {
      id: '01',
      title: 'PROJETO',
      subtitle: 'ENGENHARIA FOTOVOLTAICA',
      desc: 'Transformamos o consumo e as características do imóvel em uma solução fotovoltaica dimensionada para a realidade do cliente, com modelagem 3D e análise de irradiância regional.'
    },
    {
      id: '02',
      title: 'DIMENSIONAMENTO',
      subtitle: 'CÁLCULO DE POTÊNCIA DE PICO',
      desc: 'Análise minuciosa da demanda energética atual e projeção de consumo futuro para evitar subdimensionamento ou desperdício de investimento inicial.'
    },
    {
      id: '03',
      title: 'INSTALAÇÃO',
      subtitle: 'MONTAGEM E COMISSIONAMENTO',
      desc: 'Fixação técnica em telhados ou solo, cabeamento normatizado, proteção contra surtos (DPS) e integração de inversores de alta eficiência.'
    },
    {
      id: '04',
      title: 'HOMOLOGAÇÃO',
      subtitle: 'TRAMITAÇÃO REGULATÓRIA',
      desc: 'Gestão completa da documentação e vistoria junto à concessionária de energia local até a substituição do medidor para o modelo bidirecional.'
    },
    {
      id: '05',
      title: 'ACOMPANHAMENTO',
      subtitle: 'MONITORAMENTO & SUPORTE',
      desc: 'Suporte pós-instalação para garantia de operacionalidade e instrução no uso de aplicativo de monitoramento de geração de energia em tempo real.'
    }
  ];

  return (
    <section className="section section-dark" id="servicos">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">CAPÍTULO 03 · O SISTEMA</span>
          <h2 className="section-title">Engenharia de Ponta a Ponta.</h2>
        </div>

        <div className="services-editorial-list">
          {servicesList.map((srv, idx) => {
            const isSelected = hoveredIdx === idx;
            return (
              <div
                key={srv.id}
                className={`service-row ${isSelected ? 'selected' : ''}`}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setCursorState({ text: 'EXPLORAR' });
                }}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <div className="service-row-main">
                  <div className="service-row-left">
                    <span className="service-id">{srv.id}</span>
                    <h3 className="service-name">{srv.title}</h3>
                  </div>

                  <div className="service-row-right">
                    <span className="service-sub">{srv.subtitle}</span>
                    <span className="service-expand-icon">{isSelected ? '—' : '+'}</span>
                  </div>
                </div>

                <div className="service-row-expand">
                  <div className="service-expand-content">
                    <p className="service-desc-text">{srv.desc}</p>
                    <div className="service-energy-pulse">
                      <span className="pulse-line" />
                      <span className="pulse-tag">SOLUÇÃO COMPLETA INCLUÍDA</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-editorial-list {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--color-border-dark);
        }

        .service-row {
          border-top: 1px solid var(--color-border-dark);
          padding: 2.5rem 0;
          transition: background-color var(--transition-smooth), padding var(--transition-smooth);
          cursor: pointer;
        }

        .service-row.selected {
          background-color: rgba(255, 196, 0, 0.03);
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          border-radius: 16px;
        }

        .service-row-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-row-left {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .service-id {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .service-name {
          font-size: clamp(2rem, 4.5vw, 4rem);
          color: var(--color-warm-white);
          line-height: 1;
        }

        .service-row-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .service-sub {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.1em;
        }

        .service-expand-icon {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          color: var(--accent-color);
        }

        .service-row-expand {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
          opacity: 0;
        }

        .service-row.selected .service-row-expand {
          max-height: 200px;
          opacity: 1;
        }

        .service-expand-content {
          padding-top: 1.75rem;
          margin-left: 5rem;
          max-width: 800px;
        }

        .service-desc-text {
          font-size: 1.15rem;
          color: rgba(244, 242, 234, 0.85);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .service-energy-pulse {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .pulse-line {
          height: 2px;
          width: 40px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
        }

        .pulse-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .service-row-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .service-expand-content {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

window.Services = Services;
