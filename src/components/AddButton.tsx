import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import { Ionicons } from '@expo/vector-icons';

interface AddButtonProps {
  onPress: () => void;
}

export default function AddButton({ onPress }: AddButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`absolute bottom-[${spacing.xl}px] right-[${spacing.xl}px] bg-[${colors.primary}] w-[56px] h-[56px] rounded-full items-center justify-center shadow-lg`}
      accessibilityLabel="Add new habit"
    >
      <Ionicons name="add" size={32} color="white" />
    </TouchableOpacity>
  );
}