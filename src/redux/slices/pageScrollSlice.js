import { createSlice } from '@reduxjs/toolkit';

export const pageScrollSlice = createSlice({
	name: 'pageScroll',
	initialState: {
		top: 0,
		bottom: 1000,
	},
	reducers: {
		setScrollValues: (state, action) => {
			state.top = action.payload.top;
			state.bottom = action.payload.bottom;
		},
	},
});

export const { setScrollValues } = pageScrollSlice.actions;

export default pageScrollSlice.reducer;
