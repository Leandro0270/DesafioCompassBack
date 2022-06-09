import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

import {Automation_Practice} from '../../pages/interagir_usuario/index'


Given(`que tenho o link de criação de usuário`, () => {

})

Given(`que tenho o link do usuário com id`, () => {

})

Given(`que tenho o link de deletar um id de usuário`, () => {
})

When(`eu enviar as informações de um usuário para o link`, () =>{
    Automation_Practice.requisitar_link("POST");

})

When(`consulto o link do usuário`, () =>{
    Automation_Practice.requisitar_link("GET");
})

When(`faço a requisição do link`, () =>{
    Automation_Practice.requisitar_link("DELETE");
})


Then(`o meu usuário deve ser registrado`,() =>{
    Automation_Practice.requisitar_link("GET");
    Automation_Practice.comparar_cadastro()
})

Then(`devo receber as informações cadastradas daquele id`,() =>{
    Automation_Practice.comparar_cadastro()
})

Then(`o usuário deve ser deletado`,() =>{
    Automation_Practice.mensagem_exclusão();
})
