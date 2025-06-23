import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export default function Header({ title, onBack }: HeaderProps) {
  return (
    <View style={tw`flex-row items-center mb-[${spacing.lg}px]`}>
      {onBack && (
        <TouchableOpacity 
          onPress={onBack}
          style={tw`mr-[${spacing.sm}px]`}
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
      )}
      
      <Text style={tw`text-[${colors.text}] text-[24px] font-bold`}>
        {title}
      </Text>
    </View>
  );
}