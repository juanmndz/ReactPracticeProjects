import React, { Component } from 'react';
import styled from 'styled-components';

const randomColor = () =>
  '#' + Math.random().toString(16).substr(-6);

const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`;

const Container = styled.div`padding: 20px;`;

export default class App extends Component {
  state = {
    color: 'skyblue',
  };

  randomizeColor = () =>
    this.setState({ color: randomColor() });
  render() {
    const { color } = this.state;
    return (
      <Container>
        <Card color={color}>
          <input
            type={'button'}
            value={'Randomize Color'}
            onClick={this.randomizeColor}
          />
        </Card>
      </Container>
    );
  }
}
