import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => (dispatch) => {
	console.log('fetching')
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((data) => {
			dispatch({ type: FETCH_POSTS, payload: data })
		})
}

export const createPosts = (postData) => (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(postData),
	})
		.then((response) => response.json())
		.then((post) => dispatch({ type: NEW_POST, payload: post }))
}
