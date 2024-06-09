import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baseUrl',
})
export class BaseUrlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    try {
      const url = new URL(value);
      return `${url.protocol}//${url.hostname}`;
    } catch (e) {
      return value; // In case the input is not a valid URL, return the original value
    }
  }
}
