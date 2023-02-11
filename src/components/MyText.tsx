import React, { ReactNode, FC } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import R from '../res/R';

interface MyTextProps {
  font?: 'Regular' | 'Bold';
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const MyText: FC<MyTextProps> = ({
  font = 'Regular',
  size = R.fontSizes.fs14,
  color = 'black',
  style,
  children,
  ...otherProps
}) => {
  const fontFamily =
    font === 'Regular'
      ? R.fonts.IRANSansMobile
      : font === 'Bold'
      ? R.fonts.IRANSansMobile_Bold
      : R.fonts.IRANSansMobile_Light;

  return (
    <Text
      style={[{ fontFamily, fontSize: size, color }, style]}
      allowFontScaling={false}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default MyText;
