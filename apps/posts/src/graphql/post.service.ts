import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  private readonly posts: Post[] = [
    {
      id: 1,
      titre: 'post 1',
      authorId: '1',
    },
    {
      id: 2,
      titre: 'post 2',
      authorId: '1',
    },
    {
      id: 3,
      titre: 'post 1.2',
      authorId: '2',
    },
    {
      id: 4,
      titre: 'post 3',
      authorId: '1',
    }
  ];

  findOne(id: number) {
    return this.posts.find(p => p.id === id);
  }

  forAuthor(id: string) {
    return this.posts.filter(p => p.authorId === id);
  }

  all() {
    return this.posts;
  }

}
