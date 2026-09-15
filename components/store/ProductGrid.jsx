const ProductGrid = ({ products, setCursorState }) => {
  if (!products.length) {
    return (
      <div className="product-grid-empty">
        <p>Nenhum equipamento encontrado nessa categoria no momento.</p>
        <style>{`
          .product-grid-empty {
            padding: 3.5rem 1rem;
            text-align: center;
            color: var(--color-muted);
            font-family: var(--font-display);
            font-weight: 600;
            border: 1px dashed var(--color-border);
            border-radius: 18px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} setCursorState={setCursorState} />
      ))}

      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 980px) {
          .product-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        }

        @media (max-width: 620px) {
          .product-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

window.ProductGrid = ProductGrid;
