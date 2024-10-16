import { PartialType } from '@nestjs/mapped-types';
import { CreateEnqueteDto } from './create-enquete.dto';

export class UpdateEnqueteDto extends PartialType(CreateEnqueteDto) {}
