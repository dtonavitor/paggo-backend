import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { OcrRepository } from 'src/modules/ocr/repositories/OcrRepository';
import { PrismaOcrRepository } from './prisma/repositories/PrismaOcrRepository';

@Module({
  providers: [
    PrismaService,
    // Quando tiver a classe UserRepository injetar a classe PrismaUserRepository
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: OcrRepository,
      useClass: PrismaOcrRepository,
    },
  ],
  exports: [UserRepository, OcrRepository],
})
export class DatabaseModule {}
