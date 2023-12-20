//Creamos la clase ProductManager
class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, thumbail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`codigo ${code} repetido`);
        break;
      }
    }

    const newItem = {
      title,
      description,
      price,
      thumbail,
      code,
      stock,
    };

    if (!Object.values(newItem).includes(undefined)) {
      ProductManager.id++;

      this.products.push({
        ...newItem,

        id: ProductManager.id,
      });
    } else {
      console.log("Campo obligatorio");
    }
  }

  getProducts() {
    return this.products;
  }

  found(id) {
    return this.products.find((producto) => producto.id === id);
  }

  //Creamos la funcion con un condicional para la verificacion ID
  getProducById(id) {
    if (!this.found(id)) {
      console.log("Not Found");
    } else {
      console.log(this.found(id));
    }
  }
}

const productos = new ProductManager();

//TESTING

//Llamamos por consola el arreglo vacio
console.log(productos.getProducts());

//Agregamos los productos
productos.addProduct("titulo1", "dscrp1", 1000, "img1", "dsf848fd", 5);
productos.addProduct("titulo2", "dscrp2", 2000, "img2", "sagd8f8f", 4);

//Segunda llamada de validacion
console.log(productos.getProducts());

//Validamos que el codigo este repetido
productos.addProduct("titulo3", "dscrp3", 3000, "img3", "sagd8f8f", 3);

//Verificacion ID
productos.getProducById(1);

//Verificacion ID no encontrado
productos.getProducById(4);
