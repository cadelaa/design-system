
import { baseColors } from '@/themes/colors';
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const iconData = {
  success: { name: 'check-circle', color: baseColors.onSuccess, },
  error: { name: 'error', color: baseColors.onError, },
  info: { name: 'info', color: baseColors.onInfo, },
  warning: { name: 'warning', color: baseColors.onWarning, },
};

export default function SimpleAlert({ type = 'info', message = 'This is an alert.' }) {
  const backgroundColor = {
    success: baseColors.success,
    error: baseColors.error,
    info: baseColors.info,
    warning: baseColors.warning,
  }[type];

  const { name, color } = iconData[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialIcons
        name={name}
        color={color}
        size={24}
      />
      <Text style={[styles.text, { color }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
  },
});
