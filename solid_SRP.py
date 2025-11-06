#Single Responsibility Principle

class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario
    
    def calcular_salario(self):
        # Cálculo de salário (simples)
        return self.salario * 1.1  # aumento de 10%

class FuncionarioRepository:
    def salvar_no_banco(self, funcionario):
        # Lógica para salvar no banco de dados (exemplo simples)
        print(f"Salvando {funcionario.nome} com salário {funcionario.salario} no banco de dados.")
