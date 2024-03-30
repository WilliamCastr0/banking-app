import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideAccount',
  standalone: true,
})
export class hideAccountPipe implements PipeTransform {
  transform(value: string): string {
    const firstAccount = value?.substring(0, 2);
    const lastAccount = value?.substring(value?.length, value?.length - 2);

    const asterisks = '*'.repeat(7);
    const transformedString = `${firstAccount}${asterisks}${lastAccount}`;

    return transformedString;
  }
}
