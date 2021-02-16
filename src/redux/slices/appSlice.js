import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.value += 1;
			console.log(action.payload);
		},
	},
});

export const { increment } = appSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;
