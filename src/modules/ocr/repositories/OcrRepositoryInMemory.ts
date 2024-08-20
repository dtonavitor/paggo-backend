import { Ocr } from '../entities/Ocr';
import { OcrRepository } from './OcrRepository';

export class OcrRepositoryInMemory implements OcrRepository {
  public ocrs: Ocr[] = [];

  async create(ocr: Ocr): Promise<void> {
    this.ocrs.push(ocr);
  }

  async findByImage(image: string): Promise<Ocr | null> {
    const ocr = this.ocrs.find((ocr) => ocr.image === image);

    if (!ocr) return null;

    return ocr;
  }
}
