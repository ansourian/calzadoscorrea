document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productoID = params.get('productoId');

    const productos = [
        {
            id: '1122-Negro',
            titulo: 'Oxford Mod. 1122',
            subtitulo: "Wingtip Full Brogued",
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122', 
            imagenPrincipal: "../assets/img/ready to wear/135 - 21.webp",
            imagenes: ["../assets/img/ready to wear/135 - 21.webp", "../assets/img/ready to wear/135 - 22.webp", "../assets/img/ready to wear/135 - 23.webp", "../assets/img/ready to wear/123 - 8.webp"]
        },
        {
            id: '1122-Natural',
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
            id: '1122-Marron',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/135 - 24.webp",
            imagenes: ["../assets/img/ready to wear/135 - 24.webp", "../assets/img/ready to wear/135 - 25.webp", "../assets/img/ready to wear/135 - 26.webp", "../assets/img/ready to wear/123 - 11.webp"]
        },
        {
            id: '1122-Tabaco',
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
            id: '1122-Cafe',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Café',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/138 - 4.webp",
            imagenes: ["../assets/img/ready to wear/138 - 4.webp", "../assets/img/ready to wear/138 - 5.webp", "../assets/img/ready to wear/138 - 6.webp", "../assets/img/ready to wear/123 - 11.webp"]
        },
        {
            id: '1122-Suela',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/122 - 29.webp",
            imagenes: ["../assets/img/ready to wear/122 - 29.webp", "../assets/img/ready to wear/122 - 30.webp", "../assets/img/ready to wear/122 - 31.webp", "../assets/img/ready to wear/122 - 32.webp"]
        },
        {
            id: '1122-Verde',
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
            id: '1122-Rojo',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Rojo',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/147 - 3.webp",
            imagenes: ["../assets/img/ready to wear/147 - 3.webp", "../assets/img/ready to wear/147 - 4.webp", "../assets/img/ready to wear/147 - 5.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1122-Azul',
            titulo: 'Oxford Mod. 1122',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/ready to wear/147 - 6.webp",
            imagenes: ["../assets/img/ready to wear/147 - 6.webp", "../assets/img/ready to wear/147 - 7.webp", "../assets/img/ready to wear/147 - 8.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1119-Negro',
            titulo: 'Derby Mod. 1119',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1119',
            imagenPrincipal: "../assets/img/ready to wear/136 - 9.webp",
            imagenes: ["../assets/img/ready to wear/136 - 9.webp", "../assets/img/ready to wear/136 - 10.webp", "../assets/img/ready to wear/136 - 11.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1119-Guinda',
            titulo: 'Derby Mod. 1119',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Guinda',
            tipoCuero: 'Cuero vacuno',
            codigo: '1119',
            imagenPrincipal: "../assets/img/ready to wear/136 - 12.webp",
            imagenes: ["../assets/img/ready to wear/136 - 12.webp", "../assets/img/ready to wear/136 - 13.webp", "../assets/img/ready to wear/136 - 14.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1119-Marron',
            titulo: 'Derby Mod. 1119',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: '1119',
            imagenPrincipal: "../assets/img/ready to wear/136 - 15.webp",
            imagenes: ["../assets/img/ready to wear/136 - 15.webp", "../assets/img/ready to wear/136 - 16.webp", "../assets/img/ready to wear/136 - 17.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1119-Cafe',
            titulo: 'Derby Mod. 1119',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Café',
            tipoCuero: 'Cuero vacuno',
            codigo: '1119',
            imagenPrincipal: "../assets/img/ready to wear/136 - 18.webp",
            imagenes: ["../assets/img/ready to wear/136 - 18.webp", "../assets/img/ready to wear/136 - 19.webp", "../assets/img/ready to wear/136 - 20.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1116-Diamante-Cafe',
            titulo: 'Derby Mod. 1116',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Diamante Café',
            tipoCuero: 'Cuero vacuno graneado',
            codigo: '1116',
            imagenPrincipal: "../assets/img/ready to wear/136 - 22.webp",
            imagenes: ["../assets/img/ready to wear/136 - 22.webp", "../assets/img/ready to wear/136 - 23.webp", "../assets/img/ready to wear/136 - 24.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1116-Diamante-Castaña',
            titulo: 'Derby Mod. 1116',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Diamante Castaña',
            tipoCuero: 'Cuero vacuno graneado',
            codigo: '1116',
            imagenPrincipal: "../assets/img/ready to wear/136 - 25.webp",
            imagenes: ["../assets/img/ready to wear/136 - 25.webp", "../assets/img/ready to wear/136 - 26.webp", "../assets/img/ready to wear/136 - 27.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1116-Verde',
            titulo: 'Derby Mod. 1116',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116',
            imagenPrincipal: "../assets/img/ready to wear/136 - 28.webp",
            imagenes: ["../assets/img/ready to wear/136 - 28.webp", "../assets/img/ready to wear/136 - 29.webp", "../assets/img/ready to wear/136 - 30.webp", "../assets/img/ready to wear/123 - 4.webp"]
        },
        {
            id: '1108-Negro',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/132 - 5.webp",
            imagenes: ["../assets/img/ready to wear/132 - 5.webp", "../assets/img/ready to wear/132 - 6.webp", "../assets/img/ready to wear/132 - 7.webp", "../assets/img/ready to wear/132 - 8.webp"]
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
            id: '1108-Natural',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Natural',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/137 - 1.webp",
            imagenes: ["../assets/img/ready to wear/137 - 1.webp", "../assets/img/ready to wear/137 - 2.webp", "../assets/img/ready to wear/137 - 3.webp", "../assets/img/ready to wear/127 - 8.webp"]
        },
        {
            id: '1108-Marron',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/137 - 4.webp",
            imagenes: ["../assets/img/ready to wear/137 - 4.webp", "../assets/img/ready to wear/137 - 5.webp", "../assets/img/ready to wear/137 - 6.webp", "../assets/img/ready to wear/127 - 8.webp"]
        },
        {
            id: '1108-SB-Guinda',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/137 - 10.webp",
            imagenes: ["../assets/img/ready to wear/137 - 10.webp", "../assets/img/ready to wear/137 - 11.webp", "../assets/img/ready to wear/137 - 12.webp", "../assets/img/ready to wear/127 - 8.webp"]
        },
        {
            id: '1108-SB-Suela',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Suela',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/137 - 7.webp",
            imagenes: ["../assets/img/ready to wear/137 - 7.webp", "../assets/img/ready to wear/137 - 8.webp", "../assets/img/ready to wear/137 - 9.webp", "../assets/img/ready to wear/127 - 8.webp"]
        },
        {
            id: '1108-SB-Cafe',
            titulo: 'Oxford Mod. 1108',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Café',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1108',
            imagenPrincipal: "../assets/img/ready to wear/137 - 13.webp",
            imagenes: ["../assets/img/ready to wear/137 - 13.webp", "../assets/img/ready to wear/137 - 14.webp", "../assets/img/ready to wear/137 - 15.webp", "../assets/img/ready to wear/127 - 8.webp"]
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
            id: '1107-Guinda',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Su aspecto liso y sin picar, lo convierten en un modelo adecuado para ámbitos formales.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/135 - 13.webp",
            imagenes: ["../assets/img/ready to wear/135 - 13.webp", "../assets/img/ready to wear/135 - 14.webp", "../assets/img/ready to wear/135 - 15.webp", "../assets/img/ready to wear/127 - 12.webp"]
        },
        {
            id: '1107-Marron',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Su aspecto liso y sin picar, lo convierten en un modelo adecuado para ámbitos formales.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/137 - 20.webp",
            imagenes: ["../assets/img/ready to wear/137 - 20.webp", "../assets/img/ready to wear/137 - 21.webp", "../assets/img/ready to wear/137 - 22.webp", "../assets/img/ready to wear/127 - 12.webp"]
        },
        {
            id: '1107-Suela',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Su aspecto liso y sin picar, lo convierten en un modelo adecuado para ámbitos formales.',
            color: 'Suela',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/137 - 23.webp",
            imagenes: ["../assets/img/ready to wear/137 - 23.webp", "../assets/img/ready to wear/137 - 24.webp", "../assets/img/ready to wear/137 - 25.webp", "../assets/img/ready to wear/127 - 12.webp"]
        },
        {
            id: '1107-Marron-Picado-Flor',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Cuenta con flor en la punta y una tira picada.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/135 - 10.webp",
            imagenes: ["../assets/img/ready to wear/135 - 10.webp", "../assets/img/ready to wear/135 - 11.webp", "../assets/img/ready to wear/135 - 12.webp", "../assets/img/ready to wear/131 - 35.webp"]
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
            imagenes: ["../assets/img/ready to wear/127 - 13.webp", "../assets/img/ready to wear/127 - 14.webp", "../assets/img/ready to wear/131 - 34.webp", "../assets/img/ready to wear/131 - 35.webp"]
        },
        {
            id: '1107-Negro-Picado',
            titulo: 'Oxford Mod. 1107',
            estilo: 'READY TO WEAR',
            descripcion: 'Un zapato sencillo y elegante. Cuenta con una tira picada.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1107',
            imagenPrincipal: "../assets/img/ready to wear/127 - 17.webp",
            imagenes: ["../assets/img/ready to wear/127 - 17.webp", "../assets/img/ready to wear/127 - 18.webp", "../assets/img/ready to wear/127 - 19.webp", "../assets/img/ready to wear/127 - 20.webp"]
        },
        {
            id: '1103-Negro',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 1.webp",
            imagenes: ["../assets/img/ready to wear/121 - 1.webp", "../assets/img/ready to wear/121 - 2.webp", "../assets/img/ready to wear/121 - 3.webp", "../assets/img/ready to wear/121 - 11.webp"]
        },
        {
            id: '1103-Suela',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/135 - 7.webp",
            imagenes: ["../assets/img/ready to wear/135 - 7.webp", "../assets/img/ready to wear/135 - 8.webp", "../assets/img/ready to wear/135 - 9.webp", "../assets/img/ready to wear/121 - 11.webp"]
        },
        {
            id: '1103-Cafe',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Café',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 4.webp",
            imagenes: ["../assets/img/ready to wear/121 - 4.webp", "../assets/img/ready to wear/121 - 5.webp", "../assets/img/ready to wear/121 - 6.webp", "../assets/img/ready to wear/121 - 7.webp"]
        },
        {
            id: '1103-Marron',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/121 - 8.webp",
            imagenes: ["../assets/img/ready to wear/121 - 8.webp", "../assets/img/ready to wear/121 - 9.webp", "../assets/img/ready to wear/121 - 10.webp", "../assets/img/ready to wear/121 - 11.webp"]
        },
        {
            id: '1103-Guinda',
            titulo: 'Oxford Mod. 1103',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapato abotinado de vestir, sobrio y elegante. Recomendado para una expresión más discreta y formal.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/ready to wear/127 - 1.webp",
            imagenes: ["../assets/img/ready to wear/127 - 1.webp", "../assets/img/ready to wear/127 - 2.webp", "../assets/img/ready to wear/127 - 3.webp", "../assets/img/ready to wear/127 - 4.webp"]
        },
        {
            id: 'Derby-1100-Negro-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/126 - 12.webp",
            imagenes: ["../assets/img/ready to wear/126 - 12.webp", "../assets/img/ready to wear/126 - 13.webp", "../assets/img/ready to wear/126 - 14.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Natural-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Natural',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/135 - 1.webp",
            imagenes: ["../assets/img/ready to wear/135 - 1.webp", "../assets/img/ready to wear/135 - 2.webp", "../assets/img/ready to wear/135 - 3.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Suela-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Suela',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/132 - 9.webp",
            imagenes: ["../assets/img/ready to wear/132 - 9.webp", "../assets/img/ready to wear/132 - 10.webp", "../assets/img/ready to wear/132 - 11.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Mostaza-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Mostaza',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/132 - 12.webp",
            imagenes: ["../assets/img/ready to wear/132 - 12.webp", "../assets/img/ready to wear/132 - 13.webp", "../assets/img/ready to wear/132 - 14.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Marron-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/135 - 4.webp",
            imagenes: ["../assets/img/ready to wear/135 - 4.webp", "../assets/img/ready to wear/135 - 5.webp", "../assets/img/ready to wear/135 - 6.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Tabaco-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Tabaco',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/132 - 15.webp",
            imagenes: ["../assets/img/ready to wear/132 - 15.webp", "../assets/img/ready to wear/132 - 16.webp", "../assets/img/ready to wear/132 - 17.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Derby-1100-Guinda-3ojales',
            titulo: 'Derby Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión modernizada de 3 ojales que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: '1100 3 ojales',
            imagenPrincipal: "../assets/img/ready to wear/132 - 18.webp",
            imagenes: ["../assets/img/ready to wear/132 - 18.webp", "../assets/img/ready to wear/132 - 19.webp", "../assets/img/ready to wear/132 - 20.webp", "../assets/img/ready to wear/126 - 15.webp"]
        },
        {
            id: 'Dandy-1100-Diamante-Negro',
            titulo: 'Dandy Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Diamante Negro',
            tipoCuero: 'Cuero Vacuno Granulado',
            codigo: '1100',
            imagenPrincipal: "../assets/img/ready to wear/131 - 8.webp",
            imagenes: ["../assets/img/ready to wear/131 - 8.webp", "../assets/img/ready to wear/131 - 9.webp", "../assets/img/ready to wear/131 - 10.webp", "../assets/img/ready to wear/131 - 11.webp"]
        },
        {
            id: 'Dandy-1100-Diamante-Castaña',
            titulo: 'Dandy Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Diamante Castaña',
            tipoCuero: 'Cuero Vacuno Granulado',
            codigo: '1100',
            imagenPrincipal: "../assets/img/ready to wear/131 - 4.webp",
            imagenes: ["../assets/img/ready to wear/131 - 4.webp", "../assets/img/ready to wear/131 - 5.webp", "../assets/img/ready to wear/131 - 6.webp", "../assets/img/ready to wear/131 - 7.webp"]
        },
        {
            id: 'Dandy-1100-Gamuza-Marron',
            titulo: 'Dandy Mod. 1100',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: '1100',
            imagenPrincipal: "../assets/img/ready to wear/131 - 12.webp",
            imagenes: ["../assets/img/ready to wear/131 - 12.webp", "../assets/img/ready to wear/131 - 13.webp", "../assets/img/ready to wear/131 - 14.webp", "../assets/img/ready to wear/131 - 7.webp"]
        },
        {
            id: 'Swann-Tabaco',
            titulo: 'Mod. Swann',
            estilo: 'READY TO WEAR',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Tabaco',
            tipoCuero: 'Vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/ready to wear/139 - 4.webp",
            imagenes: ["../assets/img/ready to wear/139 - 4.webp", "../assets/img/ready to wear/139 - 5.webp", "../assets/img/ready to wear/139 - 6.webp", "../assets/img/made by order/112 - 24.webp"]
        },
        {
            id: 'Swann-Negro',
            titulo: 'Mod. Swann',
            estilo: 'READY TO WEAR',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/ready to wear/139 - 1.webp",
            imagenes: ["../assets/img/ready to wear/139 - 1.webp", "../assets/img/ready to wear/139 - 2.webp", "../assets/img/ready to wear/139 - 3.webp", "../assets/img/made by order/112 - 24.webp"]
        },
        {
            id: 'Bota-Dandy-Diamante-Negro',
            titulo: 'Bota Inglesa Dandy',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Diamante Negro',
            tipoCuero: 'Cuero Vacuno Granulado',
            codigo: 'Bota Dandy',
            imagenPrincipal: "../assets/img/ready to wear/131 - 18.webp",
            imagenes: ["../assets/img/ready to wear/131 - 18.webp", "../assets/img/ready to wear/131 - 19.webp", "../assets/img/ready to wear/131 - 20.webp", "../assets/img/ready to wear/131 - 11.webp"]
        },
        {
            id: 'Bota-Dandy-Diamante-Castaña',
            titulo: 'Bota Inglesa Dandy',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Diamante Castaña',
            tipoCuero: 'Cuero Vacuno Granulado',
            codigo: 'Bota Dandy',
            imagenPrincipal: "../assets/img/ready to wear/131 - 15.webp",
            imagenes: ["../assets/img/ready to wear/131 - 15.webp", "../assets/img/ready to wear/131 - 16.webp", "../assets/img/ready to wear/131 - 17.webp", "../assets/img/ready to wear/131 - 7.webp"]
        },
        {
            id: 'Bota-Dandy-Gamuza-Marron',
            titulo: 'Bota Inglesa Dandy',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Dandy',
            imagenPrincipal: "../assets/img/ready to wear/131 - 21.webp",
            imagenes: ["../assets/img/ready to wear/131 - 21.webp", "../assets/img/ready to wear/131 - 22.webp", "../assets/img/ready to wear/131 - 23.webp", "../assets/img/ready to wear/131 - 7.webp"]
        },
        {
            id: 'Bota-Carioca-Gamuza-Arena',
            titulo: 'Bota Carioca',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'Bot. Carioca',
            imagenPrincipal: "../assets/img/ready to wear/131 - 24.webp",
            imagenes: ["../assets/img/ready to wear/131 - 24.webp", "../assets/img/ready to wear/131 - 25.webp", "../assets/img/ready to wear/131 - 26.webp", "../assets/img/ready to wear/131 - 27.webp"]
        },
        {
            id: 'Bota-Carioca-Gamuza-Negro',
            titulo: 'Bota Carioca',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico liso de cordonera abierta. Una versión que logra un atractivo estilizado sin romper sus líneas tradicionales. Este modelo se recomienda para personas con empeine alto.',
            color: 'Negro',
            tipoCuero: 'Gamuza',
            codigo: 'Bot. Carioca',
            imagenPrincipal: "../assets/img/ready to wear/148 - 12.webp",
            imagenes: ["../assets/img/ready to wear/148 - 12.webp", "../assets/img/ready to wear/148 - 13.webp", "../assets/img/ready to wear/148 - 14.webp", "../assets/img/ready to wear/148 - 15.webp"]
        },
        {
            id: '2-Hebillas-Negro',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 41.webp",
            imagenes: ["../assets/img/ready to wear/130 - 41.webp", "../assets/img/ready to wear/130 - 42.webp", "../assets/img/ready to wear/130 - 43.webp", "../assets/img/ready to wear/130 - 44.webp"]
        },
        {
            id: '2-Hebillas-Suela',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Suela',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 45.webp",
            imagenes: ["../assets/img/ready to wear/130 - 45.webp", "../assets/img/ready to wear/130 - 46.webp", "../assets/img/ready to wear/130 - 47.webp", "../assets/img/ready to wear/130 - 44.webp"]
        },
        {
            id: '2-Hebillas-Cafe',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Café',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 48.webp",
            imagenes: ["../assets/img/ready to wear/130 - 48.webp", "../assets/img/ready to wear/130 - 49.webp", "../assets/img/ready to wear/130 - 50.webp", "../assets/img/ready to wear/130 - 44.webp"]
        },
        {
            id: '2-Hebillas-Marron',
            titulo: '2 Hebillas',
            estilo: 'READY TO WEAR',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 54.webp",
            imagenes: ["../assets/img/ready to wear/130 - 54.webp", "../assets/img/ready to wear/130 - 55.webp", "../assets/img/ready to wear/130 - 56.webp", "../assets/img/ready to wear/130 - 44.webp"]
        },
        {
            id: 'Borcego-Corto',
            titulo: 'Borcego Corto',
            estilo: 'READY TO WEAR',
            descripcion: 'Un borcego suelto y robusto de caña baja a la altura del tobillo. Las suelas cuentan con una combinación de cuero y goma apta para diversos tipos de terreno.',
            color: 'Piedra',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Borcego Corto',
            imagenPrincipal: "../assets/img/ready to wear/115 - 13.webp",
            imagenes: ["../assets/img/ready to wear/115 - 13.webp", "../assets/img/ready to wear/115 - 14.webp", "../assets/img/ready to wear/115 - 15.webp", "../assets/img/ready to wear/115 - 16.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Negro',
            titulo: 'Borcego Texano',
            estilo: 'READY TO WEAR',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Negro',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 5.webp",
            imagenes: ["../assets/img/made by order/130 - 5.webp", "../assets/img/made by order/130 - 6.webp", "../assets/img/made by order/130 - 7.webp", "../assets/img/made by order/130 - 8.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Suela',
            titulo: 'Borcego Texano',
            estilo: 'READY TO WEAR',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Suela',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 9.webp",
            imagenes: ["../assets/img/made by order/130 - 9.webp", "../assets/img/made by order/130 - 10.webp", "../assets/img/made by order/130 - 11.webp", "../assets/img/made by order/130 - 8.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Marron',
            titulo: 'Borcego Texano',
            estilo: 'READY TO WEAR',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Marrón',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 12.webp",
            imagenes: ["../assets/img/made by order/130 - 12.webp", "../assets/img/made by order/130 - 13.webp", "../assets/img/made by order/130 - 14.webp", "../assets/img/made by order/130 - 8.webp"]
        },
        {
            id: 'Sneaker-Suela',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/122 - 26.webp",
            imagenes: ["../assets/img/ready to wear/122 - 26.webp", "../assets/img/ready to wear/122 - 27.webp", "../assets/img/ready to wear/122 - 28.webp", "../assets/img/ready to wear/117 - 19.webp"]
        },
        {
            id: 'Sneaker-Marron',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/117 - 10.webp",
            imagenes: ["../assets/img/ready to wear/117 - 10.webp", "../assets/img/ready to wear/117 - 11.webp", "../assets/img/ready to wear/117 - 12.webp", "../assets/img/ready to wear/117 - 19.webp"]
        },
        {
            id: 'Sneaker-Negro',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/122 - 20.webp",
            imagenes: ["../assets/img/ready to wear/122 - 20.webp", "../assets/img/ready to wear/122 - 21.webp", "../assets/img/ready to wear/122 - 22.webp", "../assets/img/ready to wear/117 - 19.webp"]
        },
        {
            id: 'Sneaker-Azul',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/122 - 17.webp",
            imagenes: ["../assets/img/ready to wear/122 - 17.webp", "../assets/img/ready to wear/122 - 18.webp", "../assets/img/ready to wear/122 - 19.webp", "../assets/img/ready to wear/117 - 19.webp"]
        },
        {
            id: 'Sneaker-Verde-Claro',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Verde Claro',
            tipoCuero: 'Cuero vacuno granulado',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/117 - 13.webp",
            imagenes: ["../assets/img/ready to wear/117 - 13.webp", "../assets/img/ready to wear/117 - 14.webp", "../assets/img/ready to wear/117 - 15.webp", "../assets/img/ready to wear/117 - 19.webp"]
        },
        {
            id: 'Sneaker-Blanco-Negro',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Blanco con talón negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/133 - 19.webp",
            imagenes: ["../assets/img/ready to wear/133 - 19.webp", "../assets/img/ready to wear/133 - 20.webp", "../assets/img/ready to wear/133 - 21.webp", "../assets/img/ready to wear/133 - 22.webp"]
        },
        {
            id: 'Sneaker-Blanco-Rojo',
            titulo: 'Sneakers Urbanas',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior. La boca del calzado cuenta con un refuerzo acolchonado agradable al uso cotidiano.',
            color: 'Blanco con talón rojo',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/133 - 23.webp",
            imagenes: ["../assets/img/ready to wear/133 - 23.webp", "../assets/img/ready to wear/133 - 24.webp", "../assets/img/ready to wear/133 - 25.webp", "../assets/img/ready to wear/133 - 22.webp"]
        },
        {
            id: 'Sneaker-Bota-Gamuza-Azul',
            titulo: 'Bota Chukka Sneaker',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior.',
            color: 'Azul',
            tipoCuero: 'Gamuza',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/148 - 5.webp",
            imagenes: ["../assets/img/ready to wear/148 - 5.webp", "../assets/img/ready to wear/148 - 6.webp", "../assets/img/ready to wear/148 - 7.webp", "../assets/img/ready to wear/148 - 8.webp"]
        },
        {
            id: 'Sneaker-Bota-Gamuza-Rojo',
            titulo: 'Bota Chukka Sneaker',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior.',
            color: 'Rojo',
            tipoCuero: 'Gamuza',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/148 - 16.webp",
            imagenes: ["../assets/img/ready to wear/148 - 16.webp", "../assets/img/ready to wear/148 - 17.webp", "../assets/img/ready to wear/148 - 18.webp", "../assets/img/ready to wear/148 - 8.webp"]
        },
        {
            id: 'Sneaker-Bota-Gamuza-Amarillo',
            titulo: 'Bota Chukka Sneaker',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior.',
            color: 'Amarillo',
            tipoCuero: 'Gamuza',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/149 - 12.webp",
            imagenes: ["../assets/img/ready to wear/149 - 12.webp", "../assets/img/ready to wear/149 - 13.webp", "../assets/img/ready to wear/149 - 14.webp", "../assets/img/ready to wear/148 - 8.webp"]
        },
        {
            id: 'Sneaker-Bota-Verde',
            titulo: 'Bota Chukka Sneaker',
            estilo: 'READY TO WEAR',
            descripcion: 'Zapatillas de uso urbano confeccionadas en cuero 100% vacuno argentino tanto en su exterior como en su interior.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Zap',
            imagenPrincipal: "../assets/img/ready to wear/148 - 9.webp",
            imagenes: ["../assets/img/ready to wear/148 - 9.webp", "../assets/img/ready to wear/148 - 10.webp", "../assets/img/ready to wear/148 - 11.webp", "../assets/img/ready to wear/148 - 8.webp"]
        },
        {
            id: 'Slippers-123-Gamuza-Arena',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/126 - 4.webp",
            imagenes: ["../assets/img/ready to wear/126 - 4.webp", "../assets/img/ready to wear/126 - 5.webp", "../assets/img/ready to wear/126 - 6.webp", "../assets/img/ready to wear/126 - 7.webp"]
        },
        {
            id: 'Slippers-123-Gamuza-Tostado',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Tostado',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/117 - 23.webp",
            imagenes: ["../assets/img/ready to wear/117 - 23.webp", "../assets/img/ready to wear/117 - 24.webp", "../assets/img/ready to wear/117 - 25.webp", "../assets/img/ready to wear/117 - 26.webp"]
        },
        {
            id: 'Slippers-123-Gamuza-Violeta',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Violeta',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/142 - 27.webp",
            imagenes: ["../assets/img/ready to wear/142 - 27.webp", "../assets/img/ready to wear/142 - 28.webp", "../assets/img/ready to wear/142 - 29.webp", "../assets/img/ready to wear/142 - 30.webp"]
        },
        {
            id: 'Slippers-123-Gamuza-Verde-Musgo',
            titulo: 'Escarpín Slipper Mod. 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Mocasín fresco, liviano y flexible ideal para las temporadas primavera/verano.',
            color: 'Verde Musgo',
            tipoCuero: 'Gamuza',
            codigo: 'Slipper 123',
            imagenPrincipal: "../assets/img/ready to wear/126 - 8.webp",
            imagenes: ["../assets/img/ready to wear/126 - 8.webp", "../assets/img/ready to wear/126 - 9.webp", "../assets/img/ready to wear/126 - 10.webp", "../assets/img/ready to wear/126 - 11.webp"]
        },   
        {
            id: 'Escarpin-MP-Suela_rtw',
            titulo: 'Escarpin MP',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/ready to wear/145 - 17.webp",
            imagenes: ["../assets/img/ready to wear/145 - 17.webp", "../assets/img/ready to wear/145 - 18.webp", "../assets/img/ready to wear/145 - 19.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Marron_rtw',
            titulo: 'Escarpin MP',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/ready to wear/147 - 12.webp",
            imagenes: ["../assets/img/ready to wear/147 - 12.webp", "../assets/img/ready to wear/147 - 13.webp", "../assets/img/ready to wear/147 - 14.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Verde_rtw',
            titulo: 'Escarpin MP',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/ready to wear/147 - 16.webp",
            imagenes: ["../assets/img/ready to wear/147 - 16.webp", "../assets/img/ready to wear/147 - 17.webp", "../assets/img/ready to wear/147 - 18.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Cafe_rtw',
            titulo: 'Escarpin MP',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Café',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/ready to wear/147 - 19.webp",
            imagenes: ["../assets/img/ready to wear/147 - 19.webp", "../assets/img/ready to wear/147 - 20.webp", "../assets/img/ready to wear/147 - 21.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Negro_rtw',
            titulo: 'Escarpin MP',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/ready to wear/147 - 22.webp",
            imagenes: ["../assets/img/ready to wear/147 - 22.webp", "../assets/img/ready to wear/147 - 23.webp", "../assets/img/ready to wear/147 - 24.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Mocasin-800-Negro',
            titulo: 'Mocasín Mod. 800',
            estilo: 'READY TO WEAR',
            descripcion: 'Aún no tenemos una descripción de este producto.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Mocasín',
            imagenPrincipal: "../assets/img/ready to wear/150 - 29.webp",
            imagenes: ["../assets/img/ready to wear/150 - 29.webp", "../assets/img/ready to wear/150 - 30.webp", "../assets/img/ready to wear/150 - 31.webp", "../assets/img/made by order/119 - 28.webp"]
        }, 
        {
            id: 'Mocasin-Clasico',
            titulo: 'Mocasín',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Mocasín',
            imagenPrincipal: "../assets/img/ready to wear/141 - 21.webp",
            imagenes: ["../assets/img/ready to wear/141 - 21.webp", "../assets/img/ready to wear/141 - 22.webp", "../assets/img/ready to wear/141 - 23.webp", "../assets/img/ready to wear/119 - 20.webp"]
        },   
        {
            id: 'Mocasin-Archibaldo-Marron',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/141 - 15.webp",
            imagenes: ["../assets/img/ready to wear/141 - 15.webp", "../assets/img/ready to wear/141 - 16.webp", "../assets/img/ready to wear/141 - 17.webp", "../assets/img/ready to wear/119 - 20.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Azul',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/119 - 17.webp",
            imagenes: ["../assets/img/ready to wear/119 - 17.webp", "../assets/img/ready to wear/119 - 18.webp", "../assets/img/ready to wear/119 - 19.webp", "../assets/img/ready to wear/119 - 20.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Negro',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/119 - 21.webp",
            imagenes: ["../assets/img/ready to wear/119 - 21.webp", "../assets/img/ready to wear/119 - 22.webp", "../assets/img/ready to wear/119 - 23.webp", "../assets/img/ready to wear/119 - 24.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Maiz',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 25.webp",
            imagenes: ["../assets/img/ready to wear/130 - 25.webp", "../assets/img/ready to wear/130 - 26.webp", "../assets/img/ready to wear/130 - 27.webp", "../assets/img/ready to wear/130 - 28.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Verde',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 29.webp",
            imagenes: ["../assets/img/ready to wear/130 - 29.webp", "../assets/img/ready to wear/130 - 30.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Carpincho',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Marrón',
            tipoCuero: 'Carpincho',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/141 - 18.webp",
            imagenes: ["../assets/img/ready to wear/141 - 18.webp", "../assets/img/ready to wear/141 - 19.webp", "../assets/img/ready to wear/141 - 20.webp", "../assets/img/ready to wear/119 - 20.webp"]
        },
        {
            id: 'Mocasin-Archibaldo-Marron-Cocodrilo',
            titulo: 'Mocasín Archibaldo 226',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '226',
            imagenPrincipal: "../assets/img/ready to wear/130 - 33.webp",
            imagenes: ["../assets/img/ready to wear/130 - 33.webp", "../assets/img/ready to wear/130 - 34.webp", "../assets/img/ready to wear/130 - 35.webp", "../assets/img/ready to wear/130 - 36.webp"]
        },
        {
            id: 'Mocasin-Industry',
            titulo: 'Mocasín Industry',
            estilo: 'READY TO WEAR',
            descripcion: 'Esta colaboración entre Calzados Correa e Industry Of All Nations, tiene como resultado un mocasín de cuero curtido vegetal con un enfoque ecológico.',
            color: 'Maíz',
            tipoCuero: 'Cuero Vegetal',
            codigo: 'Mocasín Industry',
            imagenPrincipal: "../assets/img/ready to wear/123 - 32.webp",
            imagenes: ["../assets/img/ready to wear/123 - 32.webp", "../assets/img/ready to wear/123 - 33.webp", "../assets/img/ready to wear/123 - 34.webp", "../assets/img/ready to wear/123 - 35.webp"]
        },
        {
            id: 'Mocasin-Nautico-Suela',
            titulo: 'Mocasín Náutico',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Náutico',
            imagenPrincipal: "../assets/img/ready to wear/145 - 21.webp",
            imagenes: ["../assets/img/ready to wear/145 - 21.webp", "../assets/img/ready to wear/145 - 22.webp", "../assets/img/ready to wear/145 - 23.webp", "../assets/img/ready to wear/145 - 24.webp"]
        },
        {
            id: 'Mocasin-Nautico-Azul',
            titulo: 'Mocasín Náutico',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Náutico',
            imagenPrincipal: "../assets/img/ready to wear/149 - 5.webp",
            imagenes: ["../assets/img/ready to wear/149 - 5.webp", "../assets/img/ready to wear/149 - 6.webp", "../assets/img/ready to wear/149 - 7.webp", "../assets/img/ready to wear/149 - 8.webp"]
        },
        {
            id: 'Mocasin-Nautico-Marron',
            titulo: 'Mocasín Náutico',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Náutico',
            imagenPrincipal: "../assets/img/ready to wear/149 - 9.webp",
            imagenes: ["../assets/img/ready to wear/149 - 9.webp", "../assets/img/ready to wear/149 - 10.webp", "../assets/img/ready to wear/149 - 11.webp", "../assets/img/ready to wear/149 - 8.webp"]
        },
        {
            id: 'Mocasin-Nautico-Marron-2',
            titulo: 'Mocasín Náutico',
            estilo: 'READY TO WEAR',
            descripcion: 'El mocasín más fresco y liviano de nuestro catálogo. Su costura frontal, al no ser sellada, proporciona mayor ventilación, convirtiéndolo en el mocasín ideal para los días de calor.',
            color: 'Marrón (Detalles Marrón)',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Náutico',
            imagenPrincipal: "../assets/img/ready to wear/149 - 1.webp",
            imagenes: ["../assets/img/ready to wear/149 - 1.webp", "../assets/img/ready to wear/149 - 2.webp", "../assets/img/ready to wear/149 - 3.webp", "../assets/img/ready to wear/149 - 4.webp"]
        },
        {
            id: 'Bota-Inglesa-Marron',
            titulo: 'Bota Inglesa',
            estilo: 'READY TO WEAR',
            descripcion: 'Una bota clásica, cómoda y atemporal. Desde paseos por la ciudad hasta eventos formales, la bota inglesa ofrece un toque de sofisticación a cualquier conjunto.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota Inglesa',
            imagenPrincipal: "../assets/img/ready to wear/144 - 1.webp",
            imagenes: ["../assets/img/ready to wear/144 - 1.webp", "../assets/img/ready to wear/144 - 2.webp", "../assets/img/ready to wear/144 - 3.webp", "../assets/img/ready to wear/144 - 4.webp"]
        },
        {
            id: 'Bota-Inglesa-Negro',
            titulo: 'Bota Inglesa',
            estilo: 'READY TO WEAR',
            descripcion: 'Una bota clásica, cómoda y atemporal. Desde paseos por la ciudad hasta eventos formales, la bota inglesa ofrece un toque de sofisticación a cualquier conjunto.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota Inglesa',
            imagenPrincipal: "../assets/img/ready to wear/144 - 5.webp",
            imagenes: ["../assets/img/ready to wear/144 - 5.webp", "../assets/img/ready to wear/144 - 6.webp", "../assets/img/ready to wear/144 - 7.webp", "../assets/img/ready to wear/144 - 4.webp"]
        },
        {
            id: 'Bota-Petta-Suela',
            titulo: 'Bota Petta',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico de la casa. Esta bota cuenta con una costura redondeada y presenta un diseño clásico con un toque más suave y contemporáneo. Ofrece un equilibrio perfecto entre estilo tradicional y comodidad moderna.',
            color: 'Suela',
            tipoCuero: 'Cuero Vacuno Graneado',
            codigo: 'Bota Petta',
            imagenPrincipal: "../assets/img/ready to wear/144 - 8.webp",
            imagenes: ["../assets/img/ready to wear/144 - 8.webp", "../assets/img/ready to wear/144 - 9.webp", "../assets/img/ready to wear/144 - 10.webp", "../assets/img/ready to wear/144 - 4.webp"]
        },
        {
            id: 'Bota-Petta-Negro',
            titulo: 'Bota Petta',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico de la casa. Esta bota cuenta con una costura redondeada y presenta un diseño clásico con un toque más suave y contemporáneo. Ofrece un equilibrio perfecto entre estilo tradicional y comodidad moderna.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno Graneado',
            codigo: 'Bota Petta',
            imagenPrincipal: "../assets/img/ready to wear/144 - 12.webp",
            imagenes: ["../assets/img/ready to wear/144 - 12.webp", "../assets/img/ready to wear/144 - 13.webp", "../assets/img/ready to wear/144 - 14.webp", "../assets/img/ready to wear/144 - 4.webp"]
        },
        {
            id: 'Bota-Petta-Verde',
            titulo: 'Bota Petta',
            estilo: 'READY TO WEAR',
            descripcion: 'Un clásico de la casa. Esta bota cuenta con una costura redondeada y presenta un diseño clásico con un toque más suave y contemporáneo. Ofrece un equilibrio perfecto entre estilo tradicional y comodidad moderna.',
            color: 'Verde',
            tipoCuero: 'Cuero Vacuno Graneado',
            codigo: 'Bota Petta',
            imagenPrincipal: "../assets/img/ready to wear/144 - 15.webp",
            imagenes: ["../assets/img/ready to wear/144 - 15.webp", "../assets/img/ready to wear/144 - 16.webp", "../assets/img/ready to wear/144 - 17.webp", "../assets/img/ready to wear/144 - 4.webp"]
        },
        {
            id: 'Bota-ET-Negro',
            titulo: 'Bota ET',
            estilo: 'READY TO WEAR',
            descripcion: 'Una bota moderna y elegante ideal para combinar con jeans y con pantalones de vestir.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota ET',
            imagenPrincipal: "../assets/img/ready to wear/143 - 8.webp",
            imagenes: ["../assets/img/ready to wear/143 - 8.webp", "../assets/img/ready to wear/143 - 9.webp", "../assets/img/ready to wear/143 - 10.webp", "../assets/img/ready to wear/143 - 7.webp"]
        },
        {
            id: 'Bota-ET-Maiz',
            titulo: 'Bota ET',
            estilo: 'READY TO WEAR',
            descripcion: 'Una bota moderna y elegante ideal para combinar con jeans y con pantalones de vestir.',
            color: 'Maíz',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota ET',
            imagenPrincipal: "../assets/img/ready to wear/143 - 4.webp",
            imagenes: ["../assets/img/ready to wear/143 - 4.webp", "../assets/img/ready to wear/143 - 5.webp", "../assets/img/ready to wear/143 - 6.webp", "../assets/img/ready to wear/143 - 7.webp"]
        },
        {
            id: 'Bota-ET-Gamuza-Arena',
            titulo: 'Bota ET',
            estilo: 'READY TO WEAR',
            descripcion: 'Una bota moderna y elegante ideal para combinar con jeans y con pantalones de vestir.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'Bota ET',
            imagenPrincipal: "../assets/img/ready to wear/143 - 11.webp",
            imagenes: ["../assets/img/ready to wear/143 - 11.webp", "../assets/img/ready to wear/143 - 12.webp", "../assets/img/ready to wear/143 - 13.webp", "../assets/img/ready to wear/143 - 7.webp"]
        },
        {
            id: 'Oxford-Wingtips',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un zapato sencillo y elegante gracias a su aspecto liso y sin picar. Su combinación de colores le otorgan mucha presencia. ',
            color: 'Marrón - Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122 Liso',
            imagenPrincipal: "../assets/img/made by order/112 - 25.webp",
            imagenes: ["../assets/img/made by order/112 - 25.webp", "../assets/img/made by order/112 - 26.webp", "../assets/img/made by order/112 - 27.webp", "../assets/img/made by order/112 - 28.webp"]
        },
        {
            id: 'Oxford-1122-Negro-Marron',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro - Marrón',
            tipoCuero: 'Cuero vacuno combinado',
            codigo: '1122',
            imagenPrincipal: "../assets/img/made by order/114 - 4.webp",
            imagenes: ["../assets/img/made by order/114 - 4.webp", "../assets/img/made by order/114 - 5.webp", "../assets/img/made by order/114 - 6.webp", "../assets/img/made by order/114 - 7.webp"]
        },
        {
            id: 'Oxford-1122-Azul-Maiz',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Azul - Maíz',
            tipoCuero: 'Combinado de Cuero Vacuno y Cabretilla',
            codigo: '1122',
            imagenPrincipal: "../assets/img/made by order/142 - 18.webp",
            imagenes: ["../assets/img/made by order/142 - 18.webp", "../assets/img/made by order/142 - 19.webp", "../assets/img/made by order/142 - 20.webp", "../assets/img/made by order/114 - 7.webp"]
        },
        {
            id: 'Oxford-1122-Negro-Rojo',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Negro - Rojo',
            tipoCuero: 'Combinado de Cuero Vacuno y Cabretilla',
            codigo: '1122',
            imagenPrincipal: "../assets/img/made by order/114 - 15.webp",
            imagenes: ["../assets/img/made by order/114 - 15.webp", "../assets/img/made by order/114 - 16.webp", "../assets/img/made by order/114 - 17.webp", "../assets/img/made by order/114 - 18.webp"]
        },
        {
            id: 'Oxford-1122-Suela-Gamuza-Marron',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Suela - Marrón',
            tipoCuero: 'Combinado de Cuero Vacuno y Gamuza',
            codigo: '1122',
            imagenPrincipal: "../assets/img/made by order/142 - 31.webp",
            imagenes: ["../assets/img/made by order/142 - 31.webp", "../assets/img/made by order/142 - 32.webp", "../assets/img/made by order/142 - 33.webp", "../assets/img/made by order/114 - 18.webp"]
        },
        {
            id: 'Oxford-1122-Guinda-2-tonos',
            titulo: 'Oxford Mod. 1122',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Guinda (Claro y Oscuro)',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122',
            imagenPrincipal: "../assets/img/made by order/142 - 15.webp",
            imagenes: ["../assets/img/made by order/142 - 15.webp", "../assets/img/made by order/142 - 16.webp", "../assets/img/made by order/142 - 17.webp", "../assets/img/made by order/114 - 18.webp"]
        },
        {
            id: 'Oxford-1103-Marron-Verde',
            titulo: 'Oxford Mod. 1103',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un clásico atemporal, de mucha presencia. Se destaca por su gran versatilidad, tanto en lo formal como en lo casual.',
            color: 'Marrón - Verde',
            tipoCuero: 'Combinado de Anca de Potro, Gamuza y Cuero Vacuno',
            codigo: '1103',
            imagenPrincipal: "../assets/img/made by order/137 - 16.webp",
            imagenes: ["../assets/img/made by order/137 - 16.webp", "../assets/img/made by order/137 - 17.webp", "../assets/img/made by order/137 - 18.webp", "../assets/img/made by order/137 - 19.webp"]
        },
        {
            id: 'Swann-Maiz',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/112 - 21.webp",
            imagenes: ["../assets/img/made by order/112 - 21.webp", "../assets/img/made by order/112 - 22.webp", "../assets/img/made by order/112 - 23.webp", "../assets/img/made by order/112 - 24.webp"]
        },
        {
            id: 'Swann-Marron',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/119 - 5.webp",
            imagenes: ["../assets/img/made by order/119 - 5.webp", "../assets/img/made by order/119 - 6.webp", "../assets/img/made by order/119 - 7.webp", "../assets/img/made by order/119 - 8.webp"]
        },
        {
            id: 'Swann-Negro',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. ',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann',
            imagenPrincipal: "../assets/img/made by order/112 - 13.webp",
            imagenes: ["../assets/img/made by order/112 - 13.webp", "../assets/img/made by order/112 - 14.webp", "../assets/img/made by order/112 - 15.webp", "../assets/img/made by order/112 - 16.webp"]
        },
        {
            id: 'Swann-Wookie',
            titulo: 'Mod. Swann Wookie',
            estilo: 'MADE TO ORDER',
            descripcion: 'Una versión exótica de nuestro clásico de una sola pieza. Esta versión de nuestro modelo Swann exhibe capelladas de cuero que incluyen su pelaje bovino original.',
            color: 'Café',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann con pelo',
            imagenPrincipal: "../assets/img/made by order/146 - 7.webp",
            imagenes: ["../assets/img/made by order/146 - 7.webp", "../assets/img/made by order/146 - 8.webp", "../assets/img/made by order/146 - 9.webp", "../assets/img/made by order/146 - 10.webp"]
        },
        {
            id: 'Swann-Club-Rojo',
            titulo: 'Mod. Swann Club Wholecut',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo se caracteriza por estar confeccionado a partir de una sola pieza de cuero, lo que le confiere un aspecto elegante y limpio, ya que no tiene costuras visibles en la parte superior del zapato. El modelo "Club" cuenta con la cordonera en la cara externa del calzado.',
            color: 'Rojo',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Swann Club',
            imagenPrincipal: "../assets/img/made by order/143 - 1.webp",
            imagenes: ["../assets/img/made by order/143 - 1.webp", "../assets/img/made by order/143 - 2.webp", "../assets/img/made by order/143 - 3.webp", "../assets/img/made by order/112 - 36.webp"]
        },
        {
            id: '2-Hebillas-Gamuza-Marron',
            titulo: '2 Hebillas',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este es un modelo de estilo elegante que se distingue por sus dos hebillas en lugar de cordones (de las cuales una cuenta con un elástico), lo que le confiere una apariencia sofisticada y versátil, adecuada tanto para ocasiones formales como informales.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: '2 Hebillas',
            imagenPrincipal: "../assets/img/ready to wear/130 - 51.webp",
            imagenes: ["../assets/img/ready to wear/130 - 51.webp", "../assets/img/ready to wear/130 - 52.webp", "../assets/img/ready to wear/133 - 15.webp", "../assets/img/ready to wear/130 - 44.webp"]
        },
        {
            id: 'Bota-Alpina-1101-Negro',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por su estilo picado. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/123 - 15.webp",
            imagenes: ["../assets/img/made by order/123 - 15.webp", "../assets/img/made by order/112 - 34.webp", "../assets/img/made by order/112 - 35.webp", "../assets/img/made by order/112 - 36.webp"]
        },
        {
            id: 'Bota-Alpina-1101-Marron',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por su estilo picado. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/117 - 01.webp",
            imagenes: ["../assets/img/made by order/117 - 01.webp", "../assets/img/made by order/117 - 02.webp", "../assets/img/made by order/126 - 1.webp", "../assets/img/made by order/112 - 36.webp"]
        },
        {
            id: 'Bota-Alpina-1101-Marron-Oscuro',
            titulo: 'Bota Alpina Mod. 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Esta bota Derby se caracteriza por no contar con picados. Este diseño proporciona mayor comodidad y ajuste, ya que la lengüeta se puede ajustar de acuerdo con el ancho del pie.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Cuero vacuno',
            codigo: 'Bota Alpina',
            imagenPrincipal: "../assets/img/made by order/130 - 22.webp",
            imagenes: ["../assets/img/made by order/130 - 22.webp", "../assets/img/made by order/130 - 23.webp", "../assets/img/made by order/130 - 24.webp", "../assets/img/made by order/112 - 36.webp"]
        },
        {
            id: 'Bota-Chelsea-Negro',
            titulo: 'Bota Chelsea',
            estilo: 'READY TO WEAR',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Negro',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/131 - 28.webp",
            imagenes: ["../assets/img/made by order/131 - 28.webp", "../assets/img/made by order/131 - 29.webp", "../assets/img/made by order/131 - 30.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Marron',
            titulo: 'Bota Chelsea',
            estilo: 'READY TO WEAR',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Marrón',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/131 - 31.webp",
            imagenes: ["../assets/img/made by order/131 - 31.webp", "../assets/img/made by order/131 - 32.webp", "../assets/img/made by order/131 - 33.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Gris',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Gris',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/85 - 11.webp",
            imagenes: ["../assets/img/made by order/85 - 11.webp", "../assets/img/made by order/113 - 21.webp", "../assets/img/made by order/113 - 22.webp", "../assets/img/made by order/113 - 23.webp"]
        },
        {
            id: 'Bota-Chelsea-Cafe',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Café',
            tipoCuero: 'Búfalo',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/144 - 21.webp",
            imagenes: ["../assets/img/made by order/144 - 21.webp", "../assets/img/made by order/144 - 22.webp", "../assets/img/made by order/144 - 23.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Negro',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Negro',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/113 - 24.webp",
            imagenes: ["../assets/img/made by order/113 - 24.webp", "../assets/img/made by order/113 - 25.webp", "../assets/img/made by order/113 - 26.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Marron',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/114 - 1.webp",
            imagenes: ["../assets/img/made by order/114 - 1.webp", "../assets/img/made by order/114 - 2.webp", "../assets/img/made by order/114 - 3.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Verde',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Verde Musgo',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/117 - 03.webp",
            imagenes: ["../assets/img/made by order/117 - 03.webp", "../assets/img/made by order/117 - 04.webp", "../assets/img/made by order/117 - 05.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Arena',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/131 - 1.webp",
            imagenes: ["../assets/img/made by order/131 - 1.webp", "../assets/img/made by order/131 - 2.webp", "../assets/img/made by order/131 - 3.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Azul',
            titulo: 'Bota Chelsea',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un calzado versátil, adecuado tanto para ocasiones casuales como formales. Es fácil de combinar con una amplia gama de atuendos, desde jeans hasta trajes elegantes. Su diseño sin cordones y elástico la hacen cómoda y conveniente para el uso diario.',
            color: 'Azul',
            tipoCuero: 'Gamuza',
            codigo: 'Bota Elástico',
            imagenPrincipal: "../assets/img/made by order/133 - 16.webp",
            imagenes: ["../assets/img/made by order/133 - 16.webp", "../assets/img/made by order/133 - 17.webp", "../assets/img/made by order/133 - 18.webp", "../assets/img/made by order/113 - 27.webp"]
        },
        {
            id: 'Derby-Split-Toes',
            titulo: 'Derby Mod. 1115',
            estilo: 'MADE TO ORDER',
            descripcion: 'Este modelo cuenta con una costura que divide la puntera en dos secciones, añadiendo un toque distintivo al diseño. Al ser un modelo Derby, cuenta con una gran flexibilidad en la cordonera.',
            color: 'Verde - Blanco',
            tipoCuero: 'Cuero vacuno',
            codigo: '1115 Copete Aparado',
            imagenPrincipal: "../assets/img/made by order/113 - 1.webp",
            imagenes: ["../assets/img/made by order/113 - 1.webp", "../assets/img/made by order/113 - 2.webp", "../assets/img/made by order/113 - 3.webp", "../assets/img/made by order/112 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Diamante-Castaña',
            titulo: 'Escarpin Mod. 123 Americano',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con un costurín y vincha.',
            color: 'Diamante Castaña',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 con Costurín y Vincha',
            imagenPrincipal: "../assets/img/made by order/112 - 29.webp",
            imagenes: ["../assets/img/made by order/112 - 29.webp", "../assets/img/made by order/112 - 30.webp", "../assets/img/made by order/112 - 31.webp", "../assets/img/made by order/112 - 32.webp"]
        },
        {
            id: 'Escarpin-123-Negro-Blanco',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera.',
            color: 'Negro - Blanco',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 Liguria',
            imagenPrincipal: "../assets/img/made by order/142 - 37.webp",
            imagenes: ["../assets/img/made by order/142 - 37.webp", "../assets/img/made by order/142 - 38.webp", "../assets/img/made by order/142 - 39.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Guinda-Blanco',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Guinda - Blanco',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 Liguria',
            imagenPrincipal: "../assets/img/made by order/141 - 6.webp",
            imagenes: ["../assets/img/made by order/141 - 6.webp", "../assets/img/made by order/141 - 7.webp", "../assets/img/made by order/141 - 8.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Natural',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera.',
            color: 'Natural',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 con Costurín Recto y Vincha',
            imagenPrincipal: "../assets/img/made by order/141 - 9.webp",
            imagenes: ["../assets/img/made by order/141 - 9.webp", "../assets/img/made by order/141 - 10.webp", "../assets/img/made by order/141 - 11.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Verde',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: '123 con Costurín Recto y Vincha',
            imagenPrincipal: "../assets/img/made by order/142 - 34.webp",
            imagenes: ["../assets/img/made by order/142 - 34.webp", "../assets/img/made by order/142 - 35.webp", "../assets/img/made by order/142 - 36.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Gamuza-Arena',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: '123 con Costurín Recto y Vincha',
            imagenPrincipal: "../assets/img/made by order/142 - 6.webp",
            imagenes: ["../assets/img/made by order/142 - 6.webp", "../assets/img/made by order/142 - 7.webp", "../assets/img/made by order/142 - 8.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-123-Gamuza-Azul',
            titulo: 'Escarpin Mod. 123',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera.',
            color: 'Azul',
            tipoCuero: 'Gamuza',
            codigo: '123 con Costurín Recto y Vincha',
            imagenPrincipal: "../assets/img/made by order/142 - 9.webp",
            imagenes: ["../assets/img/made by order/142 - 9.webp", "../assets/img/made by order/142 - 10.webp", "../assets/img/made by order/142 - 11.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Gamuza-Arena',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Arena',
            tipoCuero: 'Gamuza',
            codigo: 'MP con Costurín Recto y Campanillas',
            imagenPrincipal: "../assets/img/made by order/141 - 24.webp",
            imagenes: ["../assets/img/made by order/141 - 24.webp", "../assets/img/made by order/141 - 25.webp", "../assets/img/made by order/141 - 26.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Gamuza-Marron',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: 'MP con Costurín Recto y Campanillas',
            imagenPrincipal: "../assets/img/made by order/141 - 27.webp",
            imagenes: ["../assets/img/made by order/141 - 27.webp", "../assets/img/made by order/141 - 28.webp", "../assets/img/made by order/141 - 29.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Gamuza-Azul',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Azul',
            tipoCuero: 'Gamuza',
            codigo: 'MP con Costurín y Campanillas',
            imagenPrincipal: "../assets/img/made by order/141 - 12.webp",
            imagenes: ["../assets/img/made by order/141 - 12.webp", "../assets/img/made by order/141 - 13.webp", "../assets/img/made by order/141 - 14.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Verde',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP con Costurín',
            imagenPrincipal: "../assets/img/made by order/119 - 25.webp",
            imagenes: ["../assets/img/made by order/119 - 25.webp", "../assets/img/made by order/119 - 26.webp", "../assets/img/made by order/119 - 27.webp", "../assets/img/made by order/119 - 28.webp"]
        },
        {
            id: 'Escarpin-MP-Maiz',
            titulo: 'Escarpin MP',
            estilo: 'MADE TO ORDER',
            descripcion: 'El mocasín escarpín es una fusión entre un mocasín y un zapato de vestir, con una suela más delgada y detalles de costura en la parte delantera. Este modelo cuenta con campanillas y una capellada lisa.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: 'MP sin Costurín',
            imagenPrincipal: "../assets/img/made by order/119 - 9.webp",
            imagenes: ["../assets/img/made by order/119 - 9.webp", "../assets/img/made by order/119 - 10.webp", "../assets/img/made by order/119 - 11.webp", "../assets/img/made by order/119 - 12.webp"]
        },
        {
            id: 'Borcego-Texano-Natural',
            titulo: 'Borcego GC Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora suelas y tacos de cuero terminados con suelinas y sobretacos de goma. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Natural',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego GC Texano',
            imagenPrincipal: "../assets/img/made by order/123 - 12.webp",
            imagenes: ["../assets/img/made by order/123 - 12.webp", "../assets/img/made by order/126 - 3.webp", "../assets/img/made by order/123 - 13.webp", "../assets/img/made by order/123 - 14.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Guinda',
            titulo: 'Borcego GC Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de cuero y suela FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Guinda',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego GC Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 15.webp",
            imagenes: ["../assets/img/made by order/130 - 15.webp", "../assets/img/made by order/130 - 16.webp", "../assets/img/made by order/130 - 17.webp", "../assets/img/made by order/130 - 18.webp"]
        },
        {
            id: 'Borcego-GC-Texano-Marron',
            titulo: 'Borcego GC Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            codigo: "Borcego GC Texano",
            imagenPrincipal: "../assets/img/made by order/148 - 26.webp",
            imagenes: ["../assets/img/made by order/148 - 26.webp", "../assets/img/made by order/148 - 27.webp", "../assets/img/made by order/148 - 28.webp", "../assets/img/made by order/148 - 29.webp"]
        },
        {
            id: 'Borcego-GC-Texano-Negro',
            titulo: 'Borcego GC Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de cuero y suela FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            codigo: "Borcego GC Texano",
            imagenPrincipal: "../assets/img/bespoke/115 - 17.webp",
            imagenes: ["../assets/img/bespoke/115 - 17.webp", "../assets/img/bespoke/115 - 18.webp", "../assets/img/bespoke/115 - 19.webp", "../assets/img/bespoke/115 - 20.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Pecas',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Búfalo con pecas',
            tipoCuero: 'Búfalo',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/127 - 25.webp",
            imagenes: ["../assets/img/made by order/127 - 25.webp", "../assets/img/made by order/127 - 26.webp", "../assets/img/made by order/127 - 27.webp", "../assets/img/made by order/127 - 28.webp"]
        },
        {
            id: 'Borcego-Texano-Bufalo-Gamuza-Natural',
            titulo: 'Borcego Texano',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un borcego rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Unas botas ideales para el uso urbano y aptas para caminos rurales.',
            color: 'Natural',
            tipoCuero: 'Gamuza',
            codigo: 'Borcego Texano',
            imagenPrincipal: "../assets/img/made by order/130 - 19.webp",
            imagenes: ["../assets/img/made by order/130 - 19.webp", "../assets/img/made by order/130 - 20.webp", "../assets/img/made by order/130 - 21.webp", "../assets/img/made by order/130 - 8.webp"]
        },
        {
            id: 'Derby-Coll-Guinda',
            titulo: 'Derby Mod. Coll',
            estilo: 'MADE TO ORDER',
            descripcion: 'Un zapato rígido y robusto. Su construcción incorpora bases de Goma Rural FEBO. Un modelo ideal para el uso urbano y aptas para caminos rurales.',
            color: 'Guinda',
            tipoCuero: 'Cuero Vacuno',
            codigo: 'Derby Coll',
            imagenPrincipal: "../assets/img/made by order/128 - 10.webp",
            imagenes: ["../assets/img/made by order/128 - 10.webp", "../assets/img/made by order/128 - 11.webp", "../assets/img/made by order/128 - 12.webp", "../assets/img/made by order/128 - 13.webp"]
        },
        {
            id: 'Oxford-1122-Bespoke-Maiz',
            titulo: 'Oxford Mod. 1122',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/112 - 1.webp",
            imagenes: ["../assets/img/bespoke/112 - 1.webp", "../assets/img/bespoke/112 - 2.webp", "../assets/img/bespoke/112 - 3.webp", "../assets/img/bespoke/112 - 4.webp"]
        },
        {
            id: 'Oxford-1122-Museum',
            titulo: 'Oxford Mod. 1122',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Pátina Museum',
            tipoCuero: 'Cuero vacuno',
            codigo: '1122 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/142 - 24.webp",
            imagenes: ["../assets/img/bespoke/142 - 24.webp", "../assets/img/bespoke/142 - 25.webp", "../assets/img/bespoke/142 - 26.webp", "../assets/img/bespoke/142 - 27.webp"]
        },
        {
            id: 'Oxford-1122-Bespoke-Gamuza-Verde',
            titulo: 'Oxford Mod. 1122',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Verde Inglés',
            tipoCuero: 'Gamuza',
            codigo: '1122 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/139 - 7.webp",
            imagenes: ["../assets/img/bespoke/139 - 7.webp", "../assets/img/bespoke/112 - 18.webp", "../assets/img/bespoke/112 - 19.webp", "../assets/img/bespoke/112 - 20.webp"]
        },
        {
            id: '1047-Maiz-Bespoke',
            titulo: '1 Hebilla Mod. 1047',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1047 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/150 - 25.webp",
            imagenes: ["../assets/img/bespoke/150 - 25.webp", "../assets/img/bespoke/150 - 26.webp", "../assets/img/bespoke/150 - 27.webp", "../assets/img/bespoke/112 - 8.webp"]
        },
        {
            id: 'Oxford-1108-Bespoke-Marron',
            titulo: 'Oxford Mod. 1108',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1108 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/112 - 5.webp",
            imagenes: ["../assets/img/bespoke/112 - 5.webp", "../assets/img/bespoke/112 - 6.webp", "../assets/img/bespoke/112 - 7.webp", "../assets/img/bespoke/112 - 8.webp"]
        },
        {
            id: 'Oxford-1103-Bespoke-Negro',
            titulo: 'Oxford Mod. 1103',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            codigo: '1103 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/140 - 31.webp",
            imagenes: ["../assets/img/bespoke/140 - 31.webp", "../assets/img/bespoke/140 - 32.webp", "../assets/img/bespoke/140 - 33.webp", "../assets/img/bespoke/140 - 34.webp"]
        },
        {
            id: 'Derby-1116-Maiz',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/113 - 5.webp",
            imagenes: ["../assets/img/bespoke/113 - 5.webp", "../assets/img/bespoke/113 - 6.webp", "../assets/img/bespoke/113 - 7.webp", "../assets/img/bespoke/113 - 8.webp"]
        },
        {
            id: 'Derby-1116-Cognac',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Cognac',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/150 - 28.webp",
            imagenes: ["../assets/img/bespoke/150 - 28.webp", "../assets/img/bespoke/113 - 10.webp", "../assets/img/bespoke/113 - 11.webp", "../assets/img/bespoke/113 - 8.webp"]
        },
        {
            id: 'Derby-1116-Suela',
            titulo: 'Derby Mod. 1116',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            codigo: '1116 Bespoke',
            imagenPrincipal: "../assets/img/bespoke/123 - 20.webp",
            imagenes: ["../assets/img/bespoke/123 - 20.webp", "../assets/img/bespoke/123 - 21.webp", "../assets/img/bespoke/123 - 22.webp", "../assets/img/bespoke/113 - 8.webp"]
        },
        {
            id: 'Swann-Wholecut-Cafe',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Café',
            tipoCuero: 'Vacuno',
            codigo: "Swann Bespoke",
            imagenPrincipal: "../assets/img/bespoke/113 - 12.webp",
            imagenes: ["../assets/img/bespoke/113 - 12.webp", "../assets/img/bespoke/113 - 13.webp", "../assets/img/bespoke/113 - 14.webp", "../assets/img/bespoke/113 - 15.webp"]
        },
        {
            id: 'Swann-Museum',
            titulo: 'Mod. Swann Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Museum',
            tipoCuero: 'Vacuno',
            codigo: "Swann Bespoke",
            imagenPrincipal: "../assets/img/bespoke/123 - 16.webp",
            imagenes: ["../assets/img/bespoke/123 - 16.webp", "../assets/img/bespoke/123 - 17.webp", "../assets/img/bespoke/112 - 11.webp", "../assets/img/bespoke/112 - 12.webp"]
        },
        {
            id: 'Bota-Inglesa-Ñandu',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente. Este cuero es a pedido, contra disponibilidad del material.',
            color: 'Natural',
            tipoCuero: 'Ñandú Argentino',
            codigo: "Bota Inglesa Bespoke",
            imagenPrincipal: "../assets/img/bespoke/115 - 9.webp",
            imagenes: ["../assets/img/bespoke/115 - 9.webp", "../assets/img/bespoke/115 - 10.webp", "../assets/img/bespoke/115 - 11.webp", "../assets/img/bespoke/115 - 12.webp"]
        },
        {
            id: 'Bota-Inglesa-Negro',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente. Este cuero es a pedido, contra disponibilidad del material.',
            color: 'Negro',
            tipoCuero: 'Búfalo (Buffalo)',
            codigo: "Bota Inglesa Bespoke",
            imagenPrincipal: "../assets/img/bespoke/114 - 8.webp",
            imagenes: ["../assets/img/bespoke/114 - 8.webp", "../assets/img/bespoke/114 - 9.webp", "../assets/img/bespoke/114 - 10.webp", "../assets/img/bespoke/113 - 19.webp"]
        },
        {
            id: 'Bota-Inglesa-Elefante',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente. Este cuero es a pedido, contra disponibilidad del material.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Elefante (Elephant)',
            codigo: "Bota Inglesa Bespoke",
            imagenPrincipal: "../assets/img/bespoke/123 - 36.webp",
            imagenes: ["../assets/img/bespoke/123 - 36.webp", "../assets/img/bespoke/123 - 37.webp", "../assets/img/bespoke/123 - 38.webp", "../assets/img/bespoke/123 - 39.webp"]
        },
        {
            id: '1116-Bespoke',
            titulo: 'Wholecut Mod. 1116 (HD)',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            codigo: "Wholecut 1116",
            imagenPrincipal: "../assets/img/bespoke/114 - 19.webp",
            imagenes: ["../assets/img/bespoke/114 - 19.webp", "../assets/img/bespoke/114 - 20.webp", "../assets/img/bespoke/114 - 21.webp", "../assets/img/bespoke/114 - 22.webp"]
        },
        {
            id: '1100-Wholecut-Marron',
            titulo: 'Mod. 1100 Wholecut',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            codigo: "1100 Bespoke",
            imagenPrincipal: "../assets/img/bespoke/123 - 24.webp",
            imagenes: ["../assets/img/bespoke/123 - 24.webp", "../assets/img/bespoke/123 - 25.webp", "../assets/img/bespoke/123 - 26.webp", "../assets/img/bespoke/123 - 27.webp"]
        },
        {
            id: 'Bota-Petta-Marron',
            titulo: 'Bota Petta',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            codigo: "Bota Petta Bespoke",
            imagenPrincipal: "../assets/img/bespoke/123 - 28.webp",
            imagenes: ["../assets/img/bespoke/123 - 28.webp", "../assets/img/bespoke/123 - 29.webp", "../assets/img/bespoke/123 - 30.webp", "../assets/img/bespoke/123 - 31.webp"]
        },
        {
            id: 'Derby-1100-Elefante',
            titulo: 'Derby Mod. 1100',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente. Este cuero es a pedido, contra disponibilidad del material.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Elefante (Elephant)',
            codigo: "1100 Bespoke",
            imagenPrincipal: "../assets/img/bespoke/130 - 1.webp",
            imagenes: ["../assets/img/bespoke/130 - 1.webp", "../assets/img/bespoke/130 - 2.webp", "../assets/img/bespoke/130 - 3.webp", "../assets/img/bespoke/130 - 4.webp"]
        },
        {
            id: 'Derby-1100-Cocodrilo',
            titulo: 'Derby Mod. 1100',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente. Este cuero es a pedido, contra disponibilidad del material.',
            color: 'Negro',
            tipoCuero: 'Caimán (Alligator)',
            codigo: "1100 Bespoke",
            imagenPrincipal: "../assets/img/bespoke/113 - 16.webp",
            imagenes: ["../assets/img/bespoke/113 - 16.webp", "../assets/img/bespoke/113 - 17.webp", "../assets/img/bespoke/113 - 18.webp", "../assets/img/bespoke/113 - 19.webp"]
        },
        {
            id: 'Swann-Tatuado-Natural',
            titulo: 'Swann',
            estilo: 'BESPOKE',
            descripcion: 'Este modelo es una versión exclusiva de realización a medida. Puede existir el mismo modelo o similar en versiones estándar. Este modelo puede ser customizado a gusto del cliente.',
            color: 'Natural',
            tipoCuero: 'Vacuno',
            codigo: "Swann Bespoke",
            imagenPrincipal: "../assets/img/bespoke/117 - 6.webp",
            imagenes: ["../assets/img/bespoke/117 - 6.webp", "../assets/img/bespoke/117 - 7.webp", "../assets/img/bespoke/117 - 8.webp", "../assets/img/bespoke/117 - 9.webp"]
        },
        {
            id: 'Cinturon-Rustico-Maiz',
            titulo: 'Cinturón Rústico',
            estilo: 'READY TO WEAR',
            descripcion: 'Este modelo es un cinturón de estilo rústico Se caracteriza por su textura más áspera y su ancho de 5,5 centímetros.',
            color: 'Maíz',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Rústico",
            imagenPrincipal: "../assets/img/cinturones/140 - 38.webp",
            imagenes: ["../assets/img/cinturones/140 - 38.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Rustico-Marron-Oscuro',
            titulo: 'Cinturón Rústico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo rústico Se caracteriza por su textura más áspera y su ancho de 5,5 centímetros.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Rústico",
            imagenPrincipal: "../assets/img/cinturones/140 - 46.webp",
            imagenes: ["../assets/img/cinturones/140 - 46.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Rustico-Blanco',
            titulo: 'Cinturón Rústico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo rústico Se caracteriza por su textura más áspera y su ancho de 5,5 centímetros.',
            color: 'Blanco',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Rústico",
            imagenPrincipal: "../assets/img/cinturones/141 - 5.webp",
            imagenes: ["../assets/img/cinturones/141 - 5.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Guinda',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Guinda',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 39.webp",
            imagenes: ["../assets/img/cinturones/140 - 39.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Maiz',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Maíz',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 41.webp",
            imagenes: ["../assets/img/cinturones/140 - 41.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Graneado-Marron',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Marrón',
            tipoCuero: 'Vacuno Graneado',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 42.webp",
            imagenes: ["../assets/img/cinturones/140 - 42.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Rojo',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Rojo',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 43.webp",
            imagenes: ["../assets/img/cinturones/140 - 43.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Negro',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 44.webp",
            imagenes: ["../assets/img/cinturones/140 - 44.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Verde',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Verde',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 45.webp",
            imagenes: ["../assets/img/cinturones/140 - 45.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Azul',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Azul',
            tipoCuero: 'Vacuno',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 47.webp",
            imagenes: ["../assets/img/cinturones/140 - 47.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Gamuza-Marron',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/141 - 2.webp",
            imagenes: ["../assets/img/cinturones/141 - 2.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Gamuza-Rojo',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Rojo',
            tipoCuero: 'Gamuza',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/140 - 40.webp",
            imagenes: ["../assets/img/cinturones/140 - 40.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Gamuza-Azul',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Azul',
            tipoCuero: 'Gamuza',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/141 - 1.webp",
            imagenes: ["../assets/img/cinturones/141 - 1.webp", "", "", ""]
        },
        {
            id: 'Cinturon-Clasico-Gamuza-Amarillo',
            titulo: 'Cinturón Clásico',
            estilo: 'ACCESORIOS',
            descripcion: 'Este modelo es un cinturón de estilo clásico que cuenta con una hebilla plateada y un ancho de 5 centímetros.',
            color: 'Amarillo',
            tipoCuero: 'Gamuza',
            codigo: "Cinturón Clásico",
            imagenPrincipal: "../assets/img/cinturones/141 - 4.webp",
            imagenes: ["../assets/img/cinturones/141 - 4.webp", "", "", ""]
        },
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

        if (producto) {
            const carouselInner = document.querySelector('.carousel-inner');
            const carouselIndicators = document.querySelector('.carousel-indicators');
        
            // Limpiar el contenido actual del carrusel
            carouselInner.innerHTML = '';
            carouselIndicators.innerHTML = '';
        
            if (producto.imagenes && producto.imagenes.length > 0) {
                // Producto con imágenes disponibles
                producto.imagenes.forEach((imagen, index) => {
                    if (imagen !== '') {
                        carouselInner.innerHTML += `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${imagen}" class="d-block w-100" alt="...">
                            </div>
                        `;
                        carouselIndicators.innerHTML += `
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-label="Slide ${index + 1}"></button>
                        `;
                    }
                });
            } else {
                // Producto sin imágenes disponibles, mostrar solo la imagen principal
                if (producto.imagenPrincipal !== '') {
                    carouselInner.innerHTML += `
                        <div class="carousel-item active">
                            <img src="${producto.imagenPrincipal}" class="d-block w-100" alt="...">
                        </div>
                    `;
                    // No se necesitan indicadores si solo hay una imagen
                } else {
                    console.log(`El producto con ID ${productoID} no tiene imágenes.`);
                }
            }
        } else {
            console.log(`Producto con ID ${productoID} no encontrado.`);
        }

        //-----
        
        
        const preciosModelos = {
            "sneaker": 100000,
            "mocasin": 150000,
            "oxford": 260000
        };
        
        const precioElemento = document.getElementById('precio-modelo');
        const divPrecioModelo = document.getElementById('div-precio_modelo');
        
        // Verificar si el precio es un modelo y buscar su precio en la lista de precios
        if (typeof producto.precio === 'string' && preciosModelos.hasOwnProperty(producto.precio)) {
            // Utilizar el precio del modelo definido en la lista de precios
            const precioModelo = preciosModelos[producto.precio];
            
            // Muestra el precio del modelo
            precioElemento.textContent = `$ ${precioModelo.toLocaleString('es-AR')}`;
            
            // Muestra el div de precio_modelo
            divPrecioModelo.style.display = 'block';
        } else if (producto.precio !== undefined && typeof producto.precio === 'number') {
            // Si el precio es un número, mostrarlo normalmente
            // Muestra el precio del producto
            precioElemento.textContent = `$ ${producto.precio.toLocaleString('es-AR')}`;
            
            // Muestra el div de precio_modelo
            divPrecioModelo.style.display = 'block';
        } else {
            // Muestra "Precio no disponible" si el precio no está definido o no es un número
            precioElemento.textContent = "Precio no disponible";
        
            // Oculta el div de precio_modelo
            divPrecioModelo.style.display = 'none';
        }
        
    } else {
        console.log(`Producto con ID ${productoID} no encontrado.`);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const botonesCategorias = document.querySelectorAll('.button-card_models');
    const botonTodosModelos = document.querySelector('.button-card_allmodels');

    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Agregar la clase 'seleccionado' al hacer clic en el filtro
            if (!this.classList.contains('seleccionado')) {
                // Remover la clase 'seleccionado' de todos los botones
                botonesCategorias.forEach(b => b.classList.remove('seleccionado'));
                // Agregar la clase 'seleccionado' solo al botón clickeado
                this.classList.add('seleccionado');
            }
            
            const categoriaSeleccionada = this.getAttribute('data-categoria');
            actualizarURL(categoriaSeleccionada); // Función para actualizar la URL
            aplicarFiltro(categoriaSeleccionada); // Función para aplicar el filtro
        });
    });

    // Evento de clic para el botón "Todos los modelos"
    botonTodosModelos.addEventListener('click', function(event) {
        event.preventDefault();
        botonesCategorias.forEach(boton => boton.classList.remove('seleccionado'));
        actualizarURL(null); // Remover la categoría de la URL
        aplicarFiltro(null); // Mostrar todos los modelos
    });

    // Función para actualizar el URL con el parámetro de categoría
    function actualizarURL(categoria) {
        const url = new URL(window.location.href);
        url.searchParams.set('categoria', categoria);
        history.replaceState(null, '', url);
    }

    // Función para aplicar el filtro basado en el parámetro de categoría
    function aplicarFiltro(categoria) {
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            const categoriaProducto = producto.getAttribute('data-categoria');
            if (!categoria || categoria === 'null' || categoria === categoriaProducto) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // Verificar si hay un parámetro de categoría en la URL al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaURL = urlParams.get('categoria');
    if (categoriaURL) {
        aplicarFiltro(categoriaURL);
        // Establecer la clase 'seleccionado' en el botón correspondiente si hay una categoría en la URL
        const botonSeleccionado = document.querySelector(`[data-categoria="${categoriaURL}"]`);
        if (botonSeleccionado) {
            botonSeleccionado.classList.add('seleccionado');
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de categorías principales
    const botonesCategorias = document.querySelectorAll('.button-card_models');

    // Agregar un evento de clic a cada enlace de categoría principal
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Obtener la categoría seleccionada
            const categoriaSeleccionada = this.getAttribute('data-categoria');

            // Obtener el contenedor de subcategorías correspondiente a la categoría seleccionada
            const subcategoriasContainer = document.querySelector(`.contenedor-card_shoe_models[data-categoria="${categoriaSeleccionada}"]`);

            // Mostrar el contenedor de subcategorías
            subcategoriasContainer.style.display = 'flex';
            subcategoriasContainer.style.visibility = 'visible';

            // Aplicar el filtro de la categoría seleccionada
            aplicarFiltro(categoriaSeleccionada);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el enlace de la categoría "Zapatos"
    const zapatosLink = document.querySelector('.button-card_models[data-categoria="zapatos"]');

    // Obtener el contenedor de subcategorías de zapatos
    const subcategoriasContainer = document.querySelector('.contenedor-card_shoe_models');

    // Agregar un evento de clic al enlace de "Zapatos"
    zapatosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Cambiar el estilo del contenedor de subcategorías
        subcategoriasContainer.style.display = 'flex';
        subcategoriasContainer.style.visibility = 'visible';

        // Filtrar productos por la categoría "Zapatos"
        aplicarFiltro('zapatos');
    });
});

//nuevo codigo que cree 22/03/2024

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el enlace de la categoría "Mocasines"
    const mocasinesLink = document.querySelector('.button-card_models[data-categoria="mocasines"]');

    // Obtener el contenedor de subcategorías de mocasines
    const subcategoriasMocasinesContainer = document.querySelector('.contenedor-card_shoe_models_mocasines');

    // Agregar un evento de clic al enlace de "Mocasines"
    mocasinesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Mostrar el contenedor de subcategorías de mocasines
        subcategoriasMocasinesContainer.style.display = 'flex';
        subcategoriasMocasinesContainer.style.visibility = 'visible';

        // Filtrar productos por la categoría "Mocasines"
        aplicarFiltro('mocasines');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de categorías principales excepto "Mocasines"
    const categoriasPrincipalesExceptoMocasines = document.querySelectorAll('.button-card_models:not([data-categoria="mocasines"])');

    // Obtener el contenedor de subcategorías de mocasines
    const subcategoriasMocasinesContainer = document.querySelector('.contenedor-card_shoe_models_mocasines');

    // Agregar un evento de clic a cada enlace de categoría principal excepto "Mocasines"
    categoriasPrincipalesExceptoMocasines.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Ocultar las subcategorías de mocasines
            subcategoriasMocasinesContainer.style.display = 'none';
            subcategoriasMocasinesContainer.style.visibility = 'hidden';
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener los enlaces de todas las categorías principales
    const categoriasPrincipales = document.querySelectorAll('.button-card_models:not([data-categoria="zapatos"])');

    // Obtener el contenedor de subcategorías de zapatos
    const subcategoriasContainer = document.querySelector('.contenedor-card_shoe_models');

    // Agregar un evento de clic a cada enlace de categoría principal
    categoriasPrincipales.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Ocultar el contenedor de subcategorías de zapatos
            subcategoriasContainer.style.display = 'none';
            subcategoriasContainer.style.visibility = 'hidden';

            // Obtener la categoría seleccionada y aplicar el filtro
            const categoriaSeleccionada = this.getAttribute('data-categoria');
            aplicarFiltro(categoriaSeleccionada);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de subcategorías
    const subcategorias = document.querySelectorAll('.button-card_shoe_models');

    // Agregar un evento de clic a cada enlace de subcategoría
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Obtener la subcategoría seleccionada
            const subcategoriaSeleccionada = this.getAttribute('data-subcategoria');
            aplicarFiltro(subcategoriaSeleccionada);
        });
    });

    // Función para aplicar el filtro
    function aplicarFiltro(categoria) {
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            const subcategoriaProducto = producto.getAttribute('data-subcategoria');
            if (!categoria || categoria === 'null' || categoria === subcategoriaProducto) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de subcategorías
    const subcategorias = document.querySelectorAll('.button-card_shoe_models');

    // Agregar un evento de clic a cada enlace de subcategoría
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Remover la clase 'seleccionado' de todas las subcategorías
            subcategorias.forEach(s => s.classList.remove('seleccionado'));

            // Agregar la clase 'seleccionado' a la subcategoría clickeada
            this.classList.add('seleccionado');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón "Limpiar filtros"
    const botonLimpiarFiltros = document.querySelector('.button-card_allmodels');

    // Evento de clic para el botón "Limpiar filtros"
    botonLimpiarFiltros.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Remover la clase 'seleccionado' de todas las subcategorías
        const subcategorias = document.querySelectorAll('.button-card_shoe_models');
        subcategorias.forEach(subcategoria => subcategoria.classList.remove('seleccionado'));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de subcategorías
    const subcategorias = document.querySelectorAll('.button-card_shoe_models');

    // Evento de clic para cada enlace de subcategoría
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Obtener la subcategoría seleccionada
            const subcategoriaSeleccionada = this.getAttribute('data-subcategoria');

            // Obtener el URL actual
            const url = new URL(window.location.href);

            // Obtener el parámetro de categoría del URL
            const categoriaActual = url.searchParams.get('categoria');

            // Construir el nuevo URL con la subcategoría seleccionada
            let nuevoUrl;
            if (categoriaActual) {
                nuevoUrl = `${window.location.origin}${window.location.pathname}?categoria=${categoriaActual}&subcategoria=${subcategoriaSeleccionada}`;
            } else {
                nuevoUrl = `${window.location.origin}${window.location.pathname}?subcategoria=${subcategoriaSeleccionada}`;
            }

            // Actualizar el URL
            history.replaceState(null, '', nuevoUrl);

            // Aplicar el filtro de subcategoría
            aplicarFiltro(subcategoriaSeleccionada);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const botonesCategorias = document.querySelectorAll('.button-card_models');
    const botonTodosModelos = document.querySelector('.button-card_allmodels');

    // Evento de clic para los botones de categoría
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Agregar la clase 'seleccionado' al hacer clic en el filtro
            if (!this.classList.contains('seleccionado')) {
                // Remover la clase 'seleccionado' de todos los botones
                botonesCategorias.forEach(b => b.classList.remove('seleccionado'));
                // Agregar la clase 'seleccionado' solo al botón clickeado
                this.classList.add('seleccionado');
            }
            
            const categoriaSeleccionada = this.getAttribute('data-categoria');
            const url = new URL(window.location.href);
            url.searchParams.set('categoria', categoriaSeleccionada);
            url.searchParams.delete('subcategoria');
            history.replaceState(null, '', url);
            aplicarFiltro(); // Aplicar filtro de categoría
        });
    });

    // Evento de clic para el botón "Todos los modelos"
    botonTodosModelos.addEventListener('click', function(event) {
        event.preventDefault();
        botonesCategorias.forEach(boton => boton.classList.remove('seleccionado'));
        const url = new URL(window.location.href);
        url.searchParams.delete('categoria');
        url.searchParams.delete('subcategoria');
        history.replaceState(null, '', url);
        aplicarFiltro(); // Mostrar todos los modelos
    });

    // Función para aplicar el filtro
    function aplicarFiltro() {
        const productos = document.querySelectorAll('.producto');
        const urlParams = new URLSearchParams(window.location.search);
        const categoriaURL = urlParams.get('categoria');
        const subcategoriaURL = urlParams.get('subcategoria');

        productos.forEach(producto => {
            const categoriaProducto = producto.getAttribute('data-categoria');
            const subcategoriaProducto = producto.getAttribute('data-subcategoria');
            
            if ((!categoriaURL || categoriaURL === 'null' || categoriaURL === categoriaProducto) && 
                (!subcategoriaURL || subcategoriaURL === 'null' || subcategoriaURL === subcategoriaProducto)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // Verificar si hay un parámetro de categoría en el URL al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaURL = urlParams.get('categoria');
    if (categoriaURL) {
        // Establecer la clase 'seleccionado' en el botón correspondiente si hay una categoría en el URL
        const botonSeleccionado = document.querySelector(`[data-categoria="${categoriaURL}"]`);
        if (botonSeleccionado) {
            botonSeleccionado.classList.add('seleccionado');
        }
    }

    // Aplicar el filtro al cargar la página
    aplicarFiltro();
});



document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar el tamaño de la pantalla y mostrar u ocultar el contenedor de subcategorías
    function verificarTamañoPantalla() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Dispositivo móvil
            document.querySelector('.contenedor-card_shoe_models').style.visibility = 'hidden';
        } else {
            // Versión web
            document.querySelector('.contenedor-card_shoe_models').style.visibility = 'visible';
        }
    }

    // Verificar el tamaño de la pantalla al cargar la página
    verificarTamañoPantalla();

    // Verificar el tamaño de la pantalla cuando cambia su tamaño
    window.addEventListener('resize', verificarTamañoPantalla);
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de categorías principales excepto "Zapatos"
    const categoriasNoZapatos = document.querySelectorAll('.button-card_models:not([data-categoria="zapatos"])');

    // Obtener el contenedor de subcategorías para la versión móvil
    const subcategoriasMobile = document.querySelector('.contenedor-card_shoe_models_mobile');

    // Agregar un evento de clic a cada enlace de categoría principal excepto "Zapatos"
    categoriasNoZapatos.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Ocultar las subcategorías móviles
            subcategoriasMobile.style.display = 'none';
            subcategoriasMobile.style.visibility = 'hidden';
        });
    });

    // Obtener el enlace de la categoría "Zapatos"
    const zapatosLink = document.querySelector('.button-card_models[data-categoria="zapatos"]');

    // Agregar un evento de clic al enlace de "Zapatos"
    zapatosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Verificar si estamos en la versión móvil
        if (window.innerWidth < 1100) {
            // Mostrar las subcategorías móviles
            subcategoriasMobile.style.display = 'flex';
            subcategoriasMobile.style.visibility = 'visible';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de categorías principales excepto "Mocasines"
    const categoriasPrincipalesExceptoMocasines = document.querySelectorAll('.button-card_models:not([data-categoria="mocasines"])');

    // Obtener el contenedor de subcategorías de mocasines para la versión móvil
    const subcategoriasMocasinesMobile = document.querySelector('.contenedor-card_shoe_models_mocasines_mobile');

    // Agregar un evento de clic a cada enlace de categoría principal excepto "Mocasines"
    categoriasPrincipalesExceptoMocasines.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace

            // Ocultar las subcategorías de mocasines para la versión móvil
            subcategoriasMocasinesMobile.style.display = 'none';
            subcategoriasMocasinesMobile.style.visibility = 'hidden';
        });
    });

    // Obtener el enlace de la categoría "Mocasines"
    const mocasinesLink = document.querySelector('.button-card_models[data-categoria="mocasines"]');

    // Agregar un evento de clic al enlace de "Mocasines"
    mocasinesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace

        // Verificar si estamos en la versión móvil
        if (window.innerWidth < 1100) {
            // Mostrar el contenedor de subcategorías de mocasines para la versión móvil
            subcategoriasMocasinesMobile.style.display = 'flex';
            subcategoriasMocasinesMobile.style.visibility = 'visible';
        }
    });
    
});