const { useState } = React;

const App = () => {
  const [cursorState, setCursorState] = useState({ text: null });
  const [isExpanding, setIsExpanding] = useState(false);

  const handleExploreClick = () => {
    setIsExpanding(true);
    setTimeout(() => {
      const nextSection = document.getElementById('da-luz-a-energia');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => setIsExpanding(false), 800);
    }, 400);
  };

  return (
    <div className="app-main-wrapper">
      {/* Background Subtle Noise Texture */}
      <div className="bg-noise" />

      {/* Interactive Grid Guide Lines (toggled via CSS or default subtle) */}
      <div className="grid-overlay">
        <div /><div /><div /><div /><div /><div />
        <div /><div /><div /><div /><div /><div />
      </div>

      {/* Magnetic Custom Cursor */}
      <Cursor cursorState={cursorState} />

      {/* Sticky Glass Navigation Header */}
      <Nav setCursorState={setCursorState} />

      {/* Main Storytelling Sections */}
      <main>
        {/* Chapter 01: Hero Interactive Sun Canvas */}
        <Hero
          setCursorState={setCursorState}
          onExploreClick={handleExploreClick}
          isExpanding={isExpanding}
        />

        {/* Energy Flow Particle Simulator */}
        <EnergyFlow setCursorState={setCursorState} />

        {/* Problem Statement: Conventional Energy Tariffs */}
        <Problem />

        {/* Brand Difference & Engineering Value */}
        <Difference setCursorState={setCursorState} />

        {/* Complete Scope of Technical Services */}
        <Services setCursorState={setCursorState} />

        {/* System Implementation Journey Timeline */}
        <System />

        {/* Telemetry Dashboard Component */}
        <Dashboard />

        {/* Before / After Impact Visualiser */}
        <BeforeAfter />

        {/* Proof of Trust & Real Regional Authority (@intersolarpa) */}
        <Trust setCursorState={setCursorState} />

        {/* Field Project Portfolio */}
        <Projects setCursorState={setCursorState} />

        {/* Parauapebas Regional Identity & Commitment */}
        <Parauapebas />

        {/* Frequently Asked Questions (FAQ) */}
        <FAQ setCursorState={setCursorState} />

        {/* Final Decision Call to Action */}
        <FinalCTA setCursorState={setCursorState} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

window.App = App;
