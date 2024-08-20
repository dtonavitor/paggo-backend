import { UserExistsException } from '../exceptions/UserExistsException';
import { makeUser } from '../factories/userFactory';
import { UserRepositoryInMemory } from '../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './createUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      password: '123123',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('should be able to throw an error when user already exists', async () => {
    const user = makeUser({});

    userRepositoryInMemory.users = [user];

    expect(async () => {
      await createUserUseCase.execute({
        email: user.email,
        password: '123123',
      });
    }).rejects.toThrow(UserExistsException);
  });
});
