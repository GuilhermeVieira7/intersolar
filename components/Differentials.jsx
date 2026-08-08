const Differentials = ({ setCursorState }) => {
  const systemParts = [
    { name: 'PROJETO', role: 'Estudo de irradiância e dimensionamento customizado.' },
    { name: 'ENGENHARIA', role: 'ART e memoriais técnicos normatizados.' },
    { name: 'INSTALAÇÃO', role: 'Montagem mecânica e elétrica especializada.' },
    { name: 'HOMOLOGAÇÃO', role: 'Gestão regulatória junto à concessionária local.' },
    { name: 'ACOMPANHAMENTO', role: 'Monitoramento pós-ligamento e suporte técnico.' }
  ];

  return (
    <section className="section section-dark-theme" id="diferencial">
      <div className="container">
        <div className="diff-header" style={{ marginBottom: '4rem' }}>
          <span className="mono-tag">VISÃO DE ENGENHARIA INTEGRADA</span>
          <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)', marginTop: '1rem', color: 'var(--color-offwhite)' }}>
            Não é só colocar painel no telhado.
          </h2>
          <h3 style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', color: 'var(--accent-color)', marginTop: '0.5rem', fontStyle: 'italic', fontWeight: 400 }}>
            É fazer o sistema inteiro funcionar.
          </h3>
        </div>

        <div className="differentials-system-grid">
          {systemParts.map((part, idx) => (
            <div
              key={part.name}
              className="diff-system-card glass-card"
              onMouseEnter={() => setCursorState({ text: part.name })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span className="diff-system-num">0{idx + 1}</span>
              <h4 className="diff-system-name">{part.name}</h4>
              <p className="diff-system-role">{part.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .differentials-system-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }

        .diff-system-card {
          padding: 2rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .diff-system-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }

        .diff-system-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-color);
          font-weight: 700;
        }

        .diff-system-name {
          font-size: 1.2rem;
          color: var(--color-offwhite);
          line-height: 1.1;
        }

        .diff-system-role {
          font-size: 0.85rem;
          color: rgba(247, 246, 241, 0.7);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .differentials-system-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.Differentials = Differentials;
