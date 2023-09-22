const alunos = [];

class Aluno {
  constructor(idade, nome, email) {
    this.idade = idade;
    this.nome = nome;
    this.email = email;
    
  }
}

const inputIdade = document.querySelector("#Idade");
const inputNome = document.querySelector("#Nome");
const inputEmail = document.querySelector("#email");
const botaoAdicionar = document.querySelector("#Adicionar");
const tabelaAlunos = document.querySelector("#tabelaAlunos");

botaoAdicionar.addEventListener('click', () => {
  const idade = inputIdade.value;
  const nome = inputNome.value;
  const email = inputEmail.value;

  if (idade && nome && email) {
    const novoAluno = new Aluno(idade, nome, email);
    alunos.push(novoAluno);

    // Limpar os campos de entrada
    inputIdade.value = "";
    inputNome.value = "";
    inputEmail.value = "";

    // Atualizar a tabela de alunos na página
    renderizarTabelaAlunos();
  } else {
    alert("Preencha todos os campos.");
  }
});

function renderizarTabelaAlunos() {
  // Limpar a tabela atual
  tabelaAlunos.innerHTML = "";

  // Adicionar cada aluno à tabela
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const newRow = tabelaAlunos.insertRow();
    const idadeCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const nomeCell = newRow.insertCell(2);
    const acoesCell = newRow.insertCell(3);

    idadeCell.textContent = aluno.idade;
    emailCell.textContent = aluno.email;
    nomeCell.textContent = aluno.nome;
    acoesCell.innerHTML = `<button class="editar">Editar</button> <button class="excluir" data-index="${i}">Excluir</button>`;
    
    const botoesExcluir = tabelaAlunos.querySelectorAll(".excluir");

    for (let j = 0; j < botoesExcluir.length; j++) {
      const botaoExcluir = botoesExcluir[j];

      botaoExcluir.addEventListener("click", () => {
        const index = botaoExcluir.getAttribute("data-index");
        const alunoExcluido = alunos[index];

        // Exibe um alerta com informações do aluno que será excluído
        alert(`Excluir aluno: ${alunoExcluido.nome}`);

        // Remove o aluno do array
        alunos.splice(index, 1);
        
        // Atualize a tabela após a exclusão
        renderizarTabelaAlunos();
      });
    }

    // Adicionar classes CSS conforme necessário
    idadeCell.classList.add('center');
    acoesCell.classList.add('center');
  };
}