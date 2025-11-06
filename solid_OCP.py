#Open/Closed Principle

from abc import ABC, abstractmethod

# Classe base para o cálculo de salário
class CalculoSalario(ABC):
    @abstractmethod
    def calcular(self, salario):
        pass

# Implementação do cálculo para salário fixo
class CalculoSalarioFixo(CalculoSalario):
    def calcular(self, salario):
        return salario * 1.1  # Aumento de 10%

# Implementação do cálculo para comissão
class CalculoSalarioComissao(CalculoSalario):
    def calcular(self, salario):
        return salario * 1.2  # Aumento de 20%

# A classe Funcionario agora só tem uma referência à classe de cálculo
class Funcionario:
    def __init__(self, nome, salario, tipo_calculo: CalculoSalario):
        self.nome = nome
        self.salario = salario
        self.tipo_calculo = tipo_calculo
    
    def calcular_salario(self):
        return self.tipo_calculo.calcular(self.salario)

# Exemplo de uso
funcionario_fixo = Funcionario("Carlos", 1000, CalculoSalarioFixo())
print(funcionario_fixo.calcular_salario())  # Resultado: 1100

funcionario_comissao = Funcionario("Ana", 1000, CalculoSalarioComissao())
print(funcionario_comissao.calcular_salario())  # Resultado: 1200
