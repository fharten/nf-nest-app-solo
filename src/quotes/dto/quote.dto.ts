import { IsNotEmpty } from "class-validator";

export class QuoteDto {
  @IsNotEmpty()
  quote: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  year: number;
}
