// components/AlertBanner.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const iconData = {
  success: { name: 'check-circle', color: '#065F46' },
  error: { name: 'error', color: '#991B1B' },
  info: { name: 'info', color: '#1E3A8A' },
  warning: { name: 'warning', color: '#92400E' },
};

export default function SimpleAlert({ type = 'info', message = 'This is an alert.' }) {
  const backgroundColor = {
    success: '#D1FAE5',
    error: '#FECACA',
    info: '#DBEAFE',
    warning: '#FEF3C7',
  }[type];

  const { name, color } = iconData[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialIcons
        name={name}
        color={color}
        size={24}
        variant="rounded"
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
