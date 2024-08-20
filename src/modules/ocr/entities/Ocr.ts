import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface OcrSchema {
  id?: string;
  image: string;
  text: string;
  createdAt: Date;
  userId: string;
}

export class Ocr {
  private props: OcrSchema;
  private _id: string;

  constructor(props: Replace<OcrSchema, { createdAt?: Date }>, id?: string) {
    this._id = id || randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get image(): string {
    return this.props.image;
  }

  set image(image: string) {
    this.props.image = image;
  }

  get text(): string {
    return this.props.text;
  }

  set text(text: string) {
    this.props.text = text;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get userId(): string {
    return this.props.userId;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }
}
