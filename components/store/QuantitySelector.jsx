const QuantitySelector = ({ value, onChange, min = 1, max = 99 }) => {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="qty-selector">
      <button type="button" className="qty-btn" onClick={dec} disabled={value <= min} aria-label="Diminuir quantidade">
        <window.Icons.Minus size={16} strokeWidth={2} />
      </button>
      <span className="qty-value" aria-live="polite">{value}</span>
      <button type="button" className="qty-btn" onClick={inc} disabled={value >= max} aria-label="Aumentar quantidade">
        <window.Icons.Plus size={16} strokeWidth={2} />
      </button>

      <style>{`
        .qty-selector {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          border: 1.5px solid var(--color-border);
          border-radius: 9999px;
          padding: 0.3rem;
        }

        .qty-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          background: var(--color-offwhite);
          color: var(--color-text);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .qty-btn:hover:not(:disabled) { background: var(--color-yellow); }
        .qty-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .qty-value {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          min-width: 2.2rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

window.QuantitySelector = QuantitySelector;
