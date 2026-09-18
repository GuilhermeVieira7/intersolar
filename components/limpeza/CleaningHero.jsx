const { useState, useRef, useCallback } = React;

/*
 * Hero com comparador "antes/depois" arrastável: o próprio módulo solar é o
 * argumento de venda. À esquerda, poeira de minério cobrindo as células;
 * arrastando para a direita, o vidro limpo aparece com o brilho por trás.
 * O painel é desenhado em CSS (sem foto), o que mantém o hero leve.
 */
const CleaningHero = ({ setCursorState }) => {
  const [pos, setPos] = useState(46);
  const trackRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    updateFromClientX(e.clientX);
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const stopDragging = () => { draggingRef.current = false; };

  return (
    <section className="cleaning-hero section-deep" id="hero">
      <div className="cleaning-hero-grid container">
        <div className="cleaning-hero-copy">
          <span className="mono-tag eyebrow-line">POEIRA DE MINÉRIO · PARAUAPEBAS</span>

          <h1 className="cleaning-hero-heading">
            Seu painel <span className="dust-word">não está</span><br />
            trabalhando <span className="clean-word">a plena carga.</span>
          </h1>

          <p className="cleaning-hero-subtext">
            Em Parauapebas, a poeira que cobre o vidro dos módulos não é poeira comum — é fina, avermelhada, rica em minério de ferro, e se acumula rápido. Arraste o painel ao lado e veja a diferença.
          </p>

          <a
            href="#plano"
            className="cleaning-hero-price-pill"
            onMouseEnter={() => setCursorState && setCursorState({ text: 'VER PLANO' })}
            onMouseLeave={() => setCursorState && setCursorState({ text: null })}
          >
            <span className="cleaning-hero-price-pill-value">{window.CLEANING_PLAN.priceLabel}<small>/ano</small></span>
            <span className="cleaning-hero-price-pill-divider" />
            <span className="cleaning-hero-price-pill-text">Plano único · {window.CLEANING_PLAN.visitsPerYear} limpezas inclusas</span>
          </a>

          <div className="cleaning-hero-cta-group">
            <a
              href={`https://wa.me/559491489811?text=${encodeURIComponent(window.CLEANING_PLAN.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onMouseEnter={() => setCursorState && setCursorState({ text: 'WHATSAPP' })}
              onMouseLeave={() => setCursorState && setCursorState({ text: null })}
            >
              <span>Quero o plano InterSolar Clean</span>
              <window.Icons.ArrowRight size={18} strokeWidth={2} />
            </a>
            <a href="#plano" className="btn-secondary">
              <span>Ver o que está incluso</span>
            </a>
          </div>
        </div>

        <div className="cleaning-hero-visual">
          <div
            className="panel-compare"
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
            role="slider"
            aria-label="Comparador de painel sujo e limpo"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 5));
              if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 5));
            }}
          >
            <div className="panel-frame panel-clean">
              <div className="panel-cells">
                {Array.from({ length: 24 }).map((_, i) => <span key={i} className="panel-cell" />)}
              </div>
              <span className="panel-glow" />
              <span className="panel-tag panel-tag-clean">Limpo</span>
            </div>

            <div className="panel-frame panel-dirty" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <div className="panel-cells">
                {Array.from({ length: 24 }).map((_, i) => <span key={i} className="panel-cell" />)}
              </div>
              <span className="panel-dust-layer" />
              <span className="panel-tag panel-tag-dirty">Sem limpeza</span>
            </div>

            <div className="panel-divider" style={{ left: `${pos}%` }}>
              <span className="panel-divider-handle">
                <window.Icons.Sliders size={16} strokeWidth={2} />
              </span>
            </div>
          </div>
          <span className="panel-compare-hint">Arraste para comparar</span>
        </div>
      </div>

      <style>{`
        .cleaning-hero {
          position: relative;
          padding-top: calc(var(--header-height) + 3rem);
          padding-bottom: 6rem;
          overflow: hidden;
        }

        .cleaning-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .cleaning-hero-heading {
          font-size: clamp(2.4rem, 5.6vw, 4.6rem);
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .dust-word { color: var(--color-rust-light); }
        .clean-word { color: var(--color-yellow); }

        .cleaning-hero-subtext {
          font-size: clamp(1.02rem, 1.5vw, 1.2rem);
          color: var(--color-muted-onDark);
          max-width: 540px;
          font-weight: 400;
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .cleaning-hero-price-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.9rem;
          background: rgba(255, 201, 0, 0.08);
          border: 1px solid rgba(255, 201, 0, 0.35);
          border-radius: 999px;
          padding: 0.6rem 1.3rem 0.6rem 0.75rem;
          margin-bottom: 2rem;
          text-decoration: none;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .cleaning-hero-price-pill:hover { background: rgba(255, 201, 0, 0.14); border-color: rgba(255, 201, 0, 0.55); }

        .cleaning-hero-price-pill-value {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-yellow);
          background: var(--color-green-deep);
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .cleaning-hero-price-pill-value small { font-weight: 600; font-size: 0.7rem; color: var(--color-muted-onDark); margin-left: 0.15rem; }

        .cleaning-hero-price-pill-divider { display: none; }

        .cleaning-hero-price-pill-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-offwhite);
        }

        .cleaning-hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
        }

        .cleaning-hero-visual { position: relative; }

        .panel-compare {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          touch-action: none;
          border: 1px solid var(--color-border-onDark);
          background: var(--color-green-deep);
        }

        .panel-frame {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10%;
        }

        .panel-cells {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 3px;
          border-radius: 6px;
          overflow: hidden;
        }

        .panel-clean .panel-cell {
          background: linear-gradient(155deg, #123a2b 0%, #0c2b21 100%);
          box-shadow: inset 0 0 0 1px rgba(255, 201, 0, 0.08);
        }

        .panel-dirty .panel-cell {
          background: linear-gradient(155deg, #123a2b 0%, #0c2b21 100%);
        }

        .panel-glow {
          position: absolute;
          inset: -20% -20% -20% -20%;
          background: radial-gradient(circle at 50% 45%, var(--accent-glow) 0%, transparent 60%);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .panel-dust-layer {
          position: absolute;
          inset: 10%;
          border-radius: 6px;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(180, 90, 50, 0.55) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 65%, rgba(160, 74, 42, 0.5) 0%, transparent 50%),
            linear-gradient(160deg, rgba(164, 74, 42, 0.55) 0%, rgba(120, 58, 34, 0.42) 100%);
          mix-blend-mode: multiply;
        }

        .panel-dust-layer::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(247, 245, 238, 0.12) 1px, transparent 1.4px);
          background-size: 5px 5px;
          opacity: 0.55;
        }

        .panel-tag {
          position: absolute;
          top: 4%;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
        }

        .panel-tag-clean { right: 4%; background: rgba(255, 201, 0, 0.16); color: var(--color-yellow-light); border: 1px solid rgba(255, 201, 0, 0.3); }
        .panel-tag-dirty { left: 4%; background: rgba(164, 74, 42, 0.22); color: #F0B79A; border: 1px solid rgba(164, 74, 42, 0.4); }

        .panel-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--color-offwhite);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .panel-divider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--color-yellow);
          color: var(--color-green-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.35);
        }

        .panel-compare-hint {
          display: block;
          text-align: center;
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-muted-onDark);
        }

        @media (max-width: 900px) {
          .cleaning-hero-grid { grid-template-columns: 1fr; }
          .cleaning-hero-visual { order: -1; max-width: 420px; margin: 0 auto; }
          .cleaning-hero { padding-top: calc(var(--header-height) + 1.5rem); padding-bottom: 5rem; }
        }
      `}</style>
    </section>
  );
};

window.CleaningHero = CleaningHero;
