import { Layout } from "../../components/Layout/Layout";
import "./Proyectos.css";

const Proyectos = () => {
  return (
    <Layout>
      {/* PROYECTOS */}
      <section className="projects container py-5 text-center">
        <h2 className="fw-bold mb-5 text-celeste-oscuro">Proyectos</h2>

        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Estos son algunos de los mundos que estoy construyendo actualmente.
          Podés explorar <strong>todos mis proyectos</strong> y jugar mis
          experiencias publicadas en{" "}
          <a
            href="https://echemora.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-semibold text-decoration-none text-rosa"
          >
            mi página de itch.io
          </a>
          .
        </p>

        <div className="row g-4">
          {/* Proyecto: Monora */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm project-card h-100">
              <img
                src="/monora_preview.gif"
                alt="Monora"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="fw-bold text-celeste-oscuro mb-3">Monora</h4>
                <p className="text-muted mb-3">
                  MONORA es un colorido juego independiente en el que cada mono
                  que capturas pasa a formar parte de tu cola, que no deja de
                  crecer. Explora una pequeña isla estilizada, captura monos
                  juguetones y sobrevive mientras tu cadena se hace cada vez más
                  larga y difícil de controlar. Lo que comienza como un simple
                  reto de recolección se convierte poco a poco en una caótica
                  prueba de reflejos. Cuantos más monos tengas… más difícil será
                  no estrellarte.
                </p>

                <a
                  href="https://echemora.itch.io/monora"
                  className="btn btn-rosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en itch.io
                </a>
              </div>
            </div>
          </div>

          {/* Proyecto: Oráculo */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm project-card h-100">
              <img
                src="oraculo_preview.png"
                alt="Oráculo de Arquetipos Femeninos"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="fw-bold text-celeste-oscuro mb-3">
                  Oráculo de Arquetipos Femeninos
                </h4>
                <p className="text-muted mb-4">
                  Cada arquetipo guarda una <strong>memoria</strong>, una{" "}
                  <strong>fuerza</strong> y una <strong>pregunta</strong>.
                  Ingresá con una intención y permití que el símbolo adecuado se
                  manifieste.
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

          {/* Proyecto: Oráculos de Galatea */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm project-card h-100">
              <img
                src="/oraculos_galatea_preview.png"
                alt="The Oracles of Galatea"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="fw-bold text-celeste-oscuro mb-3">
                  The Oracles of Galatea
                </h4>

                <p className="text-muted mb-3">
                  Una experiencia ritual interactiva que reúne tres oráculos:{" "}
                  <strong>Arquetipos Femeninos</strong>,{" "}
                  <strong>Guardianes</strong> y <strong>Poder Animal</strong>.
                </p>

                <p className="text-muted mb-4">
                  Ingresá con una intención y dejá que el símbolo correcto
                  aparezca. Cada oráculo conecta con un plano distinto:
                  identidad, protección y energía vital.
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
