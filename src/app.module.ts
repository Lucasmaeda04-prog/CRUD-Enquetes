import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnqueteModule } from './enquete/enquete.module';

@Module({
  imports: [EnqueteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
