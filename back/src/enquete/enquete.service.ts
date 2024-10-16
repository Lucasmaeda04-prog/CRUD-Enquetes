import { Injectable } from '@nestjs/common';
import { CreateEnqueteDto } from './dto/create-enquete.dto';
import { UpdateEnqueteDto} from './dto/update-enquete.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Enquete } from './entities/enquete.entity';

@Injectable()
export class EnqueteService {
  constructor(
    @InjectRepository(Enquete)
    private repository: Repository<Enquete>,
  ) {}

  findAll(): Promise<Enquete[]> {
    return this.repository.find();
  }

  createEnquete(data: CreateEnqueteDto): Promise<Enquete> {
    const enquete = this.repository.create(data); // Cria uma nova instância de Enquete
    return this.repository.save(enquete); // Salva a nova instância  }
  }
  updateEnquete(data: UpdateEnqueteDto, id: number) {
    console.log(id);
    return this.repository.update(id, data);
  }

  removeEnquete(id: number) {
    console.log('aqui');
    return this.repository.delete(id);
  }
}
