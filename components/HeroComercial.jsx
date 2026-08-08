const { useState, useEffect, useRef } = React;

const HeroComercial = ({ setCursorState, onCalculateClick }) => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const heroCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = heroCanvasRef.current;
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

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: (Math.random() - 0.5) * 1.2,
      opacity: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = p.x;
        let drawY = p.y;

        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - dist) / 120;
          drawX -= Math.cos(angle) * force * 20;
          drawY -= Math.sin(angle) * force * 20;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 196, 0, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="section section-light-theme hero-comercial-section" id="hero-comercial">
      <div className="container hero-grid">
        {/* Left Column: Copy & Actions */}
        <div className="hero-left-col">
          <div className="hero-eyebrow">
            <span className="mono-tag">ENERGIA SOLAR · PARAUAPEBAS + REGIÃO</span>
          </div>

          <h1 className="hero-comercial-h1">
            Sua energia pode trabalhar a seu favor.
          </h1>

          <p className="hero-comercial-subtext">
            Projeto, instalação e homologação completa para transformar o potencial solar do seu imóvel em geração própria.
          </p>

          <div className="hero-comercial-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={onCalculateClick}
              onMouseEnter={() => setCursorState({ text: 'SIMULAR' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span>CALCULAR MEU POTENCIAL</span>
              <span className="arrow">→</span>
            </button>

            <a
              href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista+da+Intersolar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              onMouseEnter={() => setCursorState({ text: 'ATENDIMENTO' })}
              onMouseLeave={() => setCursorState({ text: null })}
            >
              <span>FALAR COM ESPECIALISTA</span>
            </a>
          </div>
        </div>

        {/* Right Column: Custom Solar System Visual Engine */}
        <div className="hero-right-col">
          <div className="visual-system-box">
            <canvas ref={heroCanvasRef} className="hero-canvas-bg" />

            <div className="visual-flow-nodes">
              {/* Node 1: SOL */}
              <div
                className="flow-node node-sun"
                onMouseEnter={() => { setHoveredNode('SOL'); setCursorState({ text: 'RADIAÇÃO' }); }}
                onMouseLeave={() => { setHoveredNode(null); setCursorState({ text: null }); }}
              >
                <div className="node-icon-ring">☀️</div>
                <span className="node-label">SOL</span>
                {hoveredNode === 'SOL' && <span className="node-tooltip">RADIAÇÃO SOLAR</span>}
              </div>

              <div className="flow-connector"><div className="connector-pulse" /></div>

              {/* Node 2: PAINÉIS */}
              <div
                className="flow-node node-panel"
                onMouseEnter={() => { setHoveredNode('PAINEL'); setCursorState({ text: 'CAPTAÇÃO' }); }}
                onMouseLeave={() => { setHoveredNode(null); setCursorState({ text: null }); }}
              >
                <div className="node-icon-ring">🔲</div>
                <span className="node-label">PAINÉIS</span>
                {hoveredNode === 'PAINEL' && <span className="node-tooltip">CAPTAÇÃO CC</span>}
              </div>

              <div className="flow-connector"><div className="connector-pulse" /></div>

              {/* Node 3: INVERSOR */}
              <div
                className="flow-node node-inverter"
                onMouseEnter={() => { setHoveredNode('INVERSOR'); setCursorState({ text: 'CONVERSÃO' }); }}
                onMouseLeave={() => { setHoveredNode(null); setCursorState({ text: null }); }}
              >
                <div className="node-icon-ring">⚡</div>
                <span className="node-label">INVERSOR</span>
                {hoveredNode === 'INVERSOR' && <span className="node-tooltip">CONVERSÃO CA</span>}
              </div>

              <div className="flow-connector"><div className="connector-pulse" /></div>

              {/* Node 4: IMÓVEL */}
              <div
                className="flow-node node-home"
                onMouseEnter={() => { setHoveredNode('IMÓVEL'); setCursorState({ text: 'CONSUMO' }); }}
                onMouseLeave={() => { setHoveredNode(null); setCursorState({ text: null }); }}
              >
                <div className="node-icon-ring">🏠</div>
                <span className="node-label">IMÓVEL</span>
                {hoveredNode === 'IMÓVEL' && <span className="node-tooltip">CONSUMO INTELIGENTE</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Trust Marquee Bar */}
      <div className="trust-marquee-bar">
        <div className="marquee-track">
          <span>INTERSOLAR</span> <span className="dot">•</span>
          <span>ENERGIA SOLAR</span> <span className="dot">•</span>
          <span>PARAUAPEBAS + REGIÃO</span> <span className="dot">•</span>
          <span>PROJETO</span> <span className="dot">•</span>
          <span>INSTALAÇÃO</span> <span className="dot">•</span>
          <span>HOMOLOGAÇÃO COMPLETA</span> <span className="dot">•</span>

          <span>INTERSOLAR</span> <span className="dot">•</span>
          <span>ENERGIA SOLAR</span> <span className="dot">•</span>
          <span>PARAUAPEBAS + REGIÃO</span> <span className="dot">•</span>
          <span>PROJETO</span> <span className="dot">•</span>
          <span>INSTALAÇÃO</span> <span className="dot">•</span>
          <span>HOMOLOGAÇÃO COMPLETA</span> <span className="dot">•</span>
        </div>
      </div>

      <style>{`
        .hero-comercial-section {
          padding-top: calc(var(--header-height) + 3rem);
          padding-bottom: 0;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .hero-left-col {
          display: flex;
          flex-direction: column;
        }

        .hero-eyebrow {
          margin-bottom: 1.5rem;
        }

        .hero-comercial-h1 {
          font-size: clamp(3.2rem, 6vw, 6rem);
          line-height: 0.92;
          color: var(--color-black-text);
          margin-bottom: 1.5rem;
        }

        .hero-comercial-subtext {
          font-size: 1.25rem;
          color: var(--color-grey-muted);
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 2.75rem;
        }

        .hero-comercial-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .visual-system-box {
          position: relative;
          background: #EFECE3;
          border: 1px solid var(--color-border-light);
          border-radius: 28px;
          padding: 3rem 2rem;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-canvas-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .visual-flow-nodes {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .flow-node {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .node-icon-ring {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.06);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .flow-node:hover .node-icon-ring {
          transform: scale(1.15);
          border-color: var(--accent-color);
        }

        .node-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-black-text);
        }

        .node-tooltip {
          position: absolute;
          top: -36px;
          background: var(--color-dark-bg);
          color: var(--accent-color);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .flow-connector {
          position: relative;
          flex: 1;
          height: 2px;
          background: rgba(8, 9, 8, 0.12);
          margin: 0 0.5rem;
          overflow: hidden;
        }

        .connector-pulse {
          position: absolute;
          width: 30%;
          height: 100%;
          background: var(--accent-color);
          animation: slideConnector 1.8s infinite ease-in-out;
        }

        @keyframes slideConnector {
          0% { left: -30%; }
          100% { left: 100%; }
        }

        .trust-marquee-bar {
          width: 100%;
          background: var(--color-dark-bg);
          color: var(--color-offwhite);
          padding: 1rem 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          animation: marqueeScroll 24s linear infinite;
        }

        .dot {
          color: var(--accent-color);
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .visual-flow-nodes {
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

window.HeroComercial = HeroComercial;
