const { useState, useMemo } = React;

const StoreCatalog = ({ setCursorState }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const products = useMemo(() => window.StoreData.getByCategory(activeCategory), [activeCategory]);

  return (
    <>
      <window.StoreHero setCursorState={setCursorState} />

      <section className="section section-white" id="catalogo">
        <div className="container">
          <div className="catalog-header">
            <div>
              <span className="mono-tag eyebrow-line">CATÁLOGO</span>
              <h2 className="catalog-title">Equipamentos de energia solar.</h2>
            </div>
            <window.CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>

          <window.ProductGrid products={products} setCursorState={setCursorState} />
        </div>

        <style>{`
          .catalog-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 2rem;
            margin-bottom: 2.75rem;
            flex-wrap: wrap;
          }

          .catalog-title {
            font-size: clamp(2rem, 4.4vw, 2.8rem);
            margin-top: 0.9rem;
            color: var(--color-text);
          }

          @media (max-width: 700px) {
            .catalog-header { display: block; }
            .catalog-header > * { max-width: 100%; }
            .catalog-header .category-filter { margin-top: 1.25rem; }
          }
        `}</style>
      </section>

      <window.WhyBuySection setCursorState={setCursorState} />
      <window.ConsultancyCTA setCursorState={setCursorState} />
    </>
  );
};

window.StoreCatalog = StoreCatalog;
