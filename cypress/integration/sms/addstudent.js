
describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
//  cy.contains(" STUDENT MANAGEMENT SYSYTEM ")
cy.get('[name="myform"] > [name="StudentID"]').type("2003ME01")
cy.get('[name="FristName"]').type('sharooq')
cy.get('[name="LastName"]').type('salman')
cy.get('[name="Address"]').type('#123 kundalahalli bangalore')
cy.get('[name="Phone"]').type('8523697416')
cy.get('[name="myform"] > [name="Semester"]').select('3rd')
cy.get('[name="Gender"]').select('M')
cy.get('[name="DOB"]').type('12-09-2002')
cy.get('[name="DeptID"]').select('ME')
cy.get('[name="Status"]').select('I')
cy.get('[onclick="validateform()"]').click()
})
})
