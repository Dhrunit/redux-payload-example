import React, { Component } from 'react'
import Posts from './components/Posts'
import Counter from './components/Counter'
import PostForm from './components/PostForm'

export class App extends Component {
	render() {
		return (
			<div>
				<Counter />
				<PostForm />
				<Posts />
				<hr />
			</div>
		)
	}
}

export default App
