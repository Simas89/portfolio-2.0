import React from 'react';
import styled from 'styled-components';
import { Typography, List, ListItem } from '@material-ui/core';

const Wrapper = styled.div`
	.MuiListItem-root {
		/* padding: 0; */
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

export const projectData = {
	demoshop: {
		title: 'eCommerce platform',
		url: 'https://demoshopas.herokuapp.com/',
		video: 'video/demoshop.mp4',
		description: () => (
			<Wrapper>
				<Typography variant="body2" color="textPrimary">
					My latest and cleanest project so far. Built with React, Redux,
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
			<>
				<Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
					Real-time chat app built with React, Firebase, Redux and
					Material-UI. Project has the following functionality:
					<ul>
						<li>
							Sending and receiving messages instantly with the real-time
							Firebase Database
						</li>
						<li>Uploading and displaying image messages</li>
						<li>
							Notifications to display new messages in other channels
						</li>
						<li>Sending Direct Messages to other users in our chat</li>
						<li>Tracking when users are online / offline</li>
						<li>Searching messages within created channels</li>
						<li>Custom animations</li>
						<li>Creating, cropping and uploading user avatars</li>
						<li>The ability to favorite / unfavorite channels</li>
						<li>
							Add emojis to our messages with an Emoji Picker component
						</li>
						<li>User authentication with Firebase</li>
						<li>Form validation</li>
					</ul>
				</Typography>
			</>
		),
	},
	crosseris: {
		title: 'Nonogram game - PWA',
		url: 'https://crosseris-serverless.netlify.app/',
		video: 'video/Crosseris.mp4',
		description: () => (
			<>
				<Typography
					// paragraph
					color="primary"
					variant="body1"
					style={{ whiteSpace: 'pre-line' }}
				>
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
			</>
		),
	},
	cryptron: {
		title: 'Crypto currency data visualization',
		url: 'https://cryptron.netlify.app/',
		video: 'video/Cryptron.mp4',
		description: () => (
			<>
				<Typography
					// paragraph
					color="primary"
					variant="body1"
					style={{ whiteSpace: 'pre-line' }}
				>
					A crypto currency dashboard app using Redux toolkit, HighCharts
					and Cryptocompare API.
				</Typography>
			</>
		),
	},
	social: {
		title: 'Social media platform',
		url: 'https://intercomas.herokuapp.com/',
		video: 'video/Social.mp4',
		description: () => (
			<>
				<Typography
					// paragraph
					color="primary"
					variant="body1"
					style={{ whiteSpace: 'pre-line' }}
				>
					My first project. A small social media platform. Primarily based
					on posts, comments, and likes. Create posts, follow other users,
					get their feed by latest or most relevant posts - simple. State
					is managed using useContext and useReducer hooks. The app
					utilizes CRUD operations to MongoDB. Server routing is done using
					both GraphQL and REST API. App features real-time chat built with
					subscriptions and web sockets. Multiple chat windows are
					interactable at once. Receive notifications for chat messages and
					other events. Notifications can be marked as read or deleted. JWT
					is used for user authorization, protected routes, email
					confirmation to get an "upgraded account" badge. There is also
					users search, users stats, option to show online status, emoji
					support. Upload, scale, and position profile image. Image will
					then be converted to three different sizes to minimize
					unnecessary download size. Own posts and comments can be deleted
					and edited (time of edit will be recorded and displayed).
				</Typography>
			</>
		),
	},
};
