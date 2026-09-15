const { useState } = React;

const ProductGallery = ({ product }) => {
  const hasRealImages = product.images && product.images.length > 0;
  const views = hasRealImages ? product.images : [0, 1, 2];
  const [active, setActive] = useState(0);

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        {hasRealImages ? (
          <img src={views[active]} alt={product.title} className="product-gallery-img" />
        ) : (
          <>
            <window.ProductVisual category={product.category} variant={active} />
            <span className="product-gallery-placeholder-tag mono-tag">FOTO EM BREVE</span>
          </>
        )}
      </div>

      <div className="product-gallery-thumbs">
        {views.map((v, i) => (
          <button
            key={i}
            type="button"
            className={`product-gallery-thumb ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Ver imagem ${i + 1} de ${product.title}`}
          >
            {hasRealImages ? (
              <img src={v} alt="" />
            ) : (
              <window.ProductVisual category={product.category} variant={i} />
            )}
          </button>
        ))}
      </div>

      <style>{`
        .product-gallery { display: flex; flex-direction: column; gap: 0.9rem; }

        .product-gallery-main {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .product-gallery-img { width: 100%; height: 100%; object-fit: cover; }

        .product-gallery-placeholder-tag {
          position: absolute;
          top: 1rem; left: 1rem;
          background: rgba(8, 46, 32, 0.85);
          color: var(--color-yellow-light);
          padding: 0.4rem 0.75rem;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        .product-gallery-thumbs { display: flex; gap: 0.7rem; }

        .product-gallery-thumb {
          width: 74px; height: 60px;
          border-radius: 10px;
          overflow: hidden;
          border: 1.5px solid var(--color-border);
          cursor: pointer;
          padding: 0;
          background: none;
          flex-shrink: 0;
          transition: border-color var(--transition-fast);
        }

        .product-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .product-gallery-thumb.is-active { border-color: var(--color-green); }
      `}</style>
    </div>
  );
};

window.ProductGallery = ProductGallery;
