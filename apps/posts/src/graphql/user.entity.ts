import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(type => ID)
  @Directive('@external')
  public id: string;

  @Field(type => [Post], { complexity: 1 })
  public posts: Post[];

  constructor(post: Partial<User>) {
    Object.assign(this, post);
  }
}
