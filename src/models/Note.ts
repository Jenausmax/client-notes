import Entity from '@/models/Entity';

export default interface iNote extends Entity
{
  description: string;
  date: Date;
  name: string;

}
