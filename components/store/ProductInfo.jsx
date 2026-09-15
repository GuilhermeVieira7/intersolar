const { useState } = React;

const ProductInfo = ({ product, setCursorState }) => {
  const [qty, setQty] = useState(1);

  const subtotal = product.price * qty;
  const pixSubtotal = product.pixPrice * qty;

  const whatsappHref = `https://wa.me/559491489811?text=${encodeURIComponent(
    `Olá! Estou interessado no produto ${product.title} (${product.brand}) da InterSolar. Quantidade desejada: ${qty}.`
  )}`;

  const handleBuyNow = () => {
    if (product.asaasPaymentUrl) {
      window.open(product.asaasPaymentUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="product-info">
      <span className="mono-tag eyebrow-line">{product.brand}</span>
      <h1 className="product-info-title">{product.title}</h1>
      <p className="product-info-model">Modelo {product.model}</p>

      <div className="product-info-tags">
        {product.power && <span className="product-info-tag">{product.power}</span>}
        {product.efficiency && product.efficiency !== '—' && <span className="product-info-tag">{product.efficiency} de eficiência</span>}
      </div>

      <p className="product-info-desc">{product.shortDescription}</p>

      <div className="product-info-price-block">
        <span className="product-info-price">{window.StoreData.formatBRL(subtotal)}</span>
        <span className="product-info-pix">no Pix: {window.StoreData.formatBRL(pixSubtotal)}</span>
        <span className="product-info-installments">
          ou {product.installments.count}x de {window.StoreData.formatBRL(product.installments.value * qty)}
        </span>
      </div>

      <div className="product-info-qty-row">
        <span className="product-info-qty-label">Quantidade</span>
        <window.QuantitySelector value={qty} onChange={setQty} />
      </div>

      <div className="product-info-cta-group">
        <button
          type="button"
          className="btn-primary product-info-buy"
          onClick={handleBuyNow}
          onMouseEnter={() => setCursorState && setCursorState({ text: 'COMPRAR' })}
          onMouseLeave={() => setCursorState && setCursorState({ text: null })}
        >
          <window.Icons.ShoppingBag size={18} strokeWidth={2} />
          <span>Comprar agora</span>
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary product-info-whatsapp"
        >
          <window.Icons.MessageCircle size={18} strokeWidth={1.8} />
          <span>Falar com especialista</span>
        </a>
      </div>

      {!product.asaasPaymentUrl && (
        <p className="product-info-payment-note">
          Link de pagamento em configuração. Ao clicar em "Comprar agora" você será direcionado ao WhatsApp da InterSolar para finalizar sua compra.
        </p>
      )}

      <ul className="product-info-trust">
        <li><window.Icons.ShieldCheck size={16} strokeWidth={2} /> {product.warranty}</li>
        <li><window.Icons.Check size={16} strokeWidth={2} /> Suporte InterSolar antes e depois da compra</li>
      </ul>

      <style>{`
        .product-info { display: flex; flex-direction: column; }

        .product-info-title {
          font-size: clamp(1.8rem, 3.6vw, 2.5rem);
          margin-top: 0.75rem;
          color: var(--color-text);
        }

        .product-info-model {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-muted);
          margin-top: 0.4rem;
        }

        .product-info-tags { display: flex; gap: 0.6rem; margin-top: 1.1rem; flex-wrap: wrap; }

        .product-info-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: var(--color-offwhite);
          border-radius: 999px;
          padding: 0.4rem 0.85rem;
          color: var(--color-text);
        }

        .product-info-desc {
          margin-top: 1.35rem;
          color: var(--color-muted);
          line-height: 1.65;
          max-width: 480px;
        }

        .product-info-price-block {
          margin-top: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .product-info-price {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.3rem);
          color: var(--color-text);
        }

        .product-info-pix { font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--color-green); }
        .product-info-installments { font-size: 0.88rem; color: var(--color-muted); }

        .product-info-qty-row {
          margin-top: 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .product-info-qty-label { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; }

        .product-info-cta-group { display: flex; gap: 1rem; margin-top: 1.75rem; flex-wrap: wrap; }
        .product-info-buy, .product-info-whatsapp { flex: 1; min-width: 220px; }

        .product-info-payment-note {
          margin-top: 0.9rem;
          font-size: 0.8rem;
          color: var(--color-muted);
          background: var(--color-offwhite);
          border-radius: 10px;
          padding: 0.75rem 0.9rem;
        }

        .product-info-trust {
          list-style: none;
          margin-top: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .product-info-trust li {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.88rem;
          color: var(--color-muted);
        }

        .product-info-trust li svg { color: var(--color-green); flex-shrink: 0; }

        @media (max-width: 600px) {
          .product-info-cta-group { flex-direction: column; }
          .product-info-buy, .product-info-whatsapp { width: 100%; }
        }
      `}</style>
    </div>
  );
};

window.ProductInfo = ProductInfo;
