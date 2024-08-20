import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {
  DetectDocumentTextCommand,
  TextractClient,
} from '@aws-sdk/client-textract';

dotenv.config();

@Injectable()
export class CreateOcrUseCase {
  async execute(image: string): Promise<string | null | undefined> {
    try {
      const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      const secretAccessKey = process.env.AWS_SECRET_KEY;

      if (!accessKeyId || !secretAccessKey) {
        console.log('AWS credentials are not set');
        throw new Error('AWS credentials are not set');
      }

      const client = new TextractClient({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey,
        },
      });

      const binaryString = atob(image);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const params = {
        Document: {
          Bytes: bytes,
        },
        FeatureTypes: ['TABLES', 'FORMS'],
      };

      const command = new DetectDocumentTextCommand(params);
      const data = await client.send(command);

      if (data?.Blocks) {
        const lineTexts = data.Blocks.filter(
          (block) => block.BlockType === 'LINE',
        ).map((lineBlock) => lineBlock.Text);
        return lineTexts.join('\n');
      }

      return undefined;
    } catch (error) {
      return null;
    }
  }
}
