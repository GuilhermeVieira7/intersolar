const Hero = ({ setCursorState }) => {
  return (
    <section className="hero-section section-deep" id="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="mono-tag eyebrow-line">ENERGIA SOLAR EM PARAUAPEBAS E REGIÃO</span>

          <h1 className="hero-heading">
            Transforme <span className="solar-word">sol</span> em economia.
          </h1>

          <p className="hero-subtext">
            Projetos de energia solar para residências e empresas, com atendimento especializado do início à instalação.
          </p>

          <div className="hero-cta-group">
            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+da+InterSolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onMouseEnter={() => setCursorState && setCursorState({ text: 'WHATSAPP' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Solicitar orçamento</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </a>

            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista+da+InterSolar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Falar com especialista</span>
            </a>
          </div>

          <ul className="hero-trust-row">
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Projeto personalizado</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Atendimento especializado</li>
            <li><window.Icons.Check size={16} strokeWidth={2.25} /> Energia limpa</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 520 480" className="hero-illustration">
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#FFC900" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#FFC900" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B3D28" />
                <stop offset="100%" stopColor="#082E20" />
              </linearGradient>
            </defs>

            <circle cx="390" cy="110" r="150" fill="url(#sunGlow)" />
            <circle cx="390" cy="110" r="46" fill="#FFC900" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1={390 + Math.cos((deg * Math.PI) / 180) * 62}
                y1={110 + Math.sin((deg * Math.PI) / 180) * 62}
                x2={390 + Math.cos((deg * Math.PI) / 180) * 82}
                y2={110 + Math.sin((deg * Math.PI) / 180) * 82}
                stroke="#FFD93D"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}

            {/* Telhado */}
            <path d="M40 330 L260 210 L480 330 L480 340 L40 340 Z" fill="#0B3D28" />
            <path d="M40 330 L260 210 L480 330" fill="none" stroke="#17633C" strokeWidth="3" />

            {/* Painéis solares sobre o telhado */}
            <g transform="translate(120 246) rotate(-15)">
              {[0, 1, 2].map((row) => (
                <g key={row} transform={`translate(0 ${row * 34})`}>
                  {[0, 1, 2, 3].map((col) => (
                    <rect
                      key={col}
                      x={col * 46}
                      y="0"
                      width="42"
                      height="30"
                      rx="2"
                      fill="url(#panelGrad)"
                      stroke="#FFC900"
                      strokeWidth="1.2"
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Base do imóvel */}
            <rect x="40" y="340" width="440" height="110" fill="#F7F5EE" stroke="#0B3D28" strokeWidth="2" />
            <rect x="230" y="380" width="70" height="70" fill="#0B3D28" />
            <rect x="90" y="370" width="60" height="50" fill="#FFFFFF" stroke="#0B3D28" strokeWidth="2" />
            <rect x="370" y="370" width="60" height="50" fill="#FFFFFF" stroke="#0B3D28" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: calc(var(--header-height) + 2.5rem);
          padding-bottom: 3.5rem;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          min-height: calc(100vh - var(--header-height) - 3rem);
        }

        .hero-heading {
          font-size: clamp(2.6rem, 6.2vw, 5.4rem);
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .hero-subtext {
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          color: var(--color-muted-onDark);
          max-width: 520px;
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.75rem;
        }

        .hero-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          list-style: none;
          border-top: 1px solid var(--color-border-onDark);
          padding-top: 1.5rem;
        }

        .hero-trust-row li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-offwhite);
        }

        .hero-trust-row li svg { color: var(--color-yellow); }

        .hero-visual { position: relative; }
        .hero-illustration { width: 100%; height: auto; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .hero-visual { order: -1; max-width: 380px; margin: 0 auto; }
          .hero-section { padding-top: calc(var(--header-height) + 1.5rem); }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
