import { Layout } from "../../components/Layout/Layout";
import "./Trawun.css";

const Trawun = () => {
  return (
    <Layout>
      {/* HERO */}

      <section className="trawun-hero">
        <div className="trawun-overlay"></div>

        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="trawun-title">TRAWÜN</h1>

              <p className="trawun-subtitle">Tavern at the End of the World</p>

              <div className="trawun-info mt-5">
                <span>
                  <strong>Engine:</strong>{" "}
                  <span className="trawun-value">Godot 4</span>
                </span>

                <span>
                  <strong>Plataforma:</strong>{" "}
                  <span className="trawun-value">PC</span>
                </span>

                <span>
                  <strong>Modo:</strong>{" "}
                  <span className="trawun-value">Tavern Management RPG</span>
                </span>

                <span>
                  <strong>Versión GDD:</strong>{" "}
                  <span className="trawun-value">1.0</span>
                </span>

                <span>
                  <strong>Mundo:</strong>{" "}
                  <span className="trawun-value">Mapu</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premisa */}

      <section className="premisa-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-subtitle">EL JUEGO</p>

            <h2 className="section-title">PREMISA</h2>

            <div className="section-line"></div>
          </div>

          <div className="premisa-box mx-auto">
            <p>
              Durante años recorriste Mapu como aventurero, viajando entre los
              territorios de la <strong>Corona del Río</strong> y los{" "}
              <strong>Vientos Libres del Sur</strong>.
            </p>

            <p>Pero una carta cambia tu destino.</p>

            <p>
              <strong>Tu abuelo ha muerto.</strong>
            </p>

            <p>
              El hombre que te crió te deja como única herencia una vieja
              taberna al borde del colapso. Un lugar que alguna vez fue famoso
              en toda la región, refugio neutral para viajeros, mercaderes y
              aventureros de ambas facciones.
            </p>

            <p>
              Con las aventuras detrás de vos, regresás al lugar donde creciste
              para hacerte cargo del negocio familiar. Lo que parecía una vida
              tranquila sirviendo comida y bebida pronto demuestra ser algo muy
              distinto.
            </p>

            <p>
              Cada noche llegan nuevos clientes. Algunos traen historias. Otros
              problemas. Otros, oportunidades.
            </p>

            <p>
              Rumores sobre ruinas olvidadas, disputas entre facciones,
              criaturas extrañas y tesoros perdidos comienzan a acumularse entre
              las mesas y barriles de la taberna.
            </p>

            <p>
              Mientras reconstruís el legado de tu abuelo, deberás decidir qué
              hacer con cada oportunidad que llegue a tu puerta.
            </p>

            <p>
              <strong>
                ¿Podrás devolverle a la taberna su antiguo esplendor y
                convertirla nuevamente en el corazón de Mapu?
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* MUNDO DE MAPU */}

      <section className="mapu-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-subtitle">WORLDBUILDING</p>

            <h2 className="section-title">El Mundo — Mapu</h2>

            <div className="section-line"></div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="mapu-text">
                <p>
                  <strong>Mapu</strong> es una Patagonia fantástica inspirada en
                  los paisajes, mitos y culturas del extremo sur del mundo.
                </p>

                <p>
                  Montañas nevadas, bosques de lenga, lagos cristalinos y vastas
                  estepas se extienden entre antiguas rutas comerciales y ruinas
                  olvidadas por el tiempo.
                </p>

                <p>
                  Durante generaciones, dos grandes poderes han moldeado el
                  destino de estas tierras: la poderosa{" "}
                  <strong>Corona del Río</strong> y los indómitos{" "}
                  <strong>Vientos Libres del Sur</strong>.
                </p>

                <p>
                  Entre ambos territorios se encuentra la taberna heredada por
                  tu abuelo, un lugar neutral donde comerciantes, aventureros,
                  exploradores y mercenarios intercambian historias, secretos y
                  oportunidades.
                </p>

                <p>
                  Lo que ocurre en Mapu termina llegando tarde o temprano a tu
                  barra.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="world-card">
                <div className="image-placeholder large-image">
                  <img
                    src="/Trawun_imagenes/concept_world.png"
                    alt="La Taberna"
                    className="img-fluid rounded"
                  />
                </div>

                <div className="world-card-text">
                  <h5>El Mundo de Mapu</h5>

                  <p>
                    Patagonia fantástica inspirada en paisajes, folklore y
                    culturas del sur argentino.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-5">
              <div className="world-card">
                <img
                  src="/Trawun_imagenes/concept_tavern.png"
                  alt="La Taberna"
                  className="img-fluid rounded"
                />

                <div className="world-card-text">
                  <h5>La Taberna</h5>

                  <p>
                    Tu hogar, tu negocio y el corazón de las historias que
                    recorren Mapu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="world-card">
                <img
                  src="/Trawun_imagenes/concept_tavern_interior_1.png"
                  alt="La Taberna"
                  className="img-fluid rounded"
                />

                <div className="world-card-text">
                  <h5>Un Lugar de Encuentro</h5>

                  <p>
                    Situada entre la Corona del Río y los Vientos Libres del
                    Sur, la taberna ha sido durante generaciones un territorio
                    neutral donde enemigos, comerciantes y aventureros comparten
                    la misma mesa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAS DOS FACCIONES */}

      <section className="factions-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-subtitle">POLÍTICA DE MAPU</p>

            <h2 className="section-title">Las Dos Facciones</h2>

            <div className="section-line"></div>

            <p className="section-description mt-4">
              Entre el orden de la Corona del Río y la libertad de los Vientos
              Libres del Sur se encuentra Trawün, una taberna neutral donde
              viajeros de ambos mundos comparten historias, secretos y negocios.
            </p>
          </div>

          <div className="row g-4">
            {/* VIENTOS LIBRES */}

            <div className="col-lg-4">
              <div className="faction-card faction-south h-100">
                <div className="faction-image">
                  <img
                    src="/Trawun_imagenes/Banderin_Sur.png"
                    alt="La Taberna"
                    className="img-fluid rounded"
                  />
                </div>

                <h3>Vientos Libres del Sur</h3>

                <p className="faction-subtitle">Los pueblos libres del sur</p>

                <p>
                  Una confederación de clanes, aldeas y pueblos que valoran la
                  independencia, las tradiciones y la conexión con la
                  naturaleza.
                </p>

                <ul>
                  <li>• Libertad individual</li>
                  <li>• Tradiciones ancestrales</li>
                  <li>• Exploración y aventura</li>
                  <li>• Guerreros independientes</li>
                  <li>• Menos jerarquía formal</li>
                  <li>• Mayor presencia de razas no humanas</li>
                  <li>• Magia integrada a la vida cotidiana</li>
                </ul>
              </div>
            </div>

            {/* TABERNA */}

            <div className="col-lg-4">
              <div className="faction-card faction-neutral h-100">
                <div className="faction-image">
                  <img
                    src="/Trawun_imagenes/Banderin_Taberna.png"
                    alt="La Taberna"
                    className="img-fluid rounded"
                  />
                </div>

                <h3>Trawün</h3>

                <p className="faction-subtitle">El territorio neutral</p>

                <p>
                  Heredada de tu abuelo, la taberna ha sido durante generaciones
                  un punto de encuentro entre viajeros de todas las regiones de
                  Mapu.
                </p>

                <ul>
                  <li>• Comerciantes</li>
                  <li>• Aventureros</li>
                  <li>• Mercenarios</li>
                  <li>• Espías</li>
                  <li>• Exploradores</li>
                  <li>• Emisarios diplomáticos</li>
                </ul>

                <p>
                  Aquí todos comparten la misma mesa. Las historias, alianzas y
                  conflictos del mundo suelen comenzar junto al fuego de la
                  taberna.
                </p>
              </div>
            </div>

            {/* CORONA */}

            <div className="col-lg-4">
              <div className="faction-card faction-north h-100">
                <div className="faction-image">
                  <img
                    src="/Trawun_imagenes/Banderin_Norte.png"
                    alt="La Taberna"
                    className="img-fluid rounded"
                  />
                </div>

                <h3>Corona del Río</h3>

                <p className="faction-subtitle">El poder del norte</p>

                <p>
                  Un reino organizado que gobierna las ciudades más importantes
                  de Mapu mediante leyes, comercio y una fuerte estructura
                  administrativa.
                </p>

                <ul>
                  <li>• Grandes ciudades</li>
                  <li>• Comercio organizado</li>
                  <li>• Sistema legal establecido</li>
                  <li>• Nobleza y familias influyentes</li>
                  <li>• Ejército profesional</li>
                  <li>• Infraestructura y desarrollo</li>
                  <li>• Mayor desconfianza hacia razas no humanas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAZAS JUGABLES */}

      <section className="races-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-subtitle">PERSONAJES</p>

            <h2 className="section-title">Razas Jugables</h2>

            <div className="section-line"></div>

            <p className="section-description mt-3">
              Los pueblos que habitan Mapu poseen culturas, historias y formas
              de vida únicas. Cada raza ofrece una perspectiva distinta sobre el
              mundo.
            </p>
          </div>

          {/* TEHUELCHES */}

          <div className="race-card row align-items-center mb-5">
            <div className="col-lg-4">
              <div className="race-images-vertical">
                <img
                  src="/Trawun_imagenes/Tehuelche_male.png"
                  alt="Tehuelche Masculino"
                  className="race-image"
                />

                <img
                  src="/Trawun_imagenes/Tehuelche_female.png"
                  alt="Tehuelche Femenino"
                  className="race-image"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h3>Tehuelches</h3>

              <p className="race-subtitle">Los hijos de Kóoch</p>

              <p>
                Considerados el pueblo humano originario de Mapu, los Tehuelches
                han recorrido las vastas estepas, montañas y costas del sur
                durante incontables generaciones. Su profundo conocimiento del
                territorio les ha permitido sobrevivir donde otros pueblos
                apenas pueden asentarse.
              </p>

              <ul>
                <li>• Altura promedio entre 1.70 y 1.90 metros</li>
                <li>• Gran resistencia física y capacidad de adaptación</li>
                <li>• Expertos rastreadores y exploradores</li>
                <li>• Fuertes tradiciones tribales y familiares</li>
                <li>
                  • Profunda conexión con la naturaleza y los espíritus
                  ancestrales
                </li>
              </ul>

              <p>
                Comerciantes, exploradores, guerreros y viajeros tehuelches se
                encuentran en casi cualquier rincón del continente. Su habilidad
                para moverse entre distintas culturas los ha convertido en uno
                de los pueblos más influyentes del sur y del norte.
              </p>
            </div>
          </div>

          {/* PATAGÓN */}
          <div className="race-card row align-items-center mb-5">
            <div className="col-lg-7">
              <h3>Patagón</h3>

              <p className="race-subtitle">Los gigantes del sur</p>

              <p>
                Descendientes de los legendarios gigantes que inspiraron las
                historias de los primeros exploradores del sur. Los Patagón son
                el pueblo más alto y resistente de Mapu, capaces de soportar los
                vientos más feroces, las largas travesías y los inviernos más
                duros.
              </p>

              <ul>
                <li>• Altura promedio superior a 2.20 metros</li>
                <li>• Piel gruesa y resistente al frío extremo</li>
                <li>• Gran fuerza física y resistencia</li>
                <li>• Rasgos faciales marcados y presencia imponente</li>
                <li>• Tradición de guerreros, cazadores y guardianes</li>
              </ul>

              <p>
                Durante siglos fueron considerados simples leyendas por los
                pueblos del norte. Hoy sus clanes recorren las regiones más
                salvajes de Mapu, donde pocos se atreven a vivir. Aunque su
                apariencia intimida a los forasteros, valoran el honor, la
                palabra dada y la protección de su gente por encima de cualquier
                riqueza.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="race-images-vertical">
                <img
                  src="/Trawun_imagenes/Patagon_male.png"
                  alt="Patagón Masculino"
                  className="race-image"
                />

                <img
                  src="/Trawun_imagenes/Patagon_female.png"
                  alt="Patagón Femenino"
                  className="race-image"
                />
              </div>
            </div>
          </div>

          {/* PAMPEROS */}

          <div className="race-card row align-items-center mb-5">
            <div className="col-lg-4">
              <div className="race-images-vertical">
                <img
                  src="/Trawun_imagenes/Pampero_male.png"
                  alt="Pampero Masculino"
                  className="race-image"
                />

                <img
                  src="/Trawun_imagenes/Pampero_female.png"
                  alt="Pampero Femenino"
                  className="race-image"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h3>Pamperos</h3>

              <p className="race-subtitle">Los Hijos del Viento Blanco</p>

              <p>
                Una de las razas más misteriosas de Mapu. Nadie conoce con
                certeza su origen. Algunas leyendas afirman que nacieron durante
                una tormenta eterna en las llanuras del sur, mientras que otras
                sostienen que llegaron desde un plano espiritual mucho antes de
                la aparición de los demás pueblos.
              </p>

              <p>
                Son una minoría dispersa y reservada. Prefieren habitar regiones
                aisladas, donde el viento y el silencio dominan el paisaje. Su
                cultura gira en torno a la contemplación, los sueños y el
                estudio de las energías invisibles que atraviesan el mundo.
              </p>

              <ul>
                <li>• Altura promedio: 1.80 m – 1.95 m</li>
                <li>• Piel gris ceniza o plateada</li>
                <li>• Cabello blanco o gris muy claro</li>
                <li>• Ojos luminosos sin pupilas visibles</li>
                <li>• Afinidad natural con la magia y las energías</li>
                <li>• Sentidos extraordinariamente desarrollados</li>
                <li>• Predominan en regiones nocturnas y ventosas</li>
              </ul>

              <p>
                Son una minoría dispersa y reservada. Prefieren habitar regiones
                aisladas, donde el viento y el silencio dominan el paisaje. Su
                cultura gira en torno a la contemplación, los sueños y el
                estudio de las energías invisibles que atraviesan el mundo.
              </p>
              <p>
                A diferencia de otras razas, los Pamperos desarrollan una
                sensibilidad natural hacia la magia, las emociones y los cambios
                espirituales. Muchos se convierten en videntes, sanadores o
                guardianes de conocimientos antiguos.
              </p>
            </div>
          </div>

          {/* Duendes Patagónicos */}
          <div className="race-card row align-items-center mb-5">
            <div className="col-lg-7">
              <h3>Duendes Patagónicos</h3>

              <p className="race-subtitle">
                Los Pequeños Alquimistas del Bosque
              </p>

              <p>
                Ocultos entre los bosques, pantanos y quebradas de Mapu viven
                los Duendes Patagónicos, una raza pequeña y escurridiza cuya
                presencia suele anunciarse por extraños aromas, risas lejanas o
                senderos que aparecen donde antes no existían.
              </p>
              <p>
                Son maestros de la alquimia natural. Conocen cada planta, raíz,
                hongo y flor del continente. Sus mezclas pueden curar
                enfermedades, potenciar habilidades o provocar efectos
                impredecibles que ni ellos mismos siempre comprenden.
              </p>
              <p>
                Los Duendes rara vez participan en los conflictos de las grandes
                naciones. Prefieren observar desde las sombras y comerciar con
                sus brebajes a cambio de objetos curiosos, historias o secretos.
              </p>

              <ul>
                <li>• Altura promedio: 0.90 m – 1.20 m</li>
                <li>• Orejas largas y rasgos afilados</li>
                <li>• Gran longevidad para su tamaño</li>
                <li>• Expertos en alquimia y herboristería</li>
                <li>• Extremadamente sigilosos</li>
                <li>• Viven en comunidades ocultas dentro de los bosques</li>
                <li>• Personalidad traviesa, curiosa y desconfiada</li>
              </ul>

              <p>
                Aunque suelen mostrarse amistosos, son famosos por sus bromas
                pesadas y engaños elaborados. Muchos viajeros afirman haber sido
                guiados por un duende hacia un tesoro... solo para descubrir
                horas después que caminaron en círculos.
              </p>
              <p>
                Su inteligencia, creatividad y conocimiento de la naturaleza
                compensan su pequeña estatura. Ningún explorador sensato entra
                en los bosques profundos sin antes ganarse la simpatía de alguno
                de ellos.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="race-images-vertical">
                <img
                  src="/Trawun_imagenes/Duende_male.png"
                  alt="Duende Masculino"
                  className="race-image"
                />

                <img
                  src="/Trawun_imagenes/Duende_female.png"
                  alt="Duende Femenino"
                  className="race-image"
                />
              </div>
            </div>
          </div>

          {/* NAHUELES */}

          <div className="race-card row align-items-center mb-5">
            <div className="col-lg-4">
              <div className="race-images-vertical">
                <img
                  src="/Trawun_imagenes/Puma_male.png"
                  alt="Nahuel Masculino"
                  className="race-image"
                />

                <img
                  src="/Trawun_imagenes/Puma_female.png"
                  alt="Nahuel Femenino"
                  className="race-image"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h3>Nahueles</h3>

              <p className="race-subtitle">
                Los Guardianes de la Tierra Salvaje
              </p>

              <p>
                Entre las montañas, bosques y estepas de Mapu habitan los
                Nahueles, una orgullosa raza felina conocida por su velocidad,
                resistencia y extraordinarios sentidos. Descendientes de
                antiguos cazadores, han desarrollado una profunda conexión con
                el mundo físico, confiando en sus habilidades naturales mucho
                más que en la magia.
              </p>

              <p>
                A diferencia de otras razas que buscan dominar energías místicas
                o conocimientos ocultos, los Nahueles creen que la verdadera
                fuerza nace de la disciplina, la experiencia y el equilibrio con
                la naturaleza. Para ellos, cada huella cuenta una historia, cada
                viento trae un mensaje y cada territorio debe ser respetado.
              </p>

              <ul>
                <li>• Altura promedio: 1.80 m – 2.10 m</li>
                <li>
                  • Rasgos felinos inspirados en los grandes pumas australes
                </li>
                <li>• Sentidos extremadamente desarrollados</li>
                <li>• Veloces, ágiles y resistentes</li>
                <li>• Expertos en rastreo, caza y supervivencia</li>
                <li>• Escasa afinidad con la magia tradicional</li>
                <li>• Fuertemente guiados por códigos de honor y lealtad</li>
                <li>
                  • Viven en clanes dispersos entre montañas, bosques y estepas
                </li>
                <li>• Personalidad reservada, disciplinada y protectora</li>
              </ul>

              <p>
                Son excelentes rastreadores, exploradores y guerreros. Sus
                reflejos superan a los de cualquier humano, permitiéndoles
                desplazarse por bosques, montañas y acantilados con una agilidad
                sorprendente. Muchos sirven como cazadores, protectores de
                caravanas o guardianes de antiguos senderos que atraviesan las
                regiones salvajes de Mapu.
              </p>
              <p>
                La sociedad Nahuelar está fuertemente ligada al honor personal.
                La palabra dada tiene un enorme valor y la traición es
                considerada una de las faltas más graves. Aunque suelen ser
                reservados con los extranjeros, una vez que alguien gana su
                confianza obtiene un aliado leal para toda la vida.
              </p>
              <p>
                Su relación con la magia es distante. No la rechazan por
                completo, pero la consideran impredecible y poco fiable en
                comparación con el entrenamiento, el instinto y la fortaleza de
                carácter. Por esta razón, es raro encontrar magos entre ellos,
                aunque algunos chamanes y exploradores aprenden a interpretar
                los signos de la naturaleza de formas que otros consideran casi
                sobrenaturales.
              </p>
              <p>
                Los Nahueles son vistos por muchas culturas como los guardianes
                silenciosos de las tierras salvajes, protectores de antiguos
                caminos y cazadores capaces de desaparecer entre las sombras del
                bosque antes de que alguien note su presencia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { Trawun };
