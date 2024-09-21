describe('Radio Button', () => {
    it('Radio button click', () => {
      cy.visit('http://test.rubywatir.com/radios.php')           
      cy.wait(2000)
      cy.get('[value="Radio1"]').click()
      cy.get('.radioclass').click()
      cy.get('#radioId').click()
      cy.get(':nth-child(9)').click()
      cy.get(':nth-child(11)').click()
      cy.get('[value="Not sure"]').click()
      cy.scrollTo('top')
    })


// .......  or click using check() method  ...........
// for check() method we need to use button's value into the braket


    it('Radio button click', () => {
        cy.visit('http://test.rubywatir.com/radios.php')           
        cy.wait(2000)
        cy.get('[value="Radio1"]').check('Radio1')
        cy.get('.radioclass').check('Nope')
        cy.get('#radioId').check('No')
        cy.get(':nth-child(9)').check('No')
        cy.get(':nth-child(11)').check('No')
        cy.get('[value="Not sure"]').check('Not sure')
        cy.scrollTo('top')
      })

  }) 
  