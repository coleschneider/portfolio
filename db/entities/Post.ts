import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { View } from './View';
import { Tag } from './Tag';
import { getConnection } from '@db/client';

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

  async getViewCount() {
    const datasource = await getConnection();
    const viewRepo = datasource.getRepository(View);
    return viewRepo
      .createQueryBuilder('view')
      .where('view.postId = :postId', { postId: this.id })
      .getCount();
  }
  async viewPost() {
    const datasource = await getConnection();
    const viewRepo = datasource.getRepository(View);
    const view = await viewRepo.create().save();
    this.views = [...this.views, view];
    await this.save();
  }
}
