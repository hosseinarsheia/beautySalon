import { Icon } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';
import { MyText } from '../../../components';
import ScreenContainer from '../../../components/MyScreenContainer';

import R from '../../../res/R';

const SERVICES = [
  {
    title: 'رنگ مو',
    iconName: 'hair-dryer',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'chair-school',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'hair-dryer',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'hair-dryer',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'chair-rolling',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'hair-dryer',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'sale',
    IconType: 'material-community',
  },
  {
    title: 'رنگ مو',
    iconName: 'hair-dryer',
    IconType: 'material-community',
  },
];

function HomeScreen() {
  return (
    <ScreenContainer title="سلام سمانه">
      <MyText>میخوای چه خدماتی رزرو کنی؟</MyText>

      <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
        {SERVICES.map((item, index) => (
          <View key={index} style={{ width: '25%', overflow: 'hidden', marginTop: 10 }}>
            <Icon
              iconStyle={{ backgroundColor: R.colors.primaryLight, padding: 10, borderRadius: 50 }}
              name={item.iconName}
              type={item.IconType}
              color={R.colors.primary}
              size={30}
            />
            <MyText
              size={R.fontSizes.fs12}
              color={R.colors.primary}
              style={{ textAlign: 'center' }}>
              {item.title}
            </MyText>
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

export default HomeScreen;
