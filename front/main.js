const quantidade_bicho = document.querySelector('#numero');
const botao = document.querySelector('#botao');
const exibir_musica = document.querySelector(`#musica`)
const exibir_erro = document.querySelector('#entrada_invalida')

const limite = 15;
let animal = "Patinho";
let som_do_bicho = "Quá, quá, quá, quá";
let mamae = "Patinha";

function limpa_input(){
    quantidade_bicho.value = "";
}

botao.addEventListener('click', () => {
    exibir_musica.innerText = validacao(quantidade_bicho.value)
    limpa_input();
})

function cantar_musica(quantidade){ 
    quantidade = Math.trunc(quantidade);
    const quantidade_de_bicho_inicial = quantidade;
    let musica = "";
    while (quantidade > 0){
        musica += `${quantidade} ${animal}${quantidade > 1 ? "s\nforam" : "\nfoi"} passear
            Além das montanhas
            Para brincar
            A mamãe gritou
            ${som_do_bicho}`          
            musica += `\nMas ${quantidade == 1 ? "Nenhum" : `só ${quantidade - 1}`} ${animal}${quantidade <= 2 ? "\nVoltou" : `s\nVoltaram`} de lá.\n\n`
            quantidade--       
    }

    musica += `Poxa, a mamãe ${mamae} ficou tão triste naquele dia
    Aonde será que ${quantidade_de_bicho_inicial == 1 ? "estava o seu filhotinho?" : "estavam os seus filhotinhos?"}
    Mas essa história vai ter um final feliz
    Sabe por quê?\n
    A mamãe ${mamae} foi procurar
    Além das montanhas
    Na beira do mar
    A mamãe gritou
    ${som_do_bicho}
    E ${quantidade_de_bicho_inicial} ${animal}${quantidade_de_bicho_inicial == 1 ? "Voltou" : "s\nVoltaram"} de lá.`

    return musica;
}

function validacao(entrada){
    if(entrada <= 0 || entrada >= limite){
        return `Entrada inválida.\n Por favor, Digite uma numero maio que 0 e menor que ${limite}.`;

    } else {
        return cantar_musica(quantidade_bicho.value);
    }
}
