import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [
    {
      id: '1',
      name: 'Morning Meditation',
      streak: 7,
      frequency: 'daily',
      completedDates: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07'],
      color: '#6366F1',
    },
    {
      id: '2',
      name: 'Drink Water',
      streak: 3,
      frequency: 'daily',
      completedDates: ['2024-01-05', '2024-01-06', '2024-01-07'],
      color: '#10B981',
    },
    {
      id: '3',
      name: 'Exercise',
      streak: 0,
      frequency: 'weekly',
      completedDates: [],
      color: '#F59E0B',
    },
  ],
};

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    toggleHabitCompletion: (state, action) => {
      const { habitId, date } = action.payload;
      const habit = state.habits.find(h => h.id === habitId);
      
      if (habit.completedDates.includes(date)) {
        habit.completedDates = habit.completedDates.filter(d => d !== date);
      } else {
        habit.completedDates.push(date);
      }
      
      // Update streak logic would go here
    },
  },
});

export const { addHabit, toggleHabitCompletion } = habitsSlice.actions;
export default habitsSlice.reducer;