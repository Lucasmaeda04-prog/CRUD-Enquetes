import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EnqueteModule } from './enquete/enquete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enquete } from './enquete/entities/enquete.entity';
@Module({
  imports: [
    EnqueteModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'pguser',
      password: 'pgpassword',
      database: 'db_enquetes',
      entities: [Enquete],
      synchronize: true,
      logging: true, // Habilita os logs
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
