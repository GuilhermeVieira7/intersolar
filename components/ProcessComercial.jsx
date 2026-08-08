const { useState } = React;

const ProcessComercial = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { num: '01', title: 'DIAGNÓSTICO', desc: 'Entendemos seu imóvel, consumo atual e objetivo de economia.' },
    { num: '02', title: 'ANÁLISE', desc: 'Avaliamos as condições de incidência solar e estrutura técnica para a solução.' },
    { num: '03', title: 'DIMENSIONAMENTO', desc: 'Definimos a potência dos painéis e inversores normatizados para sua demanda.' },
    { num: '04', title: 'PROJETO', desc: 'Elaboramos os memoriais e a ART perante a distribuidora local de energia.' },
    { num: '05', title: 'INSTALAÇÃO', desc: 'Executamos a montagem física dos trilhos, cabeamento e inversores no imóvel.' },
    { num: '06', title: 'HOMOLOGAÇÃO', desc: 'Acompanhamos todo o trâmite de vistoria até a liberação do medidor bidirecional.' }
  ];

  return (
    <section className="section section-light-theme" id="como-funciona">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '3.5rem' }}>
          <span className="mono-tag">JORNADA DE IMPLANTAÇÃO</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', marginBottom: '1rem', color: 'var(--color-black-text)' }}>Do primeiro contato ao sistema funcionando.</h2>
        </div>

        {/* Timeline Bar */}
        <div className="process-timeline-wrapper">
          <div className="timeline-line">
            <div className="timeline-fill" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }} />
          </div>

          <div className="timeline-nodes-grid">
            {steps.map((st, idx) => (
              <div
                key={st.num}
                className={`timeline-node-card ${idx === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setCursorState({ text: st.title })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <span className="node-step-num">{st.num}</span>
                <h3 className="node-step-title">{st.title}</h3>
                <p className="node-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-timeline-wrapper {
          position: relative;
        }

        .timeline-line {
          position: absolute;
          top: 30px;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(8, 9, 8, 0.1);
          z-index: 1;
        }

        .timeline-fill {
          height: 100%;
          background: var(--color-tech-green);
          transition: width 0.4s ease;
        }

        .timeline-nodes-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }

        .timeline-node-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .timeline-node-card:hover, .timeline-node-card.active {
          transform: translateY(-4px);
          border-color: var(--color-tech-green);
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .timeline-node-card.active {
          border-top: 3px solid var(--accent-color);
        }

        .node-step-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-tech-green);
        }

        .node-step-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-black-text);
        }

        .node-step-desc {
          font-size: 0.8rem;
          color: var(--color-grey-muted);
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .timeline-line { display: none; }
          .timeline-nodes-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.ProcessComercial = ProcessComercial;
