import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(type => ID)
  public id: string;
  public nom: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
