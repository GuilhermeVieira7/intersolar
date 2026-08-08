const ProjectsComercial = ({ setCursorState }) => {
  const projects = [
    { id: 1, title: 'INSTALAÇÃO RESIDENCIAL CARAJÁS', loc: 'Parauapebas / PA', type: 'RESIDENCIAL FOTOVOLTAICO', span: 'col-span-8', tag: '[FOTO REAL DO PROJETO 01]' },
    { id: 2, title: 'UNIDADE COMERCIAL CIDADE NOVA', loc: 'Parauapebas / PA', type: 'COMERCIAL TRIFÁSICO', span: 'col-span-4', tag: '[FOTO REAL DO PROJETO 02]' },
    { id: 3, title: 'PROJETO RURAL REGIONAL', loc: 'Região de Parauapebas', type: 'SISTEMA ISOLADO', span: 'col-span-6', tag: '[FOTO REAL DO PROJETO 03]' },
    { id: 4, title: 'HOMOLOGAÇÃO INDUSTRIAL', loc: 'Parauapebas / PA', type: 'ALTA POTÊNCIA', span: 'col-span-6', tag: '[FOTO REAL DO PROJETO 04]' }
  ];

  return (
    <section className="section section-light-theme" id="projetos">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '3.5rem' }}>
          <span className="mono-tag">PORTFÓLIO E EXECUÇÃO</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', color: 'var(--color-black-text)' }}>Projetos no campo.</h2>
        </div>

        <div className="comercial-projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`proj-com-card ${p.span}`}
              onMouseEnter={() => setCursorState({ text: 'VER PROJETO' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <div className="proj-ph-render">
                <span className="proj-tag-badge">{p.tag}</span>
              </div>
              <div className="proj-overlay-bottom">
                <span className="proj-type-text">{p.type}</span>
                <h3 className="proj-title-head">{p.title}</h3>
                <span className="proj-loc-text">{p.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .comercial-projects-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }

        .proj-com-card {
          position: relative;
          background: var(--color-dark-bg);
          color: var(--color-offwhite);
          border-radius: 20px;
          overflow: hidden;
          min-height: 360px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .proj-com-card:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .col-span-8 { grid-column: span 8; }
        .col-span-4 { grid-column: span 4; }
        .col-span-6 { grid-column: span 6; }

        .proj-ph-render {
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 30%, rgba(255, 196, 0, 0.15), var(--color-dark-bg) 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 360px;
        }

        .proj-tag-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-color);
          border: 1px dashed var(--accent-color);
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: rgba(11,13,12,0.8);
        }

        .proj-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.75rem;
          background: linear-gradient(0deg, rgba(11, 13, 12, 0.95) 0%, rgba(11, 13, 12, 0) 100%);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .proj-type-text { font-family: var(--font-mono); font-size: 0.65rem; color: var(--accent-color); }
        .proj-title-head { font-size: 1.35rem; color: var(--color-offwhite); }
        .proj-loc-text { font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-grey-muted); }

        @media (max-width: 900px) {
          .col-span-8, .col-span-4, .col-span-6 {
            grid-column: span 12;
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

window.ProjectsComercial = ProjectsComercial;
