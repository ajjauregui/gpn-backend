import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('flights')
export class FlightEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  origin: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  destination: string;

  @Column({ type: 'timestamp', nullable: false })
  departure_date: Date;

  @Column({ type: 'timestamp', nullable: false })
  arrival_date: Date;

  @Column({ type: 'varchar', default: 'roundtrip', length: 9, nullable: false })
  type: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: false })
  price: number;
}
