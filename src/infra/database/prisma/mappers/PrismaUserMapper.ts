import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({ createdAt, id, email, password }: User): UserRaw {
    return {
      createdAt,
      id,
      email,
      password,
    };
  }

  static toDomain({ id, createdAt, email, password }: UserRaw): User {
    return new User(
      {
        createdAt,
        email,
        password,
      },
      id,
    );
  }
}
