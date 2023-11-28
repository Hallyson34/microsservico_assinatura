import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanModule } from './app/plan/plan.module';
import { SignatureModule } from './app/signature/signature.module';
import { AuthenticationModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [PlanModule, SignatureModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        );
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        next();
      })
      .forRoutes('*');
  }
}
