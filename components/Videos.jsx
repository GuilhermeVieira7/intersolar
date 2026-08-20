const VIDEO_ITEMS = [
  {
    src: 'fotos/videos/casa-mirante.mp4',
    poster: 'fotos/videos/casa-mirante-poster.jpg',
    title: 'Residência Mirante',
    desc: '35 módulos solares de 620W bifacial instalados pela InterSolar.',
  },
  {
    src: 'fotos/videos/dji-aereo.mp4',
    poster: 'fotos/videos/dji-aereo-poster.jpg',
    title: 'Vista aérea de uma instalação comercial',
    desc: 'Registro aéreo de um sistema fotovoltaico comercial executado pela InterSolar.',
  },
];

const Videos = ({ setCursorState }) => {
  return (
    <section className="section section-light" id="videos">
      <div className="container">
        <div className="videos-header-wrap">
          <span className="mono-tag eyebrow-line">CLIENTES INTERSOLAR</span>
          <h2 className="videos-title">Projetos reais, em vídeo.</h2>
          <p className="videos-desc">Registros de instalações executadas pela InterSolar em Parauapebas e região.</p>
        </div>

        <div className="videos-grid">
          {VIDEO_ITEMS.map((v) => (
            <figure key={v.src} className="video-card">
              <div className="video-frame">
                <video
                  controls
                  preload="none"
                  poster={v.poster}
                  playsInline
                  onMouseEnter={() => setCursorState && setCursorState({ text: null })}
                >
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
              <figcaption>
                <span className="video-card-title">{v.title}</span>
                <span className="video-card-desc">{v.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .videos-header-wrap { margin-bottom: 3rem; max-width: 640px; }

        .videos-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          margin-top: 0.9rem;
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }

        .videos-desc { font-size: 1.05rem; color: var(--color-muted); }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .video-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          overflow: hidden;
        }

        .video-frame {
          width: 100%;
          max-height: 480px;
          background: var(--color-green-deep);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-card video {
          width: 100%;
          max-height: 480px;
          object-fit: contain;
          display: block;
        }

        .video-card figcaption {
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .video-card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text);
        }

        .video-card-desc { font-size: 0.9rem; color: var(--color-muted); }

        @media (max-width: 900px) {
          .videos-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.Videos = Videos;
