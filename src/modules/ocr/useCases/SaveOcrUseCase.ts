import { Injectable } from '@nestjs/common';
import { OcrRepository } from '../repositories/OcrRepository';
import { Ocr } from '../entities/Ocr';
import { CreateOcrUseCase } from './CreateOcrUseCase';
import { UserRepository } from '../../user/repositories/UserRepository';
import { UserNotExistsException } from '../exceptions/UserNotExistsException';
import { TextOcrNull } from '../exceptions/TextOcrNull';
import { TextOcrUndefined } from '../exceptions/TextOcrUndefined';

interface SaveOcrRequest {
  image: string;
  userId: string;
}

@Injectable()
export class SaveOcrUseCase {
  constructor(
    private ocrRepository: OcrRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({ image, userId }: SaveOcrRequest) {
    const text = await new CreateOcrUseCase().execute(image);

    if (text == null) {
      throw new TextOcrNull();
    } else if (text == undefined) {
      throw new TextOcrUndefined();
    }

    const userExists = await this.userRepository.findById(userId);

    if (!userExists) {
      throw new UserNotExistsException();
    }

    const ocrExists = await this.ocrRepository.findByImage(image);

    if (ocrExists) return ocrExists;

    const ocr = new Ocr({
      image,
      text,
      userId,
    });

    await this.ocrRepository.create(ocr);

    return ocr;
  }
}
