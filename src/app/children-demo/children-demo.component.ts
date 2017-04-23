import { Component } from '@angular/core';

@Component({
  selector: 'children-demo',
  templateUrl: './children-demo.component.html'
})
export class ChildrenDemoComponent {
  public items: Array<any> = [
    {
      id: 10,
      text: 'Austria',
      children: [
        {
          id: 54, text: 'Vienna',
          children: [
            { id: 54, text: 'Vienna' }
          ]
        }
      ]
    },
    {
      id: 10,
      text: 'Belgium',
      children: [
        { id: 2, text: 'Antwerp' },
        { id: 9, text: 'Brussels' }
      ]
    },
    {
      id: 10,
      text: 'Bulgaria',
      children: [
        { id: 48, text: 'Sofia' }
      ]
    },
    {
      id: 10,
      text: 'Croatia',
      children: [
        { id: 58, text: 'Zagreb' }
      ]
    },
    {
      id: 10,
      text: 'Czech Republic',
      children: [
        { id: 42, text: 'Prague' }
      ]
    },
    {
      id: 10,
      text: 'Denmark',
      children: [
        { id: 13, text: 'Copenhagen' }
      ]
    },
    {
      id: 10,
      text: 'England',
      children: [
        { id: 6, text: 'Birmingham' },
        { id: 7, text: 'Bradford' },
        { id: 26, text: 'Leeds' },
        { id: 30, text: 'London' },
        { id: 34, text: 'Manchester' },
        { id: 47, text: 'Sheffield' }
      ]
    },
    {
      id: 10,
      text: 'Finland',
      children: [
        { id: 25, text: 'Helsinki' }
      ]
    },
    {
      id: 10,
      text: 'France',
      children: [
        { id: 35, text: 'Marseille' },
        { id: 40, text: 'Paris' }
      ]
    },
    {
      id: 10,
      text: 'Germany',
      children: [
        { id: 5, text: 'Berlin' },
        { id: 8, text: 'Bremen' },
        { id: 12, text: 'Cologne' },
        { id: 14, text: 'Dortmund' },
        { id: 15, text: 'Dresden' },
        { id: 17, text: 'Düsseldorf' },
        { id: 18, text: 'Essen' },
        { id: 19, text: 'Frankfurt' },
        { id: 23, text: 'Hamburg' },
        { id: 24, text: 'Hannover' },
        { id: 27, text: 'Leipzig' },
        { id: 37, text: 'Munich' },
        { id: 50, text: 'Stuttgart' }
      ]
    },
    {
      id: 10,
      text: 'Greece',
      children: [
        { id: 3, text: 'Athens' }
      ]
    },
    {
      id: 10,
      text: 'Hungary',
      children: [
        { id: 11, text: 'Budapest' }
      ]
    },
    {
      id: 10,
      text: 'Ireland',
      children: [
        { id: 16, text: 'Dublin' }
      ]
    },
    {
      id: 10,
      text: 'Italy',
      children: [
        { id: 20, text: 'Genoa' },
        { id: 36, text: 'Milan' },
        { id: 38, text: 'Naples' },
        { id: 39, text: 'Palermo' },
        { id: 44, text: 'Rome' },
        { id: 52, text: 'Turin' }
      ]
    },
    {
      id: 10,
      text: 'Latvia',
      children: [
        { id: 43, text: 'Riga' }
      ]
    },
    {
      id: 10,
      text: 'Lithuania',
      children: [
        { id: 55, text: 'Vilnius' }
      ]
    },
    {
      id: 10,
      text: 'Netherlands',
      children: [
        { id: 1, text: 'Amsterdam' },
        { id: 45, text: 'Rotterdam' },
        { id: 51, text: 'The Hague' }
      ]
    },
    {
      id: 10,
      text: 'Poland',
      children: [
        { id: 29, text: 'Łódź' },
        { id: 31, text: 'Kraków' },
        { id: 41, text: 'Poznań' },
        { id: 56, text: 'Warsaw' },
        { id: 57, text: 'Wrocław' }
      ]
    },
    {
      id: 10,
      text: 'Portugal',
      children: [
        { id: 28, text: 'Lisbon' }
      ]
    },
    {
      id: 10,
      text: 'Romania',
      children: [
        { id: 10, text: 'Bucharest' }
      ]
    },
    {
      id: 10,
      text: 'Scotland',
      children: [
        { id: 21, text: 'Glasgow' }
      ]
    },
    {
      id: 10,
      text: 'Spain',
      children: [
        { id: 4, text: 'Barcelona' },
        { id: 32, text: 'Madrid' },
        { id: 33, text: 'Málaga' },
        { id: 46, text: 'Seville' },
        { id: 53, text: 'Valencia' },
        { id: 59, text: 'Zaragoza' }
      ]
    },
    {
      id: 10,
      text: 'Sweden',
      children: [
        { id: 22, text: 'Gothenburg' },
        { id: 49, text: 'Stockholm' }
      ]
    }
  ];
  private value: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
}
