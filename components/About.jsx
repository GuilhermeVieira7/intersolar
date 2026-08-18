const About = ({ setCursorState }) => {
  return (
    <section className="section section-light" id="sobre">
      <div className="container about-grid">
        <div className="about-text-col">
          <span className="mono-tag eyebrow-line">SOBRE A INTERSOLAR</span>
          <h2 className="about-heading">Energia que aproxima futuro e economia.</h2>
          <p className="about-desc">
            A InterSolar oferece soluções fotovoltaicas completas — do planejamento ao acompanhamento pós-instalação —
            para residências e empresas de Parauapebas e região. Cada projeto passa por atendimento próximo,
            dimensionamento adequado ao imóvel e instalação executada com cuidado técnico.
          </p>

          <div className="about-highlights">
            <div className="about-hl">
              <div className="about-hl-icon"><window.Icons.MapPin size={20} strokeWidth={1.6} /></div>
              <div>
                <span className="about-hl-title">Presença regional</span>
                <span className="about-hl-sub">Atendimento em Parauapebas e região, com acompanhamento próximo de cada etapa.</span>
              </div>
            </div>
            <div className="about-hl">
              <div className="about-hl-icon"><window.Icons.ShieldCheck size={20} strokeWidth={1.6} /></div>
              <div>
                <span className="about-hl-title">Planejamento cuidadoso</span>
                <span className="about-hl-sub">Projeto e instalação pensados para a realidade de cada imóvel.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-proof-col card">
          <div className="proof-header">
            <div className="proof-avatar">
              <img src="fotos/logo-mark-color.png" alt="" width="30" height="30" />
            </div>
            <div>
              <h3 className="proof-username">@intersolarpa</h3>
              <span className="proof-badge">CONTA OFICIAL NO INSTAGRAM</span>
            </div>
          </div>

          <div className="proof-stats">
            <div className="proof-stat">
              <span className="proof-num">2.555</span>
              <span className="proof-label">Seguidores</span>
            </div>
            <div className="proof-stat">
              <span className="proof-num">275</span>
              <span className="proof-label">Publicações</span>
            </div>
            <div className="proof-stat">
              <span className="proof-num">100%</span>
              <span className="proof-label">Regional</span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/intersolarpa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary proof-cta"
            onMouseEnter={() => setCursorState && setCursorState({ text: 'INSTAGRAM' })}
            onMouseLeave={() => setCursorState && setCursorState({ text: null })}
          >
            <window.Icons.Instagram size={18} strokeWidth={1.6} />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: clamp(2rem, 5vw, 3.5rem);
          align-items: start;
        }

        .about-heading {
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          margin-top: 0.9rem;
          margin-bottom: 1.25rem;
          color: var(--color-text);
        }

        .about-desc {
          font-size: 1.1rem;
          color: var(--color-muted);
          line-height: 1.65;
          max-width: 560px;
          margin-bottom: 2.25rem;
        }

        .about-highlights { display: flex; flex-direction: column; gap: 1.5rem; }

        .about-hl { display: flex; align-items: flex-start; gap: 1rem; }

        .about-hl-icon {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          background: var(--color-offwhite); border: 1px solid var(--color-border);
          color: var(--color-green); display: flex; align-items: center; justify-content: center;
        }

        .about-hl-title { display: block; font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--color-text); margin-bottom: 0.2rem; }
        .about-hl-sub { display: block; font-size: 0.92rem; color: var(--color-muted); line-height: 1.5; }

        .about-proof-col { padding: 2rem; }

        .proof-header { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 1.5rem; }

        .proof-avatar {
          width: 48px; height: 48px; border-radius: 50%; background: var(--color-green-deep);
          display: flex; align-items: center; justify-content: center; padding: 8px;
        }
        .proof-avatar img { width: 100%; height: 100%; object-fit: contain; }

        .proof-username { font-size: 1.2rem; color: var(--color-text); }
        .proof-badge { font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-green); letter-spacing: 0.08em; }

        .proof-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
          padding: 1.25rem 0; margin-bottom: 1.5rem;
          border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);
        }

        .proof-stat { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .proof-num { font-family: var(--font-mono); font-size: 1.4rem; font-weight: 500; color: var(--color-green); }
        .proof-label { font-family: var(--font-mono); font-size: 0.62rem; color: var(--color-muted); letter-spacing: 0.05em; }

        .proof-cta { width: 100%; }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.About = About;
