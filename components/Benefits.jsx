const Benefits = ({ setCursorState }) => {
  const benefitCards = [
    {
      num: '01',
      title: 'ECONOMIA',
      subtitle: 'REDUÇÃO DE CUSTO PASSIVO',
      desc: 'Uma estratégia direta para reduzir a dependência da tarifa convencional da distribuidora e estabilizar os custos operacionais do imóvel.'
    },
    {
      num: '02',
      title: 'GERAÇÃO PRÓPRIA',
      subtitle: 'AUTONOMIA PATRIMONIAL',
      desc: 'Produza energia limpa no próprio imóvel, transformando o espaço da sua cobertura ou solo em um ativo gerador de recursos.'
    },
    {
      num: '03',
      title: 'PLANEJAMENTO',
      subtitle: 'ESTRATÉGIA DE LONGO PRAZO',
      desc: 'Transforme o custo de energia em uma decisão financeira previsível e protegida das variações das bandeiras tarifárias.'
    }
  ];

  return (
    <section className="section section-light-theme" id="beneficios">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '4rem' }}>
          <span className="mono-tag">PILARES DE VALOR</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', color: 'var(--color-black-text)' }}>Por que energia solar?</h2>
        </div>

        <div className="benefits-grid">
          {benefitCards.map((b) => (
            <div
              key={b.num}
              className="benefit-card"
              onMouseEnter={() => setCursorState({ text: b.title })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span className="b-num">{b.num}</span>
              <span className="b-sub">{b.subtitle}</span>
              <h3 className="b-title">{b.title}</h3>
              <p className="b-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .benefit-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: 24px;
          padding: clamp(2rem, 3vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-tech-green);
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
        }

        .b-num {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-tech-green);
        }

        .b-sub {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-grey-muted);
          letter-spacing: 0.1em;
        }

        .b-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          color: var(--color-black-text);
        }

        .b-desc {
          font-size: 1.05rem;
          color: var(--color-grey-muted);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.Benefits = Benefits;
