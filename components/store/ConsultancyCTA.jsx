const ConsultancyCTA = ({ setCursorState }) => {
  const [name, setName] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [billAmount, setBillAmount] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name || '(não informado)'}. Gostaria de uma recomendação de equipamentos de energia solar. Valor médio da minha conta de energia: ${billAmount || '(não informado)'}.`;
    const waHref = `https://wa.me/559491489811?text=${encodeURIComponent(msg)}`;
    setSent(true);
    window.open(waHref, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section section-deep" id="consultoria">
      <div className="container consultancy-wrap">
        <div className="consultancy-copy">
          <span className="mono-tag eyebrow-line">CONSULTORIA GRATUITA</span>
          <h2 className="consultancy-title">Não sabe qual equipamento escolher?</h2>
          <p className="consultancy-text">
            Fale com a equipe da InterSolar e encontre a solução ideal para o seu projeto.
          </p>
          <a
            href="https://wa.me/559491489811?text=Ol%C3%A1%21+Gostaria+de+ajuda+para+escolher+equipamentos+de+energia+solar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onMouseEnter={() => setCursorState && setCursorState({ text: 'WHATSAPP' })}
            onMouseLeave={() => setCursorState && setCursorState({ text: null })}
          >
            <span>Falar com especialista</span>
            <window.Icons.ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>

        <form className="consultancy-form card" onSubmit={handleSubmit}>
          <label className="consultancy-field">
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required />
          </label>
          <label className="consultancy-field">
            <span>WhatsApp</span>
            <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(94) 9 9999-9999" required />
          </label>
          <label className="consultancy-field">
            <span>Valor médio da conta de energia</span>
            <input type="text" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} placeholder="Ex: R$ 350" />
          </label>
          <button type="submit" className="btn-primary consultancy-submit">
            <span>{sent ? 'Enviado! Continue no WhatsApp' : 'Quero uma recomendação'}</span>
            <window.Icons.ArrowRight size={18} strokeWidth={2} />
          </button>
        </form>
      </div>

      <style>{`
        .consultancy-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .consultancy-title {
          font-size: clamp(2rem, 4.6vw, 3rem);
          margin-top: 0.9rem;
          margin-bottom: 1rem;
          color: var(--color-offwhite);
        }

        .consultancy-text {
          color: var(--color-muted-onDark);
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 460px;
          margin-bottom: 2rem;
        }

        .consultancy-form {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .consultancy-field { display: flex; flex-direction: column; gap: 0.45rem; }

        .consultancy-field span {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: var(--color-yellow-light);
          text-transform: uppercase;
        }

        .consultancy-field input {
          background: rgba(247, 245, 238, 0.06);
          border: 1.5px solid var(--color-border-onDark);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          color: var(--color-offwhite);
          font-family: var(--font-body);
          font-size: 0.95rem;
        }

        .consultancy-field input::placeholder { color: var(--color-muted-onDark); }
        .consultancy-field input:focus { outline: 2px solid var(--color-yellow); outline-offset: 2px; border-color: var(--color-yellow); }

        .consultancy-submit { width: 100%; margin-top: 0.4rem; }

        @media (max-width: 900px) {
          .consultancy-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.ConsultancyCTA = ConsultancyCTA;
