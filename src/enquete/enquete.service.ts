import { Injectable } from '@nestjs/common';
import { CreateEnqueteDto } from './dto/create-enquete.dto';

@Injectable()
export class EnqueteService {
  createEnquete(data: CreateEnqueteDto) {
    return `Enquete ${data.titulo} criada com Sucesso`;
  }
}
