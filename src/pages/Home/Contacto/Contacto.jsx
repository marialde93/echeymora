import { Layout } from "../../../components/Layout/Layout";
import "./Contacto.css";

const Contacto = () => {
  return (
    <Layout>
      <section className="contact container py-5">
        <h2 className="fw-bold mb-4 text-celeste-oscuro text-center">
          Contacto
        </h2>
        <p className="text-muted text-center mb-5">
          Si tenés alguna consulta, proyecto o idea, hablanos a nuestro email y
          te responderemos a la brevedad!
        </p>
        <p className="fw-bold text-muted text-center mb-5">
          Email: eche.mora.studio@gmail.com{" "}
        </p>

        {/*<div className="row justify-content-center">
          <div className="col-md-8">
            <form className="contact-form">
              {/* Nombre 
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email 
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Tu correo"
                  required
                />
              </div>

              {/* Asunto *
              <div className="mb-3">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  placeholder="Motivo de tu mensaje"
                  required
                />
              </div>

              {/* Mensaje *
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="5"
                  placeholder="Escribí tu mensaje..."
                  required
                ></textarea>
              </div>

              {/* Botón *
              <div className="text-center">
                <button type="submit" className="btn btn-rosa">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>*/}
      </section>
    </Layout>
  );
};

export { Contacto };
