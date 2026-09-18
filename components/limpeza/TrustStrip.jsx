const TRUST_ITEMS = [
  { icon: 'ShieldCheck', text: 'Técnica que não danifica o vidro nem a moldura' },
  { icon: 'MapPin', text: 'Atendimento em Parauapebas e região' },
  { icon: 'SolarPanel', text: 'Atende sistemas de qualquer instalador' },
];

const TrustStrip = () => {
  return (
    <section className="trust-strip section-dark">
      <div className="container trust-strip-row">
        {TRUST_ITEMS.map((item) => {
          const Icon = window.Icons[item.icon];
          return (
            <div className="trust-strip-item" key={item.text}>
              <Icon size={20} strokeWidth={1.8} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .trust-strip { padding: clamp(1.75rem, 3vw, 2.5rem) 0; }

        .trust-strip-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--color-offwhite);
        }

        .trust-strip-item svg { color: var(--color-yellow); flex-shrink: 0; }

        @media (max-width: 700px) {
          .trust-strip-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

window.TrustStrip = TrustStrip;
