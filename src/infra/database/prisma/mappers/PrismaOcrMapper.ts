import { Ocr as OcrRaw } from '@prisma/client';
import { Ocr } from 'src/modules/ocr/entities/Ocr';

export class PrismaOcrMapper {
  static toPrisma({ id, image, text, createdAt, userId }: Ocr): OcrRaw {
    return {
      id,
      image,
      text,
      createdAt,
      userId,
    };
  }

  static toDomain({ id, createdAt, text, userId, image }: OcrRaw): Ocr {
    return new Ocr(
      {
        image,
        text,
        createdAt,
        userId,
      },
      id,
    );
  }
}
