import Product from "../models/Products.js";

class FileManager {
    constructor() {
        this.products = [];
    }

    addProduct(elemento){
        const nuevoProducto = new Product(elemento)
        const productos = this.products
        const propiedades = productos.map((prod) => {
            return prod.code;
        })

        productos.push(nuevoProducto)
        
        for(let i = 0; i < Product.length; i++){
            if(propiedades.includes(nuevoProducto.code)){
                throw new Error("Ya existe un producto con este código")
            } else{
                console.log("Producto añadido con éxito")
            }
        }
        return elemento
    }

    
    getProducts(){
        return this.products;
    }
    
    getProductById(id){ 
        const producto = this.products.find(prod => prod.id === id)
        if (producto != undefined){
            return(producto)
        } else {
            throw new Error("No se encontró producto con ese ID")
        }
    }

    updateProduct(id, {title,description,price,category,thumbnail,code,stock}){
        const producto = this.products.find(prod => prod.id === id);
        if(title){
            producto.title = title;    
        }
        if(description){
            producto.description = description;
        }
        if(price){
            producto.price = price;
        }
        if(thumbnail){
            producto.thumbnail = thumbnail;
        }
        if(code){
            producto.code = code;
        }
        if(stock){
            producto.stock = stock;
        }
        if(category){
            producto.category = category;
        }
        return producto
    }

    deleteProduct(id){
        const producto = this.products.find(prod => prod.id === id);
        this.products.splice(producto,1)
        console.log(this.products)
    }

}

const id = Math.random().toString(30).substring(2);
const id2 = Math.random().toString(30).substring(2);


const prodManager = new FileManager("./database/productos.json")
const cartManager = new FileManager("./database/carritos.json")

export const fileManager = new FileManager()