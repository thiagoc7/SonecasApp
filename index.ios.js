/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var App = require('./App/App');

var {
    Component,
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    } = React;

class SonecasApp  extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            tintColor='#FF6600'
            initialRoute={{
          title: 'Sonecas',
          component: App
        }}/>

    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});

AppRegistry.registerComponent('SonecasApp', () => SonecasApp);
