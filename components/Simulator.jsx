const { useState } = React;

const Simulator = ({ setCursorState }) => {
  const [monthlySpend, setMonthlySpend] = useState(850);
  const [propertyType, setPropertyType] = useState('RESIDENCIAL');

  // Multipliers for illustrative formula
  const propertyMultipliers = {
    RESIDENCIAL: 0.90,
    COMERCIAL: 0.92,
    RURAL: 0.94
  };

  const mult = propertyMultipliers[propertyType] || 0.90;
  const estimatedMonthlySavings = Math.round(monthlySpend * mult);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const estimatedKwp = (monthlySpend / 140).toFixed(1);

  return (
    <section className="section section-light-theme" id="simulador">
      <div className="container">
        <div className="simulator-header">
          <span className="mono-tag">FERRAMENTA INTERATIVA DE ESTIMATIVA</span>
          <h2 className="simulator-h1">Quanto seu imóvel pode gerar?</h2>
          <p className="simulator-sub">
            Faça uma estimativa inicial e descubra o potencial de uma solução solar para a sua fatura de energia.
          </p>
        </div>

        <div className="simulator-card-frame">
          <div className="simulator-grid">
            {/* Input Column */}
            <div className="sim-inputs-col">
              <div className="sim-group">
                <label className="sim-label">1. QUAL É O SEU GASTO MÉDIO MENSAL COM ENERGIA?</label>

                <div className="sim-currency-box">
                  <span className="currency-symbol">R$</span>
                  <input
                    type="number"
                    min="100"
                    max="10000"
                    step="50"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="sim-number-input"
                  />
                  <span className="per-month-tag">/ MÊS</span>
                </div>

                <div className="sim-range-wrap">
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="50"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  />
                  <div className="range-bounds">
                    <span>R$ 100</span>
                    <span>R$ 10.000+</span>
                  </div>
                </div>
              </div>

              <div className="sim-group">
                <label className="sim-label">2. QUAL É O TIPO DO IMÓVEL?</label>
                <div className="property-types-grid">
                  {['RESIDENCIAL', 'COMERCIAL', 'RURAL'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`prop-type-btn ${propertyType === type ? 'active' : ''}`}
                      onClick={() => setPropertyType(type)}
                      onMouseEnter={() => setCursorState({ text: type })}
                      onMouseLeave={() => setCursorState({ text: null })}
                    >
                      <span className="prop-icon">
                        {type === 'RESIDENCIAL' ? '🏠' : type === 'COMERCIAL' ? '🏢' : '🌾'}
                      </span>
                      <span className="prop-name">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="sim-results-col">
              <div className="results-inner-card">
                <div className="results-top-badge">
                  <span className="badge-pulse" />
                  <span>SIMULAÇÃO INSTANTÂNEA</span>
                </div>

                <div className="results-metric-block">
                  <span className="metric-title">POTENCIAL DE GERAÇÃO</span>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${Math.min((monthlySpend / 10000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="results-values-grid">
                  <div className="res-val-box">
                    <span className="res-lbl">ECONOMIA ESTIMADA</span>
                    <span className="res-val green-text">R$ {estimatedMonthlySavings.toLocaleString('pt-BR')} <small>/ mês</small></span>
                  </div>

                  <div className="res-val-box">
                    <span className="res-lbl">POTENCIAL ANUAL</span>
                    <span className="res-val yellow-text">R$ {estimatedAnnualSavings.toLocaleString('pt-BR')} <small>/ ano</small></span>
                  </div>

                  <div className="res-val-box">
                    <span className="res-lbl">SISTEMA ESTIMADO</span>
                    <span className="res-val white-text">{estimatedKwp} <small>kWp</small></span>
                  </div>
                </div>

                <div className="sim-disclaimer-box">
                  <p>
                    * Estimativa ilustrativa baseada em médias tarifárias regionais. O dimensionamento e a economia reais dependem da análise técnica minuciosa do imóvel.
                  </p>
                </div>

                <a
                  href={`https://wa.me/5594999999999?text=Ol%C3%A1%21+Fiz+uma+simula%C3%A7%C3%A3o+no+site+comercial+da+Intersolar.%0AGasto+mensal%3A+R%24+${monthlySpend}+%28${propertyType}%29.%0AGostaria+de+solicitar+uma+an%C3%A1lise+t%C3%A9cnica+real.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary sim-cta-btn"
                  onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
                  onMouseLeave={() => setCursorState({ text: null })}
                >
                  <span>QUERO UMA ANÁLISE REAL</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .simulator-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3.5rem auto;
        }

        .simulator-h1 {
          font-size: clamp(2.5rem, 5vw, 5rem);
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: var(--color-black-text);
        }

        .simulator-sub {
          font-size: 1.15rem;
          color: var(--color-grey-muted);
        }

        .simulator-card-frame {
          background: var(--color-offwhite-card);
          border: 1px solid var(--color-border-light);
          border-radius: 28px;
          padding: clamp(1.5rem, 4vw, 3.5rem);
        }

        .simulator-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
        }

        .sim-group {
          margin-bottom: 2.25rem;
        }

        .sim-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-black-text);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 1rem;
        }

        .sim-currency-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: 16px;
          padding: 0.75rem 1.25rem;
          margin-bottom: 1rem;
        }

        .currency-symbol {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-tech-green);
        }

        .sim-number-input {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          color: var(--color-black-text);
        }

        .per-month-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-grey-muted);
        }

        .range-bounds {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-grey-muted);
          margin-top: 0.5rem;
        }

        .property-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .prop-type-btn {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: 16px;
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: border-color var(--transition-fast), transform var(--transition-fast), background-color var(--transition-fast);
        }

        .prop-type-btn:hover {
          border-color: var(--color-tech-green);
        }

        .prop-type-btn.active {
          border-color: var(--accent-color);
          background: var(--color-dark-bg);
          color: var(--color-offwhite);
        }

        .prop-icon { font-size: 1.5rem; }
        .prop-name { font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; }

        .results-inner-card {
          background: var(--color-dark-bg);
          color: var(--color-offwhite);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .results-top-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .results-metric-block {
          margin-bottom: 1.75rem;
        }

        .metric-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-grey-muted);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .progress-bar-bg {
          height: 8px;
          width: 100%;
          background: rgba(247, 246, 241, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-solar-orange), var(--accent-color));
          transition: width 0.3s ease;
        }

        .results-values-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .res-val-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .res-lbl {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-grey-muted);
        }

        .res-val {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
        }
        .res-val small { font-size: 0.85rem; font-weight: 400; color: var(--color-grey-muted); }

        .green-text { color: #00E676; }
        .yellow-text { color: var(--accent-color); }
        .white-text { color: var(--color-offwhite); }

        .sim-disclaimer-box {
          border-top: 1px solid var(--color-border-dark);
          padding-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .sim-disclaimer-box p {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-grey-muted);
          line-height: 1.5;
        }

        .sim-cta-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .simulator-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.Simulator = Simulator;
