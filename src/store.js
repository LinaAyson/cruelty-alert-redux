
import { configureStore } from '@reduxjs/toolkit';
import reportReducer from './reducers/reportSlice';
import contactReducer from './reducers/contactSlice';
const store = configureStore({
  reducer: {
    report: reportReducer,
    contact: contactReducer,
  },
});

export default store;
