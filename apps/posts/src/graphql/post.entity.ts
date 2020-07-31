import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  
  @Field(type => ID)
  public id: number;
  
  public titre: string;

  public authorId: string;

  @Field(type => User, { nullable: false})
  public user?: User;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}
