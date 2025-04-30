    // Laboratorio
    // Ivan Castillo

    // Se utilizará la sección de Tienda de puntos
    // URL => https://store.steampowered.com/points/shop/ 

    // ----------------------------
    // Metodo 1 - CallBack
    // ----------------------------

    function BusquedaTiendaPuntos(Miniperfil) {
        console.log(`¡Se ha encontrado el Fondo de Miniperfil: ${Miniperfil.toUpperCase()}!`);
    }
    
    function registrarUsuario(CallBack) {
        const Miniperfil = "TLIPOCA";
        CallBack(Miniperfil);
    }
    
    registrarUsuario(BusquedaTiendaPuntos);
    
    // ----------------------------
    // Productos
    // ----------------------------
    
    const MiniperfilFondos = [
        { Titulo: "TLIPOCA", PrecioPuntos: 5999 },
        { Titulo: "ONCE HUMAN", PrecioPuntos: 3999 },
        { Titulo: "MINI CARD LILYWHITE", PrecioPuntos: 4999 },
        { Titulo: "MULTICATO", PrecioPuntos: 2999 }
    ];
    
    // ----------------------------
    // Metodo 2 - forEach
    // ----------------------------
    
    MiniperfilFondos.forEach((fondo) => {
        console.log(fondo.Titulo);
    });
    
    // ----------------------------
    // Metodo 3 - map
    // ----------------------------
    
    const discountedMiniperfilFondo = MiniperfilFondos.map((fondo) => {
        return { ...fondo, Descuento: fondo.PrecioPuntos * 0.9 };
    });
    
    console.log("Con descuento:", discountedMiniperfilFondo);
    
    // ----------------------------
    // Metodo 4 - filter
    // ----------------------------
    
    const expensiveMiniperfil = MiniperfilFondos.filter(fondo => fondo.PrecioPuntos > 3000);
    console.log("Juegos caros:", expensiveMiniperfil);
    
    // ----------------------------
    // Metodo 5 - concat
    // ----------------------------
    
    const TiendaPuntos = ["MiniPerfiles", "Fondos", "Marcos Animados"];
    const MasMercaderia = [...MiniperfilFondos.map(fondo => fondo.Titulo), ...TiendaPuntos];
    console.log(MasMercaderia);
    
    // ----------------------------
    // Metodo 6 - find
    // ----------------------------
    
    const findMiniperfil = MiniperfilFondos.find(fondo => fondo.Titulo === "MINI CARD LILYWHITE");
    console.log(findMiniperfil);
    
    // ----------------------------
    // Metodo 7 - push, pop, unshift, shift
    // ----------------------------
    
    let carrito = [];
    carrito.push(MiniperfilFondos[0]); // TLIPOCA
    carrito.push(MiniperfilFondos[1]); // ONCE HUMAN
    console.log("Carrito:", carrito);
    
    carrito.pop(); // Elimina ONCE HUMAN
    console.log("Carrito actualizado:", carrito);
    
    carrito.unshift(MiniperfilFondos[2]); // Agrega MINI CARD LILYWHITE al inicio
    console.log("Carrito con agregado:", carrito);
    
    carrito.shift(); // Quita MINI CARD LILYWHITE
    console.log("Carrito final:", carrito);
    
    // ----------------------------
    // Metodo 8 - slice
    // ----------------------------
    
    const topMiniperfiles = MiniperfilFondos.slice(0, 2);
    console.log("Top juegos:", topMiniperfiles);
    
    // ----------------------------
    // Metodo 9 - includes
    // ----------------------------
    
    const MiniperfilNames = MiniperfilFondos.map(g => g.Titulo);
    console.log(MiniperfilNames.includes("CLARISESHOW") ? "CLARISESHOW está en la tienda" : "CLARISESHOW no disponible");
    
    // ----------------------------
    // Metodo 10 - reduce
    // ----------------------------
    
    const totalPrice = MiniperfilFondos.reduce((sum, fondo) => sum + fondo.PrecioPuntos, 0);
    console.log(`Precio total sin descuento: ${totalPrice} puntos`);
    