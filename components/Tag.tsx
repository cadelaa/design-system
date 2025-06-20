
import { baseColors } from '@/themes/colors';
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const iconData = {
  completed: { name: 'check-circle', color: baseColors.onSuccess, },
  cancelled: { name: 'close', color: baseColors.onError, },
  planned: { name: 'info', color: baseColors.onInfo, },
  workInProgress: { name: 'schedule', color: baseColors.onWarning, },
};

export default function Tag({ type = 'info', message = 'This is an alert.' }) {
  const backgroundColor = {
    completed: baseColors.success,
    cancelled: baseColors.error,
    planned: baseColors.info,
    workInProgress: baseColors.warning,
  }[type];

  const { name, color } = iconData[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialIcons
        name={name}
        color={color}
        size={20}
      />
      <Text style={[styles.text, { color }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-start', // ← this is important
    },
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 2,
  },
});
