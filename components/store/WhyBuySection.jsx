const WHY_BUY_ITEMS = [
  { icon: 'ShieldCheck', title: 'Equipamentos selecionados', desc: 'Trabalhamos com fabricantes reconhecidos, avaliados pela nossa equipe técnica.' },
  { icon: 'Wrench', title: 'Atendimento especializado', desc: 'Ajudamos você a escolher o equipamento certo para o seu projeto.' },
  { icon: 'Sun', title: 'Experiência em energia solar', desc: 'Anos de atuação em projetos residenciais e comerciais em Parauapebas e região.' },
  { icon: 'MessageCircle', title: 'Suporte antes e depois da compra', desc: 'Você conta com a InterSolar da escolha do equipamento à instalação.' },
];

const WhyBuySection = ({ setCursorState }) => {
  return (
    <section className="section section-light" id="por-que-comprar">
      <div className="container">
        <div className="why-buy-header">
          <span className="mono-tag eyebrow-line">POR QUE A INTERSOLAR</span>
          <h2 className="why-buy-title">Comprar com quem entende de energia faz diferença.</h2>
        </div>

        <div className="why-buy-grid">
          {WHY_BUY_ITEMS.map((b) => {
            const Icon = window.Icons[b.icon];
            return (
              <div key={b.title} className="why-buy-item">
                <div className="why-buy-icon"><Icon size={22} strokeWidth={1.6} /></div>
                <h3 className="why-buy-item-title">{b.title}</h3>
                <p className="why-buy-item-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-buy-header { max-width: 640px; margin-bottom: 3rem; }

        .why-buy-title {
          font-size: clamp(2.1rem, 4.6vw, 3.2rem);
          margin-top: 0.9rem;
          color: var(--color-text);
        }

        .why-buy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .why-buy-item { display: flex; flex-direction: column; gap: 0.6rem; padding-top: 1.5rem; border-top: 2px solid var(--color-border); }

        .why-buy-icon {
          width: 46px; height: 46px; border-radius: 12px;
          background: var(--color-green-deep); color: var(--color-yellow);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 0.2rem;
        }

        .why-buy-item-title { font-size: 1.05rem; color: var(--color-text); }
        .why-buy-item-desc { font-size: 0.9rem; color: var(--color-muted); line-height: 1.55; }

        @media (max-width: 980px) {
          .why-buy-grid { grid-template-columns: repeat(2, 1fr); gap: 1.75rem; }
        }

        @media (max-width: 560px) {
          .why-buy-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.WhyBuySection = WhyBuySection;
