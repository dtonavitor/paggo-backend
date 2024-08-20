import { Ocr } from 'src/modules/ocr/entities/Ocr';

export class OcrViewModel {
  static toHttp(ocr: Ocr) {
    return {
      id: ocr.id,
      text: ocr.text,
      image: ocr.image,
      createdAt: ocr.createdAt,
    };
  }
}
