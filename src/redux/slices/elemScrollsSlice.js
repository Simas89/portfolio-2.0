import { createSlice } from '@reduxjs/toolkit';

export const elemScrolls = createSlice({
	name: 'elemScrolls',
	initialState: { windowScroll: 0, clientHeight: 2000 },
	reducers: {
		setWindowScroll: (state, action) => {
			state.windowScroll = action.payload;
			state.clientHeight = document.body.clientHeight;
		},
	},
});

export const { setWindowScroll } = elemScrolls.actions;

export const particlesContainerSizeSelector = (state) => {
	return state.elemScrolls.clientHeight / 4 + window.innerHeight;
};

export default elemScrolls.reducer;
