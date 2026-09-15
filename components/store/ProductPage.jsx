const { useEffect } = React;

const ProductNotFound = () => (
  <section className="section section-white product-not-found">
    <div className="container">
      <span className="mono-tag eyebrow-line">PRODUTO NÃO ENCONTRADO</span>
      <h1 className="product-not-found-title">Esse equipamento não está mais disponível.</h1>
      <p className="product-not-found-text">Confira o catálogo completo de equipamentos da InterSolar.</p>
      <a href="/loja" className="btn-primary">
        <span>Voltar para a loja</span>
        <window.Icons.ArrowRight size={18} strokeWidth={2} />
      </a>
    </div>
    <style>{`
      .product-not-found { padding-top: calc(var(--header-height) + 4rem); text-align: center; }
      .product-not-found-title { font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 1rem 0 0.75rem; }
      .product-not-found-text { color: var(--color-muted); margin-bottom: 2rem; }
    `}</style>
  </section>
);

const ProductPage = ({ slug, setCursorState }) => {
  const product = window.StoreData.getBySlug(slug);

  useEffect(() => {
    if (!product) return;
    document.title = `${product.title} | Loja InterSolar`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', product.shortDescription);

    const ldJson = document.createElement('script');
    ldJson.type = 'application/ld+json';
    ldJson.id = 'product-ld-json';
    ldJson.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      brand: { '@type': 'Brand', name: product.brand },
      description: product.shortDescription,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        price: product.price,
        availability: 'https://schema.org/InStock',
      },
    });
    document.head.appendChild(ldJson);

    return () => {
      document.getElementById('product-ld-json')?.remove();
    };
  }, [product]);

  if (!product) return <ProductNotFound />;

  const categoryLabel = window.STORE_CATEGORIES.find((c) => c.id === product.category)?.label || product.category;

  return (
    <>
      <div className="product-page-top container">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <a href="/loja">Loja</a>
          <span>/</span>
          <span>{categoryLabel}</span>
          <span>/</span>
          <span className="is-current">{product.title}</span>
        </nav>
      </div>

      <section className="section section-white product-page-main">
        <div className="container product-page-grid">
          <window.ProductGallery product={product} />
          <window.ProductInfo product={product} setCursorState={setCursorState} />
        </div>

        <div className="container">
          <window.ProductSpecs product={product} />
        </div>
      </section>

      <window.ProductRelated product={product} setCursorState={setCursorState} />
      <window.ConsultancyCTA setCursorState={setCursorState} />

      <style>{`
        .product-page-top { padding-top: calc(var(--header-height) + 1.75rem); }

        .product-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-muted);
          flex-wrap: wrap;
        }

        .product-breadcrumb a { color: var(--color-muted); text-decoration: none; }
        .product-breadcrumb a:hover { color: var(--color-green); }
        .product-breadcrumb .is-current { color: var(--color-text); }

        .product-page-main { padding-top: 1.5rem; }

        .product-page-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: start;
        }

        @media (max-width: 900px) {
          .product-page-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};

window.ProductPage = ProductPage;
