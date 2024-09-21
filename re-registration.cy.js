describe('Check validation', () => {
    it('re-registration', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')   //visit to parabank website
      cy.get('#loginPanel > :nth-child(3) > a').click()              //go to register option and click
      
      cy.get("input[id='customer.firstName']").type('alfb')          
      cy.get("input[id='customer.lastName']").type('a')             
      cy.get("input[id='customer.address.street']").type('s')        
      cy.get("input[id='customer.address.city']").type('d')          
      cy.get("input[id='customer.address.state']").type('c')
      cy.get("input[id='customer.address.state']").type('x')
      cy.get("input[id='customer.address.zipCode']").type('p')       //find element by cssSelector and type input
      cy.get("input[id='customer.phoneNumber']").type('b')
      cy.get("input[id='customer.ssn']").type('n')
      cy.get("input[id='customer.username']").type('b')
      cy.get("input[id='customer.password']").type('a')
      cy.get("#repeatedPassword").type('a')
      cy.get("input[value='Register']").click()                     //find REGISTER button by cssSelector and click
      
      //cy.get("span[id='customer.username.errors']").contains('username already exists')              //validate the error messege with partial text without full text
        //or
      cy.get("span[id='customer.username.errors']").should('have.text','username already exists')   //validate the error messege with full text only)
    })

  }) 
  