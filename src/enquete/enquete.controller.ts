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
@Controller('enquete')
export class EnqueteController {
  constructor(private enqueteService: EnqueteService) {}

  @Get()
  findAll(): string {
    return 'Enquestes retornadas com SUCESSO!';
  }
  @Post()
  async createEnquete(@Body() data: CreateEnqueteDto) {
    return this.enqueteService.createEnquete(data);
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
