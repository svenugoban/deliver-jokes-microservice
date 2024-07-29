/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private jokes = {
    dad: ['Dad joke 1', 'Dad joke 2'],
    pun: ['Pun joke 1', 'Pun joke 2'],
  };

  getRandomJoke(type: string): string {
    const jokes = this.jokes[type] || [];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  getJokeTypes(): string[] {
    return Object.keys(this.jokes);
  }
}
