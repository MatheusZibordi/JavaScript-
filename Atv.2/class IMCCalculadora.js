class IMCCalculadora{
    constructor(peso, altura){
        this.peso = peso,
        this.altura = altura
    }
    get media() {
        return parseInt(this.peso / (this.altura * this.altura) )
    }
    get peso(){
        return this.peso
    }
    set peso(peso){
        this.peso = peso
    }
    get altura(){
        return this.altura
    }
    set altura(altura) {
        this.altura = altura
    }
    if(media < 18.5){
        console.log(IMC.media)
        console.log('abaixo do peso')
    }else if(media < 25){
        console.log(IMC.media)
        console.log('normal')
    }else if(media < 30){
        console.log(IMC.media)
        console.log('acima do peso')
    }else{
        console.log(IMC.media)
        console.log('obeso')
    }
}
let IMC = new IMCCalculadora(78,1.85)