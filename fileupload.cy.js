describe('Select file', () => {
    it('File upload', () => {
      cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')
      cy.get('#photo').selectFile("C:\\Users\\ajaha\\OneDrive\\Desktop\\19.09.2024_22.21.54_REC.png")
    })
  }) 
  