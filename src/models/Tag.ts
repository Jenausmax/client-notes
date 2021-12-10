import Note from '@/models/Note';
import Entity from '@/models/Entity';

export default interface Tag extends Entity
{
  notes: Array<Note>;
}
