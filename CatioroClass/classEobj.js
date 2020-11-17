class Catioro 
{
    constructor(nome,raça,idade)
    {
        this.nome = nome;
        this.raça = raça;
        this.idade = idade;
    }

    comer () {
        return "Não quero legume, quero BIFE!"
    }
    correr () {
        return "UaauaAaaaua correee"
    }


}
let cachorro1 = new Catioro ("Ted", "Husky siberiano", 5 )

let cachorro2 = new Catioro ("Dionísio", "Vira lata", 5 )

let cachorro3 = new Catioro ("Jack", "Golden Retriever", 5 )

console.log(cachorro1)
console.log(cachorro2)
console.log(cachorro3)





 //NOVA INSTÂNCIA DO "POTE". O "NEW" CRIA UM OBJETO DO MESMO TIPO DA CLASSE "POTE".
 //o QUE É INSTANCIAR? CRIAR UM OBJETO DA MESMA CLASSE. CRIAR UM NOVO.