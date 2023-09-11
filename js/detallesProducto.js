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
            imagenPrincipal: "../assets/img/ready to wear/117 - 16.jpg",
            imagenes: ["../assets/img/ready to wear/117 - 16.jpg", "../assets/img/ready to wear/117 - 17.jpg", "../assets/img/ready to wear/117 - 18.jpg", "../assets/img/ready to wear/117 - 19.jpg"]
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
            imagenes: ["../assets/img/ready to wear/122 - 20.jpg", "../assets/img/ready to wear/122 - 21.jpg", "../assets/img/ready to wear/122 - 22.jpg", "../assets/img/ready to wear/122 - 19.jpg"]
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
            imagenes: ["../assets/img/ready to wear/121 - 1.jpg", "../assets/img/ready to wear/121 - 2.jpg", "../assets/img/ready to wear/121 - 3.jpg", "../assets/img/ready to wear/121 - 4.jpg"]
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
