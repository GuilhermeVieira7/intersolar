const { useEffect } = React;

const ProductNotFound = ({ setCursorState }) => (
  <section className="section section-deep product-not-found">
    <div className="container product-not-found-inner">
      <img
        src="fotos/logo-mark-color.png"
        alt="InterSolar Energia Renovável"
        className="product-not-found-logo"
        width="64"
        height="64"
      />

      <span className="mono-tag eyebrow-line">EQUIPAMENTO INDISPONÍVEL</span>
      <h1 className="product-not-found-title">Ops, já estamos trabalhando para consertar!</h1>
      <p className="product-not-found-text">
        Esse equipamento não foi encontrado ou está com um link quebrado. Enquanto ajustamos isso,
        você pode continuar navegando pelo catálogo ou falar direto com a nossa equipe.
      </p>

      <div className="product-not-found-cta-group">
        <a
          href="/loja"
          className="btn-primary"
          onMouseEnter={() => setCursorState && setCursorState({ text: 'LOJA' })}
          onMouseLeave={() => setCursorState && setCursorState({ text: null })}
        >
          <span>Voltar para a loja</span>
          <window.Icons.ArrowRight size={18} strokeWidth={2} />
        </a>

        <a
          href="https://wa.me/559491489811?text=Ol%C3%A1%21+Encontrei+um+link+de+produto+quebrado+na+loja+da+InterSolar."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <window.Icons.MessageCircle size={18} strokeWidth={1.8} />
          <span>Falar com a InterSolar</span>
        </a>
      </div>
    </div>

    <style>{`
      .product-not-found { padding-top: calc(var(--header-height) + 4rem); text-align: center; }
      .product-not-found-inner { display: flex; flex-direction: column; align-items: center; max-width: 560px; }
      .product-not-found-logo { margin-bottom: 1.5rem; border-radius: 16px; }
      .product-not-found-title {
        font-size: clamp(1.9rem, 4.4vw, 2.7rem);
        margin: 1rem 0 0.9rem;
        color: var(--color-offwhite);
      }
      .product-not-found-text { color: var(--color-muted-onDark); line-height: 1.6; margin-bottom: 2.25rem; }
      .product-not-found-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }

      @media (max-width: 480px) {
        .product-not-found-cta-group { flex-direction: column; width: 100%; }
      }
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

  if (!product) return <ProductNotFound setCursorState={setCursorState} />;

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
