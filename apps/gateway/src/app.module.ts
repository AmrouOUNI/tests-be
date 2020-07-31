import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'users', url: process.env.GRAPHQL_USERS || 'http://localhost:3001/graphql' },
          { name: 'posts', url: process.env.GRAPHQL_POSTS || 'http://localhost:3002/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  onModuleInit() {
    this.logger.verbose('🚀 GraphQL Playground available at:');
    this.logger.verbose(`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/graphql`);
  }
}
