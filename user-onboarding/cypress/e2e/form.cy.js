/**
 *  
 * Get inputs for Name, Email, Password, and TOS, and then type information into each one.
 * 
 * Set up a test that will check to see if a user can check the terms of service box

 Check to see if a user can submit the form data

 Check for form validation if an input is left empty
 */


describe("Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const firstNameInput = () => cy.get("input[name=first_name]");
    const lastNameInput = () => cy.get("input[name=last_name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosInput = () => cy.get("input[name=tos]");
    const submitBtn = () => cy.get("button[id=submitBtn]")

    it("user can fill out and submit the form", () => {
        firstNameInput().type("Sawyer");
        firstNameInput().should("have.value", "Sawyer");

        lastNameInput().type("Welter");
        emailInput().type("sawyer.welter@gmail.com");
        passwordInput().type("password123");
        tosInput().click();

        submitBtn().should("not.be.disabled");

        submitBtn().click();

        cy.contains("Sawyer Welter");
    })

    describe("form validation enables/disables submit button", () => {
        it("fill in all information", () => {
            firstNameInput().type("Sawyer");
            lastNameInput().type("Welter");
            emailInput().type("sawyer.welter@gmail.com");
            passwordInput().type("password123");
            tosInput().click();
        })
        
        it("first name validation", () => {
            firstNameInput().clear();
            submitBtn().should("be.disabled").debug();
            firstNameInput().type("a");
            submitBtn().should("be.disabled");
            firstNameInput().type("aaaaaaaaaaa");
            submitBtn().should("not.be.disabled");
            firstNameInput().type("aaaaaaaaaaa");
            submitBtn().should("be.disabled");
        })
    })
})