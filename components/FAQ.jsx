const { useState } = React;

const FAQ_ITEMS = [
  { q: 'Quanto posso economizar com energia solar?', a: 'A economia depende do consumo do imóvel, do dimensionamento do sistema e do padrão de uso de energia. Após a análise da sua fatura, apresentamos uma estimativa personalizada.' },
  { q: 'Energia solar funciona em dias nublados?', a: 'Sim. Os painéis continuam gerando energia em dias nublados, com produção reduzida em relação a dias de céu limpo.' },
  { q: 'O sistema funciona durante a noite?', a: 'Os painéis não geram energia à noite. Nesse período, o imóvel utiliza energia da rede da concessionária, conforme as regras vigentes de compensação.' },
  { q: 'Quantos painéis solares meu imóvel precisa?', a: 'A quantidade depende do consumo médio de energia, da área disponível e da irradiação solar local. Esse cálculo é feito durante o dimensionamento do projeto.' },
  { q: 'Posso instalar energia solar em uma empresa?', a: 'Sim. A InterSolar desenvolve projetos para residências, comércios e empresas, dimensionados conforme o consumo de cada operação.' },
  { q: 'Quanto tempo demora a instalação?', a: 'O prazo varia conforme o porte do projeto e a complexidade do telhado ou estrutura. O prazo estimado é informado durante o orçamento.' },
  { q: 'Preciso modificar meu telhado?', a: 'Na maioria dos casos não é necessário. A equipe avalia a estrutura do telhado durante a análise técnica para definir o tipo de fixação adequado.' },
  { q: 'Qual é a vida útil dos painéis solares?', a: 'Os painéis fotovoltaicos são projetados para operar por muitos anos, com queda gradual e gradativa de desempenho ao longo do tempo, conforme especificação do fabricante.' },
  { q: 'Os painéis solares precisam de manutenção?', a: 'A manutenção é simples e pontual, geralmente relacionada à limpeza da superfície dos módulos e à verificação periódica do sistema.' },
  { q: 'Como funciona o orçamento?', a: 'Basta enviar sua conta de energia mais recente pelo WhatsApp. A equipe da InterSolar analisa o consumo e retorna com uma proposta personalizada.' },
  { q: 'A InterSolar atende apenas Parauapebas?', a: 'A InterSolar atende Parauapebas e a região circunvizinha.' },
  { q: 'Posso financiar um sistema de energia solar?', a: 'Existem linhas de financiamento disponíveis no mercado para energia solar. Durante o atendimento, a equipe pode orientar sobre as opções aplicáveis ao seu caso.' },
  { q: 'O que acontece quando o sistema produz mais energia do que o imóvel consome?', a: 'O excedente é injetado na rede da concessionária e gera créditos de energia, que podem ser utilizados para compensar o consumo em outros períodos, conforme as regras vigentes.' },
  { q: 'Como saber qual sistema é ideal para minha conta de luz?', a: 'A equipe da InterSolar analisa sua fatura de energia e o perfil de consumo do imóvel para indicar o dimensionamento mais adequado.' },
];

const FAQ = ({ setCursorState }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section section-white" id="faq">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag eyebrow-line">PERGUNTAS FREQUENTES</span>
          <h2 className="section-title">Perguntas frequentes.</h2>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
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
            href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+energia+solar."
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

      <style>{`
        .section-header-wrap { margin-bottom: 2.75rem; max-width: 640px; }

        .section-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          margin-top: 0.9rem;
          color: var(--color-text);
        }

        .faq-list {
          border-top: 1px solid var(--color-border);
          max-width: 900px;
        }

        .faq-item { border-bottom: 1px solid var(--color-border); }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          padding: 1.5rem 0.25rem;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-q-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.02rem, 1.8vw, 1.2rem);
          color: var(--color-text);
        }

        .faq-q-icon {
          flex-shrink: 0;
          width: 34px; height: 34px; border-radius: 50%;
          background: var(--color-offwhite);
          color: var(--color-green);
          display: flex; align-items: center; justify-content: center;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .faq-item.is-open .faq-q-icon { background: var(--color-yellow); color: var(--color-green-deep); }

        .faq-answer {
          overflow: hidden;
          transition: max-height var(--transition-smooth);
        }

        .faq-answer p {
          padding: 0 0.25rem 1.5rem;
          font-size: 1rem;
          color: var(--color-muted);
          line-height: 1.65;
          max-width: 720px;
        }

        .faq-footer {
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .faq-footer-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--color-text);
        }

        @media (max-width: 700px) {
          .faq-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

window.FAQ = FAQ;
