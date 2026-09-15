/*
 * ProductVisual — ilustração autoral usada enquanto não há fotografia real do
 * produto. Gera um padrão visual coerente com a identidade InterSolar a
 * partir da categoria do produto (não é uma foto do equipamento real).
 */

const PRODUCT_VISUAL_PATTERNS = {
  modulos: 'grid',
  kits: 'grid',
  inversores: 'block',
  microinversores: 'block',
  estruturas: 'lines',
  acessorios: 'dot',
};

const ProductVisual = ({ category, variant = 0, className = '' }) => {
  const pattern = PRODUCT_VISUAL_PATTERNS[category] || 'grid';

  return (
    <div className={`product-visual pv-${pattern} ${className}`} style={{ '--pv-rotate': `${variant * 4}deg` }}>
      <div className="pv-inner">
        {pattern === 'grid' && (
          <svg viewBox="0 0 200 150" className="pv-svg" aria-hidden="true">
            <rect x="6" y="6" width="188" height="138" rx="10" className="pv-frame" />
            {Array.from({ length: 4 }).map((_, row) => (
              Array.from({ length: 6 }).map((__, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={16 + col * 29.6}
                  y={16 + row * 29.5}
                  width="26"
                  height="26"
                  className="pv-cell"
                />
              ))
            ))}
          </svg>
        )}

        {pattern === 'block' && (
          <svg viewBox="0 0 200 150" className="pv-svg" aria-hidden="true">
            <rect x="52" y="26" width="96" height="98" rx="12" className="pv-frame" />
            <rect x="68" y="46" width="64" height="34" rx="4" className="pv-cell" />
            <circle cx="82" cy="98" r="7" className="pv-cell" />
            <circle cx="106" cy="98" r="7" className="pv-cell" />
            <circle cx="130" cy="98" r="7" className="pv-cell" />
          </svg>
        )}

        {pattern === 'lines' && (
          <svg viewBox="0 0 200 150" className="pv-svg" aria-hidden="true">
            <rect x="6" y="6" width="188" height="138" rx="10" className="pv-frame" />
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={i} x1="20" y1={28 + i * 22} x2="180" y2={28 + i * 22} className="pv-line" />
            ))}
          </svg>
        )}

        {pattern === 'dot' && (
          <svg viewBox="0 0 200 150" className="pv-svg" aria-hidden="true">
            <rect x="6" y="6" width="188" height="138" rx="10" className="pv-frame" />
            <circle cx="100" cy="75" r="34" className="pv-cell" />
            <circle cx="100" cy="75" r="14" className="pv-frame" />
          </svg>
        )}

        <window.Icons.SolarPanel size={22} strokeWidth={1.6} className="pv-badge-icon" />
      </div>

      <style>{`
        .product-visual {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(150deg, var(--color-green-dark) 0%, var(--color-green-deep) 100%);
          overflow: hidden;
        }

        .product-visual::before {
          content: '';
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle at 25% 20%, rgba(255, 201, 0, 0.16), transparent 55%);
          pointer-events: none;
        }

        .pv-inner {
          position: relative;
          width: 78%;
          transform: rotate(var(--pv-rotate, 0deg));
          transition: transform var(--transition-smooth);
        }

        .product-visual:hover .pv-inner { transform: rotate(0deg) scale(1.035); }

        .pv-svg { width: 100%; height: auto; display: block; }

        .pv-frame { fill: rgba(247, 245, 238, 0.06); stroke: rgba(255, 201, 0, 0.55); stroke-width: 1.5; }
        .pv-cell { fill: rgba(255, 201, 0, 0.14); stroke: rgba(255, 201, 0, 0.4); stroke-width: 1; }
        .pv-line { stroke: rgba(255, 201, 0, 0.35); stroke-width: 2; }

        .pv-badge-icon {
          position: absolute;
          bottom: -8px;
          right: -8px;
          color: var(--color-yellow);
          background: var(--color-green-deep);
          border-radius: 50%;
          padding: 7px;
          box-shadow: 0 6px 16px rgba(8, 46, 32, 0.4);
        }
      `}</style>
    </div>
  );
};

window.ProductVisual = ProductVisual;
