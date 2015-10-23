import React from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    TouchableHighlight,
    } = React;

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },

  icons: {
    margin: 10
  }
});

export default class ButtonControl extends Component {

  render() {
    const { children, onPressPlus, onPressMinus, ...others } = this.props

    return (
        <View style={styles.container}>
          <TouchableHighlight
              style={{marginRight: 20}}
              activeOpacity={0.5}
              onPress={onPressMinus}
              underlayColor='transparent'>
            <Icon name="ios-minus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>

          <Button {...others}>
            {children}
          </Button>

          <TouchableHighlight
              style={{marginLeft: 20}}
              activeOpacity={0.5}
              onPress={onPressPlus}
              underlayColor='transparent'>
            <Icon name="ios-plus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>
        </View>
    )
  }
}

ButtonControl.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  onPressPlus: React.PropTypes.func.isRequired,
  onPressMinus: React.PropTypes.func.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

ButtonControl.defaultProps = {
  height: 50,
  width: 150
};