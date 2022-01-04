describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
  cy.get('[name="myform2"] > [type="text"]').type("2003ME01")
  cy.get('[name="myform2"] > select').select("1st")
  cy.get('[name="myform2"] > [type="button"]').click()
  })
})