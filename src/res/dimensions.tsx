import { Dimensions } from 'react-native';
import { s, vs, mvs } from 'react-native-size-matters';

const window = Dimensions.get('window');

export default {
  window: window,
  windowWidth: window.width,
  windowHeight: window.height,

  bottomRoundHeight: vs(50),

  // icon
  iconSize20: vs(20),
  iconSize30: vs(30),

  // header
  headerHeight: vs(50),
  headerDivider: vs(1),

  separator: vs(1),
  borderWidth: vs(1),

  smallSpinner: mvs(30),
  largeSpinner: mvs(50),

  buttonGradient: {
    start: { x: 1.0, y: 0.25 },
    end: { x: 0.2, y: 0.0 },
  },

  // bottom tab
  // bottomTabHeight: vs(85),
  // bottomTabRadius: vs(22),
  // activeTabRadius: vs(20),
  // activeTabMargin: vs(4),
  // tabIconSize: vs(33),
  inputIcon: mvs(25),
  inputLargeIcon: mvs(25),
  profileAvatar: mvs(150),
  profileAvatarBorder: 0.7,
  groupAvatar: mvs(50),
  actionBarSize: 56,
  // button
  buttonHeight: vs(40),
  bigActionButton: mvs(35),
  sendMessageInputHeight: vs(50),
  // vertical margin
  v2: vs(2),
  v3: vs(3),
  v5: vs(5),
  v7: vs(7),
  v10: vs(10),
  v15: vs(15),
  v20: vs(20),
  v25: vs(25),
  v30: vs(30),
  v35: vs(35),
  v40: vs(40),
  v45: vs(45),
  v50: vs(50),
  v55: vs(55),
  v60: vs(60),
  v65: vs(65),
  v70: vs(70),
  v75: vs(75),
  v80: vs(80),
  v85: vs(85),
  v90: vs(90),
  v95: vs(95),
  v100: vs(100),

  // horizontal margin
  h1: s(1),
  h2: s(2),
  h3: s(3),
  h5: s(5),
  h7: s(7),
  h8: s(8),
  h10: s(10),
  h15: s(15),
  h20: s(20),
  h25: s(25),
  h30: s(30),
  h35: s(35),
  h40: s(40),
  h70: s(70),
  h100: s(100),

  b2: mvs(2),
  b3: mvs(3),
  b5: mvs(5),
  b7: mvs(7),
  b8: mvs(8),
  b10: mvs(10),
  b15: mvs(15),
  b20: mvs(20),
  b25: mvs(25),
  b30: mvs(30),
  b35: mvs(35),
  b40: mvs(40),
  b50: mvs(50),
  b60: mvs(60),
  b70: mvs(70),
  b80: mvs(80),
  b90: mvs(90),
  b100: mvs(100),
  b110: mvs(110),
  b120: mvs(120),
  b130: mvs(130),
  b140: mvs(140),
  b150: mvs(150),

  // radius
  radius1: vs(1),
  radius2: vs(2),
  radius3: vs(3),
  radius5: vs(5),
  radius10: vs(10),
  radius15: vs(15),
  radius20: vs(20),
};
