import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle, } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'default';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
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
        ButtonStyles.base,
        variantStyles[variant].button,
        pressed && !disabled && ButtonStyles.pressed,
        disabled && ButtonStyles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          ButtonStyles.textBase,
          variantStyles[variant].text,
          disabled && ButtonStyles.textDisabled,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const ButtonStyles = StyleSheet.create({
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
      backgroundColor: Colors.light.primary,
    },
    text: {
      color: Colors.light.onPrimary,
    },
  },
  secondary: {
    button: {
      backgroundColor: Colors.light.secondary,
    },
    text: {
      color: Colors.light.onSecondary,
    },
  },
  text: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.light.primary,
    },
    text: {
      color: Colors.light.primary,
    },
  },
  default: {
    button: {
      backgroundColor: '#000',
    },
    text: {
      color: '#FFF',
    },
  },
};
