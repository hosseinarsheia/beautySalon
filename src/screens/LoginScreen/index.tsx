import React from 'react';
import { View, Text, Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';

import R from '../../res/R';

import { MyButton, MyScreenContainer, MySpacer, MyText, MyTextInput } from '../../components';
import { useImmer } from 'use-immer';

function LoginScreen() {
  const [mobile, setMobile] = useImmer('');
  const [password, setPassword] = useImmer('');
  return (
    <MyScreenContainer hideHeader childrenContainer={{ justifyContent: 'space-around' }}>
      <View style={{ alignItems: 'flex-end', marginTop: 30 }}>
        <MyText font="Bold" size={R.fontSizes.fs25}>
          خوش آمدید
        </MyText>
        <MyText>برای استفاده از برنامه، لطفا وارد شوید</MyText>
      </View>

      <KeyboardAvoidingView>
        <MySpacer vertical={R.dimensions.myVerticalSpacer} />

        <MyTextInput
          value={mobile}
          placeholder={R.strings.mobileNumber}
          onChangeText={setMobile}
          keyboardType="numeric"
        />
        <MySpacer vertical={R.dimensions.myVerticalSpacer} />

        <MyTextInput
          value={password}
          placeholder={R.strings.password}
          onChangeText={setPassword}
          keyboardType="numeric"
        />

        <MySpacer vertical={5} />
        <MyText color={R.colors.primary} size={R.fontSizes.fs12}>
          {R.strings.forgetPassword}
        </MyText>
      </KeyboardAvoidingView>

      <View>
        <MyButton title={R.strings.login} onPress={() => {}} />
        <MySpacer vertical={5} />

        <MyText size={R.fontSizes.fs12}>
          حساب کاربری ندارید؟
          <MyText size={R.fontSizes.fs12} color={R.colors.primary}>
            {' '}
            ثبت نام کنید.{' '}
          </MyText>
        </MyText>
      </View>
    </MyScreenContainer>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
