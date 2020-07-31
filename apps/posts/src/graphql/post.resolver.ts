import { Query, Args, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { User } from './user.entity';

@Resolver(of => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(returns => Post)
  public getPost(@Args('id') id: number) {
    return this.postService.findOne(id);
  }

  @Query(returns => [Post])
  public getPosts() {
    return this.postService.all();
  }

  @ResolveField(of => User)
  public user(@Parent() post) {
    return { __typename: 'User', id: post.authorId };
  }
}
