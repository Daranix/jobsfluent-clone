// ng g cl
export class Trabajo {
    constructor(public id: string,
        public nombre: string,
        public descripcion: string,
        public imgUrl: string,
        public ciudad: string,
        public skills: string[],
        public salario: number | undefined) {

    }
}
