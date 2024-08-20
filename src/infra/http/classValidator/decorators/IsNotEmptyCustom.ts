import {
  registerDecorator,
  ValidationOptions,
  isNotEmpty,
  ValidationArguments,
} from 'class-validator';
import { ExceptionMessages } from '../data/ExceptionMessages';

export function IsNotEmptyCustom(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'IsNotEmptyCustom',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          return isNotEmpty(value);
        },
        defaultMessage(validationArguments: ValidationArguments) {
          return ExceptionMessages.IsNotEmpty(validationArguments.property);
        },
      },
    });
  };
}
