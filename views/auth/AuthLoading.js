import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { Container } from 'native-base';

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { accessToken } = this.props;
    setTimeout(() => {
      this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    }, 2000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </Container>
    );
  }
}
