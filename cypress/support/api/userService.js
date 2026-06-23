class UserService {
  createUser(user) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      failOnStatusCode: false,
      body: user
    })
  }
}

export default new UserService()