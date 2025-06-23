import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { tw } from 'twrnc';
import { colors, spacing } from '../design/tokens';
import { toggleHabitCompletion } from '../store/habitsSlice';
import Header from '../components/Header';
import StreakCounter from '../components/StreakCounter';

export default function HabitDetailScreen({ route, navigation }) {
  const { habitId } = route.params;
  const habit = useSelector(state => 
    state.habits.habits.find(h => h.id === habitId)
  );
  const dispatch = useDispatch();
  
  const today = new Date().toISOString().split('T')[0];
  
  const handleToggleCompletion = () => {
    dispatch(toggleHabitCompletion({ habitId, date: today }));
  };

  return (
    <View style={tw`flex-1 bg-[${colors.background}] p-[${spacing.md}px]`}>
      <Header 
        title="Habit Details" 
        onBack={() => navigation.goBack()} 
      />
      
      <View style={tw`bg-[${colors.surface}] rounded-lg p-[${spacing.md}px] mb-[${spacing.md}px]`}>
        <Text style={tw`text-[${colors.text}] text-[24px] font-bold mb-[${spacing.sm}px]`}>
          {habit.name}
        </Text>
        
        <StreakCounter streak={habit.streak} />
        
        <Text style={tw`text-[${colors.textSecondary}] text-[16px] mb-[${spacing.md}px]`}>
          {habit.frequency === 'daily' ? 'Daily habit' : 'Weekly habit'}
        </Text>
        
        <TouchableOpacity
          onPress={handleToggleCompletion}
          style={tw`bg-[${habit.completedDates.includes(today) ? colors.secondary : colors.primary}] py-[${spacing.md}px] rounded-lg items-center`}
        >
          <Text style={tw`text-white font-bold`}>
            {habit.completedDates.includes(today) ? 'Completed Today' : 'Mark as Complete'}
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={tw`bg-[${colors.surface}] rounded-lg p-[${spacing.md}px]`}>
        <Text style={tw`text-[${colors.text}] font-bold mb-[${spacing.sm}px]`}>
          Completion History
        </Text>
        
        {habit.completedDates.length > 0 ? (
          habit.completedDates.map(date => (
            <View key={date} style={tw`py-[${spacing.sm}px] border-b border-[${colors.border}]`}>
              <Text style={tw`text-[${colors.text}]`}>{date}</Text>
            </View>
          ))
        ) : (
          <Text style={tw`text-[${colors.textSecondary}] italic`}>
            No completions yet
          </Text>
        )}
      </View>
    </View>
  );
}