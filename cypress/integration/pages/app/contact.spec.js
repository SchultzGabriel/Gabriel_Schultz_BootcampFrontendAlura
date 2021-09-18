/// <reference types="cypress" />

describe('/pages/contact/', () => {
  // it === test que estamos fazendo
  it('preencha os campos de contato', () => {
    cy.visit('/contact/');

    // preencher o input usuario
    document.querySelector('input[name="name"]');
    cy.get('input[name="name"]').type('Gabreu');

    cy.get('input[name="email"]').type('gabreu@email.com');

    cy.get('input[name="message"]').type('não se mate, o módulo finalmente acabou');

    cy.get('button[type="submit"]').click();

    cy.get('svg') // yields <nav>
      .should('be.visible'); // yields <nav>
    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/contact/');
  });
});
