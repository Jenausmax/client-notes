import Entity from '@/models/Entity';
import Note from '@/models/Note';
import Tag from '@/models/Tag';

export default interface User extends Entity
{
  login: string;
  password: string;
  fullName: string;
  dateRegistration: Date;
  dateOfBirdth: Date;

  notes: Array<Note>;
  tags: Array<Tag>;
}
