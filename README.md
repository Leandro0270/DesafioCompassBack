# Avaliação

**Seções:**

 [Automação QA](#automação-qa)
  - [Instalação e Execução do Projeto](#instalação-e-execução-do-projeto)
    - [Instalação NodeJs](#instalação-nodejs)
    - [Instalação GIT](#instalação-GIT)
    - [Instalação Visual Studio Code](#instalação-visual-studio-code)
    - [Execução do Projeto](#execução-do-projeto)   
   

## Instalação e Execução do Projeto
Para realizar esta automação, foi usado o cypress, um framework de automação de testes E2E que usa como base o Javascript para a escrita do seu código. Com ele é possível configurar, escrever, rodar e debuggar os testes de forma simples e prática.

Para utilizar o Cypress, é necessário realizar as seguintes instalações:

- _NodeJs_
- _Visual Studio Code_
- _Git_

### Instalação NodeJs

**1**. Acessar a página <https://nodejs.org/en/> e baixar a ultima versão estavel
**2**. Após realizar o download, os passos são iguais de qualquer instalador, prossiga apertando "next" até chegar na tela de "install" e "finish".
**Voila!, NodeJs instalado com sucesso!**

### Instalação Visual Studio Code

**1**. Acessar a página https://code.visualstudio.com/download e baixar a versão para o SO utilizado;

**2**. Após realizar o download, os passos são os mesmos do item acima, prossiga apertando "next" até chegar na tela de "install" e "finish".
**Visual Studio Code instalado com sucesso!**

### Instalação GIT
**1**.Acessar a página https://git-scm.com/ e baixar a versão para o SO utilizado
**2**.Após realizar o download, os passos são os mesmos do item acima, prossiga apertando "next" até chegar na tela de "install" e "finish".

**Instalação feita!**

### Execução do Projeto

Após as instalações do NodeJs e do VScode, vamos baixar o projeto do git.

**1**. Acesse o link o repositório no github pelo link ;

**2**. Clicar no botão verde escrito Code e copiar a url em https;

**3**. No Visual Studio code, abra uma pasta onde deseja fazer a instalação do projeto e pelo terminal do próprio vscode copie o seguinte comando ```git clone + url copiada```;

**4**. Dentro do VScode, abrir a pasta clonada, acessar a raiz do projeto e executar no terminal o comando ```npm install```;

**5**. A próxima etapa é executar o comando ```npm run cy:run ```(Para rodar todos os testes e gerar report) ou ```npx cypress open ```  para abrir a interface visual do Cypress;

**6**. Caso o cypress tenha sido executado pelo ```npm run cy:run ```, será gerado reports dentro da pasta cypress/reports;

**Parabéns, você já tem o teste automatizado rodando em sua máquina :)** 

