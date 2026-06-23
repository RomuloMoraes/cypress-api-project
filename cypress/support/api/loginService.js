class LoginService {

  login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      failOnStatusCode: false,
      body: {
        email,
        password
      }
    })
  }

}

export default new LoginService()