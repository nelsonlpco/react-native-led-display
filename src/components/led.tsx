import React from 'react';
import { View } from 'react-native';

type props = {
  color: string;
  width: number;
  height: number;
  active: boolean;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const Led = ({
  color,
  width,
  height,
  active,
  left,
  right,
  top,
  bottom,
}: props) => {
  return (
    <View
      style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        position: 'absolute',
        backgroundColor: active ? color : '#FBF9F9',
        width: width,
        height: height,
        borderRadius: 12,
      }}
    />
  );
};

export default Led;
