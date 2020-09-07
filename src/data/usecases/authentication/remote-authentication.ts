import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AuthenticationParams, Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const htppResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (htppResponse.statusCode) {
      case HttpStatusCode.ok: return htppResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
