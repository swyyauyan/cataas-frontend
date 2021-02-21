describe('Test Links', () => {
  before(() => {
    cy.visit('/')
  })

  it('change value in column', () => {
    cy.get('input[name="catTableCol"]')
      .type('{backspace}4')

    cy.get('.cat-table').find('td').should('have.length', 12)
  });

  it('change value in row', () => {
    cy.get('input[name="catTableRow"]')
      .type('{backspace}5')

    cy.get('.cat-table').find('td').should('have.length', 20)
  });

  it('Get moving cat', () => {
    cy.get('#buttonGetMoveCat').click()

    cy.get('input[name="catTableRow"]').should('be.disabled')
    cy.get('input[name="catTableCol"]').should('be.disabled')
  });
})
