import { Injectable } from '@nestjs/common';
import { CreateEnqueteDto } from './dto/create-enquete.dto';
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

  createEnquete(data: CreateEnqueteDto) {
    return this.repository.save(data);
  }
}
