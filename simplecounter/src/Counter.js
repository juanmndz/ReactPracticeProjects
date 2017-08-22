import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0}
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state
    const { color, size } = this.props
    return (
      <div style={{ color, fontSize: size }}>
        {count}
      </div>
    )
  }
}
