import { Layout } from "../../components/Layout/Layout";
import "./Proyectos.css";

const Proyectos = () => {
  return (
    <Layout>
      <section className="projects container py-5 text-center">
        <h2 className="fw-bold mb-5 text-celeste-oscuro">Proyectos</h2>

        {/* Proyecto: Servir la Olla */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm project-card">
              <img
                src="/servir_olla_preview.png"
                alt="Servir la Olla"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="card-title fw-bold text-celeste-oscuro mb-3">
                  Servir la Olla
                </h4>
                <p className="card-text text-muted mb-4">
                  Un juego para compartir risas, anécdotas y momentos únicos con
                  amigos, familia o pareja. Cada ronda propone distintas
                  temáticas y recuerdos, donde el objetivo es simple:{" "}
                  <strong>¡servir la olla!</strong> — dar el mejor show con tu
                  historia. Perfecto para romper el hielo o reírse de lo que ya
                  pasó.
                </p>
                <p className="text-muted">
                  Próximamente disponible en <strong>Google Play</strong> y más
                  adelante en <strong>Steam</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto: Oráculo de Arquetipos Femeninos */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm project-card">
              <img
                src="oraculo_preview.png"
                alt="Oráculo de Arquetipos Femeninos"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="card-title fw-bold text-celeste-oscuro mb-3">
                  Oráculo de Arquetipos Femeninos
                </h4>
                <p className="card-text text-muted mb-4">
                  Cada arquetipo guarda una memoria, una <strong>fuerza</strong>
                  , una pregunta. Ingresá con una <strong>intención</strong> y
                  permití que el símbolo adecuado se manifieste.
                </p>

                <a
                  href="https://echemora.itch.io/oracle-of-female-archetypes"
                  className="btn btn-rosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar al ritual
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto: Oráculos de Galatea */}
        {/* Proyecto: Oráculo de Arquetipos Femeninos */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm project-card">
              <img
                src="/oraculos_galatea_preview.png"
                alt="The Oracles of Galatea"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="card-title fw-bold text-celeste-oscuro mb-3">
                  Oráculo de Arquetipos Femeninos
                </h4>
                <p className="card-text text-muted mb-4">
                  Una experiencia ritual interactiva que reúne tres oráculos:{" "}
                  <strong>Arquetipos Femeninos</strong>,{" "}
                  <strong>Guardianes</strong> y <strong>Poder Animal</strong>.
                </p>

                <a
                  href="https://echemora.itch.io/the-oracles-of-galatea"
                  className="btn btn-rosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver experiencia completa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APOYAR EL PROYECTO */}
      <section className="support container py-5 text-center">
        <div
          className="mx-auto p-5 rounded shadow-sm"
          style={{ maxWidth: "800px", backgroundColor: "#f8f9fa" }}
        >
          <h2 className="fw-bold mb-3 text-celeste-oscuro">
            Ayudanos a seguir creando
          </h2>

          <p className="text-muted mb-4">
            Eche & Mora es un proyecto independiente que crece paso a paso,
            impulsado por la pasión por los videojuegos, el arte y las
            experiencias con sentido. Si alguno de nuestros mundos te inspiró,
            tu apoyo nos permite seguir aprendiendo, creando y compartiendo
            nuevas ideas.
          </p>

          <a
            href="https://ko-fi.com/echeymora"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-rosa btn-lg"
          >
            Apoyar en Ko-fi ☕
          </a>

          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Cada aporte suma. Gracias por acompañarnos en este camino.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export { Proyectos };
