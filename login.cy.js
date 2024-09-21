const { delay } = require("lodash")

describe('Login', () => {
    it('Login successfully', () => {
      cy.visit('https://www.facebook.com/login.php/')   //visit website
      cy.get('#email').type('sjdvfak@gmail.com')        //find username by cssSelector 
      cy.wait(2000)                                     //wait for 2 millisecond
      cy.get('#pass').type('12345678')                  //find password by cssSelector and type password
      cy.get('#loginbutton').click()                    //find login_button by cssSelector and click

    })

    it('Login failed', () => {
        cy.visit('https://www.facebook.com/login.php/')   //visit website
        cy.get('#email').type('asdsaf')                   //find username by cssSelector
        cy.wait(2000)                                     //wait for 2 millisecond
        cy.get('#pass').type('123456')                    //find password by cssSelector
        cy.get('#loginbutton').click()                    //find login_button by cssSelector and click()
      })
  }) 
  