import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enquete {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id_enquete?: number;

  @Column({
    length: 256,
    nullable: false,
  })
  titulo: string;

  @Column({
    type: 'text',
    array: true,
  })
  respostas: string[];
}
