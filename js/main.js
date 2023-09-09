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
  
  // Llama a checkSections al cargar la página
  window.addEventListener('load', checkSections);
  // Llama a checkSections cuando se hace scroll
  window.addEventListener('scroll', checkSections);

  document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    
    // Obtener los valores de los parámetros
    const titulo = params.get('titulo');
    const estilo = params.get('estilo');
    const descripcion = params.get('descripcion');
    const cuero = params.get('cuero');
    const color = params.get('color');
    const imagenSrc = params.get('imagenSrc'); // Obtener el nombre de la imagen
    const var1Src = params.get('var1Src'); 
    const var2Src = params.get('var2Src');
    const var3Src = params.get('var3Src'); 
    const var4Src = params.get('var4Src'); 
  
    // Actualizar el contenido de la página con los valores obtenidos
    document.getElementById('titulo-modelo').textContent = titulo;
    document.getElementById('estilo-modelo').textContent = estilo;
    document.getElementById('descripcion-modelo').textContent = descripcion;
    document.getElementById('cuero-modelo').textContent = cuero;
    document.getElementById('color-modelo').textContent = color;
  
    // Cargar la imagen desde la carpeta "assets"
    const imagenModelo = document.getElementById('imagen-modelo');
    imagenModelo.src = `../assets/${imagenSrc}`; // Asegúrate de que la ruta sea correcta

    const Img1 = document.getElementById('img1');
    Img1.src = `../assets/${var1Src}`;

    const Img2 = document.getElementById('img2');
    Img2.src = `../assets/${var2Src}`;

    const Img3 = document.getElementById('img3');
    Img3.src = `../assets/${var3Src}`;

    const Img4 = document.getElementById('img4');
    Img4.src = `../assets/${var4Src}`;
  });
