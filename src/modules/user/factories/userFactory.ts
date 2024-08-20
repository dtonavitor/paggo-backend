import { User } from '../entities/User';

type Override = Partial<User>;

export const makeUser = ({ id, ...override }: Override) => {
  return new User(
    {
      email: 'email@email.com',
      password: '1234',
      ...override,
    },
    id,
  );
};
