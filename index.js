const imagem = document.getElementById("pokemon")
const input = document.getElementById("input")
const teste = document.getElementById('teste')
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
            setTimeout(function(){
              window.location.reload()
            },3000)
            
            
        }else{
            const namee = data.name 
            teste.textContent = "Nome começa com -> "+namee.slice(0,controle+1)
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


 





