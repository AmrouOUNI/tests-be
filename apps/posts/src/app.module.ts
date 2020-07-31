import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { User } from './graphql/user.entity';
import { PostResolver } from './graphql/post.resolver';
import { UserResolver } from './graphql/user.resolver';
import { PostService } from './graphql/post.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [
    PostResolver,
    UserResolver,
    PostService,
  ],
})
export class AppModule {}
