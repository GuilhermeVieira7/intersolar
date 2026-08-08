const ParauapebasComercial = ({ setCursorState }) => {
  return (
    <section className="section section-dark-theme" id="parauapebas">
      <div className="container parauapebas-grid">
        <div className="para-text-col">
          <span className="mono-tag">PRESENÇA REGIONAL REGIONAL</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--color-offwhite)' }}>
            Energia solar, perto de você.
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(247, 246, 241, 0.85)', lineHeight: 1.6, maxWidth: '600px' }}>
            A Intersolar atua em Parauapebas e região, aproximando tecnologia, projeto e atendimento da realidade de quem vive e empreende aqui.
          </p>
        </div>

        <div className="para-map-col glass-card" style={{ padding: '1.5rem' }}>
          <svg viewBox="0 0 400 280" style={{ width: '100%', height: '100%', borderRadius: '12px', background: 'rgba(11,13,12,0.8)' }}>
            <pattern id="paraGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(247,246,241,0.06)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="280" fill="url(#paraGrid)" />

            <circle cx="200" cy="140" r="50" fill="rgba(255, 196, 0, 0.08)" />
            <circle cx="200" cy="140" r="12" fill="var(--accent-color)" />
            <circle cx="200" cy="140" r="25" fill="none" stroke="var(--accent-color)" strokeWidth="1.5">
              <animate attributeName="r" values="12;40;12" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.1;1" dur="3s" repeatCount="indefinite" />
            </circle>

            <text x="200" y="178" textAnchor="middle" fill="var(--color-offwhite)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
              PARAUAPEBAS · SEDE OPERACIONAL
            </text>
            <text x="200" y="195" textAnchor="middle" fill="var(--accent-color)" fontSize="9" fontFamily="var(--font-mono)">
              REGIONAL DE CARAJÁS
            </text>
          </svg>
        </div>
      </div>

      <style>{`
        .parauapebas-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .parauapebas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.ParauapebasComercial = ParauapebasComercial;
