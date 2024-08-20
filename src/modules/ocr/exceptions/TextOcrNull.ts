import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appException';

export class TextOcrNull extends AppException {
  constructor() {
    super({
      message: 'O processo de OCR falhou.',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
