const { useState, useEffect, useRef } = React;

const Dashboard = ({ setCursorState }) => {
  const [solarGen, setSolarGen] = useState(14.8);
  const [gridFeed, setGridFeed] = useState(8.2);
  const [consumption, setConsumption] = useState(6.6);
  const dashCanvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarGen(+(14.5 + Math.random() * 0.8).toFixed(1));
      setGridFeed(+(7.9 + Math.random() * 0.6).toFixed(1));
      setConsumption(+(6.4 + Math.random() * 0.4).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = dashCanvasRef.current;
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

    const pointsCount = 40;
    const history = Array.from({ length: pointsCount }, (_, i) => Math.sin(i * 0.3) * 20 + 50);

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      history.shift();
      history.push(Math.sin(Date.now() * 0.002) * 25 + 55 + (Math.random() - 0.5) * 5);

      // Grid lines
      ctx.strokeStyle = 'rgba(244, 242, 234, 0.06)';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        const y = (h / 4) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Render Telemetry Wave
      ctx.beginPath();
      const stepX = w / (pointsCount - 1);
      history.forEach((val, i) => {
        const x = i * stepX;
        const y = h - (val / 100) * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      ctx.strokeStyle = (getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#FFC400').trim();
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Fill area under curve
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(255, 196, 0, 0.25)');
      grad.addColorStop(1, 'rgba(255, 196, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="section section-dark" id="dashboard">
      <div className="container">
        <div className="dash-sim-disclaimer">
          <span className="disclaimer-tag">DADOS DEMONSTRATIVOS / INTERFACE DE TELEMETRIA</span>
          <span className="disclaimer-note">Exemplo de aplicativo de monitoramento que acompanha as instalações da Intersolar</span>
        </div>

        <div className="dashboard-frame glass-card">
          <div className="dash-top-bar">
            <div className="dash-brand">
              <span className="dash-icon">⚡</span>
              <span className="dash-title">INTERSOLAR ENERGY SYSTEM</span>
            </div>

            <div className="dash-status">
              <span className="status-dot green-dot" />
              <span>SYSTEM STATUS ● ONLINE</span>
            </div>
          </div>

          <div className="dash-grid-content">
            {/* Real-time Graph Area */}
            <div className="dash-graph-card">
              <div className="graph-card-header">
                <span className="graph-label">ENERGY FLOW (LIVE SIMULATION)</span>
                <span className="graph-rate">GENERATION RATE: {solarGen} kW</span>
              </div>
              <div className="dash-canvas-wrap">
                <canvas ref={dashCanvasRef} />
              </div>
            </div>

            {/* Telemetry Metric Cards */}
            <div className="dash-metrics-col">
              <div className="metric-box">
                <span className="metric-name">GERAÇÃO SOLAR</span>
                <span className="metric-value yellow-val">{solarGen} <small>kW</small></span>
                <div className="metric-bar"><div className="bar-fill" style={{ width: `${(solarGen / 20) * 100}%` }} /></div>
              </div>

              <div className="metric-box">
                <span className="metric-name">INJEÇÃO NA REDE (GRID)</span>
                <span className="metric-value green-val">{gridFeed} <small>kW</small></span>
                <div className="metric-bar"><div className="bar-fill green-fill" style={{ width: `${(gridFeed / 15) * 100}%` }} /></div>
              </div>

              <div className="metric-box">
                <span className="metric-name">CONSUMO INSTANTÂNEO</span>
                <span className="metric-value white-val">{consumption} <small>kW</small></span>
                <div className="metric-bar"><div className="bar-fill white-fill" style={{ width: `${(consumption / 10) * 100}%` }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dash-sim-disclaimer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding: 0 0.5rem;
        }

        .disclaimer-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-color);
          letter-spacing: 0.12em;
          font-weight: 700;
        }

        .disclaimer-note {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-muted-grey);
        }

        .dashboard-frame {
          border: 1px solid var(--color-border-dark);
          background: rgba(15, 18, 17, 0.95);
        }

        .dash-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border-dark);
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
        }

        .dash-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dash-icon {
          font-size: 1.1rem;
        }

        .dash-title {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          color: var(--color-warm-white);
        }

        .dash-status {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-muted-grey);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #00E676;
          box-shadow: 0 0 10px #00E676;
        }

        .dash-grid-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .dash-graph-card {
          background: rgba(11, 13, 12, 0.7);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .graph-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-muted-grey);
          margin-bottom: 1rem;
        }

        .graph-rate {
          color: var(--accent-color);
        }

        .dash-canvas-wrap {
          width: 100%;
          height: 200px;
        }

        .dash-canvas-wrap canvas {
          width: 100%;
          height: 100%;
        }

        .dash-metrics-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .metric-box {
          background: rgba(11, 13, 12, 0.7);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-name {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-muted-grey);
          letter-spacing: 0.1em;
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
        }
        .metric-value small {
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--color-muted-grey);
        }

        .yellow-val { color: var(--accent-color); }
        .green-val { color: #00E676; }
        .white-val { color: var(--color-warm-white); }

        .metric-bar {
          height: 4px;
          width: 100%;
          background: rgba(244, 242, 234, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--accent-color);
          transition: width 0.5s ease;
        }
        .green-fill { background: #00E676; }
        .white-fill { background: var(--color-warm-white); }

        @media (max-width: 768px) {
          .dash-grid-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

window.Dashboard = Dashboard;
