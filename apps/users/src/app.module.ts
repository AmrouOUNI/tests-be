import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/user.resolver';
import { UserService } from './graphql/user.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [
    UserResolver,
    UserService,
  ],
})
export class AppModule {}
