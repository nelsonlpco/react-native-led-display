import React from 'react';
import { View } from 'react-native';
import Led from './led';
import DisplayController from '../displayController';

type Props = {
  width: number;
  digite?: number;
};

const Container = ({ width, digite }: Props) => {
  const displayController = new DisplayController(width, 'red');

  function buildDipslay() {
    const display =
      digite !== undefined
        ? displayController.setDigite(digite)
        : displayController.getDisplaySchema();
    let index = 0;
    return display.map((model) => {
      index++;
      return (
        <Led
          key={index}
          color={model.color}
          active={model.on}
          height={model.height}
          width={model.width}
          bottom={model.bottom}
          top={model.top}
          left={model.left}
          right={model.right}
        />
      );
    });
  }

  return (
    <View
      style={{
        backgroundColor: 'black',
        borderRadius: 12,
        width: width,
        height: displayController.height,
        minWidth: 50,
        padding: 5,
        minHeight: 100,
      }}
    >
      <View>{buildDipslay()}</View>
    </View>
  );
};

export default Container;
