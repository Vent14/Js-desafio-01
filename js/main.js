const orden = [];
const platos = [
    {
        id:1,
        nombre:"Taco de Pastor", 
        precio: 12
    },
    {
        id:2,
        nombre:"Taco de Suadero",
        precio:15
    },
    {
        id:3,
        nombre:"Taco de Longaniza",
        precio:13
    },
];

const elementosDelDOM = (function(){
    const divDeComidas = document.getElementById("comidas");
    const divDeOrdenes = document.getElementById("ordenes_agregadas");
    const totalDeComida = document.getElementById("precio_total");
    const propinaSugerida = document.getElementById("propina_sugerida");
    const divDePlatos = document.getElementById("platos");
    return{
        divDeComidas,
        divDeOrdenes,
        totalDeComida,
        propinaSugerida,
        divDePlatos
    };
})();
const funcionesDePantalla = (function (){
    function transformarAEtiquetas = (objeto) =>
        `
    <div className="carta_de_comida">
        <div className="cabeza_de_carta">
            <h3>${objeto.nombre}</h3>
        </div>
        <div className="pie_de_carta">${objeto.precio}</div>
        <button id="agregar_a_orden">Agregar</button>
    </div>`;

        const mostrarEnPantalla = (div) => (string) => {
            div.innerHTML = "";
            div.innerHTML = string;
        };
        const reducirEtiquetas = (acc, item) => `${acc+item}`;
        const modificarArray = (fn) => (div) => (array) => {
            if (array.length === 0) return;
            const stringDeEtiquetas = array.map(fn).reduce(reducirEtiquetas);
            mostrarEnPantalla(div)(stringDeEtiquetas);
        };

        const transformarAEtiquetasDeOrden = (objeto) => `<div className="carta_de_ordenes">
<h3>${objeto.nombre} ${objeto.precio}</h3>
</div>`;

        const modificarArrayDePlatos = modificarArray(transformarAEtiquetas);
        const modificarArrayDeOrdenes = modificarArray(transformarAEtiquetasDeOrden);

        return {
            modificarArrayDeOrdenes,
            modificarArrayDePlatos,
            mostrarEnPantalla,
        };
    })();


const {
    divDeComidas,
    divDeOrdenes,
    totalDeComida,
    propinaSugerida,
    divDePlato,
} = elementosDelDOM;

funcionesDePantalla.modificarArrayDePlatos(divDeComidas)(platos);