const { useState } = React;

const FLOW_STEPS = [
  {
    num: '01',
    label: 'SOL',
    icon: 'Sun',
    title: 'Energia que chega todos os dias',
    desc: 'A radiação solar é captada pelos módulos instalados no imóvel.',
  },
  {
    num: '02',
    label: 'PAINÉIS SOLARES',
    icon: 'SolarPanel',
    title: 'A luz vira eletricidade',
    desc: 'Os painéis fotovoltaicos transformam a luz solar em energia elétrica.',
  },
  {
    num: '03',
    label: 'INVERSOR',
    icon: 'Zap',
    title: 'Energia pronta para uso',
    desc: 'O inversor converte a energia gerada para utilização no imóvel.',
  },
  {
    num: '04',
    label: 'IMÓVEL',
    icon: 'House',
    title: 'Sua energia trabalhando por você',
    desc: 'A energia gerada passa a alimentar os equipamentos do imóvel.',
  },
];

const EnergyFlow = ({ setCursorState }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="section section-light" id="como-funciona">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag eyebrow-line">COMO FUNCIONA</span>
          <h2 className="section-title">Do sol ao seu imóvel.</h2>
          <p className="section-desc">Quatro etapas simples transformam luz solar em energia pronta para uso.</p>
        </div>

        <div className="flow-track">
          <div className="flow-connector" aria-hidden="true">
            <div className="flow-connector-fill" style={{ width: `${(active / (FLOW_STEPS.length - 1)) * 100}%` }} />
          </div>

          <div className="flow-steps-grid">
            {FLOW_STEPS.map((step, idx) => {
              const Icon = window.Icons[step.icon];
              return (
                <button
                  type="button"
                  key={step.num}
                  className={`flow-step ${idx === active ? 'is-active' : ''}`}
                  onMouseEnter={() => { setActive(idx); setCursorState && setCursorState({ text: step.label }); }}
                  onFocus={() => setActive(idx)}
                  onMouseLeave={() => setCursorState && setCursorState({ text: null })}
                >
                  <div className="flow-step-media">
                    <span className="flow-step-num">{step.num}</span>
                    <Icon size={34} strokeWidth={1.5} />
                  </div>
                  <span className="flow-step-label">{step.label}</span>
                  <h3 className="flow-step-title">{step.title}</h3>
                  <p className="flow-step-desc">{step.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .section-header-wrap { margin-bottom: 3.5rem; max-width: 640px; }

        .section-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          margin-top: 0.9rem;
          margin-bottom: 0.9rem;
          color: var(--color-text);
        }

        .section-desc { font-size: 1.1rem; color: var(--color-muted); }

        .flow-track { position: relative; }

        .flow-connector {
          position: absolute;
          top: 52px;
          left: 6%;
          width: 88%;
          height: 2px;
          background: var(--color-border);
          z-index: 1;
        }

        .flow-connector-fill {
          height: 100%;
          background: var(--color-yellow);
          transition: width var(--transition-smooth);
        }

        .flow-steps-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .flow-step {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 1.75rem 1.5rem 2rem;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transition: border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .flow-step:hover, .flow-step.is-active {
          border-color: var(--color-yellow);
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(8, 46, 32, 0.08);
        }

        .flow-step-media {
          width: 100%;
          height: 88px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--color-green-dark), var(--color-green-deep));
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .flow-step-num {
          position: absolute;
          top: 0.6rem;
          left: 0.85rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: rgba(247, 245, 238, 0.55);
        }

        .flow-step-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--color-green);
          font-weight: 500;
        }

        .flow-step-title {
          font-size: 1.2rem;
          color: var(--color-text);
          line-height: 1.15;
        }

        .flow-step-desc { font-size: 0.92rem; color: var(--color-muted); line-height: 1.5; }

        @media (max-width: 900px) {
          .flow-connector { display: none; }
          .flow-steps-grid { grid-template-columns: 1fr; gap: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

window.EnergyFlow = EnergyFlow;
