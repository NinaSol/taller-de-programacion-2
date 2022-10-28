import { MongoClient } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1',{

    useNewUrlParser: true,
    useUnifiedTopology: true
})

try {
    await client.connect()

    const db = client.db('empresa')

    //obtener clientes
    let clientes = await db.collection('clientes').find({}).toArray();

    //Mostrar nombre y apellido de clientes
    console.log("Clientes");
    clientes.forEach(cliente => console.log({nombre:cliente.nombre, apellido:cliente.apellido}));
    console.log("----------------------");

    //obtener productos y actualizo
    await db.collection('productos').updateMany({},{$set : {codigo:"xxx-xxxxx"}});

    //obtengo productos actualizados
    let productos =  await db.collection('productos').find({}).toArray();

    //Muestro nombre,precio y codigo de cada producto
    console.log("Productos");
    productos.forEach(prod => console.log({nombre:prod.nombre, precio:prod.precio,codigo:prod.codigo}));
   
    client.close()
}
catch(error) {
    console.log(`Error en la conexión de base datos: ${error.message}`)
}