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

    if (listaProductos) {
      listaProductos.addEventListener('click', function (event) {
        const producto = event.target.closest('article.producto');
        if (producto) {
          const productoId = producto.getAttribute('data-producto-id');
          window.location.href = `modelo.html?productoId=${productoId}`;
        }
      });
    }
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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const modelos = document.querySelectorAll(".producto");

  function quitarTildes(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  searchInput.addEventListener("input", function () {
    const term = quitarTildes(searchInput.value.trim().toLowerCase());

    modelos.forEach(function (modelo) {
      const modeloText = quitarTildes(modelo.innerText.toLowerCase());

      if (modeloText.includes(term)) {
        modelo.style.display = "block";
      } else {
        modelo.style.display = "none";
      }
    });
  });
});

function scrollToTop() {
  let velocidad = 100;

  if (window.innerWidth < 768) {
      velocidad = 800;
  }

  $('html, body').animate({scrollTop: 0}, velocidad);
}

document.addEventListener("DOMContentLoaded", function() {
  const divAcercaDeTexts = document.querySelectorAll('.div-acerca_de_texts');

  divAcercaDeTexts.forEach(div => {
    div.addEventListener('mouseover', function() {
      const img = div.parentElement.querySelector('.img-acerca_de');
      img.classList.add('hovered');
    });

    div.addEventListener('mouseout', function() {
      const img = div.parentElement.querySelector('.img-acerca_de');
      img.classList.remove('hovered');
    });
  });
});

// Opcional: Detener la animación al pasar el cursor
const marquee = document.querySelector('.marquee');
marquee.addEventListener('mouseenter', () => {
  marquee.querySelector('.marquee-content').style.animationPlayState = 'paused';
});
marquee.addEventListener('mouseleave', () => {
  marquee.querySelector('.marquee-content').style.animationPlayState = 'running';
});

const originalContent = marquee.querySelector('.marquee-content');

function cloneContentInfinitely() {
    const marqueeWidth = marquee.offsetWidth;
    let totalWidth = 0;

    while (totalWidth < marqueeWidth) {
        const cloneContent = originalContent.cloneNode(true);
        marquee.appendChild(cloneContent);
        totalWidth += cloneContent.offsetWidth;
    }
}

cloneContentInfinitely();

const marqueeContents = document.querySelectorAll('.marquee-content');

marqueeContents.forEach((marqueeContent) => {
  marqueeContent.addEventListener('click', () => {
    const isPaused = marqueeContent.getAttribute('data-paused') === 'true';
    if (isPaused) {
      marqueeContent.style.animationPlayState = 'running';
      marqueeContent.setAttribute('data-paused', 'false');
    } else {
      marqueeContent.style.animationPlayState = 'paused';
      marqueeContent.setAttribute('data-paused', 'true');
    }
  });
});
