import React from 'react';
import { useDispatch } from 'react-redux';
import { setWindowScroll } from 'redux/slices/elemScrollsSlice';

const useElemScrollsInit = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		const update = () => {
			let windowScroll = document.body.getBoundingClientRect().top;
			windowScroll = Math.abs(windowScroll);
			dispatch(setWindowScroll(windowScroll));
		};
		document.addEventListener('scroll', update);
		return () => window.removeEventListener('scroll', update);
	}, [dispatch]);
};

export default useElemScrollsInit;
