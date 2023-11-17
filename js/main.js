const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function checkSections() {
    const sections = document.querySelectorAll('.fade-section');
  
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
  
      if (isVisible) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  
  window.addEventListener('load', checkSections);
  
  window.addEventListener('scroll', checkSections);

  document.addEventListener('DOMContentLoaded', function () {
    const listaProductos = document.getElementById('lista-productos');

    listaProductos.addEventListener('click', function (event) {
        const producto = event.target.closest('article.producto');
        if (producto) {
            const productoId = producto.getAttribute('data-producto-id');
            window.location.href = `modelo.html?productoId=${productoId}`;
        }
    });
});

function checkSections() {
  const sections = document.querySelectorAll('.fade-section');

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight * 0.90);

    if (isVisible) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}