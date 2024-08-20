import { IsNotEmptyCustom } from 'src/infra/http/classValidator/decorators/IsNotEmptyCustom';
import { IsStringCustom } from 'src/infra/http/classValidator/decorators/IsStringCustom';

export class CreateOcrBody {
  @IsNotEmptyCustom()
  @IsStringCustom()
  image: string;

  @IsNotEmptyCustom()
  @IsStringCustom()
  userId: string;
}
