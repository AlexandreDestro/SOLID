// Classe com responsabilidade única
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    calcularSalario() {
      return this.salario * 1.1; 
    }
  }
  

  class FuncionarioRepository {
    salvarNoBanco(funcionario) {

      console.log(`Salvando ${funcionario.nome} com salário ${funcionario.salario} no banco de dados.`);
    }
  }
  
  const funcionario = new Funcionario("Carlos", 1000);
  console.log(funcionario.calcularSalario());
  
  const repo = new FuncionarioRepository();
  repo.salvarNoBanco(funcionario);
  