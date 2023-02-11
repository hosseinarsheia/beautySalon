import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ViewStyle,
  StatusBarStyle,
  Pressable,
} from 'react-native';
import { Icon } from '@rneui/themed';

import { useNavigation } from '@react-navigation/native';

import R from '../res/R';

interface ScreenContainerProps {
  containerStyle?: ViewStyle;
  statusBarTranslucent?: boolean;
  statusBarBackground?: string;
  statusBarStyle?: null | StatusBarStyle | undefined;
  hideHeader?: boolean;
  title?: string;
  showBackButton?: boolean;
  children: React.ReactNode;
  rightIconName?: string;
  rightIconType?: string;
  secondRightIconOnPress?: () => void;
  pageHorrizontalPadding?: number;
  childrenContainer?: ViewStyle;
  leftIconName?: string;
  leftIconType?: string;
  leftIconsize?: number;
  leftIconPress?: () => void;
}

const ScreenContainer = ({
  containerStyle,
  statusBarTranslucent = false,
  statusBarBackground = R.colors.white,
  statusBarStyle = 'dark-content',
  hideHeader = false,
  title,
  showBackButton = true,
  children,
  rightIconName,
  rightIconType = 'ionicon',
  secondRightIconOnPress,
  pageHorrizontalPadding = 15,
  childrenContainer,

  leftIconName,
  leftIconType = 'entypo',
  leftIconsize,
  leftIconPress,
}: ScreenContainerProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={[Styles.container, containerStyle]}>
      <StatusBar
        translucent={statusBarTranslucent}
        backgroundColor={statusBarTranslucent ? R.colors.transparent : statusBarBackground}
        barStyle={statusBarStyle}
      />
      {!hideHeader && (
        <View
          style={[
            Styles.header,
            {
              height: R.dimensions.headerHeight,
              justifyContent: 'space-between',
            },
          ]}>
          {leftIconName ? (
            <Icon
              name={leftIconName}
              type={leftIconType}
              color={R.colors.white}
              size={leftIconsize}
              onPress={leftIconPress}
            />
          ) : (
            <View />
          )}

          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={Styles.title}>{title}</Text>
            {rightIconName ? (
              <Icon
                name={rightIconName}
                type={rightIconType}
                color={R.colors.black}
                onPress={secondRightIconOnPress}
              />
            ) : showBackButton ? (
              <Icon
                activeOpacity={0}
                onPress={() => navigation.goBack()}
                name="arrowright"
                type="antdesign"
                color={R.colors.black}
              />
            ) : null}
          </View>
        </View>
      )}

      <View
        style={{
          paddingHorizontal: pageHorrizontalPadding,
          flex: 1,

          ...childrenContainer,
        }}>
        {children}
      </View>
    </View>
  );
};

export default ScreenContainer;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: R.colors.white,
    alignItems: 'center',
    paddingHorizontal: R.dimensions.h10,
  },
  title: {
    fontFamily: R.fonts.IRANSansMobile_Bold,
    fontSize: R.fontSizes.fs15,
    color: R.colors.black,
    textAlign: 'center',
    marginRight: 10,
  },
});
