import React, { useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import { MyText, MyButton } from '../../components';

import R from '../../res/R';

const backgroundImages = [
  {
    title: 'Best Stylist For You',
    subTitle: 'Styling your appearance according to your lifestyle',
    image: R.images.firstOnBoard,
  },

  {
    title: 'Best Stylist For You',
    subTitle: 'Styling your appearance according to your lifestyle',
    image: R.images.secondOnBoard,
  },

  {
    title: 'Best Stylist For You',
    subTitle: 'Styling your appearance according to your lifestyle',
    image: R.images.thirdOnBoard,
  },

  {
    title: 'Best Stylist For You',
    subTitle: 'Styling your appearance according to your lifestyle',
    image: R.images.forthOnBoard,
  },
];

function OnBoarding() {
  const scrollX = useRef(new Animated.Value(0)).current;

  function interpolateHandler(index: number, outputRange: string[] | number[]) {
    const width = R.dimensions.windowWidth;
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const interpolateValue = scrollX.interpolate({
      inputRange,
      outputRange: outputRange,
      extrapolate: 'clamp',
    });

    return interpolateValue;
  }
  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, width: '100%' }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}>
        {backgroundImages.map((item, index) => {
          return (
            <View
              style={{ width: R.dimensions.windowWidth, height: R.dimensions.windowHeight }}
              key={index}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />

              <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', flex: 1 }} />

              <View style={styles.textWrapper}>
                <MyText size={R.fontSizes.fs25} style={styles.headerTitle}>
                  {item.title}
                </MyText>

                <MyText size={R.fontSizes.fs16} style={styles.headerTitle}>
                  {item.subTitle}
                </MyText>

                {index === backgroundImages.length - 1 && <MyButton onPress={() => {}} />}
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>

      <View style={styles.dotsContainer}>
        {backgroundImages.map((item, index) => {
          const dotWidth = interpolateHandler(index, [10, 25, 10]);

          const dotColor = interpolateHandler(index, ['white', 'tomato', 'white']);
          return (
            <Animated.View
              key={`${index}`}
              style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
            />
          );
        })}
      </View>
    </View>
  );
}

export default OnBoarding;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    width: R.dimensions.windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    position: 'absolute',
  },
  dot: {
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
  },
  textWrapper: {
    width: R.dimensions.windowWidth,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    position: 'absolute',
    bottom: 0,
  },
  image: {
    width: R.dimensions.windowWidth,
    height: R.dimensions.windowHeight,
    position: 'absolute',
    zIndex: -2,
  },
  container: {},
});
