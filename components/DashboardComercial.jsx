const { useState, useEffect } = React;

const DashboardComercial = ({ setCursorState }) => {
  const [solarGen, setSolarGen] = useState(8.42);
  const [consumption, setConsumption] = useState(6.17);
  const [todayKwh, setTodayKwh] = useState(24.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarGen(+(8.3 + Math.random() * 0.4).toFixed(2));
      setConsumption(+(6.0 + Math.random() * 0.3).toFixed(2));
      setTodayKwh(+(24.5 + Math.random() * 0.6).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section section-dark-theme" id="dashboard">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <span className="mono-tag">SISTEMA DE TELEMETRIA SOLAR</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-grey-muted)' }}>
            DADOS DEMONSTRATIVOS / ILUSTRAÇÃO DO APLICATIVO INTERSOLAR
          </span>
        </div>

        <div className="dash-frame glass-card" style={{ background: '#0F1211', border: '1px solid var(--color-border-dark)' }}>
          <div className="dash-top" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.2rem' }}>⚡</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-offwhite)' }}>INTERSOLAR ENERGY MONITOR</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00E676', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 10px #00E676' }} />
              <span>SYSTEM ● ONLINE</span>
            </div>
          </div>

          <div className="dash-grid-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(11,13,12,0.8)', border: '1px solid var(--color-border-dark)', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-grey-muted)' }}>SOLAR GENERATION</span>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--accent-color)', margin: '0.4rem 0' }}>{solarGen} <small style={{ fontSize: '1rem', color: 'var(--color-grey-muted)' }}>kW</small></h3>
              <div style={{ height: '4px', background: 'rgba(247, 246, 241, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(solarGen / 12) * 100}%`, background: 'var(--accent-color)', transition: 'width 0.5s ease' }} />
              </div>
            </div>

            <div style={{ background: 'rgba(11,13,12,0.8)', border: '1px solid var(--color-border-dark)', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-grey-muted)' }}>CONSUMPTION</span>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: '#00E676', margin: '0.4rem 0' }}>{consumption} <small style={{ fontSize: '1rem', color: 'var(--color-grey-muted)' }}>kW</small></h3>
              <div style={{ height: '4px', background: 'rgba(247, 246, 241, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(consumption / 10) * 100}%`, background: '#00E676', transition: 'width 0.5s ease' }} />
              </div>
            </div>

            <div style={{ background: 'rgba(11,13,12,0.8)', border: '1px solid var(--color-border-dark)', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-grey-muted)' }}>TODAY GENERATION</span>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--color-offwhite)', margin: '0.4rem 0' }}>{todayKwh} <small style={{ fontSize: '1rem', color: 'var(--color-grey-muted)' }}>kWh</small></h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.DashboardComercial = DashboardComercial;
