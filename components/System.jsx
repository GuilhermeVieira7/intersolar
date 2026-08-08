const { useState } = React;

const System = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(2); // 0 to 5

  const steps = [
    {
      num: '[01]',
      title: 'DIAGNÓSTICO',
      subtitle: 'HISTÓRICO E INFRAESTRUTURA',
      desc: 'Análise detalhada das faturas anteriores de energia, padrão de entrada, inclinação do imóvel e tipo de estrutura do telhado.',
      metric: 'ENTRADA DE DADOS'
    },
    {
      num: '[02]',
      title: 'ANÁLISE',
      subtitle: 'IRRADIÂNCIA E SOMBREAMENTO',
      desc: 'Simulação computacional do ângulo de incidência solar em Parauapebas ao longo das 4 estações do ano.',
      metric: 'ESTUDO DE RADIAÇÃO'
    },
    {
      num: '[03]',
      title: 'DIMENSIONAMENTO',
      subtitle: 'ARQUITETURA DO SISTEMA',
      desc: 'Definição exata da quantidade de módulos, potência dos inversores e diagrama trifásico/monofásico.',
      metric: 'ENGENHARIA DE PICO'
    },
    {
      num: '[04]',
      title: 'PROJETO',
      subtitle: 'ANOTAÇÃO DE RESPONSABILIDADE TÉCNICA',
      desc: 'Emissão da ART por engenheiro responsável e elaboração dos memoriais descritivos normatizados.',
      metric: 'MEMORIAL TÉCNICO'
    },
    {
      num: '[05]',
      title: 'INSTALAÇÃO',
      subtitle: 'MONTAGEM DE CAMPO',
      desc: 'Montagem mecânica dos trilhos, fixação dos painéis fotovoltaicos e cabeamento blindado contra intempéries.',
      metric: 'EXECUÇÃO FÍSICA'
    },
    {
      num: '[06]',
      title: 'HOMOLOGAÇÃO',
      subtitle: 'VISTORIA E TROCA DE MEDIDOR',
      desc: 'Submissão e acompanhamento da vistoria técnica da distribuidora até a liberação final do medidor bidirecional.',
      metric: 'SISTEMA OPERACIONAL'
    }
  ];

  return (
    <section className="section section-dark" id="sistema-jornada">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">METODOLOGIA DE EXECUÇÃO</span>
          <h2 className="section-title">UM SISTEMA. UMA JORNADA.</h2>
          <p className="section-desc">
            Acompanhe o fluxo rigoroso que transforma uma análise preliminar em um ativo gerador de energia homologado.
          </p>
        </div>

        {/* Technical Progress Bar */}
        <div className="system-progress-container">
          <div className="system-progress-line">
            <div
              className="system-progress-fill"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="system-steps-nav">
            {steps.map((st, idx) => (
              <button
                type="button"
                key={st.num}
                className={`system-step-btn ${idx === activeStep ? 'active' : ''} ${idx < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setCursorState({ text: `ETAPA ${idx + 1}` })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <span className="step-num">{st.num}</span>
                <span className="step-label">{st.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step Display Card */}
        <div className="system-active-card glass-card">
          <div className="system-card-header">
            <div className="system-card-badge">
              <span className="badge-dot" />
              <span>ETAPA {steps[activeStep].num} — {steps[activeStep].metric}</span>
            </div>
            <span className="system-card-counter">0{activeStep + 1} / 06</span>
          </div>

          <div className="system-card-body">
            <div className="system-body-info">
              <span className="system-subtitle">{steps[activeStep].subtitle}</span>
              <h3 className="system-title">{steps[activeStep].title}</h3>
              <p className="system-desc">{steps[activeStep].desc}</p>
            </div>

            <div className="system-tech-visual">
              <div className="tech-box">
                <span className="tech-code">STATUS_REG: NORMATIZADO</span>
                <div className="tech-wave">
                  <div className="wave-bar" style={{ height: '40%' }} />
                  <div className="wave-bar" style={{ height: '70%' }} />
                  <div className="wave-bar" style={{ height: '100%' }} />
                  <div className="wave-bar" style={{ height: '60%' }} />
                  <div className="wave-bar" style={{ height: '85%' }} />
                </div>
                <span className="tech-val">INTERSOLAR_OS_{activeStep + 1}04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .system-progress-container {
          position: relative;
          margin-bottom: 3.5rem;
        }

        .system-progress-line {
          position: absolute;
          top: 20px;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(244, 242, 234, 0.1);
          z-index: 1;
        }

        .system-progress-fill {
          height: 100%;
          background: var(--accent-color);
          box-shadow: 0 0 12px var(--accent-glow);
          transition: width 0.4s ease;
        }

        .system-steps-nav {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
        }

        .system-step-btn {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--color-muted-grey);
          transition: color var(--transition-fast);
        }

        .system-step-btn.active, .system-step-btn.completed {
          color: var(--color-warm-white);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--color-solar-black);
          padding: 0.4rem 0.8rem;
          border: 1px solid var(--color-border-dark);
          border-radius: 99px;
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }

        .system-step-btn.active .step-num {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .step-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        .system-active-card {
          margin-top: 2rem;
        }

        .system-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .system-card-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-color);
          animation: pulseGlow 1.5s infinite;
        }

        .system-card-counter {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-muted-grey);
        }

        .system-card-body {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .system-subtitle {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .system-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          margin-bottom: 1rem;
          color: var(--color-warm-white);
        }

        .system-desc {
          font-size: 1.15rem;
          color: rgba(244, 242, 234, 0.8);
          line-height: 1.6;
        }

        .tech-box {
          background: rgba(11, 13, 12, 0.8);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tech-code {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-color);
        }

        .tech-wave {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 50px;
        }

        .wave-bar {
          flex: 1;
          background: var(--accent-color);
          border-radius: 2px;
          opacity: 0.8;
        }

        .tech-val {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
        }

        @media (max-width: 768px) {
          .system-steps-nav {
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1rem;
          }
          .system-card-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.System = System;
