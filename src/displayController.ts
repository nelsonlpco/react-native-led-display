import DisplayModel from './displayModel';

export default class DisplayController {
  displaySize: number;
  height: number;
  volume: number;
  ledHeight: number;
  ledWidth: number;
  color: string;

  digits = [
    0b01110111, 0b01000100, 0b00111110, 0b01101110, 0b01001101, 0b01101011,
    0b01111001, 0b01000110, 0b01111111, 0b01001111,
  ];

  constructor(displaySize: number, color: string) {
    this.displaySize = displaySize;
    this.height = displaySize + displaySize / 2;
    this.volume = displaySize / 8 - 5;
    this.ledHeight = this.height / 2 - 5;
    this.ledWidth = displaySize - 2 * this.volume - 10;
    this.color = color;
  }

  getDisplaySchema(): DisplayModel[] {
    return [
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.ledHeight,
        width: this.volume,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.volume,
        width: this.ledWidth,
        left: this.volume,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.ledHeight,
        width: this.volume,
        right: 0,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.volume,
        width: this.ledWidth,
        left: this.volume,
        top: this.ledHeight - this.volume / 2,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.ledHeight,
        width: this.volume,
        top: this.ledHeight,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.volume,
        width: this.ledWidth,
        left: this.volume,
        top: 2 * this.ledHeight - this.volume,
      }),
      new DisplayModel({
        color: this.color,
        on: false,
        height: this.ledHeight,
        width: this.volume,
        right: 0,
        top: this.ledHeight,
      }),
    ];
  }

  setDigite(digite: number): DisplayModel[] {
    let currentBit = 0b00000001;
    let digitBitMap = this.digits[digite];

    const ledSchema = this.getDisplaySchema();
    let result = [];

    for (let led of ledSchema) {
      const on = (digitBitMap! & currentBit) > 0;
      currentBit = currentBit << 1;

      result.push(
        new DisplayModel({
          color: led.color,
          height: led.height,
          width: led.width,
          on: on,
          bottom: led.bottom,
          left: led.left,
          right: led.right,
          top: led.top,
        })
      );
    }

    return result;
  }
}
