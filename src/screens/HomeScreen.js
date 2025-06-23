import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import HabitCard from '../components/HabitCard';
import AddButton from '../components/AddButton';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  const habits = useSelector(state => state.habits.habits);

  return (
    <View style={tw`flex-1 bg-[${colors.background}] p-[${spacing.md}px]`}>
      <Header title="HabitZen" />
      
      <Text style={tw`text-[${colors.text}] text-[20px] font-bold mb-[${spacing.md}px]`}>
        Your Habits
      </Text>
      
      <FlatList
        data={habits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('HabitDetail', { habitId: item.id })}
            activeOpacity={0.8}
          >
            <HabitCard habit={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={tw`h-[${spacing.sm}px]`} />}
        contentContainerStyle={tw`pb-[${spacing.xxl}px]`}
      />
      
      <AddButton onPress={() => console.log('Add new habit')} />
    </View>
  );
}