
describe('Checkbox tick', () => {
    it('Checkbox', () => {
      cy.visit('https://practice.expandtesting.com/checkboxes')       //visit website
      cy.get('#checkbox1').check()                                    //tick first checkbox
      cy.get('#checkbox2').uncheck()                                    //untick second checkbox
    })
  }) 
  