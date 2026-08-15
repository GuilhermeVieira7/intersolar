const BENEFITS = [
  { icon: 'TrendingDown', title: 'Redução da dependência da rede', desc: 'Gerar parte da própria energia diminui a dependência da tarifa da concessionária.' },
  { icon: 'Sun', title: 'Aproveitamento da energia solar', desc: 'Uso direto de um recurso abundante na região de Parauapebas.' },
  { icon: 'Leaf', title: 'Sustentabilidade', desc: 'Geração de energia limpa, com menor impacto ambiental ao longo do tempo.' },
  { icon: 'House', title: 'Valorização do imóvel', desc: 'Um sistema fotovoltaico é um ativo agregado à propriedade.' },
  { icon: 'Gauge', title: 'Previsibilidade energética', desc: 'Mais controle sobre o comportamento do consumo de energia do imóvel.' },
  { icon: 'ShieldCheck', title: 'Solução personalizada', desc: 'Cada projeto é dimensionado de acordo com a realidade do cliente.' },
];

const Benefits = ({ setCursorState }) => {
  return (
    <section className="section section-light section-light-theme" id="beneficios">
      <div className="container">
        <div className="benefits-header">
          <span className="mono-tag eyebrow-line">BENEFÍCIOS</span>
          <h2 className="benefits-title">Por que considerar energia solar?</h2>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((b) => {
            const Icon = window.Icons[b.icon];
            return (
              <div
                key={b.title}
                className="benefit-item"
                onMouseEnter={() => setCursorState && setCursorState({ text: null })}
              >
                <div className="benefit-icon"><Icon size={24} strokeWidth={1.6} /></div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .benefits-header { max-width: 640px; margin-bottom: 3rem; }

        .benefits-title {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          margin-top: 0.9rem;
          color: var(--color-text);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.25rem 2rem;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-top: 1.5rem;
          border-top: 2px solid var(--color-border);
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--color-green-deep);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
        }

        .benefit-title { font-size: 1.2rem; color: var(--color-text); }
        .benefit-desc { font-size: 0.95rem; color: var(--color-muted); line-height: 1.55; }

        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: 1fr; gap: 1.75rem; }
        }
      `}</style>
    </section>
  );
};

window.Benefits = Benefits;
