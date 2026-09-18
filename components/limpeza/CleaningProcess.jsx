const PROCESS_STEPS = [
  {
    icon: 'CalendarCheck',
    title: 'Agendamento trimestral',
    text: 'A equipe entra em contato antes de cada uma das quatro visitas para combinar o melhor dia — sem burocracia.',
  },
  {
    icon: 'Droplets',
    title: 'Limpeza especializada',
    text: 'Remoção da poeira de minério com técnica e equipamento próprios para superfície fotovoltaica, sem riscar o vidro.',
  },
  {
    icon: 'Wrench',
    title: 'Inspeção do sistema',
    text: 'Verificação visual de cabos, conectores e estrutura de fixação em cada visita, para identificar problemas cedo.',
  },
  {
    icon: 'Gauge',
    title: 'Relatório de geração',
    text: 'Comparativo de geração antes e depois da limpeza, para você acompanhar o desempenho real do seu sistema.',
  },
];

const CleaningProcess = () => {
  return (
    <section className="cleaning-process section-light" id="como-funciona-limpeza">
      <div className="container">
        <div className="cleaning-process-header">
          <span className="mono-tag eyebrow-line">COMO FUNCIONA</span>
          <h2 className="cleaning-process-title">Quatro visitas. Zero surpresa.</h2>
        </div>

        <div className="cleaning-process-timeline">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = window.Icons[step.icon];
            return (
              <div className="cleaning-process-step" key={step.title}>
                <div className="cleaning-process-step-marker">
                  <span className="step-badge"><Icon size={19} strokeWidth={1.9} /></span>
                  {idx < PROCESS_STEPS.length - 1 && <span className="cleaning-process-line" />}
                </div>
                <div className="cleaning-process-step-body">
                  <span className="cleaning-process-step-index">0{idx + 1}</span>
                  <h3 className="cleaning-process-step-title">{step.title}</h3>
                  <p className="cleaning-process-step-text">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cleaning-process-header { max-width: 620px; margin-bottom: 3.5rem; }

        .cleaning-process-title {
          font-size: clamp(2rem, 4.2vw, 3rem);
          margin-top: 1rem;
          color: var(--color-text);
        }

        .cleaning-process-timeline {
          display: flex;
          gap: 0;
        }

        .cleaning-process-step {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cleaning-process-step-marker {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cleaning-process-line {
          flex: 1;
          height: 1.5px;
          background: var(--color-border);
          margin-left: 0.5rem;
        }

        .cleaning-process-step-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--color-muted);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .cleaning-process-step-title {
          font-size: 1.25rem;
          margin-bottom: 0.65rem;
          color: var(--color-text);
          max-width: 220px;
        }

        .cleaning-process-step-text {
          font-size: 0.92rem;
          color: var(--color-muted);
          line-height: 1.6;
          max-width: 240px;
        }

        @media (max-width: 900px) {
          .cleaning-process-timeline { flex-direction: column; gap: 2.25rem; }
          .cleaning-process-line { display: none; }
        }
      `}</style>
    </section>
  );
};

window.CleaningProcess = CleaningProcess;
