let BD = [
 /* -- Gorras --*/
  {
    nombre: "Gorra Unisex de Algodón",
    precio: 34900,
    descripcion: "Gorra unisex one en algodón colab con NLC",
    stock: 50,
    imagen: "assets/images/gorra1.jpg",
    tipo: "gorras" // gorras, gafas, cadenas, durag 
},
{
    nombre: "Gorra de Cuero BiColor",
    precio: 39900,
    descripcion: "Gorra ajustable de malla y visera de cuero colab con NLC ",
    stock: 35,
    imagen: "assets/images/gorra2.avif",
    tipo: "gorras"
},
{
    nombre: "Gorra Unisex con Pegatina",
    precio: 35900,
    descripcion: "Gorra unisex one con pegatina marca NLC ",
    stock: 42,
    imagen: "assets/images/gorra3.webp",
    tipo: "gorras"
},
{
    nombre: "Gorra con Pegatina UNSER",
    precio: 34900,
    descripcion: "Gorra de malla y bordada con pegatina UNSER marca NLC",
    stock: 25,
    imagen: "assets/images/gorra4.webp",
    tipo: "gorras"
},
  {
    nombre: "Gorra de Beisbol Ajustable",
    precio: 37900,
    descripcion: "Gorra ajustable de malla con pegatina marca NLC",
    stock: 32,
    imagen: "assets/images/gorra5.jpeg",
    tipo: "gorras"
  },

  /* -- Gafas --*/
  {
    nombre: "Lentes Heart Colors",
    precio: 25900,
    descripcion: "Lentes con forma de corazon polarizados",
    stock: 50,
    imagen: "assets/images/gafa1.jpg",
    tipo: "gafas"
  },
  {
    nombre: "Lentes Innovadores Diamante",
    precio: 27900,
    descripcion: "Lentes grandes con diseño de diamante",
    stock: 50,
    imagen: "assets/images/gafa2.jpg",
    tipo: "gafas"
  },
  {
    nombre: "Gafas Cuadradas Negras",
    precio: 34900,
    descripcion: "Gafas cuadradas negras con estilo clasico",
    stock: 50,
    imagen: "assets/images/gafa3.jpeg",
    tipo: "gafas"
  },
  {
    nombre: "Lentes de Sol Circulares",
    precio: 23900,
    descripcion: "Lentes con forma circular polarizados",
    stock: 35,
    imagen: "assets/images/gafa4.webp",
    tipo: "gafas"
  },
  {
    nombre: "Lentes de Sol BiColor",
    precio: 23900,
    descripcion: "Lentes de sol en 2 presentaciones",
    stock: 35,
    imagen: "assets/images/gafa5.jpg",
    tipo: "gafas"
  },

  /* -- Cadenas --*/
  {
    nombre: "Cadena triple de estrellas",
    precio: 25900,
    descripcion: "Cadena triple con estrellas y luna",
    stock: 50,
    imagen: "assets/images/cadena1.jpg",
    tipo: "cadenas"
  },
  {
    nombre: "Cadena triple tipo cubana ",
    precio: 27900,
    descripcion: "Cadena triple con estilo de cubanas",
    stock: 50,
    imagen: "assets/images/cadena2.jpg",
    tipo: "cadenas"
  },
  {
    nombre: "Cadena plateada con forma de destello",
    precio: 34900,
    descripcion: "Cadena de plata con colgante de destello",
    stock: 50,
    imagen: "assets/images/cadena3.jpg",
    tipo: "cadenas"
  },
  {
    nombre: "Cadena triple dorada elegante",
    precio: 23900,
    descripcion: "Cadena triple dorada elegante",
    stock: 35,
    imagen: "assets/images/cadena4.jpg",
    tipo: "cadenas"
  },
  {
    nombre: "Cadena doble con colgante de cruz",
    precio: 23900,
    descripcion: "Cadena doble de plata con colgante de cruz",
    stock: 35,
    imagen: "assets/images/cadena5.jpg",
    tipo: "cadenas"
  },

  /* -- Durags --*/
  {
    nombre: "Durag BiColor de seda",
    precio: 25900,
    descripcion: "Durag blanco y rojo de seda",
    stock: 76,
    imagen: "assets/images/durag-bicolor.jpg",
    tipo: "durags"
  },
  {
    nombre: "Durag con estampado camuflado",
    precio: 27900,
    descripcion: "Durag con estampado de camuflaje azul",
    stock: 50,
    imagen: "assets/images/durag-estampado.jpg",
    tipo: "durags"
  },
  {
    nombre: "Durag negro de lana con estampados",
    precio: 34900,
    descripcion: "Durag de lana estilo rap clasico",
    stock: 50,
    imagen: "assets/images/durag-lana.jpg",
    tipo: "durags"
  },
  {
    nombre: "Durag de tela moldeable",
    precio: 23900,
    descripcion: "Durag gris de tela",
    stock: 35,
    imagen: "assets/images/durag-tela.jpg",
    tipo: "durags"
  },
  {
    nombre: "Durag en tercipelo",
    precio: 23900,
    descripcion: "Durag de colores en tercipelo",
    stock: 35,
    imagen: "assets/images/durag-terciopelo.jpg",
    tipo: "durags"
  },
  
]

function printProducts() {

  // gorras

  let gorras = document.getElementById("gorras")

  //gafas

  let gafas = document.getElementById("gafas")

  //cadenas

  let cadenas = document.getElementById("cadenas")

  //durags

  let durags = document.getElementById("durags")

  for (let product of BD) {

    // gorras
    if (product.tipo === "gorras"){
      gorras.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }

    // gafas
    if (product.tipo === "gafas"){
      gafas.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        `
    }

    // cadenas
    if (product.tipo === "cadenas"){
      cadenas.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }

    // durags
    if (product.tipo === "durags"){
      durags.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }


    console.log(product.tipo === "gorras" ? product : "")
  }
}

printProducts();
