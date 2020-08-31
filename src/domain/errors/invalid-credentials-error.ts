export class InvalidCredentialsError extends Error {
  constructor () {
    super('Crdenciais inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
