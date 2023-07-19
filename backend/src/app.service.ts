import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object[] {
    const data = [
      {
        id: 1,
        name: 'Sanadamali',
      },
      {
        id: 2,
        name: 'Ed',
      },
      {
        id: 3,
        name: 'Paul',
      },
    ];
    return data;
  }
}
