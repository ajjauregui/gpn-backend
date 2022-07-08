import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { FlightEntity } from './flight.entity';
import { FlightService } from './flight.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('flights')
@Controller('flights')
export class FlightController {
  constructor(
    @Inject('FlightService')
    private readonly _flightService: FlightService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get flights data' })
  findAll(): Promise<FlightEntity[]> {
    return this._flightService.findAll();
  }
  @Post('/byorigin')
  @ApiOperation({
    summary: 'Get flights data by city of origin and city of destination',
  })
  async findByOrigin(
    @Body() fligthData: { origin: string; destination: string },
  ): Promise<FlightEntity[]> {
    return await this._flightService.findByOrigin(fligthData);
  }
}
