// Laboratorio
// Ivan Castillo
//Simulamos la conexión de amigos al Steam usando una Promise
const conectarAmigosSteam = (amigosConectados) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (amigosConectados.length > 0) {
        resolve(`Se han conectado los siguientes amigos: ${amigosConectados.join(", ")}`);
        } else {
        reject("Ningún amigo se ha conectado al Steam");
        }
    }, 2000); // Simula un retardo de 2 segundos
    });
};

// Simular una lista de amigos conectados
const amigos = ["Carlos", "Lucía", "Andrés"];

conectarAmigosSteam(amigos)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));

// Utilizando una API
const ObtenerPc = fetch("https://fakestoreapi.com/products")
ObtenerPc
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta)) 
    .catch(error => console.log(error)) 