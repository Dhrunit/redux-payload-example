import React, { Component } from 'react'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import { connect } from 'react-redux'
import { fetchPosts } from './redux/actions/postActions'

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

const mapStateToProps = (state) => ({ posts: state.posts.items })

export default connect(mapStateToProps, { fetchPosts })(App)
