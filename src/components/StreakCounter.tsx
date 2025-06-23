import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import { Ionicons } from '@expo/vector-icons';

interface StreakCounterProps {
  streak: number;
}

export default function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <View style={tw`flex-row items-center`}>
      <Ionicons name="flame" size={20} color="#F59E0B" />
      <Text style={tw`text-[${colors.text}] ml-[${spacing.xs}px]`}>
        {streak} day{streak !== 1 ? 's' : ''} streak
      </Text>
    </View>
  );
}