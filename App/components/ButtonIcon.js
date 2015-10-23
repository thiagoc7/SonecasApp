import React from 'react-native';

const {
    Component,
    StyleSheet,
    TouchableHighlight,
    View
    } = React;

export default class Button extends Component {

  render() {
    return (
        <TouchableHighlight
            activeOpacity={0.5}
            underlayColor='transparent'
            onPress={this.props.onPress}>
          <View>
            {this.props.children}
          </View>
        </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  onPress: React.PropTypes.func.isRequired
};