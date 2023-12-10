const enVenta = [
    {
        name: 'Apartamento Acogedor en la montaña',
        imgsrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        asress: '789 Mountain Road, Summit Peaks, CA 23456',
        room: 2,
        bath: 1,
        price: 1200,
        smoke: true,
        pets: true
    },

    {
        name: 'Apartamento de lujo en zona exclusiva',
        imgsrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        adress: '123 Luxury Lane, Prestige Suburb, CA 45678',
        room: 4,
        bath: 4,
        pricce: 5000,
        smoke: false,
        pets: false
    },

    {
        name: 'Penthouse de lujo con terraza panorámica',
        imgsrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        adress: '567 Skyline Avenue, Skyview, CA 56789',
        room: 3,
        bath: 3,
        price: 4500,
        smoke: false,
        pets: true
    },

    {
        name: 'Casa de playa con ',
        imgsrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/284470727.jpg?k=3caea8c550987cfa81217eee97b43f2a1fe5a2117630b8f76f23f9ce4a81ae79&o=&hp=1',
        desc: 'Casa de veraniego junto a la playa, con piscina incluída.',
        adress: 'Rodovia RJ 102, Arrial do Cabo, CEP 28930',
        room: 3,
        bath: 3,
        price: 3500,
        smoke: true,
        pets: true
    },

    {
        name: 'Apartamento en condominio cerrado',
        imgsrc: 'https://chilepropiedades.cl/imagenes/publicacion/1/a948635e97f746aabb01e65d86d51c67.jpeg" class="card-img-top',
        desc: 'Apartamento en condominio tranquilo y cerrado.',
        adress: 'Cond Sta Victoria 6543, Maipú, CA 12344',
        room: 3,
        bath: 1,
        price: 2000,
        smoke: false,
        pets: false
    },

    {
        name: 'Apartamento de lujo junto a la montaña',
        imgsrc: '',
        desc: 'Apartamento de lujo a los pies de la montaña junto a lago.',
        adress: 'Sta Lucía 2342, Rosario, CA 56789',
        room: 2,
        bath: 2,
        price: 4000,
        smoke: true,
        pets: false
    }
    ]

function renderEnVenta() {
    let contenedor;
    let limite;

    if (document.getElementById('ventaIndex')) {
        contenedor = document.getElementById('ventaIndex');
        let limite = 3;
    } else if (document.getElementById('propVenta')) {
        contenedor = document.getElementById ('propVenta');
        limite = enVenta.length;
    };


};