const { useState, useEffect } = React;

const Cursor = ({ cursorState }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  const isHovered = Boolean(cursorState?.text);

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {isHovered && (
        <span className="custom-cursor-text">{cursorState.text}</span>
      )}
    </div>
  );
};

window.Cursor = Cursor;
