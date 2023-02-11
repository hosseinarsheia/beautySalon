import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  App: undefined;
  OnBoarding: undefined;
  LoginScreen: undefined;
};

export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'App'>;
export type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;
export type LoginScreenScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
