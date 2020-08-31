export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tente novamnete em breve.')
    this.name = 'UnexpectedError'
  }
}
