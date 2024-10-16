import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EnqueteService } from './enquete.service';
import { CreateEnqueteDto } from './dto/create-enquete.dto';
import { Enquete } from './entities/enquete.entity';
@Controller('enquete')
export class EnqueteController {
  constructor(private enqueteService: EnqueteService) {}

  @Get()
  async findAll(): Promise<Enquete[]> {
    return await this.enqueteService.findAll();
  }
  @Post()
  async createEnquete(
    @Body() data: CreateEnqueteDto,
  ): Promise<CreateEnqueteDto> {
    console.log('aqui');
    return await this.enqueteService.createEnquete(data);
  }
  @Patch(':id')
  async updateEnquete(@Body() data: CreateEnqueteDto, @Param('id') id: number) {
    return await this.enqueteService.updateEnquete(data, id);
  }
  @Delete(':id')
  async removeEnquete(@Param('id') id: number) {
    console.log('aqui');
    return await this.enqueteService.removeEnquete(id);
  }
}
