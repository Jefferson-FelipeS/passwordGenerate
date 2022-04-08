'use strict';

/*
De inicio, na construcao da logica, pensei que a funcao substring, a qual nos retorna um 
caracter de um conjunto de caracteres ou um conjunto de caracteres de um conjunto maior,
poderia me retornar caracteres aleatorios; Entretanto, ela apenas me retorna uma sequencia
de caracteres, e nao caracteres aleatorios sem ser em sua sequencia arnazenada na variavel;*/
//E essa funcao nos mostra isso:
/*function generater()
{
   if(inputCheckBox[0].checked)
   {
   const aleatorio = Math.round(Math.random()*lettersUppercase.length);
   return lettersUppercase.substring(0,0);
   }
}
btnGenerate.addEventListener('click', () => campoDiv.textContent = generater());*/

/*------------------------------PASSWORD GENERATE-------------------------------*/

//Variaveis responsaveis pelos caracteres;
const lettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersLowercase = 'abcdefghijklmnopqrstuvwxyz';
const nambers = '0123456789';
const symbols = '&$%#@?§¢*!=+></';

//Campo responsavel pelo resultado das senhas aleatorias_
const campoDiv = document.querySelector('#campoRes');
//Input que conta o numero de caracteres que a senha vai possuir_
const inputNumber = document.querySelector('#inputNumber');
//Input dos checkbox que serao ou nao verificados_
const inputCheckBox = document.querySelectorAll('#inputCheckBox');
//button de gerar a senha aleatoria_
const btnGenerate = document.querySelector('#btnGenerate');

/*Essas Arrow functions abaixo sao responsaveis por gerar os numeros aleatorios de acordo 
com cada input do type checkbox,dependendo e correspondendo ao tamanho de cada variavel 
que armazena as letras maiusculas,minusculas,numeros ou simbolos;*/

//As variaveis responsaveis pelos caracteres sao usadas em forma de Array;

//Gerando numeros aleatorios de acordo com o tamanho das letras maiusculas_
const numberRandomUppercase = () => {return lettersUppercase[Math.floor(Math.random()*lettersUppercase.length)]};
//Gerando numeros aleatorios de acordo com o tamanho das letras minusculas_
const numberRandomLowercase = () => { return lettersLowercase[Math.floor(Math.random()*lettersLowercase.length)]};
//Gerando numeros aleatorios de acordo com o tamanho dos numeros_
const numberRandomNambers = () => { return nambers[Math.floor(Math.random()*nambers.length)]};
//Gerando numeros aleatorios de acordo com o tamanho dos simbolos_
const numberRandomsymbols = () => { return symbols[Math.floor(Math.random()*symbols.length)]};

/*Essa Arrow function vai verificar se os inputs do type checkbox estao verificados ou nao;
Se estiver(em) verificado(s), essa funcao ira inserir no campoDiv a geracao aleatoria 
dos caracteres correspondentes a esse(s) input(s);*/
const generatePassword = () =>{
    let insercao = '';

   //input das LetterUppercase_
   if(inputCheckBox[0].checked) insercao += numberRandomUppercase();
   //input das LetterLowercase_
   if(inputCheckBox[1].checked) insercao += numberRandomLowercase();
   //input dos Numbers_
   if(inputCheckBox[2].checked) insercao += numberRandomNambers();
   //input dos Simbols_
   if(inputCheckBox[3].checked) insercao += numberRandomsymbols();

   for(let i = insercao.length; i < inputNumber.value;i++)
   {
      let x = verificadorPassword();
      insercao += x;
   }

   campoDiv.textContent = insercao;
}

const verificadorPassword = () =>{
   let aray = [];

   if(inputCheckBox[0].checked) aray.push(numberRandomUppercase());

   if(inputCheckBox[1].checked) aray.push(numberRandomLowercase());

   if(inputCheckBox[2].checked) aray.push(numberRandomNambers());

   if(inputCheckBox[3].checked) aray.push(numberRandomsymbols());

   if(aray.length === '') return '';

   console.log(aray[Math.floor(Math.random()*aray.length)]);

   return aray[Math.floor(Math.random()*aray.length)];
}

btnGenerate.addEventListener('click',generatePassword);