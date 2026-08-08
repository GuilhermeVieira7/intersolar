const { useState, useEffect, useRef } = React;

const EnergyFlow = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(1); // 0: SOL, 1: PAINÉIS, 2: INVERSOR, 3: IMÓVEL, 4: CONSUMO
  const canvasRef = useRef(null);

  const steps = [
    { id: 0, label: 'SOL', sub: 'RADIAÇÃO', verb: 'ORIGEM', desc: 'Emissão contínua de fótons de alta densidade energética.' },
    { id: 1, label: 'PAINÉIS', sub: 'CAPTAÇÃO', verb: 'CAPTAÇÃO', desc: 'Transformação de fótons em corrente contínua (CC) através de células fotovoltaicas.' },
    { id: 2, label: 'INVERSOR', sub: 'CONVERSÃO', verb: 'CONVERSÃO', desc: 'Conversão inteligente de corrente contínua em corrente alternada (CA) trifásica/monofásica.' },
    { id: 3, label: 'IMÓVEL', sub: 'UTILIZAÇÃO', verb: 'ENERGIA', desc: 'Abastecimento imediato da infraestrutura elétrica residencial ou comercial.' },
    { id: 4, label: 'CONSUMO', sub: 'EFICIÊNCIA', verb: 'SEU IMÓVEL', desc: 'Autonomia real com injeção do excedente na rede da concessionária local.' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let w = (canvas.width = canvas.parentElement.clientWidth);
    let h = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      w = canvas.width = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle flow stream
    const flowParticles = Array.from({ length: 45 }, () => ({
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
      size: Math.random() * 2.5 + 1.2,
      offsetY: (Math.random() - 0.5) * 12
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      const margin = 80;
      const nodeY = h / 2;
      const stepWidth = (w - margin * 2) / (steps.length - 1);

      // Draw horizontal baseline connection path
      ctx.beginPath();
      ctx.moveTo(margin, nodeY);
      ctx.lineTo(w - margin, nodeY);
      ctx.strokeStyle = 'rgba(244, 242, 234, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw active progression line up to activeStep
      const computedAccent = (getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#FFC400').trim();
      const activeX = margin + activeStep * stepWidth;
      ctx.beginPath();
      ctx.moveTo(margin, nodeY);
      ctx.lineTo(activeX, nodeY);
      ctx.strokeStyle = computedAccent || '#FFC400';
      ctx.lineWidth = 3;
      ctx.shadowColor = 'rgba(255, 196, 0, 0.5)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Animate energy particles traveling along flow line
      flowParticles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const pX = margin + p.progress * (w - margin * 2);
        const pY = nodeY + Math.sin(p.progress * Math.PI * 8 + Date.now() * 0.003) * 6 + p.offsetY;

        const isPassedActive = pX <= activeX;

        ctx.beginPath();
        ctx.arc(pX, pY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isPassedActive ? 'rgba(255, 220, 100, 0.9)' : 'rgba(244, 242, 234, 0.3)';
        ctx.fill();

        if (isPassedActive) {
          ctx.beginPath();
          ctx.arc(pX, pY, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 196, 0, 0.2)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeStep]);

  return (
    <section className="section section-dark" id="da-luz-a-energia">
      <div className="container">
        <div className="section-header-wrap">
          <span className="mono-tag">CAPÍTULO 01 · O SOL</span>
          <h2 className="section-title">Tudo começa com luz.</h2>
          <p className="section-desc">
            Visualização da jornada fotovoltaica. Passe o cursor sobre cada etapa para examinar a transformação em tempo real.
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="flow-timeline-nav">
          {steps.map((st, idx) => (
            <div
              key={st.id}
              className={`flow-nav-item ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setCursorState({ text: st.verb })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span className="flow-nav-num">0{idx + 1}</span>
              <span className="flow-nav-label">{st.verb}</span>
            </div>
          ))}
        </div>

        {/* Canvas & Interactive Node Diagram */}
        <div className="energy-visualizer-card glass-card">
          <div className="visualizer-canvas-wrap">
            <canvas ref={canvasRef} />
          </div>

          <div className="visualizer-nodes-overlay">
            {steps.map((st, idx) => (
              <div
                key={st.id}
                className={`node-point ${activeStep === idx ? 'node-active' : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className="node-dot">
                  <div className="node-inner-pulse" />
                </div>
                <div className="node-meta">
                  <span className="node-title">{st.label}</span>
                  <span className="node-sub">{st.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Detail Status Card */}
          <div className="visualizer-detail-box">
            <div className="detail-status">
              <span className="status-indicator">●</span>
              <span>ETAPA 0{activeStep + 1} DE 05</span>
            </div>
            <h3 className="detail-title">{steps[activeStep].label} — {steps[activeStep].sub}</h3>
            <p className="detail-desc">{steps[activeStep].desc}</p>
          </div>
        </div>
      </div>

      <style>{`
        .section-header-wrap {
          margin-bottom: 3.5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5.5vw, 5.5rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .section-desc {
          font-size: 1.15rem;
          color: var(--color-muted-grey);
          max-width: 600px;
        }

        .flow-timeline-nav {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 1rem;
          margin-bottom: 2.5rem;
        }

        .flow-nav-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity var(--transition-fast), color var(--transition-fast);
        }

        .flow-nav-item:hover, .flow-nav-item.active {
          opacity: 1;
        }

        .flow-nav-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-color);
        }

        .flow-nav-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
        }

        .energy-visualizer-card {
          position: relative;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .visualizer-canvas-wrap {
          position: absolute;
          inset: 0;
          height: 220px;
          top: 30px;
        }

        .visualizer-canvas-wrap canvas {
          width: 100%;
          height: 100%;
        }

        .visualizer-nodes-overlay {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3rem 1.5rem 1rem 1.5rem;
        }

        .node-point {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .node-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--color-warm-white);
          background-color: var(--color-solar-black);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .node-inner-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: transparent;
          transition: background-color var(--transition-fast);
        }

        .node-active .node-dot {
          border-color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: scale(1.3);
        }

        .node-active .node-inner-pulse {
          background-color: var(--accent-color);
        }

        .node-meta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .node-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.85rem;
        }

        .node-sub {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-muted-grey);
        }

        .visualizer-detail-box {
          position: relative;
          z-index: 10;
          background: rgba(11, 13, 12, 0.85);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          margin-top: 4rem;
        }

        .detail-status {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .status-indicator {
          font-size: 0.6rem;
          animation: pulseGlow 1.5s infinite;
        }

        .detail-title {
          font-size: 1.35rem;
          margin-bottom: 0.4rem;
        }

        .detail-desc {
          font-size: 0.95rem;
          color: rgba(244, 242, 234, 0.8);
        }

        @media (max-width: 768px) {
          .flow-timeline-nav {
            grid-template-columns: repeat(2, 1fr);
          }
          .visualizer-nodes-overlay {
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

window.EnergyFlow = EnergyFlow;
