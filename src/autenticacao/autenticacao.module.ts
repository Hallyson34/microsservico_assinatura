import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

//import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './autenticacao.service';

@Module({
    imports: [
        HttpModule,
    ],
    providers: [
        AuthenticationService,
    ],
    exports: [
        AuthenticationService,
    ],
})
export class AuthenticationModule {}