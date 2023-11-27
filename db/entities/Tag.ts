import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Post } from './Post';
@Entity()
export class Tag extends BaseEntity {
  @ManyToMany(() => Post, (post) => post.tags)
  posts: Post[];
  @Column('text', { nullable: false })
  name: string;
}
