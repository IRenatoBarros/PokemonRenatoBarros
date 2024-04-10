const imagem = document.getElementById("pokemon")
const input = document.getElementById("input")
const teste = document.getElementById('teste')
const form = document.getElementById("forms")
const arrayCoracoes = document.getElementsByTagName('td')
const dica1 = document.getElementById("dica1")
const dica2 = document.getElementById("dica2")
var numeroAleatorio = Math.floor(Math.random() * 151) + 1;
let controle = 0;
let blurr = 3;

fetch('https://pokeapi.co/api/v2/pokemon/'+numeroAleatorio)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Dados da API
    imagem.setAttribute("src",data.sprites.front_default)
    dica1.addEventListener('click',()=>{
      const namee = data.name 
      teste.textContent = "3 primeiras letras: "+namee.slice(0,3)
    })
    dica2.addEventListener('click',()=>{
      teste.textContent = "Tipo: "+data.types[0].type.name
    })
    
    form.addEventListener("submit",(event)=>{
        if(input.value==data.name){
            imagem.style.filter = "blur(0px)"
            teste.textContent = "Correto (;"
            setTimeout(function(){
              window.location.reload()
            },3000)
            
            
        }else{
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




 





