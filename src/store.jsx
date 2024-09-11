import { configureStore } from '@reduxjs/toolkit';
import personReducer from './slices/PersonDetail'; 
const store = configureStore({
  reducer: {
    person: personReducer
  }
});

export default store;
