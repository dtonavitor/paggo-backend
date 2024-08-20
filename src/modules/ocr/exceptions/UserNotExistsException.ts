import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appException';

export class UserNotExistsException extends AppException {
  constructor() {
    super({
      message: 'Este usuário não existe',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
