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
              <linearGradient id="wallShadeCom" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E7E3D4" />
                <stop offset="100%" stopColor="#D8D3C1" />
              </linearGradient>
              <linearGradient id="roofGradCom" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0F4A31" />
                <stop offset="100%" stopColor="#0B3D28" />
              </linearGradient>
              <linearGradient id="panelGradCom" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#123C2A" />
                <stop offset="100%" stopColor="#082E20" />
              </linearGradient>
            </defs>

            {/* Sombra de solo */}
            <ellipse cx="310.7" cy="355" rx="205" ry="24" fill="#061F15" opacity="0.35" />

            {/* Volume do galpão / edifício comercial — fachadas isométricas */}
            <polygon points="140.5,319.0 361.3,446.5 361.3,389.5 140.5,262.0" fill="url(#wallShadeCom)" />
            <polygon points="480.8,377.5 361.3,446.5 361.3,389.5 480.8,320.5" fill="#C7C2AE" />

            {/* Esquadrias e acesso */}
            <polygon points="156.1,317.5 208.0,347.5 208.0,317.5 156.1,287.5" fill="#17633C" opacity="0.5" stroke="#F7F5EE" strokeWidth="1.5" />
            <polygon points="221.0,355.0 273.0,385.0 273.0,355.0 221.0,325.0" fill="#17633C" opacity="0.5" stroke="#F7F5EE" strokeWidth="1.5" />
            <polygon points="286.0,392.5 337.9,422.5 337.9,392.5 286.0,362.5" fill="#17633C" opacity="0.5" stroke="#F7F5EE" strokeWidth="1.5" />
            <polygon points="345.7,437.5 358.7,445.0 358.7,406.0 345.7,398.5" fill="#0B3D28" />

            {/* Laje / platibanda do telhado */}
            <polygon points="124.9,262.0 361.3,398.5 361.3,391.3 124.9,254.8" fill="#082E20" />
            <polygon points="496.4,320.5 361.3,398.5 361.3,391.3 496.4,313.3" fill="#0A331F" />
            <polygon points="260.0,176.8 496.4,313.3 361.3,391.3 124.9,254.8" fill="url(#roofGradCom)" />

            {/* Detalhe amarelo discreto — friso do telhado */}
            <polyline points="124.9,254.8 260.0,176.8 496.4,313.3" fill="none" stroke="#FFC900" strokeWidth="1.5" opacity="0.7" />

            {/* Array de painéis fotovoltaicos integrado à laje */}
            {[
              '260.0,203.5 284.3,217.6 257.2,233.3 232.8,219.2',
              '287.5,219.4 311.8,233.4 284.6,249.1 260.3,235.1',
              '314.9,235.2 339.3,249.3 312.1,265.0 287.7,250.9',
              '342.4,251.1 366.7,265.1 339.6,280.8 315.2,266.8',
              '369.9,266.9 394.2,281.0 367.0,296.7 342.7,282.6',
              '397.3,282.8 421.7,296.8 394.5,312.5 370.1,298.5',
              '424.8,298.6 449.1,312.7 421.9,328.4 397.6,314.3',
              '229.7,221.0 254.0,235.1 226.8,250.8 202.5,236.7',
              '257.2,236.9 281.5,250.9 254.3,266.6 230.0,252.6',
              '284.6,252.7 309.0,266.8 281.8,282.5 257.4,268.4',
              '312.1,268.6 336.4,282.6 309.2,298.3 284.9,284.3',
              '339.6,284.4 363.9,298.5 336.7,314.2 312.4,300.1',
              '367.0,300.3 391.4,314.3 364.2,330.0 339.8,316.0',
              '394.5,316.1 418.8,330.2 391.6,345.9 367.3,331.8',
              '199.4,238.5 223.7,252.6 196.5,268.3 172.2,254.2',
              '226.8,254.4 251.2,268.4 224.0,284.1 199.7,270.1',
              '254.3,270.2 278.7,284.3 251.5,300.0 227.1,285.9',
              '281.8,286.1 306.1,300.1 278.9,315.8 254.6,301.8',
              '309.2,301.9 333.6,316.0 306.4,331.7 282.0,317.6',
              '336.7,317.8 361.1,331.8 333.9,347.5 309.5,333.5',
              '364.2,333.6 388.5,347.7 361.3,363.4 337.0,349.3',
            ].map((pts) => (
              <polygon key={pts} points={pts} fill="url(#panelGradCom)" stroke="#FFC900" strokeWidth="0.8" strokeOpacity="0.85" />
            ))}

            {/* Aceno solar discreto, sem sol gigante */}
            <g stroke="#FFC900" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
              <line x1="452" y1="46" x2="452" y2="60" />
              <line x1="430" y1="60" x2="440" y2="68" />
              <line x1="474" y1="60" x2="464" y2="68" />
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
