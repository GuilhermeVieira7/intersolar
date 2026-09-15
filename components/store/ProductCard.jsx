const ProductCard = ({ product, setCursorState }) => {
  return (
    <a
      href={`/loja/${product.slug}`}
      className="product-card"
      onMouseEnter={() => setCursorState && setCursorState({ text: 'VER' })}
      onMouseLeave={() => setCursorState && setCursorState({ text: null })}
    >
      <div className="product-card-media">
        <window.ProductVisual category={product.category} variant={product.id % 3} />
      </div>

      <div className="product-card-body">
        <span className="product-card-brand mono-tag">{product.brand}</span>
        <h3 className="product-card-title">{product.title}</h3>

        <div className="product-card-specs">
          {product.power && <span>{product.power}</span>}
          {product.efficiency && product.efficiency !== '—' && <span>{product.efficiency}</span>}
        </div>

        <div className="product-card-price-wrap">
          <span className="product-card-price">{window.StoreData.formatBRL(product.price)}</span>
          <span className="product-card-installments">
            ou {product.installments.count}x de {window.StoreData.formatBRL(product.installments.value)}
          </span>
        </div>

        <span className="product-card-cta">
          Ver produto
          <window.Icons.ArrowRight size={15} strokeWidth={2} />
        </span>
      </div>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 18px;
          overflow: hidden;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(8, 46, 32, 0.1);
          border-color: var(--color-border);
        }

        .product-card-media {
          aspect-ratio: 4 / 3;
          width: 100%;
        }

        .product-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 1.35rem 1.4rem 1.6rem;
        }

        .product-card-title {
          font-size: 1.08rem;
          color: var(--color-text);
          margin-top: 0.15rem;
        }

        .product-card-specs {
          display: flex;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted);
          margin: 0.3rem 0 0.85rem;
        }

        .product-card-specs span {
          background: var(--color-offwhite);
          border-radius: 999px;
          padding: 0.25rem 0.65rem;
        }

        .product-card-price-wrap { margin-bottom: 1.1rem; }

        .product-card-price {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--color-text);
        }

        .product-card-installments {
          display: block;
          font-size: 0.82rem;
          color: var(--color-muted);
          margin-top: 0.2rem;
        }

        .product-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--color-green);
          transition: gap var(--transition-fast);
        }

        .product-card:hover .product-card-cta { gap: 0.75rem; }
      `}</style>
    </a>
  );
};

window.ProductCard = ProductCard;
