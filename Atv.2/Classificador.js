class Classificador{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    get nome(){
        return this.nome
    }
    set peso(nome){
        this.nome = nome
    }
    get idade(){
        return this.idade
    }
    set idade(idade) {
        this.idade = idade
    }
    if(idade <= 11){
        console.log('crianca')
    }else if(idade <= 28){
        console.log('Adolescente')
    }else if(media <= 59){
        console.log('Adulto')
    }else{
        console.log('Idoso')
    }
}
let idade = new classificador(78)