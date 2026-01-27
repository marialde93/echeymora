import { Layout } from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      {/* HERO (lo dejamos vacío por ahora) */}
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center"></section>

      {/* QUIÉNES SOMOS */}
      <section className="about container py-5 text-center">
        <h2 className="fw-bold mb-4 text-celeste-oscuro">Quiénes somos</h2>

        <p className="text-muted mx-auto mb-3" style={{ maxWidth: "700px" }}>
          Eche & Mora nació como un sueño que volvemos a vivir desde nuestra
          infancia: esos momentos de ocio jugando videojuegos que nos llenaban
          de alegría y asombro. Hoy decidimos tomar las riendas y crear nuestras
          propias experiencias, siendo protagonistas de mundos nuevos que
          queremos compartir con la comunidad gamer.
        </p>

        <p className="text-muted mx-auto mb-1" style={{ maxWidth: "700px" }}>
          Somos María Alderete y Lucas Manzoni, dos apasionados por el
          desarrollo, el arte 3D y la creatividad. Estamos dando los primeros
          pasos de este proyecto con ilusión, aprendiendo y creciendo con cada
          experiencia. Nuestro objetivo es construir un espacio donde jugar,
          crear y compartir se encuentren, con empatía, colaboración y diversión
          en el centro de todo.
        </p>
      </section>

      <hr className="my-4" style={{ borderColor: "rgba(0, 0, 0, 0.4)" }} />

      {/* FUNDADORES */}
      <section className="founders container py-5 text-center">
        <h2 className="fw-bold mb-3 text-celeste-oscuro">Nuestro equipo</h2>

        <div className="row justify-content-center">
          {/* María */}
          <div className="col-md-5 mb-4">
            <div className="card border-0">
              <img
                src="/malu.jpeg"
                alt="María Alderete"
                className="card-img-top rounded-circle founder-img"
              />
              <div className="card-body">
                <h5 className="card-title">María Alderete</h5>
                <p className="card-text text-muted">
                  CEO, Game Developer & Management
                </p>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a
                    href="https://github.com/marialde93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://vercel.com/maria-alderetes-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-globe"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maria-alderete-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lucas */}
          <div className="col-md-5 mb-4">
            <div className="card border-0">
              <img
                src="/luqui.jpg"
                alt="Lucas Manzoni"
                className="card-img-top rounded-circle founder-img"
              />
              <div className="card-body">
                <h5 className="card-title">Lucas Manzoni</h5>
                <p className="card-text text-muted">
                  CEO, Game Developer & 3D Artist
                </p>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a
                    href="https://www.artstation.com/lucasandresmanzoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-brush"></i>
                  </a>
                  <a
                    href="https://sketchfab.com/lucasandresmanzoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-globe"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucas-manzoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" style={{ borderColor: "rgba(0, 0, 0, 0.4)" }} />

      {/* PROYECTOS */}
      <section className="projects container py-5 text-center">
        <h2 className="fw-bold mb-5 text-celeste-oscuro">Proyectos</h2>

        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Estos son algunos de nuestros mundos en desarrollo. Podés explorar{" "}
          <strong>todos nuestros proyectos</strong> y jugar nuestras
          experiencias publicadas en{" "}
          <a
            href="https://echemora.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-semibold text-decoration-none text-rosa"
          >
            nuestra página de itch.io
          </a>
          .
        </p>

        <div className="row g-4">
          {/* Proyecto: Servir la Olla */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm project-card h-100">
              <img
                src="/servir_olla_preview.png"
                alt="Servir la Olla"
                className="card-img-top rounded project-img"
              />
              <div className="card-body">
                <h4 className="fw-bold text-celeste-oscuro mb-3">
                  Servir la Olla
                </h4>
                <p className="text-muted mb-3">
                  Un juego para compartir risas, anécdotas y momentos únicos.
                  Cada ronda propone una historia distinta, donde el objetivo es
                  simple: <strong>servir la olla</strong>.
                </p>
                <p className="text-muted">
                  Próximamente en <strong>Google Play</strong> y{" "}
                  <strong>Steam</strong>.
                </p>
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

export { Home };
