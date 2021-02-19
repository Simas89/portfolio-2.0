import React from 'react';
import styled from 'styled-components';
import { Typography, List, ListItem } from '@material-ui/core';

const Wrapper = styled.div`
	.MuiListItem-root {
		padding: 2px ${(p) => p.theme.spacing(2)}px;
	}
`;

const demoshopList = [
	'Full featured shopping cart',
	'Product reviews and ratings',
	'Product pagination',
	'Product search feature',
	'User profile with orders',
	'Admin product management',
	'Admin user management',
	'Admin Order details page',
	'Mark orders as delivered option',
	'Checkout process (shipping, payment method, etc)',
	'PayPal / credit card integration',
	'Showcase screen',
];

const chatList = [
	'Sending and receiving messages instantly with the real-time Firebase Database',
	'Uploading and displaying image messages',
	'Notifications to display new messages in other channels',
	'Sending Direct Messages to other users in our chat',
	'Tracking when users are online / offline',
	'Searching messages within created channels',
	'Custom animations',
	'Creating, cropping and uploading user avatars',
	'The ability to favorite / unfavorite channels',
	'Add emojis to our messages with an Emoji Picker component',
	'User authentication with Firebase',
	'Form validation',
];

export const projectData = {
	demoshop: {
		title: 'eCommerce platform',
		url: 'https://demoshopas.herokuapp.com/',
		video: 'video/demoshop.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					Fully integrated e-commerce platform. Built with React, Redux,
					Express & MongoDB. Project has the following functionality:{' '}
				</Typography>
				<List>
					{demoshopList.map((el) => (
						<ListItem dense key={el}>
							<Typography variant="body2" color="textPrimary">
								{el}
							</Typography>
						</ListItem>
					))}
				</List>
			</Wrapper>
		),
	},
	chat: {
		title: 'Real-time chat app',
		url: 'https://react-chat-8590f.firebaseapp.com/',
		video: 'video/chat.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					Real-time chat app built with React, Firebase, Redux and
					Material-UI. Project has the following functionality:
				</Typography>
				<List>
					{chatList.map((el) => (
						<ListItem dense key={el}>
							<Typography variant="body2" color="textPrimary">
								{el}
							</Typography>
						</ListItem>
					))}
				</List>
			</Wrapper>
		),
	},
	crosseris: {
		title: 'Nonogram game - PWA',
		url: 'https://crosseris-serverless.netlify.app/',
		video: 'video/Crosseris.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					Japanese puzzle game with a built-in level editor. It requires
					some deeply nested and complex state management. Using Redux with
					Immer here really reduces that complexity. Also, MongoDB Realm is
					used to read and write level data to cloud Atlas, which makes an
					app serverless. Nonograms, also known as Picross, Griddlers,
					Pic-a-Pix, are picture logic puzzles in which cells in a grid
					must be colored or left blank according to numbers at the side of
					the grid to reveal a hidden picture. In this puzzle type, the
					numbers are a form of discrete tomography that measures how many
					unbroken lines of filled-in squares there are in any given row or
					column.
				</Typography>
			</Wrapper>
		),
	},
	cryptron: {
		title: 'Crypto currency data visualization',
		url: 'https://cryptron.netlify.app/',
		video: 'video/Cryptron.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					A crypto currency dashboard app using Redux toolkit, HighCharts
					and Cryptocompare API.
				</Typography>
			</Wrapper>
		),
	},
	social: {
		title: 'Social media platform',
		url: 'https://intercomas.herokuapp.com/',
		video: 'video/Social.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					My first project. A small social media platform. Primarily based
					on posts, comments, and likes. Uses both REST and GraphQL. App
					features real-time chat built with subscriptions and web sockets.
				</Typography>
			</Wrapper>
		),
	},
};
