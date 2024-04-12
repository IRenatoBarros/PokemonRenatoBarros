const imagem = document.getElementById("pokemon")
const input = document.getElementById("input")
const teste = document.getElementById('teste')
const form = document.getElementById("forms")
const arrayCoracoes = document.getElementsByClassName('td')
const dica1 = document.getElementById("dica1")
const totalAcertos = document.getElementById('totalDeAcertos')
const dica2 = document.getElementById("dica2")
const recomecar = document.getElementById('recomecar')
const tablePoke = document.getElementById('tablePoke')
var numeroAleatorio = Math.floor(Math.random() * 152) + 1;
let controle = 0;
let blurr = 3;
var pokemonsCertos = JSON.parse(localStorage.getItem("minhaArray")) || []

for(let i=0;i<pokemonsCertos.length;i++){
  console.log(pokemonsCertos[i])
  //criando os elementos para colocar na tabela de pokemons acertados
  const td = document.createElement('td')
  const tr = document.createElement('tr')
  const p = document.createElement('p')
  p.textContent = pokemonsCertos[i]
  
  
  tr.appendChild(p)
  td.appendChild(tr)
  td.classList.add("embaixo")
  tablePoke.appendChild(td)
}



fetch('https://pokeapi.co/api/v2/pokemon/'+numeroAleatorio)
  .then(response => response.json())
  .then(data => {
    if(pokemonsCertos.includes(data.name)==false){
    console.log(data); // Dados da API
    totalAcertos.textContent = totalAcertos.textContent+' '+pokemonsCertos.length
    imagem.setAttribute("src",data.sprites.front_default)
    dica1.addEventListener('click',()=>{
      //pegando os pokemons que foram acertados adicionando em uma array

      const namee = data.name 
      teste.textContent = "3 primeiras letras: "+namee.slice(0,3)
    })
    dica2.addEventListener('click',()=>{
      teste.textContent = "Tipo: "+data.types[0].type.name
    })
    
    form.addEventListener("submit",(event)=>{
          event.preventDefault();

          if(input.value==data.name){
            imagem.style.filter = "blur(0px)"
            teste.textContent = "Correto (;"

            pokemonsCertos.push(data.name)
            const arrayString = JSON.stringify(pokemonsCertos)

            console.log(arrayString)
            localStorage.setItem('minhaArray', arrayString)      

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

  }else{
    window.location.reload();
  }
  recomecar.addEventListener('click',function(){
    localStorage.clear()
    console.log("cache limpo com sucesso")
    window.location.reload();
  })
    

  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os dados:', error);
  });




 





