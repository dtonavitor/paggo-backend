import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  minLength,
} from 'class-validator';
import { ExceptionMessages } from '../data/ExceptionMessages';

export function MinLengthCustom(
  min: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'MinLengthCustom',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [min],
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          return minLength(value, min);
        },
        defaultMessage(validationArguments: ValidationArguments) {
          return ExceptionMessages.MinLength(validationArguments.property, min);
        },
      },
    });
  };
}
