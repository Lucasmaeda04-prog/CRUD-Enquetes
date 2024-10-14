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
  async createEnquete(@Body() data: CreateEnqueteDto): Promise<Enquete> {
    return await this.enqueteService.createEnquete(data);
  }
  @Patch()
  updateEnquete(): string {
    return 'Enquete atualizada com sucesso';
  }
  @Delete(':id')
  removeEnquete(@Param('id') id): string {
    return `Enquete ${id} removido`;
  }
}
