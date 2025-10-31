import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* HEADER */}
      <header className="navbar navbar-expand-lg navbar-light bg-rosa-claro shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-celeste-oscuro" to="/">
            {/*<img
              src="/logo_1.png"
              alt="Eche & Mora Logo"
              height="70"
              className="me-2"
            />*/}
            <h2 className="fw-bold">Eche&Mora</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-celeste-oscuro" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-celeste-oscuro"
                  to="/proyectos"
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-celeste-oscuro"
                  to="/contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow-1 py-4">{children}</main>

      {/* FOOTER */}
      <footer className="bg-celeste-oscuro text-light py-5 mt-auto">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Brand */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold">Eche & Mora</h5>
              <p className="small">
                Estudio creativo de experiencias visuales que combina arte,
                innovación y diversión.
              </p>
            </div>

            {/* Enlaces */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="fw-bold">Enlaces</h6>
              <ul className="list-unstyled small">
                <li>
                  <Link className="text-light text-decoration-none" to="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to="/proyectos"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to="/contacto"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="col-md-4">
              <h6 className="fw-bold">Seguinos</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-5"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-5"
                >
                  <i className="bi bi-behance"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-5"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="border-light my-4" />
          <p className="text-center small mb-0">
            © {new Date().getFullYear()} Eche & Mora — Todos los derechos
            reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export { Layout };
