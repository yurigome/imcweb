
function calcularImc(){
     
    var altura= document.getElementById('altura').value;
    var peso= document.getElementById('peso').value;
    var result= document.getElementById('result');
    //console.log(altura);
   
    if(altura !='' && peso !=''){
        
        result.style.visibility='visible';

        var imc= peso/(altura*altura);
        //console.log(imc);

        result.innerHTML='<h3>Seu IMC é: '+imc.toFixed(2)+'</h3>'

        if(imc<18.5 || imc>=30){
            result.style.background='#c90606'
        }

        else if(imc>=18.5 && imc<=24.9){
          result.style.background='#005f09'
        }

        else{
            result.style.background='#ff6a00'
        }

        

    }else{
        alert("Preencha todos os campos!");
    }

}

//selecionando o input

var inputPeso =document.getElementById('peso');

//associando o evento de 'soltar uma tecla' ao input

inputPeso.addEventListener('keyup', function(e){

//e-> resposta do browser ao evento 

if(e.key=='Enter'){
    calcularImc();
}





})