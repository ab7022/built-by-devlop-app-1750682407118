import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import StreakCounter from './StreakCounter';

interface HabitCardProps {
  habit: {
    id: string;
    name: string;
    streak: number;
    color: string;
  };
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <View style={tw`bg-[${colors.surface}] rounded-lg p-[${spacing.md}px] shadow-sm`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-[${colors.text}] text-[18px] font-bold`}>
          {habit.name}
        </Text>
        
        <StreakCounter streak={habit.streak} />
      </View>
      
      <View style={tw`h-1 bg-[${habit.color}] opacity-20 rounded-full mt-[${spacing.sm}px]`} />
    </View>
  );
}