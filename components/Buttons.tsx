import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle, } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export default function Button({
  label,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variantStyles[variant].button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.textBase,
          variantStyles[variant].text,
          disabled && styles.textDisabled,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
  },
  textDisabled: {
    color: '#999',
  },
});

const variantStyles: Record<ButtonVariant, {
  button: ViewStyle;
  text: TextStyle;
}> = {
  primary: {
    button: {
      backgroundColor: 'black',
    },
    text: {
      color: '#FFFFFF',
    },
  },
  secondary: {
    button: {
      backgroundColor: '#CCC',
    },
    text: {
      color: 'black',
    },
  },
  text: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#999',
    },
    text: {
      color: 'black',
    },
  },
};
