const Founder = ({ setCursorState }) => {
  return (
    <section className="section section-dark" id="fundador">
      <div className="container founder-grid">
        <div className="founder-photo-col">
          <img
            src="fotos/foto%20gilvan%20dono.png"
            alt="Gilvan, fundador da InterSolar Energia Renovável"
            className="founder-photo"
            loading="lazy"
          />
        </div>

        <div className="founder-text-col">
          <span className="mono-tag eyebrow-line">QUEM ESTÁ POR TRÁS DA INTERSOLAR</span>
          <h2 className="founder-heading">Energia limpa. Soluções completas. Atendimento de verdade.</h2>
          <p className="founder-desc">
            A InterSolar Energia Renovável nasceu em Parauapebas com um propósito claro: entregar muito mais do que
            sistemas de energia solar. Entregamos soluções energéticas pensadas para a realidade de cada cliente.
          </p>
          <p className="founder-desc">
            Atuamos desde o estudo de viabilidade e dimensionamento do projeto até a instalação, homologação,
            monitoramento e pós-venda. Cada sistema é desenvolvido com responsabilidade técnica, equipamentos de
            qualidade e acompanhamento próximo em todas as etapas.
          </p>
          <p className="founder-desc">
            Além dos sistemas fotovoltaicos tradicionais, a InterSolar acompanha a evolução do setor oferecendo
            soluções em sistemas híbridos, armazenamento de energia com baterias (BESS), backup de energia,
            ampliações e manutenção de sistemas fotovoltaicos.
          </p>
          <p className="founder-desc">
            Nosso compromisso continua mesmo depois que o sistema começa a gerar. Acompanhamos nossos clientes para
            garantir desempenho, segurança e economia ao longo dos anos.
          </p>
          <p className="founder-desc founder-desc-closing">
            Porque, para a InterSolar, energia solar não termina na instalação.
            <br />
            Começa uma relação de confiança.
          </p>

          <div className="founder-signature">
            <span className="founder-name">Gilvan da Silva Morais</span>
            <span className="founder-role">InterSolar Energia Renovável</span>
          </div>
        </div>
      </div>

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: center;
        }

        .founder-photo-col {
          border-radius: 24px;
          overflow: hidden;
          background: var(--color-green-deep);
        }

        .founder-photo {
          width: 100%;
          height: clamp(340px, 40vw, 520px);
          object-fit: cover;
          object-position: top center;
        }

        .founder-heading {
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          margin-top: 0.9rem;
          margin-bottom: 1.5rem;
          color: var(--color-offwhite);
        }

        .founder-desc {
          font-size: 1.02rem;
          color: var(--color-muted-onDark);
          line-height: 1.6;
          max-width: 560px;
          margin-bottom: 1.1rem;
        }

        .founder-desc-closing {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-offwhite);
        }

        .founder-signature {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          margin-top: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-onDark);
        }

        .founder-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--color-yellow-light);
        }

        .founder-role {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-muted-onDark);
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

window.Founder = Founder;
