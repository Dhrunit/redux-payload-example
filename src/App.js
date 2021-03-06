import React, { Component } from 'react'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

export class App extends Component {
	render() {
		return (
			<div>
				<PostForm />
				<Posts />
				<hr />
			</div>
		)
	}
}

export default App
