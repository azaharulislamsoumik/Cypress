describe('Mouse Over', () => {
    it('Mouseover', () => {
      cy.visit('https://practice.expandtesting.com/hovers')       //visit website
      //cy.get('#examples-dropdown').trigger('mouseover')
      cy.get('#examples-dropdown').invoke('show')
      cy.get('#examples-dropdown').click()
    })
  }) 
  