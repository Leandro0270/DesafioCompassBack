
export default class Base {

    static visit(path = "") {
        cy.visit(path);
    }

    static explicitWait(seconds = 2000){
        cy.wait(seconds)
    }

    static implicitWait(method = "GET", endpoint = "", alias='loadPageFirst', status = 200){
        cy.intercept({
            method: method,
            url: endpoint,
        }).as(alias);

        cy.wait(`@${alias}`, { timeout: Cypress.env('global_timeout') }).its('response.statusCode').should('equal', status)
    }

    static http_request_with_body(method, endpoint, body, headers = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            body: body,
            headers: headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout,
            qs : qs
        })
    }

    static http_request_without_body(method, endpoint, headers = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            headers : headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout,
            qs : qs
        })
    }
}

