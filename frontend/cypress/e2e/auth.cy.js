describe('Authentication Flow', () => {
  it('allows a user to navigate to the login page and see the form', () => {
    cy.visit('/')
    
    // Open mobile menu if needed, or click direct login link
    // Easiest is to visit directly for this test
    cy.visit('/login')

    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
    cy.contains('Sign In').should('be.visible')
  })
})
