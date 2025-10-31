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

        {/* Próximos proyectos */}
        <div className="text-center mt-5">
          <h5 className="fw-semibold text-muted mb-3">
            Próximamente más proyectos...
          </h5>
          <div className="placeholder-container d-flex justify-content-center flex-wrap gap-3">
            <div className="placeholder-box"></div>
            <div className="placeholder-box"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { Proyectos };
