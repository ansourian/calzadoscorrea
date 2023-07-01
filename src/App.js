import "./App.css"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div class="video-intro">
          <video
            class="video-index"
            src={require("./assets/video/mantenimiento.mp4")}
            autoplay="true"
            muted="true"
            loop="true"
            playsinline
          ></video>
          <div class="div-bienvenida">
            <h1 class="h1-index">SI QUERES BRILLAR EN LA VIDA</h1>
            <h1 class="h1-index2">COMENZÁ POR TUS ZAPATOS</h1>
            <a id="redireccion" href="./index.html#redireccion">
              <img class="flecha-index" src={require("./assets/img/flecha.png")} />
            </a>
          </div>
        </div>
        <div class="div-section">
          <h3>CALZADOS CORREA</h3>
          <h1>Calzados hechos a mano de Buenos Aires, desde 1955</h1>
          <hr class="linea-subtitulo" />
          <p class="p-sub">
            Servicio personalizado por sus propios dueños.
            <br />
            Correa es tu club de elegancia de los mejores zapatos en la ciudad.
          </p>

          <div class="div-button">
            <a class="button-index" href="./pages/quienes_somos.html">
              QUIENES SOMOS
            </a>
          </div>
        </div>
        <hr />
        <div class="div-section">
          <h3>NUESTROS ZAPATOS</h3>
          <h1>Variedad para cada estilo de vida</h1>
          <hr class="linea-subtitulo" />
          <p class="p-sub">Correa estará con vos en cada paso del camino.</p>
          <div class="div-button">
            <a class="button-index" href="./pages/modelos.html">
              VER MODELOS
            </a>
          </div>
          <div class="div-img_index">
            <img class="img-index" src={require("./assets/img/foto-index2.jpg")} />
          </div>
        </div>
        <hr />
        <div class="div-section">
          <h3>COMUNICATE CON NOSOTROS</h3>
          <h1>¿Preguntas? Estamos aquí para usted</h1>
          <hr class="linea-subtitulo" />
          <p class="p-sub">
            Para consultar sobre envíos nacionales o internacionales, por favor
            deje su nombre y dirección a continuación y le enviaremos una
            respuesta tan pronto como sea posible.
          </p>
          <div class="div-button">
            <a class="button-index" href="./pages/contacto.html">
              CONTACTANOS
            </a>
          </div>
        </div>
        <hr />
        <section class="container-notas">
          <article class="notas-periodisticas">
            <img
              class="logos-diarios"
              src={require("./assets/img/2560px-Logo_La_Nación.svg.png")}
              alt="logo diario la nación"
            />
            <p class="p-lanacion">
              “Hicimos un pacto con Dios: él no hace zapatos, y nosotros no
              hacemos milagros” se lee en la entrada de Calzados Correa, una de
              las últimas zapaterías que hacen zapatos totalmente a mano y a
              medida desde hace 66 años. Presidentes, grandes empresarios,
              artistas y miembros de la realeza asiática y árabe sacan turnos
              para poder tenerlos.
            </p>
            <div class="div-button-nota">
              <a
                class="button-index"
                href="https://www.lanacion.com.ar/buenos-aires/hacen-zapatos-a-mano-y-a-medida-desde-1955-y-un-par-puede-costar-hasta-2000-dolares-nid26112021/"
                target="_blank"
              >
                VER ARTÍCULO
              </a>
            </div>
          </article>
          <article class="notas-periodisticas">
            <img
              class="logos-diarios"
              src={require("./assets/img/National-Geographic-Logo.svg.png")}
              alt="logo national geographic"
            />
            <p class="p-natgeo">
              “For men's shoes she likes Calzados Correa, where a sign says, "If
              you want to shine in life, begin with your shoes." The cobbler
              started as a storefront in 1955; eventually, says co-owner Dany
              Correa as he leads us through rooms where craftsmen devote
              themselves to details, "the workshop and factory ate the house."
              Correa's shop makes only eight pairs of "eternal shoes" a day.”
            </p>
            <div class="div-button-nota">
              <a
                class="button-index"
                href="https://www.nationalgeographic.com/travel/article/buenos-aires-traveler"
                target="_blank"
              >
                VER ARTÍCULO
              </a>
            </div>
          </article>
          <article class="notas-periodisticas">
            <img
              class="logos-diarios"
              src={require("./assets/img/Forbes_logo.svg.png")}
              alt="logo forbes"
            />
            <p class="p-notas">
              The cobblers that time forgot. Three generations of them work in a
              shoebox-size store that’s crammed with samples, boxes, and display
              cases of vintage tools. Waiting for them to custom stain a pair of
              wingtips (one of the classic styles they make in prêt-à-porter or
              Bespoke) was like passing time in an old-fashioned men’s club, as
              a steady stream of young, old , trendy and conservative Porteños
              stopped in to shoot the breeze and pick up their orders.
            </p>
            <div class="div-button-nota">
              <a
                class="button-index"
                href="https://www.forbes.com/forbes-life-magazine/2009/0427/070-travel-dining-brazil-buenos-aires.html?sh=52e15b14765a"
                target="_blank"
              >
                VER ARTÍCULO
              </a>
            </div>
          </article>
          <article class="notas-periodisticas">
            <img
              class="logos-diarios"
              src={require("./assets/img/cropped-ambitofinancierologo.png")}
              alt="logo diario ambito financiero"
            />
            <p class="p-notas">
              Encontrar zapatos artesanales, hechos a medida y de calidad, hoy
              es todo un desafío, pero en el corazón de la Capital la empresa
              familiar Correa, desde los años 50, trabaja en el rubro,
              manteniendo una destacada y elegante cartera de clientes. Aquellos
              amantes del buen vestir y de la elegancia, al arribar al local
              ubicado en Mario Bravo al 700, no dejan de sorprenderse al
              descubrir el tratamiento y la confección íntegramente manual y
              personalizada en el calzado.
            </p>
            <div class="div-button-nota">
              <a
                class="button-index"
                href="https://www.ambito.com/edicion-impresa/los-zapatos-medida-que-usan-presidentes-n3563389"
                target="_blank"
              >
                VER ARTÍCULO
              </a>
            </div>
          </article>
        </section>
      </main>
      {/* <footer>
        <div class="row">
          <div class="col">
            <h3>SOCIALES</h3>
            <div class="row row-seguinos_ig">
              <div class="col">
                <h1 class="h1-footer">Seguinos en</h1>
              </div>
              <div class="col">
                <a
                  href="https://www.instagram.com/calzadoscorrea"
                  target="_blank"
                >
                  <img
                    class="instagram-logo"
                    src={require("./assets/img/Instagram logo.png")}
                    alt="enlace a instagram"
                  />
                </a>
              </div>
            </div>
            <div>
              <p class="p-footer">
                Estate atento a todas las novedades a través de nuestro
                instagram.
              </p>
            </div>
          </div>
          <div class="vertical-hr"></div>
          <div class="col">
            <h3>INFO CONTACTO</h3>
            <div class="row">
              <div class="col footer-content">
                <p class="p-footerinfo">Dirección: Mario Bravo 750</p>
                <p class="p-footerinfo">Mail: info@calzadoscorrea.com.ar</p>
                <p class="p-footerinfo">Teléfono: (5411) 4861-7344</p>
              </div>
              <div class="col footer-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1248428114995!2d-58.41852518255615!3d-34.6010045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca89c1127145%3A0x7c1cd35e3cf9433f!2sCalzados%20Correa!5e0!3m2!1ses!2sar!4v1679619945615!5m2!1ses!2sar"
                  width="300"
                  height="200"
                  style="border: 0; border-radius: 10px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <p class="derechos-reservados">
            © COPYRIGHT 2023 CALZADOS CORREA / WEB CUSTOM & PHOTO PRODUCTION
            DESIGN BY JAIR ANSOURIAN
          </p>
        </div>
      </footer> */}
    </div>
  )
}

export default App
