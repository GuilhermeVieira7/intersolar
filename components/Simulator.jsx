const { useState } = React;

const Simulator = ({ setCursorState }) => {
  const [monthlySpend, setMonthlySpend] = useState(850);
  const [propertyType, setPropertyType] = useState('RESIDENCIAL');

  const mult = propertyType === 'RESIDENCIAL' ? 0.9 : propertyType === 'COMERCIAL' ? 0.92 : 0.94;
  const estimatedMonthlySavings = Math.round(monthlySpend * mult);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const estimatedKwp = (monthlySpend / 140).toFixed(1);

  return (
    <section className="section section-white-theme" id="simulador">
      <div className="container">
        <div className="simulador-header">
          <span className="mono-tag eyebrow-line">FERRAMENTA INTERATIVA DE ESTIMATIVA</span>
          <h2 className="simulador-title">Quanto seu imóvel pode gerar?</h2>
          <p className="simulador-desc">Faça uma estimativa inicial e descubra o potencial de uma solução solar para a sua fatura.</p>
        </div>

        <div className="simulador-card card">
          <div className="simulator-grid">
            <div className="sim-inputs">
              <label className="sim-label">1. Qual é o seu gasto mensal com energia?</label>
              <div className="sim-spend-input">
                <span className="sim-currency">R$</span>
                <input type="number" min="100" max="10000" step="50" value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} />
              </div>
              <input type="range" min="100" max="10000" step="50" value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} />

              <label className="sim-label sim-label-second">2. Qual é o tipo do imóvel?</label>
              <div className="property-types-grid">
                {['RESIDENCIAL', 'COMERCIAL', 'RURAL'].map((type) => (
                  <button key={type} type="button" className={`sim-type-btn ${propertyType === type ? 'is-active' : ''}`} onClick={() => setPropertyType(type)}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="sim-result">
              <div>
                <span className="sim-result-badge">SIMULAÇÃO INSTANTÂNEA</span>
                <div className="sim-result-row">
                  <span className="sim-result-label">Economia estimada</span>
                  <h3 className="sim-result-value">R$ {estimatedMonthlySavings.toLocaleString('pt-BR')} / mês</h3>
                </div>
                <div className="sim-result-row">
                  <span className="sim-result-label">Potencial anual</span>
                  <h3 className="sim-result-value sim-value-yellow">R$ {estimatedAnnualSavings.toLocaleString('pt-BR')} / ano</h3>
                </div>
                <div className="sim-result-row">
                  <span className="sim-result-label">Sistema estimado</span>
                  <h3 className="sim-result-value sim-value-white">{estimatedKwp} kWp</h3>
                </div>
              </div>

              <div>
                <p className="sim-disclaimer">* Estimativa ilustrativa. O dimensionamento e a economia reais dependem da análise técnica do imóvel.</p>
                <a
                  href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Fiz+uma+simula%C3%A7%C3%A3o+no+site+e+quero+uma+an%C3%A1lise+real."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary sim-cta"
                  onMouseEnter={() => setCursorState && setCursorState({ text: 'ANÁLISE' })}
                  onMouseLeave={() => setCursorState && setCursorState({ text: null })}
                >
                  <span>Quero uma análise real</span>
                  <window.Icons.ArrowRight size={18} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .simulador-header { text-align: center; max-width: 700px; margin: 0 auto 3rem; }
        .simulador-title { font-size: clamp(2.1rem, 4.6vw, 3.2rem); margin-top: 0.9rem; margin-bottom: 0.75rem; color: var(--color-text); }
        .simulador-desc { font-size: 1.1rem; color: var(--color-muted); }

        .simulador-card { padding: 1.5rem; background: var(--color-offwhite-card); }

        .simulator-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }

        .sim-label { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; display: block; margin-bottom: 1rem; color: var(--color-text); }
        .sim-label-second { margin-top: 2rem; }

        .sim-spend-input {
          display: flex; align-items: center; gap: 0.5rem; background: var(--color-white);
          border: 1px solid var(--color-border); border-radius: 16px; padding: 0.75rem 1rem; margin-bottom: 1rem;
        }
        .sim-currency { font-family: var(--font-mono); font-size: 1.2rem; font-weight: 500; color: var(--color-green); }
        .sim-spend-input input {
          font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; border: none; outline: none;
          background: transparent; width: 100%; color: var(--color-text);
        }

        .property-types-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 0.75rem; }
        .sim-type-btn {
          background: var(--color-white); color: var(--color-text); border: 1px solid var(--color-border);
          border-radius: 14px; padding: 0.85rem 0.4rem; cursor: pointer;
          font-family: var(--font-mono); font-size: 0.68rem; font-weight: 500;
        }
        .sim-type-btn.is-active { background: var(--color-green-deep); color: var(--color-yellow); border-color: var(--color-green-deep); }

        .sim-result { background: var(--color-green-deep); color: var(--color-offwhite); border-radius: 20px; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; }
        .sim-result-badge { font-family: var(--font-mono); font-size: 0.68rem; color: var(--color-yellow-light); }
        .sim-result-row { margin: 1.1rem 0; }
        .sim-result-label { font-family: var(--font-mono); font-size: 0.62rem; color: var(--color-muted-onDark); display: block; margin-bottom: 0.25rem; }
        .sim-result-value { font-family: var(--font-mono); font-size: 1.5rem; font-weight: 500; color: var(--color-offwhite); }
        .sim-value-yellow { color: var(--color-yellow); }
        .sim-value-white { color: var(--color-offwhite); }

        .sim-disclaimer { font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-muted-onDark); margin: 1rem 0; }
        .sim-cta { width: 100%; justify-content: center; }
      `}</style>
    </section>
  );
};

window.Simulator = Simulator;
