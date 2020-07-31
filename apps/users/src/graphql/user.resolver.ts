import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  

  constructor(private userService: UserService) {}

  @Query(returns => User, { nullable: true })
  getUser(@Args('id') id: string) {
    return this.userService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findById(reference.id);
  }
}
