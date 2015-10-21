import React from 'react-native';

const {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  createButton: {
    backgroundColor: 'rgba(34,34,34,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    borderRadius: 3
  },
});

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
          <TouchableHighlight
              style={styles.createButton}
              activeOpacity={0.5}
              underlayColor='rgba(34,34,34,0.7)'
              onPress={this.onGetUser.bind(this)}>
            <Text style={styles.createText}>Sign in</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

SignIn.propTypes = {
  onGetUser: React.PropTypes.func.isRequired
};
