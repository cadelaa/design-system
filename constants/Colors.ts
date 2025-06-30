/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: '#256CF0',
    onPrimary: '#FFFFFF',
    secondary: '#BDD3FA',
    onSecondary: '#1C51B4',

    text: '#11181C',
    background: '#fff',
    container: '#eee',
    containerStroke: '#ddd',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: '#256CF0',
    onPrimary: '#FFFFFF',
    secondary: '#0B2148',
    onSecondary: '#5C91F4',

    text: '#ECEDEE',
    background: '#151718',
    container: '#252525',
    containerStroke: '#333',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
