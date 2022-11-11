/// <reference types="cypress" />
import './workaround-cypress-10-0-2-process-issue'
import React from 'react'
import App from '../../src/App'

describe('App.cy.ts', () => {
  beforeEach(() => {
    // スコープ内の各テストごとに実行前に実行
    let url = Cypress.env('baseURL') + '/zipcode?zipcode*'
    // let url = 'http://localhost:5173/zipcode?zipcode*'

    cy.intercept('GET', url, {
        statusCode: 200,
        body: {
            "message": null,
            "results": [
                {
                    "address1": "沖縄県",
                    "address2": "中頭郡北中城村",
                    "address3": "大城",
                    "kana1": "ｵｷﾅﾜｹﾝ",
                    "kana2": "ﾅｶｶﾞﾐｸﾞﾝｷﾀﾅｶｸﾞｽｸｿﾝ",
                    "kana3": "ｵｵｸﾞｽｸ",
                    "prefcode": "47",
                    "zipcode": "9012314"
                }
            ],
            "status": 200
        },
    }).as('getZipInfo');
})
  it('playground', () => {
    cy.mount(<App />)

    cy.get('[data-cy=zipcode]').type('9000024').then(() => {
      cy.get('[data-cy=getaddressbutton]').click().then(() => {

        cy.get('[data-cy=address]').should('have.text', "沖縄県中頭郡北中城村大城");
      })
    })
  })
})
