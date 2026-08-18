const { useState } = React;

const AppComercial = () => {
  const [cursorState, setCursorState] = useState({ text: null });

  const handleCalculateClick = () => {
    const simElem = document.getElementById('simulador');
    if (simElem) simElem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-comercial-wrapper">
      <Cursor cursorState={cursorState} />
      <FloatingWhatsApp />
      <Nav setCursorState={setCursorState} />

      <main>
        <HeroComercial setCursorState={setCursorState} onCalculateClick={handleCalculateClick} />
        <Simulator setCursorState={setCursorState} />
        <EnergyFlow setCursorState={setCursorState} />
        <Services setCursorState={setCursorState} />
        <Benefits setCursorState={setCursorState} />
        <Founder setCursorState={setCursorState} />
        <About setCursorState={setCursorState} />
        <Projects setCursorState={setCursorState} />
        <Videos setCursorState={setCursorState} />
        <FAQ setCursorState={setCursorState} />
        <FinalCTA setCursorState={setCursorState} />
      </main>

      <Footer setCursorState={setCursorState} />
    </div>
  );
};

window.AppComercial = AppComercial;
