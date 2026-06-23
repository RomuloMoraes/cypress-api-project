import LoginService from '../../support/api/loginService'
import UserService from '../../support/api/userService'
import { generateUserData } from '../../utils/dataGenerator'

describe('Login API', () => {

  it('Should login successfully', () => {

    cy.fixture('user').then((userFixture) => {

      const user = generateUserData(userFixture)

      UserService.createUser(user).then((createResponse) => {
        expect(createResponse.status).to.eq(201)

        LoginService.login(user.email, user.password).then((loginResponse) => {
          expect(loginResponse.status).to.eq(200)
          expect(loginResponse.body.message).to.eq('Login realizado com sucesso')
          expect(loginResponse.body.authorization).to.exist
        })
      })
    })
  })

  it('Should not login with invalid credentials', () => {

    cy.fixture('login').then((loginData) => {

      LoginService.login(loginData.invalidUser.email, loginData.invalidUser.password).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Email e/ou senha inválidos')

      })
    })
  })
})