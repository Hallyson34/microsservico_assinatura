import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

interface KeycloakUserInfoResponse {
  sub: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}
interface User {
  id: string;
  username: string;
}

export class AuthenticationError extends Error {}

@Injectable()
export class AuthenticationService {
  private readonly baseURL: string;
  private readonly realm: string;
  logger = new Logger(AuthenticationService.name);

  constructor(private httpService: HttpService) {
    this.baseURL = 'https://auth.facoffee.hsborges.dev';
    this.realm = 'facoffee';
  }

  async authenticate(accessToken: string): Promise<User> {
    const url = `${this.baseURL}/realms/${this.realm}/protocol/openid-connect/userinfo`;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<KeycloakUserInfoResponse>(url, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }),
      );

      return {
        id: data.sub,
        username: data.preferred_username,
      };
    } catch (e) {
      this.logger.error(e);
      throw new AuthenticationError(e.message);
    }
  }
}
