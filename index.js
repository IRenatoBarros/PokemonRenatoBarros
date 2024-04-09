const imagem = document.getElementById("pokemon")
const input = document.getElementById("input")
const teste = document.getElementById('teste')
const resposta = document.getElementById("resposta")
const form = document.getElementById("forms")
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let controle = 0

fetch('https://pokeapi.co/api/v2/pokemon/'+numeroAleatorio)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Dados da API
    imagem.setAttribute("src",data.sprites.front_default)
    form.addEventListener("submit",(event)=>{
        if(input.value==data.name){
            imagem.style.filter = "blur(0px)"
            resposta.textContent = 'Correta (;'
        
            window.location.reload();
        }else{
            resposta.textContent = 'Incorreta ):'   
            teste.textContent = data.name
            imagem.style.filter = "blur(2px)"

        }
        event.preventDefault();

        controle++

        if(controle<4){
            event.preventDefault();
        }else{
            window.location.reload();
        }
    })
    
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os dados:', error);
  });


 





