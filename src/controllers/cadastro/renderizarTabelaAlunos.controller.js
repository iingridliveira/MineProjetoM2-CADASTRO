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
          const alunoExcluido = alunos[i];
  
          // Exibe um alerta com informações do aluno que será excluído
        
          var resultado = confirm(`Excluir aluno: ${alunoExcluido.nome}`);
          if (resultado == true) {

            alert(`Excluir aluno: ${alunoExcluido.nome}`);  
            alunos.shift(index);
            
                
          }
          else{
              alert(`Você desistiu de excluir o item " ${alunoExcluido.nome}`);
          }
         
        renderizarTabelaAlunos();
       
          
        });
      }
  
      // Adicionar classes CSS conforme necessário
      idadeCell.classList.add('center');
      acoesCell.classList.add('center');
    };
  }