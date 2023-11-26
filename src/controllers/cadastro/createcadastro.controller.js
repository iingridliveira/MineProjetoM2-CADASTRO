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