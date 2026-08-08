const { useEffect, useRef } = React;

const SolarSystem = ({ isExpanding, tweaks }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles initialization
    const numParticles = tweaks?.particles === false ? 0 : (tweaks?.motion === 'low' ? 60 : tweaks?.motion === 'high' ? 220 : 130);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * (Math.min(width, height) * 0.35);
      particles.push({
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        baseAngle: angle,
        baseDist: dist,
        size: Math.random() * 2.2 + 0.6,
        speed: (Math.random() * 0.008 + 0.002) * (tweaks?.motion === 'low' ? 0.5 : tweaks?.motion === 'high' ? 1.8 : 1),
        opacity: Math.random() * 0.7 + 0.3,
        orbitRadius: Math.random() * 30 + 10,
        orbitSpeed: Math.random() * 0.03 + 0.01
      });
    }

    let expansionFactor = 1;
    let shockwaveRadius = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      if (isExpanding) {
        expansionFactor += 0.08;
        shockwaveRadius += 35;
      } else {
        expansionFactor += (1 - expansionFactor) * 0.05;
        shockwaveRadius = 0;
      }

      const sunRadius = Math.min(width, height) * 0.16 * expansionFactor;

      // 1. Render Outer Gravitational Energy Rings
      ctx.save();
      ctx.translate(centerX, centerY);
      const ringCount = 3;
      for (let r = 1; r <= ringCount; r++) {
        ctx.beginPath();
        const rRadius = sunRadius * (1.6 + r * 0.45);
        ctx.arc(0, 0, rRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 196, 0, ${0.12 / r})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([8 + r * 4, 12 + r * 6]);
        ctx.rotate((Date.now() * 0.0002) * (r % 2 === 0 ? 1 : -1));
        ctx.stroke();
      }
      ctx.restore();

      // 2. Render Sun Luminous Glow Core
      if (tweaks?.glow !== false) {
        const glowGrad = ctx.createRadialGradient(
          centerX + (mouse.x - centerX) * 0.08,
          centerY + (mouse.y - centerY) * 0.08,
          sunRadius * 0.2,
          centerX,
          centerY,
          sunRadius * 2.8
        );
        glowGrad.addColorStop(0, 'rgba(255, 220, 100, 0.9)');
        glowGrad.addColorStop(0.25, 'rgba(255, 196, 0, 0.45)');
        glowGrad.addColorStop(0.65, 'rgba(255, 122, 0, 0.18)');
        glowGrad.addColorStop(1, 'rgba(11, 13, 12, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, sunRadius * 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render Solid Radiant Core
      const computedAccent = (getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#FFC400').trim();
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        sunRadius
      );
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, computedAccent || '#FFC400');
      coreGrad.addColorStop(0.8, '#FF7A00');
      coreGrad.addColorStop(1, 'rgba(255, 122, 0, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      // 4. Render Solar Particles Stream
      particles.forEach((p) => {
        p.baseAngle += p.speed;
        
        // Mouse gravity pull
        const dx = mouse.x - (centerX + Math.cos(p.baseAngle) * p.baseDist);
        const dy = mouse.y - (centerY + Math.sin(p.baseAngle) * p.baseDist);
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseFactor = distToMouse < 180 ? (1 - distToMouse / 180) * 25 : 0;

        const currentDist = p.baseDist * expansionFactor + mouseFactor;
        const pX = centerX + Math.cos(p.baseAngle) * currentDist;
        const pY = centerY + Math.sin(p.baseAngle) * currentDist;

        ctx.beginPath();
        ctx.arc(pX, pY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 220, 140, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles with subtle energy filaments
        if (p.size > 1.8) {
          ctx.beginPath();
          ctx.moveTo(pX, pY);
          ctx.lineTo(centerX + Math.cos(p.baseAngle) * (currentDist * 0.7), centerY + Math.sin(p.baseAngle) * (currentDist * 0.7));
          ctx.strokeStyle = `rgba(255, 196, 0, 0.08)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // 5. Shockwave Ripple on Transition Click
      if (isExpanding && shockwaveRadius > 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, shockwaveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 196, 0, 0.7)';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isExpanding, tweaks]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

window.SolarSystem = SolarSystem;
