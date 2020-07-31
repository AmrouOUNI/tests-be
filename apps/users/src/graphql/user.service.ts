import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      nom: 'test',
    },
    {
      id: '2',
      nom: 'test2',
    },
  ];

  findById(id: string) {
    return this.users.find(u => u.id === id);
  }

}
