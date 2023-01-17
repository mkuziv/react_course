describe('Search', () => {
  it('check input', () => {
    cy.visit('http://localhost:8080/search');
    cy.findByPlaceholderText('What do you want to watch?').type('Transformers: The Last Knight');
    cy.findByText('search').click();
    cy.findByAltText('Transformers: The Last Knight').click();
    cy.findByText('2017-06-16');
  })
})