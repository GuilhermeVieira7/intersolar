const { useState } = React;

const AppComercial = () => {
  const [cursorState, setCursorState] = useState({ text: null });
  const [tweaks, setTweaks] = useState({
    accent: 'Yellow',
    motion: 'medium',
    glow: true,
    grid: false,
    particles: true
  });

  const handleCalculateClick = () => {
    const simEl = document.getElementById('simulador');
    if (simEl) {
      simEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-comercial-wrapper">
      {/* Custom Cursor */}
      <window.Cursor cursorState={cursorState} />

      {/* Navigation Header */}
      <window.Nav setCursorState={setCursorState} />

      <main>
        {/* Hero Commercial */}
        <window.HeroComercial
          setCursorState={setCursorState}
          onCalculateClick={handleCalculateClick}
          tweaks={tweaks}
        />

        {/* Simulator */}
        <window.Simulator setCursorState={setCursorState} />

        {/* Energy Flow */}
        <window.EnergyFlowComercial setCursorState={setCursorState} />

        {/* Process */}
        <window.ProcessComercial setCursorState={setCursorState} />

        {/* Services */}
        <window.ServicesComercial setCursorState={setCursorState} />

        {/* Dashboard */}
        <window.DashboardComercial setCursorState={setCursorState} />

        {/* Benefits */}
        <window.Benefits setCursorState={setCursorState} />

        {/* Differentials */}
        <window.Differentials setCursorState={setCursorState} />

        {/* Parauapebas */}
        <window.ParauapebasComercial setCursorState={setCursorState} />

        {/* Projects */}
        <window.ProjectsComercial setCursorState={setCursorState} />

        {/* Trust */}
        <window.TrustComercial setCursorState={setCursorState} />

        {/* FAQ */}
        <window.FAQComercial setCursorState={setCursorState} />

        {/* Final CTA */}
        <window.FinalCTAComercial
          setCursorState={setCursorState}
          onCalculateClick={handleCalculateClick}
        />
      </main>

      {/* Footer */}
      <window.FooterComercial setCursorState={setCursorState} />

      {/* Tweaks Panel */}
      <window.Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
};

// Mount App
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<AppComercial />);
}
