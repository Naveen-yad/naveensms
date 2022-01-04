describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
  cy.get('[name="myform21"] > select').select("1st")
  cy.get('[name="myform21"] > input').click()
  })
})