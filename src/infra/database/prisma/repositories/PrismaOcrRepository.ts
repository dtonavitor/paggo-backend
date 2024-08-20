import { Injectable } from '@nestjs/common';
import { OcrRepository } from 'src/modules/ocr/repositories/OcrRepository';
import { PrismaService } from '../prisma.service';
import { Ocr } from 'src/modules/ocr/entities/Ocr';
import { PrismaOcrMapper } from '../mappers/PrismaOcrMapper';

@Injectable()
export class PrismaOcrRepository implements OcrRepository {
  constructor(private prisma: PrismaService) {}

  async create(ocr: Ocr): Promise<void> {
    const ocrRaw = PrismaOcrMapper.toPrisma(ocr);

    await this.prisma.ocr.create({
      data: ocrRaw,
    });
  }

  async findByImage(image: string): Promise<Ocr | null> {
    const ocr = await this.prisma.ocr.findUnique({
      where: {
        image,
      },
    });

    if (!ocr) return null;

    return PrismaOcrMapper.toDomain(ocr);
  }
}
