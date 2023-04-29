//adoptar mascotas en adopcion
//mostrar los animales en adopcion y poder agregar
//crear una clase mascota
//siempre asignar un ID

let id = 0;

class mascota {
    constructor(nombre, tipo, sexo, raza, edad, descripcion){
        this.id = id++;
        this.nombre = nombre;
        this.tipo = tipo;
        this.sexo = sexo;
        this.raza = raza;
        this.edad = edad;
        this.descripcion = descripcion;
    }
}

// crear un array inicial

const mascotasEnAdopcion = [
    new mascota(
        'Richard',
        'Gato',
        'macho',
        'persa',
        'indefinida',
        'gato marron grande'
    ),
    new mascota(
        'firulais',
        'perro',
        'macho',
        'caniche',
        14,
        'perro lanco y gris'
    ),
    new mascota(
        'silvino',
        'pez',
        'macho',
        'pez payaso',
        3,
        'pez payaso rayado'
    ),
    new mascota(
        'boni',
        'coneja',
        'hembra',
        'caeza de leon',
        6,
        'coneja lanca patitas negras'
    )
]


let mostrarAnimales = document.getElementById('mostrarAnimales');

// los 3 pasos claves del dom


    // paso 1 crear el padre
    let li = document.createElement("li");
    //paso 2 imprimir a partir de l inner html
    li.innerHTML = `mascotasEnAdopcion: ${mascotasEnAdopcion}`;
    //paso 3 decirle al document / ody que creamos un elemento nuevo
    mostrarAnimales.appendChild(li);
