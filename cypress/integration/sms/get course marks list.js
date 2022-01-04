describe("check with add student", () => {
  it("student management syastem", () => {
  cy.visit('http://localhost:8080/smsindex/index.html')
  cy.get('[name="myform3"] > :nth-child(1) > :nth-child(1)').select('ME01')
  cy.get('[onclick="getCourseWiseMarks1()"]').click()
  })
})