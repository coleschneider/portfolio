import 'reflect-metadata';
import { Column, Entity, ManyToOne, type Relation } from 'typeorm';

import { BaseEntity } from './BaseEntity';
import { Post } from './Post';
@Entity()
export class View extends BaseEntity {
  @ManyToOne(() => Post, (post) => post.views)
  post: Relation<Post>;
}
