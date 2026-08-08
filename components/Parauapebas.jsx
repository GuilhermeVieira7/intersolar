const Parauapebas = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="parauapebas">
      <div className="container">
        <div className="parauapebas-grid">
          <div className="parauapebas-text-col">
            <span className="mono-tag">PRESENÇA E ENGENHARIA LOCAL</span>
            <h2 className="parauapebas-h1">Feito para a realidade da nossa região.</h2>
            <p className="parauapebas-desc">
              Atendemos Parauapebas e região com uma solução que começa no entendimento do imóvel e termina com o sistema pronto para operar.
            </p>

            <div className="parauapebas-highlights">
              <div className="hl-item">
                <span className="hl-num">01</span>
                <div className="hl-info">
                  <span className="hl-title">IRRADIÂNCIA DE CARAJÁS</span>
                  <span className="hl-sub">Modelagem ajustada ao índice fotovoltaico do sul do Pará.</span>
                </div>
              </div>

              <div className="hl-item">
                <span className="hl-num">02</span>
                <div className="hl-info">
                  <span className="hl-title">SUPORTE E RESPOSTA LOCAL</span>
                  <span className="hl-sub">Assistência e acompanhamento presencial sem terceirização técnica.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Vector Map of Parauapebas Solar Radiance Zone */}
          <div className="parauapebas-map-col glass-card">
            <div className="map-vector-wrap">
              <svg viewBox="0 0 400 320" className="svg-regional-map">
                {/* Map Grid Lines */}
                <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244,242,234,0.06)" strokeWidth="1" />
                </pattern>
                <rect width="400" height="320" fill="url(#mapGrid)" />

                {/* Abstract Topographic Contour Polygons */}
                <path d="M 60 120 Q 140 40 240 90 T 360 180 T 280 280 T 100 240 Z" fill="none" stroke="rgba(255, 196, 0, 0.2)" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 100 140 Q 170 80 250 120 T 320 200 T 240 260 T 120 210 Z" fill="none" stroke="rgba(255, 196, 0, 0.35)" strokeWidth="1.5" />

                {/* Solar Radiance Energy Center Point */}
                <circle cx="210" cy="160" r="45" fill="rgba(255, 196, 0, 0.08)" />
                <circle cx="210" cy="160" r="12" fill="var(--accent-color)" />
                <circle cx="210" cy="160" r="22" fill="none" stroke="var(--accent-color)" strokeWidth="1.5">
                  <animate attributeName="r" values="12;40;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.1;1" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Location Marker Label */}
                <text x="210" y="195" textAnchor="middle" fill="var(--color-warm-white)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                  PARAUAPEBAS · SEDE
                </text>
                <text x="210" y="210" textAnchor="middle" fill="var(--accent-color)" fontSize="9" fontFamily="var(--font-mono)">
                  ZONA FOTOVOLTAICA DE CARAJÁS
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .parauapebas-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .parauapebas-h1 {
          font-size: clamp(2.5rem, 5.5vw, 5rem);
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          color: var(--color-warm-white);
        }

        .parauapebas-desc {
          font-size: 1.25rem;
          color: rgba(244, 242, 234, 0.85);
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .parauapebas-highlights {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .hl-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          border-top: 1px solid var(--color-border-dark);
          padding-top: 1.25rem;
        }

        .hl-num {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .hl-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hl-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-warm-white);
        }

        .hl-sub {
          font-size: 0.95rem;
          color: var(--color-muted-grey);
        }

        .parauapebas-map-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .map-vector-wrap {
          width: 100%;
          height: 100%;
        }

        .svg-regional-map {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: rgba(11, 13, 12, 0.7);
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

window.Parauapebas = Parauapebas;
