let contador = 0;
let botao = document.getElementById('btn')
let putn = document.getElementById('inputTarefa')
let main = document.getElementById('lista')

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = putn.value;

    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcaTarefa(${contador})" class="item-icone">
          <span id="icone_${contador}"  class="material-symbols-outlined"> circle </span>
        </div>
        <div onclick="marcaTarefa(${contador})" class="item-nome">
          ${valorInput}
        </div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <span class="material-symbols-outlined"> delete </span>Delete
          </button>
        </div>
      </div>
      `

      //<div class="item clicado">
        //<div class="item-icone">
          //<span class="material-symbols-outlined" style="color: dodgerblue">
            //done_all
          //</span>
        //</div>
        //<div class="item-nome">Tarefa Teste</div>
        //<div class="item-botao">
          //<button class="delete">
            //<span class="material-symbols-outlined"> delete </span>Delete
          //</button>
        //</div>
      //</div>

      main.innerHTML += novoItem;

      putn.value = "";
      putn.focus();
    }
}

function deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcaTarefa(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if(classe==="item"){
    item.classList.add('clicado')

    var icone = document.getElementById('icone_' + id)
    icone.classList.add('material-symbols-outlined')
    icone.style.color = 'dodgerblue';
    icone.textContent = 'done_all';
  }else{
    item.classList.remove('clicado')

    var icone = document.getElementById('icone_' + id)
    icone.classList.add('material-symbols-outlined')
    icone.textContent = 'circle';
    icone.style.color = 'black';
  }
}

putn.addEventListener("keyup", function(event){

  if(event.keyCode ===13){
    event.preventDefault();
    botao.click();
  }
})