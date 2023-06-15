import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Arreglo para registrar los resultados de las sumas
  resultados: object[] = [];

  getResultados(): object[] {
    return this.resultados;
  }

  getResultado(id: number): object {
    return this.resultados[id];
  }

  sumar(payload: any) {
    const resultado = payload.a + payload.b;
    const data = {
      primer_numero: payload.a,
      segundo_numero: payload.b,
      resultado: resultado,
    };
    console.log(typeof data);
    this.resultados.push(data);
    return resultado;
  }
}
