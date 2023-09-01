import { number, string, tuple } from "zod";

let animals: string[] = ['algo', 'nada', 'pepe'];
let num: Array<number> = [1,2,3,4,5];

num.filter(x=> 1)



animals.map(x => x)

//let tupla: [number[], string] = [[1,2,3], "algo"]

const chica = "s"
const mediana = "m"
const grande = 'l'
const extragrande = 'xl'

enum Talla { Chica = "s", Mediana="m", Grande ='l', Extragrande='xl' }

const tallaChica = Talla.Chica
console.log(tallaChica)

const dato:string = 'HOLA'

const enum Dato { Alto, Bajo, Gordo, Falo }

//TUPLAS
let Tupla: [string, number]

Tupla=['algo', 33]

type Persona = {
    id: number
    name: string
    talla: Talla
    calle: Direction
}



type Direction = {
    calle:string
    numero: string
    ciudad: string
}

const objeto: Persona = {
    id:1,
    name:'Nelson',
    talla: Talla.Chica,
    calle: {
        calle:'Los alamos',
        numero: '1321e',
        ciudad: 'Nogoyá'
    }
}


let numero = 1;

numero = 5

let arreglo: Array<string>;

let otroArreglo: string[];

class Auto  {
    numPuertas: number;
    velocidad: number;
    marca: string;

    constructor(numPuertas: number, velocidad: number, marca:string){
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }

    getNumeroDePuertas(): number{
        return this.numPuertas;
    }
    setNumeroDePuertas(numPuertas: number): number{
        return this.numPuertas;
    }
}

const ferrari = new Auto(2,300, "Toyota")