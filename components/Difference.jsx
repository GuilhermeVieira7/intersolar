const { useState, useEffect, useRef } = React;

const Difference = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const lines = [
    { num: '01', title: 'Projetamos sistemas.', desc: 'Estudo minucioso de orientação solar, sombreamento, curvas de consumo e eficiência de carga.' },
    { num: '02', title: 'Instalamos sistemas.', desc: 'Execução técnica rigorosa com equipamentos normatizados e engenheiros especializados em Parauapebas.' },
    { num: '03', title: 'Colocamos sistemas para funcionar.', desc: 'Testes de comissionamento, calibração do inversor e sincronização da geração.' },
    { num: '04', title: 'Do projeto à homologação.', desc: 'Trâmite burocrático integral perante a concessionária local sem desgastes para o cliente.' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (rect.height + windowH);
        const idx = Math.min(Math.floor(progress * lines.length * 1.2), lines.length - 1);
        setActiveStep(Math.max(0, idx));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section section-dark" id="a-diferenca" ref={containerRef}>
      <div className="container">
        <div className="diff-header">
          <span className="mono-tag">CAPÍTULO 02 · A ENGENHARIA</span>
          <h2 className="diff-h1">Não vendemos apenas painéis.</h2>
        </div>

        <div className="diff-lines-stack">
          {lines.map((line, idx) => {
            const isActive = idx <= activeStep;
            return (
              <div
                key={line.num}
                className={`diff-line-item ${isActive ? 'line-visible' : ''}`}
                onMouseEnter={() => {
                  setActiveStep(idx);
                  setCursorState({ text: 'DISCOVER' });
                }}
                onMouseLeave={() => setCursorState({ text: null })}
              >
                <div className="diff-line-top">
                  <span className="diff-num">{line.num}</span>
                  <h3 className="diff-line-title">{line.title}</h3>
                </div>
                <p className="diff-line-desc">{line.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .diff-header {
          margin-bottom: 5rem;
        }

        .diff-h1 {
          font-size: clamp(3rem, 7vw, 7.5rem);
          margin-top: 1rem;
          color: var(--color-warm-white);
        }

        .diff-lines-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .diff-line-item {
          border-top: 1px solid var(--color-border-dark);
          padding-top: 2.5rem;
          padding-bottom: 1.5rem;
          opacity: 0.25;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          cursor: pointer;
        }

        .diff-line-item.line-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .diff-line-item:hover {
          border-color: var(--accent-color);
        }

        .diff-line-top {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        .diff-num {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          color: var(--accent-color);
          font-weight: 700;
        }

        .diff-line-title {
          font-size: clamp(2rem, 4.5vw, 4.5rem);
          color: var(--color-warm-white);
          line-height: 1;
        }

        .diff-line-desc {
          font-size: 1.15rem;
          color: var(--color-muted-grey);
          max-width: 700px;
          margin-left: 4rem;
        }

        @media (max-width: 768px) {
          .diff-line-top {
            flex-direction: column;
            gap: 0.5rem;
          }
          .diff-line-desc {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

window.Difference = Difference;
