import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'person',
  initialState: [],
  reducers: {
    add: (state, action) => {
            const newId = state.length === 0 ? 1 : Math.max(...state.map(person => person.id)) + 1;
            const obj = {
              id: newId,
              name: action.payload.name,
              email: action.payload.email
            };
            state.push(obj);    
    },
    remove: (state, action) => {
        return state.filter(person => person.id !== action.payload);
    },
    update: (state, action) => {
        const { id, name, email } = action.payload;
        const index = state.findIndex(person => person.id === id);
        if (index !== -1) {
          state[index] = { ...state[index], name, email };
        }
    }
    }
});

export const { add, remove, update } = personSlice.actions;
export default personSlice.reducer;
