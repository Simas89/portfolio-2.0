import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'redux/slices/appSlice';
import elemScrollsReducer from 'redux/slices/elemScrollsSlice';

export default configureStore({
	reducer: {
		app: appReducer,
		elemScrolls: elemScrollsReducer,
	},
});
