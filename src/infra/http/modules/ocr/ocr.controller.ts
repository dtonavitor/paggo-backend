import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SaveOcrUseCase } from 'src/modules/ocr/useCases/SaveOcrUseCase';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';
import { CreateOcrBody } from './dtos/createOcrBody';
import { OcrViewModel } from './viewModel/ocrViewModel';

@Controller('/ocr')
export class OcrController {
  constructor(private saveOcrUseCase: SaveOcrUseCase) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOcr(@Body() body: CreateOcrBody) {
    const { image, userId } = body;

    const ocr = await this.saveOcrUseCase.execute({
      image,
      userId,
    });

    return OcrViewModel.toHttp(ocr);
  }
}
