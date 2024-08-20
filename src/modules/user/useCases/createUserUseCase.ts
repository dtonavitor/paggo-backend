import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';
import { hash } from 'bcrypt';
import { UserExistsException } from '../exceptions/UserExistsException';

interface CreateUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: CreateUserRequest) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new UserExistsException();
    }

    const user = new User({
      email,
      password: await hash(password, 10),
    });

    await this.userRepository.create(user);

    return user;
  }
}
