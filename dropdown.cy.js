const { delay } = require("lodash")

describe('Handle Dropdown', () => {
 
/*   it('Static Dropdown', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm',{headers:{"Accept-Encoding":"gzip,deflate"}})   //visit website [use 'headers' when visit real website]
      cy.get("input[name='username']").type('b')                      //find username by cssSelector and type username
      cy.get("input[name='password']").type('a')            //find password by cssSelector and type password
      cy.get("input[value='Log In']").click()               //find login_button by cssSelector and click
    
      cy.get("a[href='activity.htm?id=38985']").click()     //find account by id and click
      cy.get('#month').select(1)                            //select dropdown option by index
      cy.get('#month').select('February')                   //select dropdown option by value
    })
*/


//...........dynamic dropdown....................


    it('Dynamic Dropdown', () => {
        cy.visit('https://gozayaan.com/', {headers:{"Accept-Encoding":"gzip,deflate"}})                     //visit website [use 'headers' when visit real website]
        cy.get("div[class='box location from'] div[class='value']").click()                                 //find the text box and click
        cy.get("div[class='box location from active'] input[placeholder='Type to search']").type('New')     //find the input box and type (delay 200ms)
        
        //cy.get("div[class='box location from active'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()   // find first child from suggestion
        cy.get("div[class='airport-list'] div:nth-child(2) div:nth-child(1) div:nth-child(1)").click()                 // find second child from suggestion
        //cy.get("div[class='box location from active'] div:nth-child(3)").click()                                     // find third child from suggestion
        cy.scrollTo('topRight')

    })
})