import { baseColors } from '@/themes/colors';
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
  type?: AlertType;
  title: string;
  message: string;
  timestamp?: string;
  onClose?: () => void;
}

const iconData: Record<AlertType, { name: keyof typeof MaterialIcons.glyphMap; color: string }> = {
  success: { name: 'check-circle', color: baseColors.onSuccess, },
  error: { name: 'error', color: baseColors.onError, },
  info: { name: 'info', color: baseColors.onInfo, },
  warning: { name: 'warning', color: baseColors.onWarning, },
};

const backgroundColorMap: Record<AlertType, string> = {
  success: baseColors.success,
  error: baseColors.error,
  info: baseColors.info,
  warning: baseColors.warning,
};

export default function SimpleAlert({ type = 'info', message = 'This is an alert.' }: { type?: AlertType; message?: string }) {
  const backgroundColor = backgroundColorMap[type];
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

export function BasicAlert({ type = 'info', title, message }: AlertProps) {
  const backgroundColor = backgroundColorMap[type];
  const { name, color } = iconData[type];

  return (
    <View style={[alertStyles.container, { backgroundColor }]}>
      <MaterialIcons
        name={name}
        color={color}
        size={24}
      />
      <View style={alertStyles.content}>
        <Text style={[alertStyles.title, { color }]}>{title}</Text>
        <Text style={[alertStyles.message, { color }]}>{message}</Text>
      </View>
    </View>
  );
}

export function Alert({ type = 'info', title = 'Alert Title', message = 'This is an alert message.', timestamp, onClose }: AlertProps) {
  const backgroundColor = backgroundColorMap[type];
  const { color } = iconData[type];

  return (
    <View style={[basicStyles.basicContainer, { backgroundColor }]}>
      <View style={basicStyles.basicContent}>
        <Text style={[basicStyles.basicTitle, { color }]}>{title}</Text>
        <Text style={[basicStyles.basicMessage, { color }]}>{message}</Text>
        {timestamp && (
          <Text style={[basicStyles.basicTimestamp, { color }]}>{timestamp}</Text>
        )}
      </View>
      {onClose && (
        <MaterialIcons
          name="close"
          color={color}
          size={24}
          onPress={onClose}
        />
      )}
    </View>
  );
}

const alertStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
  },
  content: {
    gap: 4,
    flex: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    fontSize: 14,
  },
  timestamp: {
    fontSize: 14,
    opacity: 0.6,
  },
});

const basicStyles = StyleSheet.create({
  basicContainer: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
  },
  basicContent: {
    gap: 4,
    flex: 1,
    flexShrink: 1,
  },
  basicTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  basicMessage: {
    fontSize: 14,
  },
  basicTimestamp: {
    fontSize: 14,
    opacity: 0.6,
  },
});

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