import { Injectable } from "@nestjs/common";
import { QuotesService } from "./quotes/quotes.service";

@Injectable()
export class AppService {
  constructor(private readonly quotesService: QuotesService) {}

  generateMessage(): string {
    return "My Quote: ";
  }
}
