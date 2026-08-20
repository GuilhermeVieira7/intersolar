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
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.113.552 4.176 1.598 5.996L0 24l6.202-1.628a11.95 11.95 0 0 0 5.815 1.482h.005c6.62 0 11.988-5.367 11.988-11.987 0-3.2-1.247-6.21-3.512-8.475A11.94 11.94 0 0 0 12.017 0zm0 21.941h-.004a9.94 9.94 0 0 1-5.06-1.387l-.363-.216-3.741.982.998-3.646-.237-.375a9.94 9.94 0 0 1-1.523-5.311c0-5.5 4.478-9.977 9.98-9.977 2.666 0 5.171 1.038 7.056 2.924a9.914 9.914 0 0 1 2.92 7.061c-.001 5.5-4.479 9.977-9.978 9.977z"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
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
