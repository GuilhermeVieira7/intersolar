const { useState } = React;

const FAQ = ({ setCursorState }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqItems = [
    {
      q: 'Quanto custa um projeto solar?',
      a: 'O investimento exato depende da curva de consumo do imóvel e da potência de pico necessária. Projetamos cada sistema sob medida após análise gratuita da sua fatura de energia.'
    },
    {
      q: 'Quanto posso economizar na conta?',
      a: 'O sistema fotovoltaico reduz a dependência da tarifa da concessionária ao gerar a própria energia no local, restando apenas as taxas mínimas obrigatórias de disponibilidade da rede.'
    },
    {
      q: 'Vocês fazem a instalação completa?',
      a: 'Sim. Gerenciamos 100% da instalação física, incluindo estruturas de fixação, painéis, cabeamento blindado, inversores e dispositivos de proteção contra surtos.'
    },
    {
      q: 'Vocês cuidam da homologação?',
      a: 'Sim. Elaboramos o projeto elétrico, emitimos a Anotação de Responsabilidade Técnica (ART) e cuidamos de todos os trâmites burocráticos e vistorias perante a distribuidora local.'
    },
    {
      q: 'Atendem minha região além de Parauapebas?',
      a: 'Atendemos Parauapebas e toda a região circunvizinha com equipe técnica própria pronta para atendimento presencial e suporte de campo.'
    },
    {
      q: 'Preciso entender de energia solar para ter o sistema?',
      a: 'Não. Entregamos o sistema instalado, ligado e homologado, fornecendo um aplicativo simples no seu celular para você acompanhar a geração diária sem complicação.'
    }
  ];

  return (
    <section className="section section-dark" id="faq">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">ESCLARECIMENTOS TÉCNICOS</span>
          <h2 className="section-title">Perguntas Frequentes.</h2>
        </div>

        <div className="faq-editorial-grid">
          {/* Question Column */}
          <div className="faq-questions-list">
            {faqItems.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`faq-q-item ${isOpen ? 'active-q' : ''}`}
                  onClick={() => setOpenIdx(idx)}
                  onMouseEnter={() => setCursorState({ text: 'RESPOSTA' })}
                  onMouseLeave={() => setCursorState({ text: null })}
                >
                  <span className="faq-q-num">0{idx + 1}</span>
                  <h3 className="faq-q-text">{item.q}</h3>
                  <span className="faq-arrow">{isOpen ? '→' : '↘'}</span>
                </div>
              );
            })}
          </div>

          {/* Lateral Smooth Reveal Answer Box */}
          <div className="faq-answer-container glass-card">
            <div className="faq-answer-header">
              <span className="answer-badge">RESPOSTA OFICIAL INTSOLAR</span>
              <span className="answer-index">PERGUNTA 0{openIdx + 1} DE 06</span>
            </div>

            <h3 className="faq-answer-q">{faqItems[openIdx].q}</h3>
            <p className="faq-answer-a">{faqItems[openIdx].a}</p>

            <div className="faq-answer-footer">
              <a
                href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+energia+solar."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onMouseEnter={() => setCursorState({ text: 'DÚVIDAS' })}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <span>TIRAR DÚVIDAS NO WHATSAPP</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-editorial-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .faq-questions-list {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--color-border-dark);
        }

        .faq-q-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 0;
          border-top: 1px solid var(--color-border-dark);
          cursor: pointer;
          opacity: 0.5;
          transition: opacity var(--transition-fast), color var(--transition-fast), padding var(--transition-fast);
        }

        .faq-q-item:hover, .faq-q-item.active-q {
          opacity: 1;
        }

        .faq-q-item.active-q {
          color: var(--accent-color);
          padding-left: 0.75rem;
        }

        .faq-q-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .faq-q-text {
          font-size: clamp(1.2rem, 2.2vw, 1.8rem);
          font-family: var(--font-display);
          font-weight: 700;
          flex: 1;
          margin: 0 1.5rem;
        }

        .faq-arrow {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          color: var(--accent-color);
        }

        .faq-answer-container {
          position: sticky;
          top: calc(var(--header-height) + 2rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 380px;
        }

        .faq-answer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
        }

        .answer-badge {
          color: var(--accent-color);
          letter-spacing: 0.1em;
        }

        .answer-index {
          color: var(--color-muted-grey);
        }

        .faq-answer-q {
          font-size: 1.5rem;
          color: var(--color-warm-white);
          margin-bottom: 1rem;
        }

        .faq-answer-a {
          font-size: 1.1rem;
          color: rgba(244, 242, 234, 0.85);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .faq-answer-footer {
          border-top: 1px solid var(--color-border-dark);
          padding-top: 1.25rem;
        }

        @media (max-width: 900px) {
          .faq-editorial-grid {
            grid-template-columns: 1fr;
          }
          .faq-answer-container {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
};

window.FAQ = FAQ;
