const { useState } = React;

const AppLimpeza = () => {
  const [cursorState, setCursorState] = useState({ text: null });

  return (
    <div className="app-limpeza-wrapper">
      <window.Cursor cursorState={cursorState} />
      <window.FloatingWhatsApp />
      <window.Nav setCursorState={setCursorState} />

      <main>
        <window.CleaningHero setCursorState={setCursorState} />
        <window.DustProblem />
        <window.CleaningPlan setCursorState={setCursorState} />
        <window.CleaningProcess />
        <window.TrustStrip />
        <window.CleaningFAQ setCursorState={setCursorState} />
        <window.CleaningFinalCTA setCursorState={setCursorState} />
      </main>

      <window.Footer setCursorState={setCursorState} />
    </div>
  );
};

window.AppLimpeza = AppLimpeza;
