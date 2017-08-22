import React, { Component } from 'react';
import Counter from './Counter'
export default class App extends Component {
  render() {
    const style = {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div style={style}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </div>
    );
  }
}
