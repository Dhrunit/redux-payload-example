import React, { Component } from 'react'
import { add, subtract } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

export class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>{this.props.counter}</p>
				<button onClick={() => this.props.increment()}>Add</button>
				<button onClick={() => this.props.decrement()}>Subtract</button>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({ counter: state.counter })

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(add()),
		decrement: () => dispatch(subtract()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
