const { useState, useEffect, useRef } = React;

const EnergyFlowComercial = ({ setCursorState }) => {
  const [activeNode, setActiveNode] = useState('PAINÉIS');
  const flowCanvasRef = useRef(null);

  const nodeDetails = {
    SOL: { title: 'GERAÇÃO INICIAL', tag: 'RADIAÇÃO SOLAR', desc: 'Emissão contínua de fótons de alta irradiância na região de Parauapebas.' },
    PAINÉIS: { title: 'CAPTAÇÃO FOTOVOLTAICA', tag: 'GERAÇÃO CC', desc: 'Transformação dos fótons solares em corrente contínua através dos módulos fotovoltaicos.' },
    INVERSOR: { title: 'CONVERSÃO INTELIGENTE', tag: 'SINCRONIZAÇÃO CA', desc: 'Conversão da corrente contínua em corrente alternada sincronizada com a rede elétrica.' },
    IMÓVEL: { title: 'UTILIZAÇÃO E AUTONOMIA', tag: 'CONSUMO LOCAL', desc: 'Abastecimento imediato de lâmpadas, aparelhos e máquinas da propriedade.' },
    CONSUMO: { title: 'INJEÇÃO E CRÉDITO', tag: 'REDE CONCESSIONÁRIA', desc: 'Envio de excedente para a distribuidora local gerando créditos compensatórios.' }
  };

  useEffect(() => {
    const canvas = flowCanvasRef.current;
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

    const particles = Array.from({ length: 25 }, () => ({
      y: Math.random() * h,
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.003
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const pX = p.progress * w;
        const pY = h / 2 + Math.sin(p.progress * Math.PI * 6) * 15;

        ctx.beginPath();
        ctx.arc(pX, pY, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 196, 0, 0.7)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="section section-dark-theme" id="luz-ao-consumo">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '3.5rem' }}>
          <span className="mono-tag">FLUXO ENERGÉTICO INTEGRADO</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', marginBottom: '1rem', color: 'var(--color-offwhite)' }}>Da luz ao consumo.</h2>
          <p className="section-desc" style={{ fontSize: '1.15rem', color: 'var(--color-grey-muted)', maxWidth: '600px' }}>
            Acompanhe o percurso completo de conversão e utilização da energia solar no seu imóvel.
          </p>
        </div>

        <div className="flow-diagram-frame glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="flow-canvas-overlay" style={{ position: 'absolute', inset: 0, height: '100px', top: '40px' }}>
            <canvas ref={flowCanvasRef} style={{ width: '100%', height: '100%' }} />
          </div>

          <div className="flow-interactive-nodes" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            {['SOL', 'PAINÉIS', 'INVERSOR', 'IMÓVEL', 'CONSUMO'].map((name) => (
              <div
                key={name}
                className={`diagram-node-item ${activeNode === name ? 'active' : ''}`}
                onClick={() => setActiveNode(name)}
                onMouseEnter={() => { setActiveNode(name); setCursorState({ text: name }); }}
                onMouseLeave={() => setCursorState({ text: null })}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  align-items: 'center',
                  cursor: 'pointer',
                  padding: '1rem 1.5rem',
                  borderRadius: '16px',
                  background: activeNode === name ? 'rgba(255, 196, 0, 0.15)' : 'rgba(11,13,12,0.6)',
                  border: activeNode === name ? '1px solid var(--accent-color)' : '1px solid var(--color-border-dark)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {name === 'SOL' ? '☀' : name === 'PAINÉIS' ? '🔲' : name === 'INVERSOR' ? '⚡' : name === 'IMÓVEL' ? '🏠' : '📊'}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-offwhite)' }}>{name}</span>
              </div>
            ))}
          </div>

          <div className="flow-active-details" style={{ background: 'rgba(11, 13, 12, 0.85)', border: '1px solid var(--color-border-dark)', borderRadius: '16px', padding: '1.75rem 2rem', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>
              ● STATUS DE FLUXO: {nodeDetails[activeNode].tag}
            </span>
            <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-offwhite)' }}>
              {nodeDetails[activeNode].title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(247, 246, 241, 0.85)' }}>
              {nodeDetails[activeNode].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

window.EnergyFlowComercial = EnergyFlowComercial;
