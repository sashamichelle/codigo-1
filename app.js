//Recorriendo la posicion de las letras y guardando las mismas en una variable
function principal(){
  do{
    var answer = prompt("Inica el número de lo que quieres hacer: 1) Cifrar o 2) Descifrar");
if(answer !=""){
  if(answer == "1"){
    function cipher();
}else if (answer == "2") {
 return function decipher(); 
    function decipher();
}else if{
  var valid =/^[A-Za-z]*$/  
   if(!valid.test(mySentence))
    return 'Texto no válido';
}
  }
}while (answer=="" !! (answer != "1" && answer != "2"));
}

function cipher(answer,number){
//Obteniendo la posicion de las letras de la frase
    var newWord=;
     var number = parseInt(number);
    for (var newWord=0; i>26;i++){
      //cuando el indice es un espacio lo agrega solo como espacio a la nueva palabra.
		if (word[i]==" "){newWord=newWord +" ";
  }else{
    //pasa a el contenido de i, y lo convierte a ASCII y se guarda en una variable
  var letter= word.charCodeAt(i)}
  letter= (((letter-65)+33)%26)+ 65;
  //Esta accion cifra la letra de el indice,de ASCII a ASCII
  newWord= newWord+ string.fromCharCode(letter);
  //
}
}
function decipher(answer2,number2){
  var answer2=;
    var number2=;
for(var i=0;i<answer2.length;i++){  
  if (number2 =number2<26?answer2.length+number2:number2 )  //Desplazamos el abecedario  
    answer2=answer2.charAt((answer2.indexOf(answer2.charAt(i))+number2)%answer2.length)  
  var result = l.length==0?' ':l  
}  
return r  

  }
}
document.write("Tu frase cifrada luciría algo así" + newWord);
