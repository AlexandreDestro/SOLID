// Classe base para o cálculo de salário
class CalculoSalario {
  calcular(salario) {
    throw new Error("Método 'calcular' deve ser implementado.");
  }
}

class CalculoSalarioFixo extends CalculoSalario {
  calcular(salario) {
    return salario * 1.1; 
  }
}

class CalculoSalarioComissao extends CalculoSalario {
  calcular(salario) {
    return salario * 1.2; 
  }
}

class Funcionario {
  constructor(nome, salario, tipoCalculo) {
    this.nome = nome;
    this.salario = salario;
    this.tipoCalculo = tipoCalculo;
  }

  calcularSalario() {
    return this.tipoCalculo.calcular(this.salario);
  }
}

const funcionarioFixo = new Funcionario("Carlos", 1000, new CalculoSalarioFixo());
console.log(funcionarioFixo.calcularSalario()); 

const funcionarioComissao = new Funcionario("Ana", 1000, new CalculoSalarioComissao());
console.log(funcionarioComissao.calcularSalario()); 
