import { ValidateUserUseCase } from './validateUserUseCase';
import { UserRepositoryInMemory } from 'src/modules/user/repositories/UserRepositoryInMemory';
import { hash } from 'bcrypt';
import { makeUser } from 'src/modules/user/factories/userFactory';
import { AuthValuesIncorrectException } from '../exceptions/AuthValuesIncorrectException';

let validateUserUseCase: ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Validate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to return a user when credentials are correct', async () => {
    const userPassword = '1234';
    const user = makeUser({
      password: await hash(userPassword, 10),
    });

    userRepositoryInMemory.users = [user];

    const result = await validateUserUseCase.execute({
      email: user.email,
      password: userPassword,
    });

    expect(result).toEqual(user);
  });

  it('should be able to throw an error when credentials are incorrect', async () => {
    const userPassword = '1234';
    const user = makeUser({
      password: await hash(userPassword, 10),
    });

    userRepositoryInMemory.users = [user];

    expect(async () => {
      await validateUserUseCase.execute({
        email: 'incorrect@gmail.com',
        password: userPassword,
      });
    }).rejects.toThrow(AuthValuesIncorrectException);

    expect(async () => {
      await validateUserUseCase.execute({
        email: user.email,
        password: 'incorrect',
      });
    }).rejects.toThrow(AuthValuesIncorrectException);
  });
});
