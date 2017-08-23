import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    value: '',
  };

  handleKeyPress = e => {
    const { onSubmitEditing } = this.props;
    const { value } = this.state;
    if (e.key !== 'Enter') return;
    onSubmitEditing(value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <input
        style={styles.input}
        type={'text'}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

const styles = {
  input: {
    fontSize: '100%',
    padding: 15,
    borderWidth: 0,
  },
};
