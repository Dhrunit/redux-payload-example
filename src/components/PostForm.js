import React, { Component } from 'react'
import { createPosts } from '../redux/actions/postActions'
import { connect } from 'react-redux'

export class PostForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			body: '',
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit = (e) => {
		e.preventDefault()
		const post = {
			title: this.state.title,
			body: this.state.body,
		}
		this.props.createPosts(post)
	}
	render() {
		return (
			<div>
				<h1>Add Posts</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<input
							type='text'
							name='title'
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label>Body: </label>
						<textarea
							name='body'
							value={this.state.body}
							onChange={this.onChange}></textarea>
					</div>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({ posts: state.posts.items })

const mapDispatchToProps = (dispatch) => {
	return {
		createPosts: (data) => dispatch(createPosts(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
