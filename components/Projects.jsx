const { useState } = React;

const Projects = ({ setCursorState }) => {
  const [activeTab, setActiveTab] = useState('ALL');

  const projectItems = [
    {
      id: 1,
      title: 'USINA RESIDENCIAL CARAJÁS',
      location: 'Parauapebas / PA',
      type: 'RESIDENCIAL FOTOVOLTAICO',
      year: '2025',
      aspect: 'large',
      tag: '[IMAGEM REAL DO PROJETO 01]'
    },
    {
      id: 2,
      title: 'PROJETO COMERCIAL CIDADE NOVA',
      location: 'Parauapebas / PA',
      type: 'COMERCIAL TRIFÁSICO',
      year: '2025',
      aspect: 'tall',
      tag: '[IMAGEM REAL DO PROJETO 02]'
    },
    {
      id: 3,
      title: 'SISTEMA RURAL REGIONAL',
      location: 'Região de Parauapebas',
      type: 'SISTEMA AUTÔNOMO',
      year: '2024',
      aspect: 'wide',
      tag: '[IMAGEM REAL DO PROJETO 03]'
    },
    {
      id: 4,
      title: 'HOMOLOGAÇÃO INDUSTRIAL',
      location: 'Parauapebas / PA',
      type: 'ALTA POTÊNCIA',
      year: '2024',
      aspect: 'small',
      tag: '[IMAGEM REAL DO PROJETO 04]'
    }
  ];

  return (
    <section className="section section-dark" id="projetos">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">GALERIA DE EXECUÇÃO TÉCNICA</span>
          <h2 className="section-title">Portfólio de Engenharia.</h2>
          <p className="section-desc">
            Composição editorial de projetos dimensionados e homologados pela Intersolar na região de Parauapebas.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="projects-asymmetric-grid">
          {projectItems.map((item) => (
            <div
              key={item.id}
              className={`project-card p-${item.aspect}`}
              onMouseEnter={() => setCursorState({ text: 'VER PROJETO' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <div className="project-media-box">
                <div className="project-placeholder-render">
                  <div className="render-grid-pattern" />
                  <div className="render-sun-flare" />
                  <span className="project-tag-text">{item.tag}</span>
                </div>
              </div>

              <div className="project-info-overlay">
                <div className="project-meta-top">
                  <span className="proj-type">{item.type}</span>
                  <span className="proj-year">{item.year}</span>
                </div>
                <h3 className="project-title-text">{item.title}</h3>
                <span className="project-loc">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-asymmetric-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.75rem;
        }

        .project-card {
          position: relative;
          background: rgba(21, 24, 23, 0.8);
          border: 1px solid var(--color-border-dark);
          border-radius: 20px;
          overflow: hidden;
          min-height: 340px;
          transition: border-color var(--transition-smooth), transform var(--transition-smooth);
        }

        .project-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }

        .p-large {
          grid-column: span 8;
          min-height: 420px;
        }

        .p-tall {
          grid-column: span 4;
          min-height: 420px;
        }

        .p-wide {
          grid-column: span 7;
          min-height: 360px;
        }

        .p-small {
          grid-column: span 5;
          min-height: 360px;
        }

        .project-media-box {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .project-placeholder-render {
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 30%, rgba(255, 196, 0, 0.15), var(--color-solar-black) 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .render-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(244, 242, 234, 0.15) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .render-sun-flare {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          animation: pulseGlow 4s infinite ease-in-out;
        }

        .project-tag-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-color);
          letter-spacing: 0.15em;
          border: 1px dashed var(--accent-color);
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          position: relative;
          z-index: 5;
          background: rgba(11, 13, 12, 0.7);
          backdrop-filter: blur(8px);
        }

        .project-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(0deg, rgba(11, 13, 12, 0.95) 0%, rgba(11, 13, 12, 0) 100%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .project-meta-top {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
        }

        .project-title-text {
          font-size: 1.5rem;
          color: var(--color-warm-white);
        }

        .project-loc {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
        }

        @media (max-width: 900px) {
          .p-large, .p-tall, .p-wide, .p-small {
            grid-column: span 12;
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

window.Projects = Projects;
