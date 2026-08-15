const PROJECT_SLOTS = [
  { type: 'Energia Solar Residencial', icon: 'House', size: 'large' },
  { type: 'Energia Solar Comercial', icon: 'Building2', size: 'tall' },
  { type: 'Energia Solar Empresarial', icon: 'Factory', size: 'wide' },
  { type: 'Energia Solar Residencial', icon: 'House', size: 'small' },
];

const Projects = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="projetos">
      <div className="container">
        <div className="projects-header-wrap">
          <span className="mono-tag eyebrow-line">PROJETOS</span>
          <h2 className="projects-title">Projetos em Parauapebas e região.</h2>
          <p className="projects-desc">Espaço reservado para fotos reais dos projetos executados pela InterSolar.</p>
        </div>

        <div className="projects-grid">
          {PROJECT_SLOTS.map((p, idx) => {
            const Icon = window.Icons[p.icon];
            return (
              <div
                key={idx}
                className={`project-slot p-${p.size}`}
                onMouseEnter={() => setCursorState && setCursorState({ text: null })}
              >
                <div className="project-slot-icon"><Icon size={30} strokeWidth={1.4} /></div>
                <span className="project-slot-type">{p.type}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-header-wrap { margin-bottom: 3rem; max-width: 640px; }

        .projects-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          margin-top: 0.9rem;
          margin-bottom: 0.75rem;
          color: var(--color-offwhite);
        }

        .projects-desc { font-size: 1.05rem; color: var(--color-muted-onDark); }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }

        .project-slot {
          position: relative;
          border: 1px dashed var(--color-border-onDark);
          border-radius: 20px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: linear-gradient(160deg, rgba(255, 201, 0, 0.05), transparent 60%);
          transition: border-color var(--transition-fast);
        }

        .project-slot:hover { border-color: var(--color-yellow); }

        .project-slot-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(247, 245, 238, 0.06);
          color: var(--color-yellow-light);
          display: flex; align-items: center; justify-content: center;
        }

        .project-slot-type {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--color-muted-onDark);
          text-align: center;
        }

        .p-large { grid-column: span 8; min-height: 340px; }
        .p-tall { grid-column: span 4; min-height: 340px; }
        .p-wide { grid-column: span 7; }
        .p-small { grid-column: span 5; }

        @media (max-width: 900px) {
          .p-large, .p-tall, .p-wide, .p-small { grid-column: span 12; min-height: 240px; }
        }
      `}</style>
    </section>
  );
};

window.Projects = Projects;
