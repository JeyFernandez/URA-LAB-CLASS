import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly repo: AppService) {}

  @Get()
  getResultados() {
    const resultados = this.repo.getResultados();

    console.log(resultados);

    const data = {
      data: resultados,
    };

    return data;
  }

  @Get('/:id')
  getSuma(@Param('id', ParseIntPipe) id: number) {
    const resultado = this.repo.getResultado(id);
    const data = {
      data: resultado,
    };

    return data;
  }

  @Post('/sumar')
  sumar(@Body() payload: any) {
    return this.repo.sumar(payload);
  }
}
