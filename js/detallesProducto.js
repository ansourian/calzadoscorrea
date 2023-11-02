document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productoID = params.get('productoId');

    const productos = [
        {
            id: 'Oxford-Natural',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Natural',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/123 - 5.webp",
            imagenes: ["../assets/img/ready to wear/123 - 5.webp", "../assets/img/ready to wear/123 - 6.webp", "../assets/img/ready to wear/123 - 7.webp", "../assets/img/ready to wear/123 - 8.webp"]
        },
        {
            id: 'Oxford-Maiz',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/122 - 29.webp",
            imagenes: ["../assets/img/ready to wear/122 - 29.webp", "../assets/img/ready to wear/122 - 30.webp", "../assets/img/ready to wear/122 - 31.webp", "../assets/img/ready to wear/122 - 32.webp"]
        },
        {
            id: 'Oxford-Tabaco',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Tabaco',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/123 - 9.webp",
            imagenes: ["../assets/img/ready to wear/123 - 9.webp", "../assets/img/ready to wear/126 - 2.webp", "../assets/img/ready to wear/123 - 10.webp", "../assets/img/ready to wear/123 - 11.webp"]
        },
        {
            id: 'Oxford-Verde',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/123 - 1.webp",
            imagenes: ["../assets/img/ready to wear/123 - 1.webp", "../assets/img/ready to wear/123 - 2.webp", "../assets/img/ready to wear/123 - 3.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: 'Oxford-1122-Negro-Marron',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro - Marrón',
            tipoCuero: 'Cuero vacuno combinado',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/114 - 4.webp",
            imagenes: ["../assets/img/ready to wear/114 - 4.webp", "../assets/img/ready to wear/114 - 5.webp", "../assets/img/ready to wear/114 - 6.webp", "../assets/img/ready to wear/114 - 7.webp"]
        },
        {
            id: 'Oxford-1122-Negro-Rojo',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro - Rojo',
            tipoCuero: 'Combinado de Cuero Vacuno y Cabretilla',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/114 - 15.webp",
            imagenes: ["../assets/img/ready to wear/114 - 15.webp", "../assets/img/ready to wear/114 - 16.webp", "../assets/img/ready to wear/114 - 17.webp", "../assets/img/ready to wear/114 - 18.webp"]
        },
        {
            id: '1108-Guinda',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/127 - 5.webp",
            imagenes: ["../assets/img/ready to wear/127 - 5.webp", "../assets/img/ready to wear/127 - 6.webp", "../assets/img/ready to wear/127 - 7.webp", "../assets/img/ready to wear/127 - 8.webp"]
        },
        {
            id: '1107-Tabaco',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Su aspecto liso y sin picar, lo convierten en un modelo adecuado para ámbitos formales.',
            color: 'Tabaco',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/127 - 9.webp",
            imagenes: ["../assets/img/ready to wear/127 - 9.webp", "../assets/img/ready to wear/127 - 10.webp", "../assets/img/ready to wear/127 - 11.webp", "../assets/img/ready to wear/127 - 12.webp"]
        },
        {
            id: '1107-Tabaco-Picado-Flor',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Cuenta con flor en la punta y una tira picada.',
            color: 'Tabaco',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/127 - 13.webp",
            imagenes: ["../assets/img/ready to wear/127 - 13.webp", "../assets/img/ready to wear/127 - 14.webp", "../assets/img/ready to wear/127 - 15.webp", "../assets/img/ready to wear/127 - 16.webp"]
        },
        {
            id: '1107-Negro-Picado',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Cuenta con una tira semi picada.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/127 - 17.jpg",
            imagenes: ["../assets/img/ready to wear/127 - 17.jpg", "../assets/img/ready to wear/127 - 18.jpg", "../assets/img/ready to wear/127 - 19.jpg", "../assets/img/ready to wear/127 - 20.jpg"]
        },
        {
            id: '1103-Negro',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 1.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 1.jpg", "../assets/img/ready to wear/121 - 2.jpg", "../assets/img/ready to wear/121 - 3.jpg", "../assets/img/ready to wear/121 - 11.jpg"]
        },
        {
            id: '1103-Chocolate',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Chocolate',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 4.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 4.jpg", "../assets/img/ready to wear/121 - 5.jpg", "../assets/img/ready to wear/121 - 6.jpg", "../assets/img/ready to wear/121 - 7.jpg"]
        },
        {
            id: '1103-Marron',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 8.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 8.jpg", "../assets/img/ready to wear/121 - 9.jpg", "../assets/img/ready to wear/121 - 10.jpg", "../assets/img/ready to wear/121 - 11.jpg"]
        },
        {
            id: '1103-Guinda',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/127 - 1.jpg",
            imagenes: ["../assets/img/ready to wear/127 - 1.jpg", "../assets/img/ready to wear/127 - 2.jpg", "../assets/img/ready to wear/127 - 3.jpg", "../assets/img/ready to wear/127 - 4.jpg"]
        },
        {
            id: 'Derby-1100-Negro-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/216 - 12.jpg",
            imagenes: ["../assets/img/ready to wear/216 - 12.jpg", "../assets/img/ready to wear/216 - 13.jpg", "../assets/img/ready to wear/216 - 14.jpg", "../assets/img/ready to wear/216 - 15.jpg"]
        },
        {
            id: '2-Hebillas-Negro',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 41.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 41.jpg", "../assets/img/ready to wear/130 - 42.jpg", "../assets/img/ready to wear/130 - 43.jpg", "../assets/img/ready to wear/130 - 44.jpg"]
        },
        {
            id: '2-Hebillas-Maiz',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Maíz',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 45.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 45.jpg", "../assets/img/ready to wear/130 - 46.jpg", "../assets/img/ready to wear/130 - 47.jpg", "../assets/img/ready to wear/130 - 44.jpg"]
        },
        {
            id: '2-Hebillas-Cafe',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Café',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 48.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 48.jpg", "../assets/img/ready to wear/130 - 49.jpg", "../assets/img/ready to wear/130 - 50.jpg", "../assets/img/ready to wear/130 - 44.jpg"]
        },
        {
            id: '2-Hebillas-Marron',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 54.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 54.jpg", "../assets/img/ready to wear/130 - 55.jpg", "../assets/img/ready to wear/130 - 56.jpg", "../assets/img/ready to wear/130 - 44.jpg"]
        },
        {
            id: '2-Hebillas-Gamuza-Marron',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 51.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 51.jpg", "../assets/img/ready to wear/130 - 52.jpg", "../assets/img/ready to wear/130 - 53.jpg", "../assets/img/ready to wear/130 - 44.jpg"]
        },
        {
            id: 'Borcego-Corto',
            titulo: 'Borcego Corto',
            estilo: 'READY TO WEAR',
            descripcion: 'Un borcego suelto y robusto de caña baja a la altura del tobillo. Las suelas cuentan con una combinación de cuero y goma apta para diversos tipos de terreno.',
            color: 'Piedra',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Borcego Corto',
            imagenPrincipal: "../assets/img/ready to wear/115 - 13.jpg",
            imagenes: ["../assets/img/ready to wear/115 - 13.jpg", "../assets/img/ready to wear/115 - 14.jpg", "../assets/img/ready to wear/115 - 15.jpg", "../assets/img/ready to wear/115 - 16.jpg"]
        },
        {
            id: 'Sneaker-Suela',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/122 - 26.jpg",
            imagenes: ["../assets/img/ready to wear/122 - 26.jpg", "../assets/img/ready to wear/122 - 27.jpg", "../assets/img/ready to wear/122 - 28.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Marron',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/117 - 10.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 10.jpg", "../assets/img/ready to wear/117 - 11.jpg", "../assets/img/ready to wear/117 - 12.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Negro',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/122 - 20.jpg",
            imagenes: ["../assets/img/ready to wear/122 - 20.jpg", "../assets/img/ready to wear/122 - 21.jpg", "../assets/img/ready to wear/122 - 22.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Azul',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/117 - 20.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 20.jpg", "../assets/img/ready to wear/117 - 21.jpg", "../assets/img/ready to wear/117 - 22.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Verde-Claro',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Verde Claro',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/117 - 13.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 13.jpg", "../assets/img/ready to wear/117 - 14.jpg", "../assets/img/ready to wear/117 - 15.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Slippers-123-Gamuza-Arena',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/216 - 4.jpg",
            imagenes: ["../assets/img/ready to wear/216 - 4.jpg", "../assets/img/ready to wear/216 - 5.jpg", "../assets/img/ready to wear/216 - 6.jpg", "../assets/img/ready to wear/216 - 7.jpg"]
        },
        {
            id: 'Slippers-123-Gamuza-Tostado',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Tostado',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/117 - 23.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 23.jpg", "../assets/img/ready to wear/117 - 24.jpg", "../assets/img/ready to wear/117 - 25.jpg", "../assets/img/ready to wear/117 - 26.jpg"]
        },
        {
            id: 'Slippers-123-Gamuza-Verde-Musgo',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Verde Musgo',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/216 - 8.jpg",
            imagenes: ["../assets/img/ready to wear/216 - 8.jpg", "../assets/img/ready to wear/216 - 9.jpg", "../assets/img/ready to wear/216 - 10.jpg", "../assets/img/ready to wear/216 - 11.jpg"]
        },
        {
            id: 'Mocasin-Archibaldo-Azul',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/119 - 17.jpg",
            imagenes: ["../assets/img/ready to wear/119 - 17.jpg", "../assets/img/ready to wear/119 - 18.jpg", "../assets/img/ready to wear/119 - 19.jpg", "../assets/img/ready to wear/119 - 20.jpg"]
        },
        {
            id: 'Mocasin-Archibaldo-Negro',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/119 - 21.jpg",
            imagenes: ["../assets/img/ready to wear/119 - 21.jpg", "../assets/img/ready to wear/119 - 22.jpg", "../assets/img/ready to wear/119 - 23.jpg", "../assets/img/ready to wear/119 - 24.jpg"]
        },
        {
            id: 'Mocasin-Archibaldo-Maiz',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 25.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 25.jpg", "../assets/img/ready to wear/130 - 26.jpg", "../assets/img/ready to wear/130 - 27.jpg", "../assets/img/ready to wear/130 - 28.jpg"]
        },
        {
            id: 'Mocasin-Archibaldo-Verde',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 29.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 29.jpg", "../assets/img/ready to wear/130 - 30.jpg", "../assets/img/ready to wear/119 - 23.jpg", "../assets/img/ready to wear/119 - 24.jpg"]
        },
        {
            id: 'Mocasin-Archibaldo-Marron-Cocodrilo',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 33.jpg",
            imagenes: ["../assets/img/ready to wear/130 - 33.jpg", "../assets/img/ready to wear/130 - 34.jpg", "../assets/img/ready to wear/130 - 35.jpg", "../assets/img/ready to wear/130 - 36.jpg"]
        },
        {
            id: 'Mocasin-Industry',
            titulo: 'Mocasín Industry',
            estilo: 'READY TO WEAR',
            descripcion: 'Esta colaboración entre Calzados Correa e Industry Of All Nations, tiene como resultado un mocasín de cuero curtido vegetal con un enfoque ecológico.',
            color: 'Maíz',
            tipoCuero: 'Cuero Vegetal',
            codigo: 'Mocasín Industry',
            imagenPrincipal: "../assets/img/ready to wear/123 - 32.jpg",
            imagenes: ["../assets/img/ready to wear/123 - 32.jpg", "../assets/img/ready to wear/123 - 33.jpg", "../assets/img/ready to wear/123 - 34.jpg", "../assets/img/ready to wear/123 - 35.jpg"]
        },
        {
            id: 'Swann-Maiz',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/112 - 21.jpg",
            imagenes: ["../assets/img/made by order/112 - 21.jpg", "../assets/img/made by order/112 - 22.jpg", "../assets/img/made by order/112 - 23.jpg", "../assets/img/made by order/112 - 24.jpg"]
        },
        {
            id: 'Swann-Marron',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/119 - 5.jpg",
            imagenes: ["../assets/img/made by order/119 - 5.jpg", "../assets/img/made by order/119 - 6.jpg", "../assets/img/made by order/119 - 7.jpg", "../assets/img/made by order/119 - 8.jpg"]
        },
        {
            id: 'Swann-Negro',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/112 - 13.jpg",
            imagenes: ["../assets/img/made by order/112 - 13.jpg", "../assets/img/made by order/112 - 14.jpg", "../assets/img/made by order/112 - 15.jpg", "../assets/img/made by order/112 - 16.jpg"]
        },
        {
            id: 'Bota-Alpina-1101-Negro',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por su estilo picado. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/123 - 15.jpg",
            imagenes: ["../assets/img/made by order/123 - 15.jpg", "../assets/img/made by order/112 - 34.jpg", "../assets/img/made by order/112 - 35.jpg", "../assets/img/made by order/112 - 36.jpg"]
        },
        {
            id: 'Bota-Alpina-1101-Marron',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por su estilo picado. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/117 - 01.jpg",
            imagenes: ["../assets/img/made by order/117 - 01.jpg", "../assets/img/made by order/117 - 02.jpg", "../assets/img/made by order/216 - 1.jpg", "../assets/img/made by order/112 - 36.jpg"]
        },
        {
            id: 'Bota-Alpina-1101-Marron-Oscuro',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por no contar con picados. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/130 - 22.jpg",
            imagenes: ["../assets/img/made by order/130 - 22.jpg", "../assets/img/made by order/130 - 23.jpg", "../assets/img/made by order/130 - 24.jpg", "../assets/img/made by order/112 - 36.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Gris',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Gris',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/85 - 11.jpg",
            imagenes: ["../assets/img/made by order/85 - 11.jpg", "../assets/img/made by order/113 - 21.jpg", "../assets/img/made by order/113 - 22.jpg", "../assets/img/made by order/113 - 23.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Negro',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Negro',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/113 - 24.jpg",
            imagenes: ["../assets/img/made by order/113 - 24.jpg", "../assets/img/made by order/113 - 25.jpg", "../assets/img/made by order/113 - 26.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Marron',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/114 - 1.jpg",
            imagenes: ["../assets/img/made by order/114 - 1.jpg", "../assets/img/made by order/114 - 2.jpg", "../assets/img/made by order/114 - 3.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Verde',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Verde Musgo',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/117 - 03.jpg",
            imagenes: ["../assets/img/made by order/117 - 03.jpg", "../assets/img/made by order/117 - 04.jpg", "../assets/img/made by order/117 - 05.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Oxford-Wingtips',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un zapato sencillo y elegante gracias a su aspecto liso y sin picar. Su combinación de colores le otorgan mucha presencia. ',
            color: 'Marrón - Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122 Liso',
            imagenPrincipal: "../assets/img/made by order/112 - 25.jpg",
            imagenes: ["../assets/img/made by order/112 - 25.jpg", "../assets/img/made by order/112 - 26.jpg", "../assets/img/made by order/112 - 27.jpg", "../assets/img/made by order/112 - 28.jpg"]
        },
        {
            id: 'Derby-Split-Toes',
            titulo: 'Derby Mod. 1115',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo cuenta con una costura que divide la puntera en dos secciones, añadiendo un toque distintivo al diseño. Al ser un modelo Derby, cuenta con una gran flexibilidad en la cordonera.',
            color: 'Verde - Blanco',
            tipoCuero: 'Cuero vacuno',
            codigo: '1115 Copete Aparado',
            imagenPrincipal: "../assets/img/made by order/113 - 1.jpg",
            imagenes: ["../assets/img/made by order/113 - 1.jpg", "../assets/img/made by order/113 - 2.jpg", "../assets/img/made by order/113 - 3.jpg", "../assets/img/made by order/113 - 4.jpg"]
        },
        {
            id: 'Escarpin-123-Diamante-Castaña',
            titulo: 'Escarpin Mod. 123 Americano',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con un costurín y vincha.',
            color: 'Diamante Castaña',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 con Costurín y Vincha',
            imagenPrincipal: "../assets/img/made by order/112 - 29.jpg",
            imagenes: ["../assets/img/made by order/112 - 29.jpg", "../assets/img/made by order/112 - 30.jpg", "../assets/img/made by order/112 - 31.jpg", "../assets/img/made by order/112 - 32.jpg"]
        },
        {
            id: 'Escarpin-MP-Verde',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/made by order/119 - 25.jpg",
            imagenes: ["../assets/img/made by order/119 - 25.jpg", "../assets/img/made by order/119 - 26.jpg", "../assets/img/made by order/119 - 27.jpg", "../assets/img/made by order/119 - 28.jpg"]
        },
        {
            id: 'Escarpin-MP-Maiz',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas y una capellada lisa.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP sin Costurín',
            imagenPrincipal: "../assets/img/made by order/119 - 9.jpg",
            imagenes: ["../assets/img/made by order/119 - 9.jpg", "../assets/img/made by order/119 - 10.jpg", "../assets/img/made by order/119 - 11.jpg", "../assets/img/made by order/119 - 12.jpg"]
        },
        {
            id: 'Borcego-Texano-Natural',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora suelas y tacos de cuero terminados con suelinas y sobretacos de goma. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Natural',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/123 - 12.jpg",
            imagenes: ["../assets/img/made by order/123 - 12.jpg", "../assets/img/made by order/216 - 3.jpg", "../assets/img/made by order/123 - 13.jpg", "../assets/img/made by order/123 - 14.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Pecas',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Búfalo con pecas',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/127 - 25.jpg",
            imagenes: ["../assets/img/made by order/127 - 25.jpg", "../assets/img/made by order/127 - 26.jpg", "../assets/img/made by order/127 - 27.jpg", "../assets/img/made by order/127 - 28.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Negro',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Negro',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 5.jpg",
            imagenes: ["../assets/img/made by order/130 - 5.jpg", "../assets/img/made by order/130 - 6.jpg", "../assets/img/made by order/130 - 7.jpg", "../assets/img/made by order/130 - 8.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Maiz',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Maíz',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 9.jpg",
            imagenes: ["../assets/img/made by order/130 - 9.jpg", "../assets/img/made by order/130 - 10.jpg", "../assets/img/made by order/130 - 11.jpg", "../assets/img/made by order/130 - 8.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Marron',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Marrón',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 12.jpg",
            imagenes: ["../assets/img/made by order/130 - 12.jpg", "../assets/img/made by order/130 - 13.jpg", "../assets/img/made by order/130 - 14.jpg", "../assets/img/made by order/130 - 8.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Guinda',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de cuero y suela FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Guinda',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 15.jpg",
            imagenes: ["../assets/img/made by order/130 - 15.jpg", "../assets/img/made by order/130 - 16.jpg", "../assets/img/made by order/130 - 17.jpg", "../assets/img/made by order/130 - 18.jpg"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Gamuza-Natural',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Natural',
            tipoCuero: 'Gamuza',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 19.jpg",
            imagenes: ["../assets/img/made by order/130 - 19.jpg", "../assets/img/made by order/130 - 20.jpg", "../assets/img/made by order/130 - 21.jpg", "../assets/img/made by order/130 - 8.jpg"]
        },
        {
            id: 'Derby-Coll-Guinda',
            titulo: 'Derby Mod. Coll',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un zapato rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Un modelo ideal para el uso urbano y aptas para caminos rurales.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Derby Coll',
            imagenPrincipal: "../assets/img/made by order/128 - 10.jpg",
            imagenes: ["../assets/img/made by order/128 - 10.jpg", "../assets/img/made by order/128 - 11.jpg", "../assets/img/made by order/128 - 12.jpg", "../assets/img/made by order/128 - 13.jpg"]
        },
        {
            id: 'Oxford-1122-Bespoke-Maiz',
            titulo: 'Oxford Mod. 1122',
            estilo: 'BESPOKE',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/112 - 1.jpg",
            imagenes: ["../assets/img/bespoke/112 - 1.jpg", "../assets/img/bespoke/112 - 2.jpg", "../assets/img/bespoke/112 - 3.jpg", "../assets/img/bespoke/112 - 4.jpg"]
        },
        {
            id: 'Oxford-1122-Bespoke-Gamuza-Verde',
            titulo: 'Oxford Mod. 1122',
            estilo: 'BESPOKE',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Verde Inglés',
            tipoCuero: 'Gamuza',
            codigo: '1122 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/112 - 17.jpg",
            imagenes: ["../assets/img/bespoke/112 - 17.jpg", "../assets/img/bespoke/112 - 18.jpg", "../assets/img/bespoke/112 - 19.jpg", "../assets/img/bespoke/112 - 20.jpg"]
        },
        {
            id: 'Oxford-1108-Bespoke-Marron',
            titulo: 'Oxford Mod. 1108',
            estilo: 'BESPOKE',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1108 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/112 - 5.jpg",
            imagenes: ["../assets/img/bespoke/112 - 5.jpg", "../assets/img/bespoke/112 - 6.jpg", "../assets/img/bespoke/112 - 7.jpg", "../assets/img/bespoke/112 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Maiz',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/113 - 5.jpg",
            imagenes: ["../assets/img/bespoke/113 - 5.jpg", "../assets/img/bespoke/113 - 6.jpg", "../assets/img/bespoke/113 - 7.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Cognac',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Cognac',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/113 - 9.jpg",
            imagenes: ["../assets/img/bespoke/113 - 9.jpg", "../assets/img/bespoke/113 - 10.jpg", "../assets/img/bespoke/113 - 11.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Suela',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/123 - 20.jpg",
            imagenes: ["../assets/img/bespoke/123 - 20.jpg", "../assets/img/bespoke/123 - 21.jpg", "../assets/img/bespoke/123 - 22.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Swann-Wholecut-Cafe',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Café',
            tipoCuero: 'Vacuno',
            codigo: "Swann",
            imagenPrincipal: "../assets/img/bespoke/113 - 12.jpg",
            imagenes: ["../assets/img/bespoke/113 - 12.jpg", "../assets/img/bespoke/113 - 13.jpg", "../assets/img/bespoke/113 - 14.jpg", "../assets/img/bespoke/113 - 15.jpg"]
        },
        {
            id: 'Swann-Museum',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Museum',
            tipoCuero: 'Vacuno',
            codigo: "Swann",
            imagenPrincipal: "../assets/img/bespoke/123 - 16.jpg",
            imagenes: ["../assets/img/bespoke/123 - 16.jpg", "../assets/img/bespoke/123 - 17.jpg", "../assets/img/bespoke/123 - 18.jpg", "../assets/img/bespoke/123 - 19.jpg"]
        },
        {
            id: '1116-Bespoke',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/114 - 19.jpg",
            imagenes: ["../assets/img/bespoke/114 - 19.jpg", "../assets/img/bespoke/114 - 20.jpg", "../assets/img/bespoke/114 - 21.jpg", "../assets/img/bespoke/114 - 22.jpg"]
        },
        {
            id: 'Borcego-GC-Texano-Negro',
            titulo: 'Borcego GC Texano',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/115 - 17.jpg",
            imagenes: ["../assets/img/bespoke/115 - 17.jpg", "../assets/img/bespoke/115 - 18.jpg", "../assets/img/bespoke/115 - 19.jpg", "../assets/img/bespoke/115 - 20.jpg"]
        },
        {
            id: 'Bota-Inglesa-Ñandu',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Natural',
            tipoCuero: 'Ñandú Argentino',
            imagenPrincipal: "../assets/img/bespoke/115 - 9.jpg",
            imagenes: ["../assets/img/bespoke/115 - 9.jpg", "../assets/img/bespoke/115 - 10.jpg", "../assets/img/bespoke/115 - 11.jpg", "../assets/img/bespoke/115 - 12.jpg"]
        },
        {
            id: 'Bota-Inglesa-Negro',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/114 - 8.jpg",
            imagenes: ["../assets/img/bespoke/114 - 8.jpg", "../assets/img/bespoke/114 - 9.jpg", "../assets/img/bespoke/114 - 10.jpg", "../assets/img/bespoke/113 - 19.jpg"]
        },
        {
            id: '1100-Wholecut-Marron',
            titulo: 'Mod. 1100 Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            codigo: "1100",
            imagenPrincipal: "../assets/img/bespoke/123 - 24.jpg",
            imagenes: ["../assets/img/bespoke/123 - 24.jpg", "../assets/img/bespoke/123 - 25.jpg", "../assets/img/bespoke/123 - 26.jpg", "../assets/img/bespoke/123 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Marron',
            titulo: 'Bota Chelsea',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 28.jpg",
            imagenes: ["../assets/img/bespoke/123 - 28.jpg", "../assets/img/bespoke/123 - 29.jpg", "../assets/img/bespoke/123 - 30.jpg", "../assets/img/bespoke/123 - 31.jpg"]
        },
        {
            id: 'Bota-Chelsea-Elefante',
            titulo: 'Bota Chelsea',
            estilo: 'BESPOKE',
            descripcion: 'Un modelo plantillado a mano realizado 100% en cuero vacuno argentino.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Elefante (Elephant)',
            imagenPrincipal: "../assets/img/bespoke/123 - 36.jpg",
            imagenes: ["../assets/img/bespoke/123 - 36.jpg", "../assets/img/bespoke/123 - 37.jpg", "../assets/img/bespoke/123 - 38.jpg", "../assets/img/bespoke/123 - 39.jpg"]
        },
        {
            id: 'Derby-1100-Elefante',
            titulo: 'Derby Mod. 1100',
            estilo: 'BESPOKE',
            descripcion: 'Un clásico de cordonera abierta. Una versión logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Elefante (Elephant)',
            codigo: "1100 Bespoke",
            imagenPrincipal: "../assets/img/bespoke/130 - 1.jpg",
            imagenes: ["../assets/img/bespoke/130 - 1.jpg", "../assets/img/bespoke/130 - 2.jpg", "../assets/img/bespoke/130 - 3.jpg", "../assets/img/bespoke/130 - 4.jpg"]
        },
        {
            id: 'Derby-1100-Cocodrilo',
            titulo: 'Derby Mod. 1100',
            estilo: 'BESPOKE',
            descripcion: 'Un clásico de cordonera abierta. Una versión logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Negro',
            tipoCuero: 'Caimán (Alligator)',
            codigo: "1100 Bespoke",
            imagenPrincipal: "../assets/img/bespoke/113 - 16.jpg",
            imagenes: ["../assets/img/bespoke/113 - 16.jpg", "../assets/img/bespoke/113 - 17.jpg", "../assets/img/bespoke/113 - 18.jpg", "../assets/img/bespoke/113 - 19.jpg"]
        },
        {
            id: 'Swann-Tatuado-Natural',
            titulo: 'Swann',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. Además cuenta con un tatuaje de una serpiente en la cara externa. ',
            color: 'Natural',
            tipoCuero: 'Vacuno',
            codigo: "Swann Bespoke",
            imagenPrincipal: "../assets/img/bespoke/117 - 6.jpg",
            imagenes: ["../assets/img/bespoke/117 - 6.jpg", "../assets/img/bespoke/117 - 7.jpg", "../assets/img/bespoke/117 - 8.jpg", "../assets/img/bespoke/117 - 9.jpg"]
        }
    ];

    const producto = productos.find(p => p.id === productoID);

    if (producto) {
        document.getElementById('imagen-modelo').src = producto.imagenPrincipal;
        document.getElementById('titulo-modelo').textContent = producto.titulo;
        document.getElementById('estilo-modelo').textContent = producto.estilo;
        document.getElementById('descripcion-modelo').textContent = producto.descripcion;
        document.getElementById('color-modelo').textContent = `${producto.color}`;
        document.getElementById('cuero-modelo').textContent = `${producto.tipoCuero}`;
        document.getElementById('codigo-modelo').textContent = `${producto.codigo}`;
        document.getElementById('img1').src = producto.imagenes[0];
        document.getElementById('img2').src = producto.imagenes[1];
        document.getElementById('img3').src = producto.imagenes[2];
        document.getElementById('img4').src = producto.imagenes[3];
    } else {
        console.log(`Producto con ID ${productoID} no encontrado.`);
    }
});
