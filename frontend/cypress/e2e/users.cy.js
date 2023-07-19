describe("Page Load and List Check", () => {
  it("Loads the page and checks list element and its specific items", () => {
    cy.visit("http://localhost:3030/");

    cy.get("ul")
      .should("be.visible")
      .within(() => {
        cy.get("li").should("have.length.at.least", 3);
        cy.contains("User 1");
        cy.contains("User 2");
        cy.contains("User 3");
      });
  });
});
