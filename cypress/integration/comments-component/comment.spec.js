describe('Comment UI', () => {

  it('Should return create account', () => {
    cy.visit('/')

    cy.contains('Criar nova conta:').should('to.have.length', 1)
  })
  it('Should login', () => {
    cy.visit('/')

    cy.get('[data-cy=login-email-input]').type('fernando@hotmail.com')
    cy.get('[data-cy=login-password-input]').type('fer123')
    cy.get('[data-cy=login-button]').click()
  })
})