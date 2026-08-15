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
              <linearGradient id="wallShade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E7E3D4" />
                <stop offset="100%" stopColor="#D8D3C1" />
              </linearGradient>
              <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0F4A31" />
                <stop offset="100%" stopColor="#0B3D28" />
              </linearGradient>
              <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#123C2A" />
                <stop offset="100%" stopColor="#082E20" />
              </linearGradient>
            </defs>

            {/* Sombra de solo */}
            <ellipse cx="283.6" cy="345" rx="180" ry="26" fill="#061F15" opacity="0.35" />

            {/* Volume da residência — fachadas isométricas */}
            <polygon points="130.4,324.8 307.1,426.8 307.1,338.4 130.4,236.4" fill="url(#wallShade)" />
            <polygon points="436.7,352.0 307.1,426.8 307.1,338.4 436.7,263.6" fill="#C7C2AE" />

            {/* Esquadrias */}
            <polygon points="151.1,316.3 186.4,336.7 186.4,299.3 151.1,278.9" fill="#17633C" opacity="0.55" stroke="#F7F5EE" strokeWidth="1.5" />
            <polygon points="207.0,348.6 265.9,382.6 265.9,345.2 207.0,311.2" fill="#17633C" opacity="0.55" stroke="#F7F5EE" strokeWidth="1.5" />
            <polygon points="274.7,408.1 295.3,420.0 295.3,365.6 274.7,353.7" fill="#0B3D28" />
            <polygon points="419.0,341.8 377.8,365.6 377.8,328.2 419.0,304.4" fill="#17633C" opacity="0.45" stroke="#B7B29E" strokeWidth="1.5" />
            <polygon points="360.1,375.8 321.8,397.9 321.8,360.5 360.1,338.4" fill="#17633C" opacity="0.45" stroke="#B7B29E" strokeWidth="1.5" />

            {/* Laje / platibanda do telhado */}
            <polygon points="109.8,236.4 307.1,350.3 307.1,339.4 109.8,225.5" fill="#082E20" />
            <polygon points="457.3,263.6 307.1,350.3 307.1,339.4 457.3,252.7" fill="#0A331F" />
            <polygon points="260.0,138.8 457.3,252.7 307.1,339.4 109.8,225.5" fill="url(#roofGrad)" />

            {/* Detalhe amarelo discreto — friso do telhado */}
            <polyline points="109.8,225.5 260.0,138.8 457.3,252.7" fill="none" stroke="#FFC900" strokeWidth="1.5" opacity="0.7" />

            {/* Painéis fotovoltaicos integrados à cobertura */}
            {[
              '260.0,169.1 285.9,184.0 256.1,201.3 230.2,186.3',
              '289.4,186.1 315.4,201.0 285.5,218.3 259.6,203.3',
              '318.9,203.1 344.8,218.0 315.0,235.3 289.1,220.3',
              '348.3,220.1 374.2,235.0 344.4,252.3 318.5,237.3',
              '377.8,237.1 403.7,252.0 373.9,269.3 347.9,254.3',
              '226.6,188.3 252.5,203.3 222.7,220.5 196.8,205.6',
              '256.1,205.3 282.0,220.3 252.1,237.5 226.2,222.6',
              '285.5,222.3 311.4,237.3 281.6,254.5 255.7,239.6',
              '315.0,239.3 340.9,254.3 311.0,271.5 285.1,256.6',
              '344.4,256.3 370.3,271.3 340.5,288.5 314.6,273.6',
              '193.3,207.6 219.2,222.6 189.3,239.8 163.4,224.8',
              '222.7,224.6 248.6,239.6 218.8,256.8 192.9,241.8',
              '252.1,241.6 278.1,256.6 248.2,273.8 222.3,258.8',
              '281.6,258.6 307.5,273.6 277.7,290.8 251.8,275.8',
              '311.0,275.6 336.9,290.6 307.1,307.8 281.2,292.8',
            ].map((pts) => (
              <polygon key={pts} points={pts} fill="url(#panelGrad)" stroke="#FFC900" strokeWidth="0.8" strokeOpacity="0.85" />
            ))}

            {/* Aceno solar discreto, sem sol gigante */}
            <g stroke="#FFC900" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
              <line x1="452" y1="52" x2="452" y2="66" />
              <line x1="430" y1="66" x2="440" y2="74" />
              <line x1="474" y1="66" x2="464" y2="74" />
            </g>
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
