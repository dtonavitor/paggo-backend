export const ExceptionMessages = {
  IsNotEmpty: (property: string) => `O campo ${property} é obrigatório`,
  IsEmail: (property: string) => `O campo ${property} deve ser um email`,
  IsString: (property: string) =>
    `O campo ${property} deve estar no formato string`,
  MinLength: (property: string, min: number) =>
    `O campo ${property} deve ter no mínimo ${min} caracteres`,
};
