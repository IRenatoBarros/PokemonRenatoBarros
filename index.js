const imagem = document.getElementById("pokemon")
const input = document.getElementById("input")
const teste = document.getElementById('teste')
const resposta = document.getElementById("resposta")
const form = document.getElementById("forms")
const arrayCoracoes = document.getElementsByTagName('td')
var numeroAleatorio = Math.floor(Math.random() * 250) + 1;
let controle = 0;
let blurr = 3;

fetch('https://pokeapi.co/api/v2/pokemon/'+numeroAleatorio)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Dados da API
    imagem.setAttribute("src",data.sprites.front_default)
    form.addEventListener("submit",(event)=>{
        if(input.value==data.name){
            imagem.style.filter = "blur(0px)"
            resposta.textContent = 'Correta (;'
            setTimeout(function(){
              window.location.reload()
            },2000)
            
            
        }else{
            resposta.textContent = 'Incorreta ):'   
            teste.textContent = data.name
            imagem.style.filter = "blur("+blurr+"px)"
            arrayCoracoes[arrayCoracoes.length-1].remove()
        }
        
        
        controle++
        console.log(controle)
        console.log(blurr)
        if(controle<3){
            event.preventDefault();
            blurr--
        }else{
          blurr--
        }
        imagem.style.filter = "blur("+blurr+")"
        
    })
    
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os dados:', error);
  });


 





