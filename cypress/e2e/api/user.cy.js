import UserService from '../../support/api/userService'
import { generateUserData } from '../../utils/dataGenerator'

describe('Users API', () => {
  it('Should create user successfully', () => {
    cy.fixture('user').then((userFixture) => {
      const user = generateUserData(userFixture)

      UserService.createUser(user).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        expect(response.body._id).to.exist
      })
    })
  })
})

