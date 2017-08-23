import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div style={styles.card}>
        <h1 style={styles.title}>
          {title}
        </h1>
        {subtitle &&
          <h2 style={styles.subtitle}>
            {subtitle}
          </h2>}
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Card title={'Title'} />
        <Card title={'Title'} subtitle={'Subtitle'} />
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
