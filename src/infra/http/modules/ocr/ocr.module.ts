import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { OcrController } from './ocr.controller';
import { SaveOcrUseCase } from 'src/modules/ocr/useCases/SaveOcrUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [OcrController],
  providers: [SaveOcrUseCase],
})
export class OcrModule {}
