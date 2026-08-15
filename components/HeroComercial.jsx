const HeroComercial = ({ setCursorState, onCalculateClick }) => {
  return (
    <section className="hero-section section-deep" id="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="mono-tag eyebrow-line">ENERGIA SOLAR PARA EMPRESAS · PARAUAPEBAS E REGIÃO</span>

          <h1 className="hero-heading">
            Energia solar para o seu <span className="solar-word">negócio.</span>
          </h1>

          <p className="hero-subtext">
            Projetos fotovoltaicos para comércios e empresas com consumo elevado, buscando maior previsibilidade energética
            e atendimento especializado do início à instalação.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-primary"
              onClick={onCalculateClick}
              onMouseEnter={() => setCursorState && setCursorState({ text: 'SIMULAR' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Calcular meu potencial</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </button>

            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+comercial+da+InterSolar+e+gostaria+de+falar+com+um+especialista."
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
              <radialGradient id="sunGlowCom" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#FFC900" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#FFC900" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="panelGradCom" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B3D28" />
                <stop offset="100%" stopColor="#082E20" />
              </linearGradient>
            </defs>

            <circle cx="400" cy="95" r="140" fill="url(#sunGlowCom)" />
            <circle cx="400" cy="95" r="42" fill="#FFC900" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1={400 + Math.cos((deg * Math.PI) / 180) * 56}
                y1={95 + Math.sin((deg * Math.PI) / 180) * 56}
                x2={400 + Math.cos((deg * Math.PI) / 180) * 74}
                y2={95 + Math.sin((deg * Math.PI) / 180) * 74}
                stroke="#FFD93D"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}

            {/* Cobertura comercial de laje plana */}
            <rect x="30" y="260" width="460" height="16" fill="#0B3D28" />
            <rect x="30" y="276" width="460" height="180" fill="#F7F5EE" stroke="#0B3D28" strokeWidth="2" />
            {[70, 150, 230, 310, 390].map((x) => (
              <rect key={x} x={x} y="320" width="42" height="70" fill="#FFFFFF" stroke="#0B3D28" strokeWidth="2" />
            ))}

            {/* Array de painéis solares na laje */}
            <g transform="translate(65 190)">
              {[0, 1].map((row) => (
                <g key={row} transform={`translate(0 ${row * 32})`}>
                  {[0, 1, 2, 3, 4, 5, 6].map((col) => (
                    <rect
                      key={col}
                      x={col * 56}
                      y="0"
                      width="50"
                      height="26"
                      rx="2"
                      fill="url(#panelGradCom)"
                      stroke="#FFC900"
                      strokeWidth="1.2"
                    />
                  ))}
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        .hero-section { position: relative; padding-top: calc(var(--header-height) + 2.5rem); padding-bottom: 3.5rem; overflow: hidden; }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; min-height: calc(100vh - var(--header-height) - 3rem); }
        .hero-heading { font-size: clamp(2.4rem, 5.6vw, 4.6rem); margin-top: 1.5rem; margin-bottom: 1.5rem; color: var(--color-offwhite); }
        .hero-subtext { font-size: clamp(1.05rem, 1.6vw, 1.3rem); color: var(--color-muted-onDark); max-width: 540px; line-height: 1.6; margin-bottom: 2.5rem; }
        .hero-cta-group { display: flex; align-items: center; gap: 1.1rem; flex-wrap: wrap; margin-bottom: 2.75rem; }
        .hero-trust-row { display: flex; flex-wrap: wrap; gap: 1.5rem; list-style: none; border-top: 1px solid var(--color-border-onDark); padding-top: 1.5rem; }
        .hero-trust-row li { display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-offwhite); }
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

window.HeroComercial = HeroComercial;
