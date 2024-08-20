import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appException';

export class TextOcrUndefined extends AppException {
  constructor() {
    super({
      message: 'Nenhum texto encontrado na imagem.',
      status: HttpStatus.NO_CONTENT,
    });
  }
}
