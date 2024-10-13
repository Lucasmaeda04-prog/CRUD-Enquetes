import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnqueteModule } from './enquete/enquete.module';

@Module({
  imports: [EnqueteModule],
  controllers: [AppController],
})
export class AppModule {}
