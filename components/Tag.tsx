
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const iconData = {
  completed: { name: 'check-circle', color: '#065F46' },
  cancelled: { name: 'close', color: '#991B1B' },
  planned: { name: 'info', color: '#1E3A8A' },
  workInProgress: { name: 'schedule', color: '#92400E' },
};

export default function Tag({ type = 'info', message = 'This is an alert.' }) {
  const backgroundColor = {
    completed: '#D1FAE5',
    cancelled: '#FECACA',
    planned: '#DBEAFE',
    workInProgress: '#FEF3C7',
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
