import { Ocr } from '../entities/Ocr';

export abstract class OcrRepository {
  abstract create(ocr: Ocr): Promise<void>;
  abstract findByImage(image: string): Promise<Ocr | null>;
}
