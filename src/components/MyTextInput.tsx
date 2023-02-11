import React, { forwardRef } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, TextInput } from 'react-native';
import { Input, InputProps } from '@rneui/themed';

import R from '../res/R';

interface MyTextInputProps extends InputProps {
  inputWrapper?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputOutterContainerStyle?: ViewStyle;
  style?: TextStyle;
  leftIconContainerStyle?: ViewStyle;
  errorMessage?: string;
}

const MyTextInput = forwardRef<React.PropsWithChildren<TextInput>, MyTextInputProps>(
  (
    {
      inputWrapper,
      inputContainerStyle,
      inputOutterContainerStyle,
      style,
      leftIconContainerStyle,
      errorMessage,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <View style={[styles.inputWrapper, inputWrapper]}>
        <Input
          ref={ref}
          containerStyle={[styles.inputOutterContainerStyle, inputOutterContainerStyle]}
          style={[styles.inputStyle, style]}
          inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
          leftIconContainerStyle={[styles.leftIconStyle, leftIconContainerStyle]}
          renderErrorMessage={false}
          inputStyle={{ minHeight: 30 }}
          errorStyle={{
            marginVertical: errorMessage ? R.dimensions.v5 : 0,
            fontSize: errorMessage ? R.fontSizes.fs12 : 0,
            fontFamily: R.fonts.IRANSansMobile,
          }}
          placeholderTextColor={R.colors.textInputPlaceholder}
          {...otherProps}
        />
      </View>
    );
  },
);

export default MyTextInput;

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    paddingHorizontal: 0,
    backgroundColor: R.colors.white,
  },
  inputStyle: {
    paddingVertical: 10,
    paddingBottom: 0,
    fontFamily: R.fonts.IRANSansMobile,
    fontWeight: 'normal',
    minHeight: 40,
    fontSize: R.fontSizes.fs14,
    marginBottom: 5,
    textAlign: 'right',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },

  labelStyle: {
    position: 'absolute',
    top: -R.fontSizes.fs15 + 3,
    right: 10,
    backgroundColor: R.colors.white,
    paddingHorizontal: R.dimensions.h10,

    color: 'gray',
    fontSize: R.fontSizes.fs12,
    borderRadius: R.dimensions.radius3,
  },

  inputOutterContainerStyle: {
    paddingHorizontal: R.dimensions.h15,
    borderRadius: 200,
    borderColor: R.colors.primary,
    borderWidth: 1.5,
  },

  leftIconStyle: {
    paddingRight: R.dimensions.h10,
  },
});
