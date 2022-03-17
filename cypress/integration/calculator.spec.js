describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click({force: true});
    cy.get('.display').should('contain', '2')
  })

  it('should updated display of running total',() =>{
    cy.get('#number5').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('.display').should('contain','555')
  })
  it('should update result',()=>{
    cy.get('#number7').click({force: true});
    cy.get('#operator-add').click({force: true});
    cy.get('#number2').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','9')
  })
  it('should use multiple operators',()=>{
    cy.get('#number8').click({force: true});
    cy.get('#operator-add').click({force: true});
    cy.get('#number2').click({force: true});
    cy.get('#operator-divide').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','2');
   })
  it('should check a negative numbers',()=>{
    cy.get('#number4').click({force: true});
    cy.get('#operator-subtract').click({force: true});
    cy.get('#number6').click({force: true});
    cy.get('#operator-multiply').click({force: true});
    cy.get('#number4').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','-8');
  })
  it('should check decimal numbers',()=>{
    cy.get('#number2').click({force: true});
    cy.get('#decimal').click({force: true});
    cy.get('#number7').click({force: true});
    cy.get('#operator-multiply').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','13.5');
  })
  it('should check large numbers',() =>{
    cy.get('#number7').click({force: true});
    cy.get('#number8').click({force: true});
    cy.get('#number6').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('#number5').click({force: true});
    cy.get('#operator-multiply').click({force: true});
    cy.get('#number3').click({force: true});
    cy.get('#number3').click({force: true});
    cy.get('#number4').click({force: true});
    cy.get('#number4').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','263022320');

  })
  it('should not divide by 0',()=>{
    cy.get('#number4').click({force: true});
    cy.get('#operator-divide').click({force: true});
    cy.get('#number0').click({force: true});
    cy.get('#operator-equals').click({force: true});
    cy.get('.display').should('contain','Cannot divide by 0');



  })
})