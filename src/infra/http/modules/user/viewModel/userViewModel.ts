import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
