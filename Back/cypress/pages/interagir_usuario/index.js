import Base from '../base_page/index'

import {FactoryInfo} from '../../fixtures/factory_info'

const usuario = FactoryInfo.gerarDadosUser();
let responseID
let responseBody

export class Automation_Practice extends Base{

    static comparar_cadastro(){
        cy.wrap(responseBody).as('ResponseGet')
        cy.get('@ResponseGet').then(resGET =>{
            expect(resGET).to.include(usuario)
        })
    }

    static mensagem_exclusão(){
        cy.wrap(responseBody).as('ResponseGet')
        cy.get('@ResponseGet').then(resGET =>{
        expect(JSON.stringify(resGET)).to.contain(null)
        })
    }


    static requisitar_link(method){
        const link = Cypress.env("GoRest_BASE")
        const linkID = Cypress.env("GoRest_BASE") + `/${responseID}`
        const headers = Cypress.env("header")
                if(method == "POST"){
                    cy.request({method: "POST",
                        url: link,
                        headers : headers,
                        body: usuario
                    }).then(res =>{ responseID = res.body.data.id
                                    responseBody = res.body.data
                                    expect(res.status).equal(200)
                                    })
                }
                if(method == "GET"){
                    cy.request({method: "GET",
                        url: linkID,
                        headers : headers,
                    }).then(res => {responseBody = res.body.data
                                    expect(res.status).equal(200)})
                        
                }
                if(method == "DELETE"){
                    cy.request({method: "DELETE",
                        url: linkID,
                        headers : headers,
                        }).then(res => {responseBody = res.body
                                        expect(res.status).equal(200)})
                    }
                        
                
            }





    }
    