import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { View } from './View';
import { Tag } from './Tag';

@Entity()
export class Post extends BaseEntity {
  @Column('text', { nullable: false })
  title: string;
  @Column('text')
  path: string;
  @Column('text')
  summary: string;
  @OneToMany(() => View, (view) => view.post, { eager: true })
  views: View[];
  @ManyToMany(() => Tag, (tag) => tag.posts, {
    eager: true,
  })
  @JoinTable()
  tags: Tag[];
}
