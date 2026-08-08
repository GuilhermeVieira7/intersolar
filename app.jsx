const { useState, useEffect } = React;

const App = () => {
  const [cursorState, setCursorState] = useState({ text: null });
  const [isExpanding, setIsExpanding] = useState(false);
  const [activeChapter, setActiveChapter] = useState('CH 01 · O SOL');
  const [tweaks, setTweaks] = useState({
    accent: 'Yellow',
    motion: 'medium',
    glow: true,
    grid: false,
    particles: true
  });

  const handleExploreClick = () => {
    setIsExpanding(true);
    setTimeout(() => {
      const target = document.getElementById('da-luz-a-energia');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => setIsExpanding(false), 800);
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      
      const secHero = document.getElementById('hero');
      const secFlow = document.getElementById('da-luz-a-energia');
      const secDiff = document.getElementById('a-diferenca');
      const secServ = document.getElementById('servicos');
      const secSyst = document.getElementById('sistema-jornada');
      const secDash = document.getElementById('dashboard');
      const secCta = document.getElementById('contato');

      if (secCta && scrollPos >= secCta.offsetTop) {
        setActiveChapter('CH 06 · O FUTURO');
      } else if (secDash && scrollPos >= secDash.offsetTop) {
        setActiveChapter('CH 05 · A ENERGIA');
      } else if (secSyst && scrollPos >= secSyst.offsetTop) {
        setActiveChapter('CH 04 · A INSTALAÇÃO');
      } else if (secServ && scrollPos >= secServ.offsetTop) {
        setActiveChapter('CH 03 · O SISTEMA');
      } else if (secDiff && scrollPos >= secDiff.offsetTop) {
        setActiveChapter('CH 02 · A ENGENHARIA');
      } else if (secFlow && scrollPos >= secFlow.offsetTop) {
        setActiveChapter('CH 01 · O SOL');
      } else {
        setActiveChapter('CH 01 · O SOL');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-main-wrapper">
      {/* Background Noise Texture */}
      <div className="bg-noise" />

      {/* Optional Swiss Grid Overlay */}
      {tweaks.grid && (
        <div className="grid-overlay">
          <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
        </div>
      )}

      {/* Custom Cursor */}
      <window.Cursor cursorState={cursorState} />

      {/* Header Bar */}
      <header className="site-header">
        <a href="#hero" className="logo-brand" onMouseEnter={() => setCursorState({ text: 'HOME' })} onMouseLeave={() => setCursorState({ text: null })}>
          <div className="logo-icon">
            <span style={{ fontSize: '0.8rem', color: '#0B0D0C', fontWeight: 'bold' }}>☀️</span>
          </div>
          <span className="logo-text">INTERSOLAR</span>
        </a>

        <div className="chapter-indicator">
          <span>CHAPTER:</span>
          <strong>{activeChapter}</strong>
        </div>

        <a
          href="https://wa.me/5594999999999?text=Ol%C3%A1%21+Vim+pelo+site+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '0.7rem 1.4rem', fontSize: '0.8rem' }}
          onMouseEnter={() => setCursorState({ text: 'ORÇAMENTO' })}
          onMouseLeave={() => setCursorState({ text: null })}
        >
          <span>CONTATO</span>
          <span className="arrow">→</span>
        </a>
      </header>

      {/* Main Sections Stack */}
      <main>
        <window.Hero
          setCursorState={setCursorState}
          onExploreClick={handleExploreClick}
          isExpanding={isExpanding}
          tweaks={tweaks}
        />

        <window.EnergyFlow setCursorState={setCursorState} tweaks={tweaks} />

        <window.Problem setCursorState={setCursorState} />

        <window.Difference setCursorState={setCursorState} />

        <window.Services setCursorState={setCursorState} />

        <window.System setCursorState={setCursorState} />

        <window.Dashboard setCursorState={setCursorState} />

        <window.BeforeAfter setCursorState={setCursorState} />

        <window.Trust setCursorState={setCursorState} />

        <window.Projects setCursorState={setCursorState} />

        <window.Parauapebas setCursorState={setCursorState} />

        <window.FAQ setCursorState={setCursorState} />

        <window.FinalCTA setCursorState={setCursorState} />
      </main>

      {/* Footer */}
      <window.Footer setCursorState={setCursorState} />

      {/* Tweaks Control Panel */}
      <window.Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
};

// Render React App to DOM
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
