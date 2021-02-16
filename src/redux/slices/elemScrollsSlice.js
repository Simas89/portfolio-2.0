import { createSlice } from '@reduxjs/toolkit';

export const elemScrolls = createSlice({
	name: 'elemScrolls',
	initialState: { windowScroll: 0 },
	reducers: {
		setWindowScroll: (state, action) => {
			state.windowScroll = action.payload;
		},
	},
});

export const { setWindowScroll } = elemScrolls.actions;

export default elemScrolls.reducer;
