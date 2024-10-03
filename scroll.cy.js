describe('Scroll', () => {
    it('Scroll', () => {
      cy.visit('https://patient.info/heart-health/atrial-fibrillation-leaflet')       //visit website
      
      //cy.scrollTo('bottom')
      //cy.scrollTo('top')
      /cy.scrollTo(0, 500)

      cy.get(':nth-child(3) > ul > :nth-child(3) > p').scrollIntoView()
//Or
      //cy.get(':nth-child(3) > ul > :nth-child(3) > p').scrollTo('center')





    })
  }) 
  