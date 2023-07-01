import "../App.css"

// const navBarItems = [
//     // { href: }
// ]

export default function Header() {
  return (
    <header class="header-index">
      <div class="nav-logo">
        <button id="abrir" class="open-menu">
          <i class="bi bi-list"></i>
        </button>
        <img
          src={require("../assets/img/logo correa index.png")}
          class="logo"
          alt="Logotipo de Calzados Correa"
        />
      </div>
      <nav class="navigation" id="nav">
        <button id="cerrar" class="close-menu">
          <i class="bi bi-x-lg"></i>
        </button>
        <ul class="nav-list">
          <li>
            <a class="item-nav-index" href="#">
              INICIO
            </a>
          </li>
          <li>
            <a class="item-nav-index" href="./pages/quienes_somos.html">
              QUIENES SOMOS
            </a>
          </li>
          <li>
            <a class="item-nav-index" href="./pages/modelos.html">
              MODELOS
            </a>
          </li>
          <li>
            <a class="item-nav-index" href="./pages/mantenimiento.html">
              MANTENIMIENTO
            </a>
          </li>
          <li>
            <a class="item-nav-index" href="./pages/contacto.html">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
