const quantidade_bicho = document.querySelector('#numero');
const botao = document.querySelector('#botao');
const exibir_musica = document.querySelector(`#musica`)

let animal = "Patinho";
let som_do_bicho = "Quá, quá, quá, quá";
let mamae = "Patinha";

botao.addEventListener('click', () => {
    exibir_musica.innerText = validacao(quantidade_bicho.value)
    exibir_musica.innerText = cantar_musica(quantidade_bicho.value) 
})

function cantar_musica(quantidade){
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
    Aonde será que estavam os seus filhotinhos?
    Mas essa história vai ter um final feliz
    Sabe por quê?\n
    A mamãe ${mamae} foi procurar
    Além das montanhas
    Na beira do mar
    A mamãe gritou
    ${som_do_bicho}
    E ${quantidade_de_bicho_inicial} ${animal}
    Voltaram de lá.`

    return musica;
}

function validacao(entrada){
    if(entrada > 0 & entrada <= 20){
        console.log("Entrada inválida, digite SOMENTE um número inteiro válido e menor que 21.");
    }
}