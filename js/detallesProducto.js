document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productoID = params.get('productoId');

    const productos = [
        {
            id: 'Borcego-Corto',
            titulo: 'Borcego Corto',
            estilo: 'READY TO WEAR',
            descripcion: 'Borcego de tipo corto.',
            color: 'Diamante Piedra',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/115 - 13.jpg",
            imagenes: ["../assets/img/ready to wear/115 - 13.jpg", "../assets/img/ready to wear/115 - 14.jpg", "../assets/img/ready to wear/115 - 15.jpg", "../assets/img/ready to wear/115 - 16.jpg"]
        },
        {
            id: 'Sneaker-Suela',
            titulo: 'Sneakers (Suela)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno.',
            imagenPrincipal: "../assets/img/ready to wear/122 - 26.jpg",
            imagenes: ["../assets/img/ready to wear/122 - 26.jpg", "../assets/img/ready to wear/122 - 27.jpg", "../assets/img/ready to wear/122 - 28.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Marron',
            titulo: 'Sneakers (Marrón)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/117 - 10.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 10.jpg", "../assets/img/ready to wear/117 - 11.jpg", "../assets/img/ready to wear/117 - 12.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Negro',
            titulo: 'Sneakers (Negro)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/122 - 20.jpg",
            imagenes: ["../assets/img/ready to wear/122 - 20.jpg", "../assets/img/ready to wear/122 - 21.jpg", "../assets/img/ready to wear/122 - 22.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Azul',
            titulo: 'Sneakers (Azul)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/117 - 20.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 20.jpg", "../assets/img/ready to wear/117 - 21.jpg", "../assets/img/ready to wear/117 - 22.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Sneaker-Verde-Claro',
            titulo: 'Sneakers (Verde Claro)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde Claro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/117 - 13.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 13.jpg", "../assets/img/ready to wear/117 - 14.jpg", "../assets/img/ready to wear/117 - 15.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
        },
        {
            id: 'Slippers-123-Gamuza-Suela',
            titulo: 'Slippers 123',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Suela',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/ready to wear/117 - 23.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 23.jpg", "../assets/img/ready to wear/117 - 24.jpg", "../assets/img/ready to wear/117 - 25.jpg", "../assets/img/ready to wear/117 - 26.jpg"]
        },
        {
            id: 'Mocasin-Archivaldo-Azul',
            titulo: 'Mocasín Archivaldo (Azul)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Azul',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/119 - 17.jpg",
            imagenes: ["../assets/img/ready to wear/119 - 17.jpg", "../assets/img/ready to wear/119 - 18.jpg", "../assets/img/ready to wear/119 - 19.jpg", "../assets/img/ready to wear/119 - 20.jpg"]
        },
        {
            id: 'Mocasin-Archivaldo-Negro',
            titulo: 'Mocasín Archivaldo (Negro)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/119 - 21.jpg",
            imagenes: ["../assets/img/ready to wear/119 - 21.jpg", "../assets/img/ready to wear/119 - 22.jpg", "../assets/img/ready to wear/119 - 23.jpg", "../assets/img/ready to wear/119 - 24.jpg"]
        },
        {
            id: '1103-Negro',
            titulo: '1103 (Negro)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/121 - 1.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 1.jpg", "../assets/img/ready to wear/121 - 2.jpg", "../assets/img/ready to wear/121 - 3.jpg", "../assets/img/ready to wear/121 - 11.jpg"]
        },
        {
            id: '1103-Chocolate',
            titulo: '1103 (Chocolate)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Chocolate',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/121 - 4.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 4.jpg", "../assets/img/ready to wear/121 - 5.jpg", "../assets/img/ready to wear/121 - 6.jpg", "../assets/img/ready to wear/121 - 7.jpg"]
        },
        {
            id: '1103-Marron',
            titulo: '1103 (Marrón)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/121 - 8.jpg",
            imagenes: ["../assets/img/ready to wear/121 - 8.jpg", "../assets/img/ready to wear/121 - 9.jpg", "../assets/img/ready to wear/121 - 10.jpg", "../assets/img/ready to wear/121 - 11.jpg"]
        },
        {
            id: 'Oxford-Maiz',
            titulo: 'Oxford (Maíz)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/122 - 29.jpg",
            imagenes: ["../assets/img/ready to wear/122 - 29.jpg", "../assets/img/ready to wear/122 - 30.jpg", "../assets/img/ready to wear/122 - 31.jpg", "../assets/img/ready to wear/122 - 32.jpg"]
        },
        {
            id: 'Oxford-Verde',
            titulo: 'Oxford (Verde)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/123 - 1.jpg",
            imagenes: ["../assets/img/ready to wear/123 - 1.jpg", "../assets/img/ready to wear/123 - 2.jpg", "../assets/img/ready to wear/123 - 3.jpg", "../assets/img/ready to wear/123 - 4.jpg"]
        },
        {
            id: 'Oxford-Natural',
            titulo: 'Oxford (Natural)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Natural',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/123 - 5.jpg",
            imagenes: ["../assets/img/ready to wear/123 - 5.jpg", "../assets/img/ready to wear/123 - 6.jpg", "../assets/img/ready to wear/123 - 7.jpg", "../assets/img/ready to wear/123 - 8.jpg"]
        },
        {
            id: 'Oxford-Tabaco',
            titulo: 'Oxford (Tabaco)',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Tabaco',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/ready to wear/123 - 9.jpg",
            imagenes: ["../assets/img/ready to wear/123 - 9.jpg", "../assets/img/ready to wear/123 - 10.jpg", "../assets/img/ready to wear/123 - 11.jpg", "../assets/img/ready to wear/123 - .jpg"]
        },
        {
            id: 'Mocasin-IOAN',
            titulo: 'Mocasín IOAN',
            estilo: 'READY TO WEAR',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero Vegetal',
            imagenPrincipal: "../assets/img/ready to wear/123 - 32.jpg",
            imagenes: ["../assets/img/ready to wear/123 - 32.jpg", "../assets/img/ready to wear/123 - 33.jpg", "../assets/img/ready to wear/123 - 34.jpg", "../assets/img/ready to wear/123 - 35.jpg"]
        },
        {
            id: 'Swann-Maiz',
            titulo: 'Swann (Maíz)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/112 - 21.jpg",
            imagenes: ["../assets/img/made by order/112 - 21.jpg", "../assets/img/made by order/112 - 22.jpg", "../assets/img/made by order/112 - 23.jpg", "../assets/img/made by order/112 - 24.jpg"]
        },
        {
            id: 'Swann-Marron',
            titulo: 'Swann (Marrón)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/119 - 5.jpg",
            imagenes: ["../assets/img/made by order/119 - 5.jpg", "../assets/img/made by order/119 - 6.jpg", "../assets/img/made by order/119 - 7.jpg", "../assets/img/made by order/119 - 8.jpg"]
        },
        {
            id: 'Swann-Imperio-Negro',
            titulo: 'Swann (Imperio Negro)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Imperio Negro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/112 - 13.jpg",
            imagenes: ["../assets/img/made by order/112 - 13.jpg", "../assets/img/made by order/112 - 14.jpg", "../assets/img/made by order/112 - 15.jpg", "../assets/img/made by order/112 - 16.jpg"]
        },
        {
            id: 'Swann-Bota-Alpina-1101-Negro',
            titulo: 'Swann Bota Alpina 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/123 - 15.jpg",
            imagenes: ["../assets/img/made by order/123 - 15.jpg", "../assets/img/made by order/112 - 34.jpg", "../assets/img/made by order/112 - 35.jpg", "../assets/img/made by order/112 - 36.jpg"]
        },
        {
            id: 'Swann-Bota-Alpina-1101-Marron',
            titulo: 'Swann Bota Alpina 1101',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/117 - 01.jpg",
            imagenes: ["../assets/img/made by order/117 - 01.jpg", "../assets/img/made by order/117 - 02.jpg", "../assets/img/made by order/112 - 35.jpg", "../assets/img/made by order/112 - 36.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Gris',
            titulo: 'Bota Chelsea (Gamuza Gris)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Gris',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/made by order/85 - 11.jpg",
            imagenes: ["../assets/img/made by order/85 - 11.jpg", "../assets/img/made by order/113 - 21.jpg", "../assets/img/made by order/113 - 22.jpg", "../assets/img/made by order/113 - 23.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Negro',
            titulo: 'Bota Chelsea (Gamuza Negro)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/made by order/113 - 24.jpg",
            imagenes: ["../assets/img/made by order/113 - 24.jpg", "../assets/img/made by order/113 - 25.jpg", "../assets/img/made by order/113 - 26.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Marron',
            titulo: 'Bota Chelsea (Gamuza Marrón)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/made by order/114 - 1.jpg",
            imagenes: ["../assets/img/made by order/114 - 1.jpg", "../assets/img/made by order/114 - 2.jpg", "../assets/img/made by order/114 - 3.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Gamuza-Verde',
            titulo: 'Bota Chelsea (Gamuza Verde)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/made by order/117 - 03.jpg",
            imagenes: ["../assets/img/made by order/117 - 03.jpg", "../assets/img/made by order/117 - 04.jpg", "../assets/img/made by order/117 - 05.jpg", "../assets/img/made by order/113 - 27.jpg"]
        },
        {
            id: 'Oxford-Wingtips',
            titulo: 'Oxford Wingtips',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón - Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/112 - 25.jpg",
            imagenes: ["../assets/img/made by order/112 - 25.jpg", "../assets/img/made by order/112 - 26.jpg", "../assets/img/made by order/112 - 27.jpg", "../assets/img/made by order/112 - 28.jpg"]
        },
        {
            id: 'Derby-Split-Toe',
            titulo: 'Derby Split Toe',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde - Blanco',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/113 - 1.jpg",
            imagenes: ["../assets/img/made by order/113 - 1.jpg", "../assets/img/made by order/113 - 2.jpg", "../assets/img/made by order/113 - 3.jpg", "../assets/img/made by order/113 - 4.jpg"]
        },
        {
            id: 'Escarpin-MP-Chocolate',
            titulo: 'Escarpin MP (Chocolate)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Chocolate',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/112 - 29.jpg",
            imagenes: ["../assets/img/made by order/112 - 29.jpg", "../assets/img/made by order/112 - 30.jpg", "../assets/img/made by order/112 - 31.jpg", "../assets/img/made by order/112 - 32.jpg"]
        },
        {
            id: 'Escarpin-MP-Verde',
            titulo: 'Escarpin MP (Verde)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/119 - 25.jpg",
            imagenes: ["../assets/img/made by order/119 - 25.jpg", "../assets/img/made by order/119 - 26.jpg", "../assets/img/made by order/119 - 27.jpg", "../assets/img/made by order/119 - 28.jpg"]
        },
        {
            id: 'Escarpin-MP-Maiz',
            titulo: 'Escarpin MP (Maíz)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/119 - 9.jpg",
            imagenes: ["../assets/img/made by order/119 - 9.jpg", "../assets/img/made by order/119 - 10.jpg", "../assets/img/made by order/119 - 11.jpg", "../assets/img/made by order/119 - 12.jpg"]
        },
        {
            id: 'Borcego-Texano-Natural',
            titulo: 'Borcego Texano (Natural)',
            estilo: 'MADE TO ORDER',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/made by order/123 - 12.jpg",
            imagenes: ["../assets/img/made by order/123 - 12.jpg", "../assets/img/made by order/123 - 13.jpg", "../assets/img/made by order/123 - 14.jpg"]
        },
        {
            id: 'Oxford-Wingtip-Full-Brogued-Maiz',
            titulo: 'Oxford Wingtip Full Brogued (Maíz)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/bespoke/112 - 1.jpg",
            imagenes: ["../assets/img/bespoke/112 - 1.jpg", "../assets/img/bespoke/112 - 2.jpg", "../assets/img/bespoke/112 - 3.jpg", "../assets/img/bespoke/112 - 4.jpg"]
        },
        {
            id: 'Oxford-Wingtip-Full-Brogued-Gamuza-Verde',
            titulo: 'Oxford Wingtip Full Brogued (Gamuza Verde)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Verde Inglés',
            tipoCuero: 'Gamuza',
            imagenPrincipal: "../assets/img/bespoke/112 - 17.jpg",
            imagenes: ["../assets/img/bespoke/112 - 17.jpg", "../assets/img/bespoke/112 - 18.jpg", "../assets/img/bespoke/112 - 19.jpg", "../assets/img/bespoke/112 - 20.jpg"]
        },
        {
            id: 'Oxford-Captoe-Semi-Brogued-Marron',
            titulo: 'Oxford Captoe Semi-Brogued (Marrón)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/bespoke/112 - 5.jpg",
            imagenes: ["../assets/img/bespoke/112 - 5.jpg", "../assets/img/bespoke/112 - 6.jpg", "../assets/img/bespoke/112 - 7.jpg", "../assets/img/bespoke/112 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Maiz',
            titulo: 'Derby 1116 (Maíz)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Maíz',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/bespoke/113 - 5.jpg",
            imagenes: ["../assets/img/bespoke/113 - 5.jpg", "../assets/img/bespoke/113 - 6.jpg", "../assets/img/bespoke/113 - 7.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Cognac',
            titulo: 'Derby 1116 (Cognac)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Cognac',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/bespoke/113 - 9.jpg",
            imagenes: ["../assets/img/bespoke/113 - 9.jpg", "../assets/img/bespoke/113 - 10.jpg", "../assets/img/bespoke/113 - 11.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Derby-1116-Suela',
            titulo: 'Derby 1116 (Suela)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Suela',
            tipoCuero: 'Cuero vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 20.jpg",
            imagenes: ["../assets/img/bespoke/123 - 20.jpg", "../assets/img/bespoke/123 - 21.jpg", "../assets/img/bespoke/123 - 22.jpg", "../assets/img/bespoke/113 - 8.jpg"]
        },
        {
            id: 'Swann-Wholecut-Cafe',
            titulo: 'Swann Wholecut (Café)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Café',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/113 - 12.jpg",
            imagenes: ["../assets/img/bespoke/113 - 12.jpg", "../assets/img/bespoke/113 - 13.jpg", "../assets/img/bespoke/113 - 14.jpg", "../assets/img/bespoke/113 - 15.jpg"]
        },
        {
            id: '1116-Bespoke',
            titulo: '1116 Bespoke',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/114 - 19.jpg",
            imagenes: ["../assets/img/bespoke/114 - 19.jpg", "../assets/img/bespoke/114 - 20.jpg", "../assets/img/bespoke/114 - 21.jpg", "../assets/img/bespoke/114 - 22.jpg"]
        },
        {
            id: 'Borcego-GC-Texano-Negro',
            titulo: 'Borcego GC Texano',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/115 - 17.jpg",
            imagenes: ["../assets/img/bespoke/115 - 17.jpg", "../assets/img/bespoke/115 - 18.jpg", "../assets/img/bespoke/115 - 19.jpg", "../assets/img/bespoke/115 - 20.jpg"]
        },
        {
            id: 'Bota-Inglesa-Ñandu',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Natural',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/115 - 9.jpg",
            imagenes: ["../assets/img/bespoke/115 - 9.jpg", "../assets/img/bespoke/115 - 10.jpg", "../assets/img/bespoke/115 - 11.jpg", "../assets/img/bespoke/115 - 12.jpg"]
        },
        {
            id: 'Bota-Inglesa-Negro',
            titulo: 'Bota Inglesa',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Negro',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/114 - 8.jpg",
            imagenes: ["../assets/img/bespoke/114 - 8.jpg", "../assets/img/bespoke/114 - 9.jpg", "../assets/img/bespoke/114 - 10.jpg", "../assets/img/bespoke/113 - 19.jpg"]
        },
        {
            id: 'Swann-Museum',
            titulo: 'Swann (Museum)',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Museum',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 16.jpg",
            imagenes: ["../assets/img/bespoke/123 - 16.jpg", "../assets/img/bespoke/123 - 17.jpg", "../assets/img/bespoke/123 - 18.jpg", "../assets/img/bespoke/123 - 19.jpg"]
        },
        {
            id: 'Untitled',
            titulo: 'Untitled',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 24.jpg",
            imagenes: ["../assets/img/bespoke/123 - 24.jpg", "../assets/img/bespoke/123 - 25.jpg", "../assets/img/bespoke/123 - 26.jpg", "../assets/img/bespoke/123 - 27.jpg"]
        },
        {
            id: 'Bota-Chelsea-Marron',
            titulo: 'Bota Chelsea',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 28.jpg",
            imagenes: ["../assets/img/bespoke/123 - 28.jpg", "../assets/img/bespoke/123 - 29.jpg", "../assets/img/bespoke/123 - 30.jpg", "../assets/img/bespoke/123 - 31.jpg"]
        },
        {
            id: 'Bota-Chelsea-Marron-Oscuro',
            titulo: 'Bota Chelsea',
            estilo: 'BESPOKE',
            descripcion: 'Descripción del Sneaker.',
            color: 'Marrón Oscuro',
            tipoCuero: 'Vacuno',
            imagenPrincipal: "../assets/img/bespoke/123 - 36.jpg",
            imagenes: ["../assets/img/bespoke/123 - 36.jpg", "../assets/img/bespoke/123 - 37.jpg", "../assets/img/bespoke/123 - 38.jpg", "../assets/img/bespoke/123 - 39.jpg"]
        }
        
        // Aca puedo meter mas modelos
    ];

    const producto = productos.find(p => p.id === productoID);

    if (producto) {
        document.getElementById('imagen-modelo').src = producto.imagenPrincipal;
        document.getElementById('titulo-modelo').textContent = producto.titulo;
        document.getElementById('estilo-modelo').textContent = producto.estilo;
        document.getElementById('descripcion-modelo').textContent = producto.descripcion;
        document.getElementById('color-modelo').textContent = `${producto.color}`;
        document.getElementById('cuero-modelo').textContent = `${producto.tipoCuero}`;
        document.getElementById('img1').src = producto.imagenes[0];
        document.getElementById('img2').src = producto.imagenes[1];
        document.getElementById('img3').src = producto.imagenes[2];
        document.getElementById('img4').src = producto.imagenes[3];
    } else {
        console.log(`Producto con ID ${productoID} no encontrado.`);
    }
});
