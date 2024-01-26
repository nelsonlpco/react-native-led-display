export default class DisplayModel {
  width: number;
  height: number;
  color: string;
  on: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  constructor({
    width,
    height,
    color,
    on,
    top,
    bottom,
    left,
    right,
  }: {
    width: number;
    height: number;
    color: string;
    on: boolean;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.on = on;
    this.bottom = bottom;
    this.top = top;
    this.left = left;
    this.right = right;
  }
}
