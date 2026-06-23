import Ajv from 'ajv'

const ajv = new Ajv()

export function validateSchema(schema, responseBody) {
  const validate = ajv.compile(schema)
  const isValid = validate(responseBody)

  expect(isValid, JSON.stringify(validate.errors)).to.be.true
}