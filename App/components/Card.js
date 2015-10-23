import React from 'react-native';

const {
    Component,
    StyleSheet,
    View,
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(34,34,34,0.5)'
  }
});

export default class Card extends Component {

  render() {
    return (
        <View style={styles.container}>
          {this.props.children}
        </View>
    )
  }
}
