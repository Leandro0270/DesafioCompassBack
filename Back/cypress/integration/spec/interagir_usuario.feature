#language: pt

Funcionalidade: Interagir com usuário
Como usuário da API
Devo conseguir consultar, criar e deletar um usuário

Cenario: Criar novo usuário
Dado que tenho o link de criação de usuário
Quando eu enviar as informações de um usuário para o link
Então o meu usuário deve ser registrado

Cenario: Consultar usuário
Dado que tenho o link do usuário com id
Quando consulto o link do usuário
Então devo receber as informações cadastradas daquele id


Cenario: Deletar usuário
Dado que tenho o link de deletar um id de usuário
Quando faço a requisição do link
Então o usuário deve ser deletado
