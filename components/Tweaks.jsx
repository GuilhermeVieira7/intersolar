const { useState } = React;

const Tweaks = ({ tweaks, setTweaks }) => {
  const [minimized, setMinimized] = useState(true);

  const colors = [
    { name: 'Yellow', val: '#FFC400', glow: 'rgba(255, 196, 0, 0.35)' },
    { name: 'Orange', val: '#FF7A00', glow: 'rgba(255, 122, 0, 0.35)' },
    { name: 'Green', val: '#00E676', glow: 'rgba(0, 230, 118, 0.35)' },
    { name: 'Blue', val: '#00E5FF', glow: 'rgba(0, 229, 255, 0.35)' },
    { name: 'White', val: '#F4F2EA', glow: 'rgba(244, 242, 234, 0.35)' }
  ];

  const handleColorChange = (c) => {
    setTweaks(prev => ({ ...prev, accent: c.name }));
    document.documentElement.style.setProperty('--accent-color', c.val);
    document.documentElement.style.setProperty('--accent-glow', c.glow);
  };

  return (
    <div className={`tweaks-panel ${minimized ? 'minimized' : ''}`}>
      <div className="tweaks-header" onClick={() => setMinimized(!minimized)}>
        <span className="tweaks-title">
          <span>⚙</span> TWEAKS DEMO CONTROL
        </span>
        <button type="button" className="tweaks-btn">
          {minimized ? 'EXPAND' : 'CLOSE'}
        </button>
      </div>

      {!minimized && (
        <div className="tweaks-body">
          {/* ACCENT */}
          <div className="tweaks-group">
            <span className="tweaks-label">ACCENT COLOR</span>
            <div className="tweaks-options">
              {colors.map(c => (
                <button
                  key={c.name}
                  type="button"
                  className={`tweaks-btn ${tweaks.accent === c.name ? 'active' : ''}`}
                  onClick={() => handleColorChange(c)}
                  style={{ borderColor: c.val }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* MOTION */}
          <div className="tweaks-group">
            <span className="tweaks-label">MOTION SPEED</span>
            <div className="tweaks-options">
              {['low', 'medium', 'high'].map(m => (
                <button
                  key={m}
                  type="button"
                  className={`tweaks-btn ${tweaks.motion === m ? 'active' : ''}`}
                  onClick={() => setTweaks(prev => ({ ...prev, motion: m }))}
                >
                  {m.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* GLOW */}
          <div className="tweaks-group">
            <span className="tweaks-label">GLOW EFFECTS</span>
            <div className="tweaks-options">
              <button
                type="button"
                className={`tweaks-btn ${tweaks.glow ? 'active' : ''}`}
                onClick={() => setTweaks(prev => ({ ...prev, glow: !prev.glow }))}
              >
                {tweaks.glow ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="tweaks-group">
            <span className="tweaks-label">SWISS GRID OVERLAY</span>
            <div className="tweaks-options">
              <button
                type="button"
                className={`tweaks-btn ${tweaks.grid ? 'active' : ''}`}
                onClick={() => setTweaks(prev => ({ ...prev, grid: !prev.grid }))}
              >
                {tweaks.grid ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* PARTICLES */}
          <div className="tweaks-group">
            <span className="tweaks-label">CANVAS PARTICLES</span>
            <div className="tweaks-options">
              <button
                type="button"
                className={`tweaks-btn ${tweaks.particles ? 'active' : ''}`}
                onClick={() => setTweaks(prev => ({ ...prev, particles: !prev.particles }))}
              >
                {tweaks.particles ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.Tweaks = Tweaks;
