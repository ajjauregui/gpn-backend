import { Inject, Injectable } from '@nestjs/common';
import { FlightEntity } from './flight.entity';
import { FlightRepository } from './flight.repository';
@Injectable()
export class FlightService {
  constructor(
    @Inject('FlightRepository')
    private readonly _flightRepository: FlightRepository,
  ) {}

  findAll(): Promise<FlightEntity[]> {
    return this._flightRepository.find();
  }
  findByOrigin(fligthData): Promise<FlightEntity[]> {
    return this._flightRepository.find({
      origin: fligthData.origin,
      destination: fligthData.destination,
    });
  }
}
