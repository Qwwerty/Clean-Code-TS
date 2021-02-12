export class ServerError extends Error {
  constructor () {
    super('Internal server eror')
    this.name = 'ServerError'
  }
}
