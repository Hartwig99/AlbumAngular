export class Post {
    
    constructor(
        public nome: string,
        public titulo: string,
        public subtitulo: string,
        public email: string,
        public messagem: string,
        public arquivo?: string,
        public id?: number,
        public likes?:number
// ? significa sao adicionais posso ou nao posso ter um like - opcional
    ){

    }
}

// ex : new Post("nome", "titulo", "subtitulo", "email", "mensagem");