describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
//  cy.contains(" STUDENT MANAGEMENT SYSYTEM ")
cy.get('[name="myform"] > [name="StudentID"]').type("2003ME01")
// cy.get('[name="FristName"]').type('chiranjib')
cy.get('[onclick="deleteStudent()"]').click()
  })
})