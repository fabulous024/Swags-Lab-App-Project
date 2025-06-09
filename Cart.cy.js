describe('Cart Functionality', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.wait(3000);
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(5000);
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  //it('Add a product to cart and verify badge', () => {
    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //cy.get('.shopping_cart_badge').should('contain', '1');
  //});

  it('Remove a product from cart and verify it updates', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
