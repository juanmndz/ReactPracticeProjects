import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    width: null,
    height: null,
  };

  saveRef = ref => (this.containerNode = ref);

  measure() {
    const {
      clientWidth,
      clientHeight,
    } = this.containerNode;

    this.setState({
      width: clientWidth,
      height: clientHeight,
    });
  }

  componentDidMount() {
    this.measure();
  }

  componentDidUpdate(prevProps, prevState) {
    return (
      this.state.width !== prevState.width ||
      this.state.height !== prevState.height
    );
  }
  render() {
    const { width, height } = this.state;
    return (
      <div style={styles.card} ref={this.saveRef}>
        <h2 style={styles.subtitle}>My dimensions are:</h2>
        {width &&
          height &&
          <h1 style={styles.title}>
            {width} x {height}
          </h1>}
      </div>
    );
  }
}

const styles = {
  card: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
  },
};
