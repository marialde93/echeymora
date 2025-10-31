import { Layout } from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      {/* HERO: dejamos tu bloque comentado tal cual para pruebas */}
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
        {/*
        <div className="hero-content">
          <h1 className="display-4 fw-bold text-celeste-oscuro mb-3">
            Diseñamos ideas que conectan
          </h1>
          <p className="lead text-muted mb-4">
            Branding, diseño gráfico y comunicación visual con propósito.
          </p>
          <a href="/portfolio" className="btn btn-rosa">
            Ver proyectos
          </a>
        </div>*/}
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="about container py-5 text-center">
        {" "}
        {/* reducimos padding para acercar secciones */}
        <h2 className="fw-bold mb-4 text-celeste-oscuro">Quiénes somos</h2>
        <p className="text-muted mx-auto mb-3" style={{ maxWidth: "700px" }}>
          Eche & Mora nació como un sueño que volvemos a vivir desde nuestra
          infancia: esos momentos de ocio jugando videojuegos que nos llenaban
          de alegría y asombro. Hoy, decidimos tomar las riendas y crear
          nuestras propias experiencias, siendo protagonistas de mundos nuevos
          que queremos compartir con la comunidad gamer.
        </p>
        <p className="text-muted mx-auto mb-1" style={{ maxWidth: "700px" }}>
          Somos María Alderete y Lucas Manzoni, dos apasionados por el
          desarrollo, el arte 3D y la creatividad, y estamos dando los primeros
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
          {/* María Luján */}
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
                    aria-label="Github Maria"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://vercel.com/maria-alderetes-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                    aria-label="Vercel Maria"
                  >
                    <i className="bi bi-globe"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maria-alderete-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                    aria-label="LinkedIn Maria"
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
                    aria-label="ArtStation Lucas"
                  >
                    <i className="bi bi-brush"></i>
                  </a>
                  <a
                    href="https://sketchfab.com/lucasandresmanzoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                    aria-label="Sketchfab Lucas"
                  >
                    <i className="bi bi-globe"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lucas-manzoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                    aria-label="LinkedIn Lucas"
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

      <section className="projects container py-1 text-center">
        <h2 className="fw-bold mb-5 text-celeste-oscuro">Proyectos</h2>

        {/* Proyecto: Servir la Olla */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm project-card">
              <img
                src="/fondo_1.png"
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
      </section>
    </Layout>
  );
};

export { Home };
