import { faker } from '@faker-js/faker'

export const generateUserData = (fixtureData) => {
  return {
    ...fixtureData,
    nome: faker.person.fullName(),
    email: faker.internet.email().toLowerCase()
  }
}