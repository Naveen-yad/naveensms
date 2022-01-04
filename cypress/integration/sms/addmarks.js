describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
//  cy.contains(" STUDENT MANAGEMENT SYSYTEM ")
cy.get('[name="myform1"] > [name="StudentID"]').type("2003ME01")
cy.get('[name="myform1"] > [name="Semester"]').type('1st')
cy.get('[name="myform1"] > [name="CourseID"]').select('ME01')
cy.get('[name="myform1"] > [value=""]').type('98')
cy.get('[name="myform1"] > [type="button"]').click()
cy.get('[name="myform11"] > select').select('ME02')
cy.get('[name="myform11"] > [type="text"]').type('92')
cy.get('[name="myform11"] > [type="button"]').click()
cy.get('[name="myform12"] > select').select('ME03')
cy.get('[name="myform12"] > [type="text"]').type('90')
cy.get('[name="myform12"] > [type="button"]').click()

  })
})
