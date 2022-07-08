import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightController } from './flight.controller';
import { FlightRepository } from './flight.repository';
import { FlightService } from './flight.service';

@Module({
  imports: [TypeOrmModule.forFeature([FlightRepository])],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
