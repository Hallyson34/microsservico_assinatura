import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AuthenticationService } from './autenticacao.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './autenticacao.guard';

@Module({
  imports: [HttpModule],
  providers: [
    AuthenticationService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
