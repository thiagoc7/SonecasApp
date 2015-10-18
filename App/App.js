'use strict';

var React = require('react-native');

var {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    } = React;

class App extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>asdas</Text>
          <Text>dsadsad</Text>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = App;