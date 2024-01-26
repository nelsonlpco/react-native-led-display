import React from 'react';
import Container from './components/container';

type props = {
  width: number;
  digite?: number;
};

export function NumericLedDisplay({ width, digite }: props) {
  return <Container width={width} digite={digite} />;
}
