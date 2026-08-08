const { useState } = React;

const FAQComercial = ({ setCursorState }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqItems = [
    {
      q: 'Quanto custa instalar energia solar?',
      a: 'O investimento é dimensionado conforme a média de consumo do seu imóvel. Realizamos um estudo gratuito da sua fatura para calcular a potência exata necessária.'
    },
    {
      q: 'Quanto posso economizar?',
      a: 'A geração própria substitui a compra de energia tarifada da distribuidora, reduzindo sua conta ao valor mínimo da taxa de disponibilidade da rede.'
    },
    {
      q: 'A Intersolar faz a instalação?',
      a: 'Sim. Gerenciamos 100% da instalação mecânica e elétrica no seu imóvel com profissionais especializados e equipamentos normatizados.'
    },
    {
      q: 'Vocês cuidam da homologação?',
      a: 'Sim. Cuidamos do projeto elétrico, emissão de ART e todo o acompanhamento com a distribuidora local até a troca do medidor.'
    },
    {
      q: 'Atendem minha região?',
      a: 'Atendemos Parauapebas e toda a região circunvizinha com equipe presencial própria e rápido suporte de campo.'
    },
    {
      q: 'Como começo um projeto?',
      a: 'Basta enviar uma foto da sua conta recente de energia no WhatsApp. Nossa equipe elabora uma simulação técnica gratuita para o seu imóvel.'
    }
  ];

  return (
    <section className="section section-dark-theme" id="faq">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '3.5rem' }}>
          <span className="mono-tag">RESPOSTAS TÉCNICAS E DIRETA</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', color: 'var(--color-offwhite)' }}>Perguntas Frequentes.</h2>
        </div>

        <div className="faq-comercial-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          {/* Question List Left */}
          <div className="faq-list-col" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--color-border-dark)' }}>
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`faq-com-item ${openIdx === idx ? 'active' : ''}`}
                onClick={() => setOpenIdx(idx)}
                onMouseEnter={() => setCursorState({ text: 'LEIA' })}
                onMouseLeave={() => setCursorState({ text: null })}
                style={{
                  padding: '1.5rem 0',
                  borderTop: '1px solid var(--color-border-dark)',
                  cursor: 'pointer',
                  opacity: openIdx === idx ? 1 : 0.5,
                  color: openIdx === idx ? 'var(--accent-color)' : 'var(--color-offwhite)',
                  transition: 'all 0.2s ease'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  0{idx + 1}. {item.q}
                </h3>
              </div>
            ))}
          </div>

          {/* Answer Display Right */}
          <div className="faq-answer-card glass-card" style={{ sticky: 'top', top: '100px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>RESPOSTA OFICIAL INTSOLAR</span>
            <h3 style={{ fontSize: '1.5rem', margin: '1rem 0 0.75rem 0', color: 'var(--color-offwhite)' }}>{faqItems[openIdx].q}</h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(247, 246, 241, 0.85)', lineHeight: 1.7, marginBottom: '2rem' }}>{faqItems[openIdx].a}</p>

            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+projeto+fotovoltaico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onMouseEnter={() => setCursorState({ text: 'WHATSAPP' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span>FALAR DIRETO NO WHATSAPP →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.FAQComercial = FAQComercial;
