import React from 'react-native';

const {
    Component,
    StyleSheet,
    View,
    TouchableHighlight,
    } = React;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

});

import Button from './components/Button'
import Text from './components/Text'

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onGetUser() {
    this.props.onGetUser('user3')
  }

  render() {
    return (
        <View style={styles.container}>
          <Button onPress={this.onGetUser.bind(this)}>
            <Text>Sign In</Text>
          </Button>
        </View>
    )
  }
}

SignIn.propTypes = {
  onGetUser: React.PropTypes.func.isRequired
};
