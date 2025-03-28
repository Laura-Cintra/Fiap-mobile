# App de Gestão Acadêmica 📘

## Objetivo
Desenvolver um aplicativo em React Native que avalia se o aluno foi aprovado ou reprovado com base nas regras acadêmicas da FIAP.

## Tecnologias Utilizadas
- React Native
- JavaScript
- Expo

## Especificações Técnicas

### Tela de Login

lorem ipsum

### Tela de Formulário
- Três campos de entrada para as notas (Nota 1, Nota 2, Nota 3)
- Um campo adicional para inserir o número de faltas
- Um botão de validação para verificar a situação do aluno

### Tela de Aulas

- Exibição de cards contendo as informações das aulas e seus horários.

### Funcionalidade do Botão de Validação
- O botão, ao ser clicado, deve analisar os dados inseridos e exibir uma mensagem:
  - "Reprovado por falta", caso o número de faltas ultrapasse o limite permitido.
  - "Reprovado por nota", caso a média das notas esteja abaixo do mínimo necessário.
  - "Aprovado com média de X.XX", caso o aluno cumpra os requisitos, exibindo a média final com duas casas decimais.

## Regras de Aprovação

### 1. Faltas
- Um aluno não pode ser aprovado se tiver mais de 25% de faltas no ano letivo.
- Para ser aprovado, o estudante deve manter a frequência em pelo menos 75% do total da carga horária da escola.

### 2. Notas

- A menor nota será descartada
- O aluno deve ter média final maior ou igual a 6

## Como Executar o Projeto
1. Clone este repositório ou faça o download:
   ```sh
   git clone https://github.com/ViniciuSaeSouza/Fiap-mobile
   ```
2. Navegue até a pasta do projeto:
   ```sh
   cd Fiap-mobile
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o projeto:
   ```sh
   npm start
   ```

## Contribuição

    RM: 558843 Laura de Oliveira Cintra
    RM: 558832 Maria Eduarda Alves da Paixão
    RM: 554456 Vinícius Saes de Souza

