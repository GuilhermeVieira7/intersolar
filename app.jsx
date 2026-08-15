const { useState } = React;

const App = () => {
  const [cursorState, setCursorState] = useState({ text: null });

  return (
    <div className="app-main-wrapper">
      <Cursor cursorState={cursorState} />
      <FloatingWhatsApp />
      <Nav setCursorState={setCursorState} />

      <main>
        <Hero setCursorState={setCursorState} />
        <EnergyFlow setCursorState={setCursorState} />
        <Services setCursorState={setCursorState} />
        <Benefits setCursorState={setCursorState} />
        <Founder setCursorState={setCursorState} />
        <About setCursorState={setCursorState} />
        <Projects setCursorState={setCursorState} />
        <FAQ setCursorState={setCursorState} />
        <FinalCTA setCursorState={setCursorState} />
      </main>

      <Footer setCursorState={setCursorState} />
    </div>
  );
};

window.App = App;
