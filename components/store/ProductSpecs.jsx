const { useState } = React;

const ProductSpecs = ({ product }) => {
  const [openSection, setOpenSection] = useState('descricao');

  const toggle = (id) => setOpenSection(openSection === id ? '' : id);

  const sections = [
    { id: 'descricao', title: 'Descrição', content: <p>{product.description}</p> },
    {
      id: 'beneficios',
      title: 'Benefícios',
      content: (
        <ul className="specs-list">
          {product.features.map((f) => (
            <li key={f}><window.Icons.Check size={15} strokeWidth={2} /> {f}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'ficha',
      title: 'Ficha técnica',
      content: (
        <>
          <table className="specs-table">
            <tbody>
              {product.specifications.map((s) => (
                <tr key={s.label}>
                  <td>{s.label}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="specs-disclaimer">* Dados sujeitos a confirmação. Ficha técnica oficial disponível abaixo.</p>
          {product.datasheetUrl ? (
            <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary specs-datasheet-btn">
              <window.Icons.Download size={16} strokeWidth={2} />
              <span>Baixar ficha técnica</span>
            </a>
          ) : (
            <button type="button" className="btn-secondary specs-datasheet-btn" disabled>
              <window.Icons.Download size={16} strokeWidth={2} />
              <span>Ficha técnica em breve</span>
            </button>
          )}
        </>
      ),
    },
    { id: 'garantia', title: 'Garantia e fabricante', content: <p>{product.warranty} Fabricante: {product.brand}.</p> },
  ];

  return (
    <section className="product-specs">
      <div className="product-specs-stats">
        {product.power && (
          <div className="product-specs-stat">
            <span className="product-specs-stat-value">{product.power}</span>
            <span className="product-specs-stat-label">Potência</span>
          </div>
        )}
        {product.efficiency && product.efficiency !== '—' && (
          <div className="product-specs-stat">
            <span className="product-specs-stat-value">{product.efficiency}</span>
            <span className="product-specs-stat-label">Eficiência</span>
          </div>
        )}
        <div className="product-specs-stat">
          <span className="product-specs-stat-value">{product.brand}</span>
          <span className="product-specs-stat-label">Fabricante</span>
        </div>
        <div className="product-specs-stat">
          <span className="product-specs-stat-value">{product.warranty.split(' de garantia')[0]}</span>
          <span className="product-specs-stat-label">Garantia</span>
        </div>
      </div>

      <div className="product-specs-accordion">
        {sections.map((s) => {
          const isOpen = openSection === s.id;
          return (
            <div key={s.id} className={`specs-item ${isOpen ? 'is-open' : ''}`}>
              <button type="button" className="specs-question" onClick={() => toggle(s.id)} aria-expanded={isOpen}>
                <span>{s.title}</span>
                {isOpen ? <window.Icons.Minus size={17} strokeWidth={2} /> : <window.Icons.Plus size={17} strokeWidth={2} />}
              </button>
              {isOpen && <div className="specs-answer">{s.content}</div>}
            </div>
          );
        })}
      </div>

      <style>{`
        .product-specs { margin-top: clamp(3rem, 6vw, 5rem); }

        .product-specs-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .product-specs-stat {
          text-align: center;
          padding: 1.75rem 1rem;
          border-radius: 16px;
          background: var(--color-offwhite);
        }

        .product-specs-stat-value {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.2rem, 2.4vw, 1.6rem);
          color: var(--color-text);
        }

        .product-specs-stat-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-muted);
          margin-top: 0.4rem;
        }

        .product-specs-accordion { border-top: 1px solid var(--color-border); max-width: 820px; }

        .specs-item { border-bottom: 1px solid var(--color-border); }

        .specs-question {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; text-align: left;
          padding: 1.35rem 0.25rem;
          font-family: var(--font-display); font-weight: 700; font-size: 1.02rem;
          color: var(--color-text);
          cursor: pointer;
        }

        .specs-answer { padding: 0 0.25rem 1.5rem; color: var(--color-muted); line-height: 1.65; }

        .specs-list { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
        .specs-list li { display: flex; align-items: center; gap: 0.55rem; }
        .specs-list li svg { color: var(--color-green); flex-shrink: 0; }

        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table td { padding: 0.65rem 0.25rem; border-bottom: 1px solid var(--color-border); font-size: 0.92rem; }
        .specs-table td:first-child { color: var(--color-muted); width: 50%; }
        .specs-table td:last-child { color: var(--color-text); font-weight: 600; text-align: right; }

        .specs-disclaimer { font-size: 0.78rem; margin-top: 0.9rem; color: var(--color-muted); }

        .specs-datasheet-btn { margin-top: 1.25rem; }
        .specs-datasheet-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 700px) {
          .product-specs-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
};

window.ProductSpecs = ProductSpecs;
