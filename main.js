//ALURA JavaScript AULA 05 - Buscando um Elemento
/*FUNCTION é uma rotina que executa uma procedimento atravez de uma ação
function tocaSomPom (){ //Função para executar a tecla, se não o som seria executado sem ter clicado no botão - Executar tocaSomPom() no Console pra executar e testar
    document.querySelector('#som_tecla_pom').play();
}*/

function tocaSom(idTecla){
    document.querySelector(idTecla).play();
}


//document.querySelector('.tecla_clap').onclick = tocaSomClap; //Essa linha toma o lugar do onclick do HTML

//document.querySelectorAll('.tecla'); //Seleciona todos os Elemtnso que tenham o nome tecla

const listaDeTeclas = document.querySelectorAll('.tecla'); // Aqui estamos referenciando (NodeList) todas as classes do HTML

/*Aqui você referencia (NodeList) todos os elementos do tipo button ao mesmo tempo
const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

listaDeTeclas[1].onclick = tocaSomClap;
*/

let contador = 0;

//Enquanto - CUIDADO POSSIBILIDADDE DE LOOP INFINITO
//listaDeTeclas.length Traz a quantidade de Teclas Que Existe
//Declaramos uma FUNCION ANONIMA dentro do while, para não ser executado o onClick automaticamente
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;
    console.log(contador);
}







