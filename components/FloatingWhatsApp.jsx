const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/559491489811?text=Ol%C3%A1%21+Vim+pelo+site+da+Intersolar+e+gostaria+de+solicitar+um+or%C3%A7amento+de+energia+solar."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="whatsapp-icon-wrap">
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.1 1.2-4.3-.3-.5A11.6 11.6 0 1 1 16 27.5zm6.4-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1.1-1.1 1.3-.4.2-.7 0a9.2 9.2 0 0 1-2.7-1.7 10.1 10.1 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6a.6.6 0 0 0 0-.6c-.1-.2-.8-2-.9-2.7s-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5a4.7 4.7 0 0 0-1.5 3.5 8.1 8.1 0 0 0 1.7 4.3 18.7 18.7 0 0 0 7.2 6.4c2.8 1.1 3.4.9 4 .8a3.5 3.5 0 0 0 2.3-1.6 2.9 2.9 0 0 0 .2-1.6c-.1-.2-.4-.3-.7-.5z"/>
        </svg>
      </div>
      <span className="whatsapp-label desktop-only">Falar no WhatsApp</span>

      <style>{`
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 1.5rem;
          left: 1.5rem;
          z-index: 9995;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: #25D366;
          color: #FFFFFF;
          padding: 0.75rem 1.25rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          animation: pulseWhatsApp 3s infinite ease-in-out;
        }

        .floating-whatsapp-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.65);
          background: #20BA5A;
        }

        .whatsapp-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-label {
          font-family: var(--font-display, 'Inter Tight', sans-serif);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        @keyframes pulseWhatsApp {
          0%, 100% {
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 8px 26px rgba(37, 211, 102, 0.6);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-whatsapp-btn { animation: none; }
        }

        @media (max-width: 900px) {
          .floating-whatsapp-btn {
            bottom: 1.25rem;
            left: 1.25rem;
            width: 52px;
            height: 52px;
            padding: 0;
            justify-content: center;
            border-radius: 50%;
          }
          .floating-whatsapp-btn .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </a>
  );
};

window.FloatingWhatsApp = FloatingWhatsApp;
