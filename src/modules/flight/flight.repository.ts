import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { FlightEntity } from './flight.entity';

@Injectable()
@EntityRepository(FlightEntity)
export class FlightRepository extends Repository<FlightEntity> {}
