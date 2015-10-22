import React from 'react-native';

const {
    Component,
    StyleSheet,
    TouchableHighlight,
    View
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,34,34,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  }
});

export default class Button extends Component {

  render() {
    return (
        <TouchableHighlight
            style={[styles.container, {height: this.props.height, width: this.props.width}]}
            activeOpacity={0.5}
            underlayColor='rgba(34,34,34,0.7)'
            onPress={this.props.onPress}>
          <View>
            {this.props.children}
          </View>
        </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  children: React.PropTypes.array.isRequired,
  onPress: React.PropTypes.func.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

Button.defaultProps = {
  height: 50,
  width: 150
};