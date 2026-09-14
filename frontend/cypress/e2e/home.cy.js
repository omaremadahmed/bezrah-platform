describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem('locale', 'en')
      },
    })
  })

  it('renders the main homepage sections', () => {
    cy.contains('Bezrah Food Industries').should('be.visible')
    cy.contains('Mediterranean agriculture, prepared for global markets.').should('be.visible')
    cy.contains('Products prepared for trade.').should('be.visible')
    cy.contains('Speak with Bezrah').should('be.visible')
  })

  it('opens category links with the matching product filter', () => {
    cy.get('a[href="/products/iqf-fruits"]').first().click()
    cy.location('pathname').should('eq', '/products/iqf-fruits')
    cy.contains('button.filter-btn.active', 'Fruits').should('be.visible')
    cy.contains('Mango').should('be.visible')
  })
})
