import React, { Component } from 'react'
import { fetchPosts } from '../redux/actions/postActions'
import { connect } from 'react-redux'
export class Posts extends Component {
	componentDidMount() {
		this.props.fetchPosts()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.newPosts) {
			this.props.posts.unshift(nextProps.newPosts)
		}
	}
	render() {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body} </p>
			</div>
		))
		return (
			<div>
				<div className=''>
					<h1>Posts</h1>
					{postItems}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPosts: state.posts.item,
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
