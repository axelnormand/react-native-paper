/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, withTheme } from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
};

type State = {
  text: string,
};

class TextInputExample extends React.Component<Props, State> {
  static title = 'TextInput';
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  state = {
    text: '',
  };

  render() {
    const { theme: { colors: { background } } } = this.props;
    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <TextInput
          style={styles.inputContainerStyle}
          label="Normal input"
          placeholder="Type something"
          value={this.state.text}
          hasError
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={styles.inputContainerStyle}
          label="Normal input with helper"
          placeholder="Type something"
          helperText="I can help"
          value={this.state.text}
          hasError={this.state.text.length > 3}
          onChangeText={text => this.setState({ text })}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  inputContainerStyle: {
    margin: 8,
  },
});

export default withTheme(TextInputExample);