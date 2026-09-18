const { useState } = React;

const CleaningFAQ = ({ setCursorState }) => {
  const [openIdx, setOpenIdx] = useState(0);
  const items = window.CLEANING_FAQ;

  return (
    <section className="section section-white" id="faq-limpeza">
      <div className="container">
        <div className="faq-header-wrap">
          <span className="mono-tag eyebrow-line">PERGUNTAS FREQUENTES</span>
          <h2 className="faq-title">Sobre o plano de limpeza.</h2>
        </div>

        <div className="faq-list">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-q-icon">
                    {isOpen ? <window.Icons.Minus size={18} strokeWidth={2} /> : <window.Icons.Plus size={18} strokeWidth={2} />}
                  </span>
                </button>
                <div className="faq-answer" style={{ maxHeight: isOpen ? '260px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer">
          <span className="faq-footer-text">Ainda ficou com alguma dúvida?</span>
          <a
            href={`https://wa.me/559491489811?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre o plano InterSolar Clean de limpeza de painéis.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onMouseEnter={() => setCursorState && setCursorState({ text: 'DÚVIDAS' })}
            onMouseLeave={() => setCursorState && setCursorState({ text: null })}
          >
            <span>Falar com a InterSolar</span>
            <window.Icons.ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};

window.CleaningFAQ = CleaningFAQ;
