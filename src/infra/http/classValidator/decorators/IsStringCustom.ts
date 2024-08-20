import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isString,
} from 'class-validator';
import { ExceptionMessages } from '../data/ExceptionMessages';

export function IsStringCustom(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'IsStringCustom',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isString(value);
        },
        defaultMessage(validationArguments: ValidationArguments) {
          return ExceptionMessages.IsString(validationArguments.property);
        },
      },
    });
  };
}
