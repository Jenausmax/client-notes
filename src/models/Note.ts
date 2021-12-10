import Entity from '@/models/Entity';
import Tag from '@/models/Tag';

export default interface Note extends Entity
{
  description: string;
  date: Date;

  tags: Array<Tag>;
}
