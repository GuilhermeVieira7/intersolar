const TrustComercial = ({ setCursorState }) => {
  return (
    <section className="section section-light-theme" id="confianca">
      <div className="container">
        <div className="section-header-wrap" style={{ marginBottom: '3.5rem' }}>
          <span className="mono-tag">AUTORIDADE E REGIONALISMO</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', marginTop: '0.75rem', color: 'var(--color-black-text)' }}>Presença Real em Parauapebas.</h2>
        </div>

        <div className="trust-comercial-card" style={{ background: '#FFFFFF', border: '1px solid var(--color-border-light)', borderRadius: '24px', padding: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>☀️</div>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-black-text)' }}>@intersolarpa</h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-tech-green)', fontWeight: 700 }}>PERFIL OFICIAL VERIFICADO</span>
            </div>
          </div>

          <div className="stats-three-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)', padding: '2rem 0', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-tech-green)' }}>2.555</span><br />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-grey-muted)' }}>SEGUIDORES NO INSTAGRAM</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-tech-green)' }}>275</span><br />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-grey-muted)' }}>PUBLICAÇÕES REGISTRO DE TRABALHO</span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-tech-green)' }}>100%</span><br />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-grey-muted)' }}>FOCO PARAUAPEBAS E REGIÃO</span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/intersolarpa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onMouseEnter={() => setCursorState({ text: 'INSTAGRAM' })}
            onMouseLeave={() => setCursorState({ text: null })}
          >
            <span>ACOMPANHAR @INTERSOLARPA NO INSTAGRAM ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

window.TrustComercial = TrustComercial;
