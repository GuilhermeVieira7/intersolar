const { useEffect, useRef } = React;

const Problem = ({ setCursorState }) => {
  const chartCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = chartCanvasRef.current;
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

    let progress = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      progress = Math.min(progress + 0.015, 1);

      const padding = 60;
      const graphW = w - padding * 2;
      const graphH = h - padding * 2;
      const startY = h - padding;

      // Grid background lines
      ctx.strokeStyle = 'rgba(11, 13, 12, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padding + (graphH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(w - padding, y);
        ctx.stroke();
      }

      // Line 1: CUSTO CONVENCIONAL (Rising compounding curve)
      ctx.beginPath();
      ctx.moveTo(padding, startY - 20);
      const points = 100;
      for (let i = 0; i <= points * progress; i++) {
        const t = i / points;
        const x = padding + t * graphW;
        // Exponential tariff inflation curve
        const y = startY - Math.pow(t, 2.2) * (graphH * 0.75) - Math.sin(t * Math.PI * 6) * 8;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#D32F2F'; // Sharp Warning Red/Dark
      ctx.lineWidth = 3;
      ctx.stroke();

      // Line 2: GERAÇÃO SOLAR (Stable Asset Autonomy)
      ctx.beginPath();
      ctx.moveTo(padding, startY - 20);
      for (let i = 0; i <= points * progress; i++) {
        const t = i / points;
        const x = padding + t * graphW;
        // Stable flat asset line after installation drop
        const y = t < 0.15 ? startY - 20 - (t / 0.15) * 40 : startY - 60 - Math.sin(t * Math.PI * 4) * 3;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#123C2A'; // Energy Green
      ctx.lineWidth = 4;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="section section-light" id="o-problema">
      <div className="container">
        <div className="problem-header">
          <span className="mono-tag">ENERGIA É INFRAESTRUTURA</span>
          
          <h2 className="problem-h1">
            Você não controla o preço da energia.
          </h2>

          <div className="problem-pause-space" />

          <h2 className="problem-h2">
            Mas pode repensar a forma como a consome.
          </h2>
        </div>

        <div className="problem-graph-box">
          <div className="graph-meta-top">
            <div className="graph-legend">
              <div className="legend-item">
                <span className="legend-line red-line" />
                <span className="legend-title">CUSTO CONVENCIONAL (INFLAÇÃO ENERGÉTICA)</span>
              </div>
              <div className="legend-item">
                <span className="legend-line green-line" />
                <span className="legend-title">GERAÇÃO SOLAR (ESTABILIDADE PREVISTA)</span>
              </div>
            </div>
            <span className="graph-badge">MODELO CONCEITUUAL DE INFRAESTRUTURA</span>
          </div>

          <div className="graph-canvas-container">
            <canvas ref={chartCanvasRef} />
          </div>

          <div className="graph-footer-notes">
            <p>
              A energia convencional expõe residências e empresas a revisões tarifárias imprevisíveis. 
              A transição para um ativo fotovoltaico transforma uma despesa contínua e incerta em um investimento patrimonial de longo prazo.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .problem-header {
          max-width: 1000px;
          margin-bottom: 5rem;
        }

        .problem-h1 {
          font-size: clamp(2.8rem, 6vw, 6rem);
          color: var(--color-solar-black);
          margin-top: 1.5rem;
          line-height: 0.95;
        }

        .problem-pause-space {
          height: clamp(2rem, 4vw, 4rem);
        }

        .problem-h2 {
          font-size: clamp(2.5rem, 5.5vw, 5.5rem);
          color: var(--color-energy-green);
          line-height: 0.95;
        }

        .problem-graph-box {
          background: #EFECE3;
          border: 1px solid rgba(11, 13, 12, 0.12);
          border-radius: 24px;
          padding: clamp(1.5rem, 4vw, 3.5rem);
        }

        .graph-meta-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .graph-legend {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .legend-line {
          width: 24px;
          height: 3px;
          border-radius: 2px;
        }

        .red-line { background-color: #D32F2F; }
        .green-line { background-color: #123C2A; }

        .legend-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-solar-black);
          letter-spacing: 0.05em;
        }

        .graph-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-energy-green);
          background: rgba(18, 60, 42, 0.08);
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          letter-spacing: 0.1em;
        }

        .graph-canvas-container {
          position: relative;
          width: 100%;
          height: 320px;
          margin-bottom: 2rem;
        }

        .graph-canvas-container canvas {
          width: 100%;
          height: 100%;
        }

        .graph-footer-notes {
          border-top: 1px solid rgba(11, 13, 12, 0.1);
          padding-top: 1.5rem;
          font-size: 1.05rem;
          color: rgba(11, 13, 12, 0.8);
          max-width: 850px;
        }
      `}</style>
    </section>
  );
};

window.Problem = Problem;
