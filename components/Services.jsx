const { useState } = React;

const SOLUTIONS = [
  {
    id: '01',
    icon: 'House',
    title: 'Energia Solar Residencial',
    desc: 'Para casas e propriedades que querem reduzir a dependência da energia da concessionária.',
  },
  {
    id: '02',
    icon: 'Building2',
    title: 'Energia Solar Comercial',
    desc: 'Soluções para estabelecimentos que possuem consumo elevado e querem maior previsibilidade energética.',
  },
  {
    id: '03',
    icon: 'Factory',
    title: 'Energia Solar Empresarial',
    desc: 'Projetos dimensionados conforme as características e necessidades de cada operação.',
  },
];

const Services = ({ setCursorState }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section section-white" id="solucoes">
      <div className="container">
        <div className="solucoes-header">
          <span className="mono-tag eyebrow-line">SOLUÇÕES</span>
          <h2 className="solucoes-title">Um sistema fotovoltaico para cada tipo de imóvel.</h2>
        </div>

        <div className="solucoes-list">
          {SOLUTIONS.map((s, idx) => {
            const Icon = window.Icons[s.icon];
            return (
              <div
                key={s.id}
                className={`solucao-row ${hovered === idx ? 'is-active' : ''}`}
                onMouseEnter={() => { setHovered(idx); setCursorState && setCursorState({ text: 'SOLUÇÃO' }); }}
                onMouseLeave={() => { setHovered(null); setCursorState && setCursorState({ text: null }); }}
              >
                <span className="solucao-id">{s.id}</span>
                <div className="solucao-icon"><Icon size={30} strokeWidth={1.5} /></div>
                <h3 className="solucao-title">{s.title}</h3>
                <p className="solucao-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solucoes-header { max-width: 700px; margin-bottom: 3.5rem; }

        .solucoes-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          margin-top: 0.9rem;
          color: var(--color-text);
        }

        .solucoes-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-border);
        }

        .solucao-row {
          display: grid;
          grid-template-columns: 60px 70px 1fr 1.3fr;
          align-items: center;
          gap: 1.75rem;
          padding: 2.25rem 0;
          border-bottom: 1px solid var(--color-border);
          transition: background-color var(--transition-fast), padding-left var(--transition-fast);
        }

        .solucao-row.is-active {
          background-color: var(--color-offwhite);
          padding-left: 1rem;
        }

        .solucao-id {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-muted);
        }

        .solucao-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--color-green-deep);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast);
        }

        .solucao-row.is-active .solucao-icon { background: var(--color-green); }

        .solucao-title {
          font-size: clamp(1.35rem, 2.4vw, 1.85rem);
          color: var(--color-text);
        }

        .solucao-desc {
          font-size: 1rem;
          color: var(--color-muted);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .solucao-row {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            text-align: left;
          }
          .solucao-id { display: none; }
        }
      `}</style>
    </section>
  );
};

window.Services = Services;
