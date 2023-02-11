import React from 'react';
import { StyleSheet, Pressable, TextStyle, ViewStyle } from 'react-native';

import R from '../res/R';
import { MyText } from '../components';

interface MyButtonProps {
  title?: string;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress: () => void;
}
function MyButton({
  title = 'انتخاب کن',
  backgroundColor = R.colors.primary,
  onPress,
  containerStyle,
  titleStyle,
}: MyButtonProps): JSX.Element {
  return (
    <Pressable onPress={onPress} style={[styles.tochable, { backgroundColor }, containerStyle]}>
      <MyText style={[styles.title, titleStyle]} color="white">
        {title}
      </MyText>
    </Pressable>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  tochable: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 50,
  },

  title: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
