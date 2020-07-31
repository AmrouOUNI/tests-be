import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { User } from './user.entity';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField(of => [Post])
  public posts(@Parent() user: User) {
    return this.postService.forAuthor(user.id);
  }
}
