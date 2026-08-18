const PROJECT_ITEMS = [
  {
    img: 'fotos/projeto-comercial-depois.jpg',
    type: 'Energia Solar Comercial',
    title: 'Projeto comercial — cobertura executada',
    size: 'large',
  },
  {
    img: 'fotos/hero-residencial.jpg',
    type: 'Energia Solar Residencial',
    title: 'Residência Mirante',
    size: 'tall',
  },
  {
    img: 'fotos/projeto-comercial-instalacao.jpg',
    type: 'Instalação em campo',
    title: 'Equipe InterSolar durante a instalação',
    size: 'wide',
  },
  {
    img: 'fotos/projeto-residencial-mirante.jpg',
    type: 'Energia Solar Residencial',
    title: 'Residência Mirante — vista aérea',
    size: 'small',
  },
];

const Projects = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="projetos">
      <div className="container">
        <div className="projects-header-wrap">
          <span className="mono-tag eyebrow-line">PROJETOS</span>
          <h2 className="projects-title">Projetos em Parauapebas e região.</h2>
          <p className="projects-desc">Fotos reais de projetos executados pela InterSolar.</p>
        </div>

        <div className="projects-grid">
          {PROJECT_ITEMS.map((p, idx) => (
            <figure
              key={idx}
              className={`project-slot p-${p.size}`}
              onMouseEnter={() => setCursorState && setCursorState({ text: null })}
            >
              <img src={p.img} alt={p.title} loading="lazy" />
              <figcaption className="project-slot-caption">
                <span className="project-slot-type">{p.type}</span>
                <span className="project-slot-title">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="projects-antesdepois">
          <div className="ad-header">
            <window.Icons.TrendingDown size={20} strokeWidth={1.6} />
            <span>Antes e depois — mesmo projeto comercial</span>
          </div>
          <div className="ad-grid">
            <figure className="ad-figure">
              <img src="fotos/projeto-comercial-antes.jpg" alt="Cobertura comercial antes da instalação dos painéis solares" loading="lazy" />
              <figcaption>Antes</figcaption>
            </figure>
            <figure className="ad-figure">
              <img src="fotos/projeto-comercial-depois.jpg" alt="Cobertura comercial depois da instalação dos painéis solares" loading="lazy" />
              <figcaption>Depois</figcaption>
            </figure>
          </div>
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
          margin-bottom: 3rem;
        }

        .project-slot {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 280px;
        }

        .project-slot img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }

        .project-slot:hover img { transform: scale(1.04); }

        .project-slot-caption {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 1.5rem;
          background: linear-gradient(0deg, rgba(8, 46, 32, 0.92) 0%, rgba(8, 46, 32, 0) 70%);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .project-slot-type {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--color-yellow-light);
        }

        .project-slot-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-offwhite);
        }

        .p-large { grid-column: span 8; min-height: 340px; }
        .p-tall { grid-column: span 4; min-height: 340px; }
        .p-wide { grid-column: span 7; }
        .p-small { grid-column: span 5; }

        .projects-antesdepois {
          border-top: 1px solid var(--color-border-onDark);
          padding-top: 2.5rem;
        }

        .ad-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-offwhite);
          margin-bottom: 1.5rem;
        }

        .ad-header svg { color: var(--color-yellow); }

        .ad-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .ad-figure {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          min-height: 220px;
        }

        .ad-figure img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .ad-figure figcaption {
          position: absolute;
          top: 0.9rem;
          left: 0.9rem;
          background: var(--color-green-deep);
          color: var(--color-yellow-light);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }

        @media (max-width: 900px) {
          .p-large, .p-tall, .p-wide, .p-small { grid-column: span 12; min-height: 260px; }
          .ad-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.Projects = Projects;
