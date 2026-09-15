const ProductRelated = ({ product, setCursorState }) => {
  const related = window.StoreData.getRelated(product, 3);
  if (!related.length) return null;

  return (
    <section className="section section-light">
      <div className="container">
        <span className="mono-tag eyebrow-line">VOCÊ TAMBÉM PODE GOSTAR</span>
        <h2 className="product-related-title">Produtos relacionados.</h2>

        <window.ProductGrid products={related} setCursorState={setCursorState} />
      </div>

      <style>{`
        .product-related-title {
          font-size: clamp(1.8rem, 3.8vw, 2.4rem);
          margin-top: 0.9rem;
          margin-bottom: 2.25rem;
          color: var(--color-text);
        }
      `}</style>
    </section>
  );
};

window.ProductRelated = ProductRelated;
