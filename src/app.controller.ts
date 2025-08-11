import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getSpa(@Res() res: Response) {
    res.sendFile(join(__dirname, 'public', 'index.html'));
  }
}
