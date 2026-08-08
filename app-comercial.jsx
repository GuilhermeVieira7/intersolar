const { useState } = React;

const AppComercial = () => {
  const [cursorState, setCursorState] = useState({ text: null });

  const handleCalculateClick = () => {
    const simElem = document.getElementById('simulador');
    if (simElem) {
      simElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-comercial-wrapper">
      {/* Magnetic Custom Cursor */}
      <Cursor cursorState={cursorState} />

      {/* Floating WhatsApp Conversion CTA */}
      <FloatingWhatsApp />

      {/* Commercial Header Navigation */}
      <Nav setCursorState={setCursorState} />

      {/* Main Experience Body */}
      <main>
        {/* Split Conversion Hero */}
        <HeroComercial
          setCursorState={setCursorState}
          onCalculateClick={handleCalculateClick}
        />

        {/* Interactive Solar Expenditure & Savings Simulator */}
        <Simulator setCursorState={setCursorState} />

        {/* Interactive Energy Flow Path */}
        <EnergyFlowComercial />

        {/* Process Timeline */}
        <ProcessComercial />

        {/* Complete Scope of Services */}
        <ServicesComercial />

        {/* Telemetry Energy Dashboard (Simulated) */}
        <DashboardComercial />

        {/* 3 Pillars of Value */}
        <Benefits setCursorState={setCursorState} />

        {/* Integrated Engineering Differential */}
        <Differentials setCursorState={setCursorState} />

        {/* Parauapebas Regional Positioning */}
        <ParauapebasComercial />

        {/* Field Executed Projects Portfolio */}
        <ProjectsComercial setCursorState={setCursorState} />

        {/* Instagram Real Metrics & Proof */}
        <TrustComercial setCursorState={setCursorState} />

        {/* Frequently Asked Questions */}
        <FAQComercial setCursorState={setCursorState} />

        {/* Final Decision CTA */}
        <FinalCTAComercial
          onCalculateClick={handleCalculateClick}
          setCursorState={setCursorState}
        />
      </main>

      {/* Commercial Footer */}
      <FooterComercial />
    </div>
  );
};

window.AppComercial = AppComercial;
