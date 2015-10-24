import React from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

export default class SlideControl extends Component {

  render() {
    const swipeoutBtnsR = [
      {
        text: <Icon name={this.props.minusIcon} size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: this.props.onPressMinus
      },
      {
        text: <Icon name={this.props.plusIcon} size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: this.props.onPressPlus
      }
    ]

    const swipeoutBtnsL = [
      {
        text: <Icon name={this.props.leftIcon} size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: this.props.onPressLeft
      }
    ]

    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <Swipeout
              backgroundColor="transparent"
              right={swipeoutBtnsR}
              left={swipeoutBtnsL}>
            <View style={[styles.container, {width: this.props.width}]}>
              {this.props.children}
            </View>
          </Swipeout>
        </View>
    )
  }
}

SlideControl.propTypes = {
  onPressLeft: React.PropTypes.func.isRequired,
  onPressPlus: React.PropTypes.func.isRequired,
  onPressMinus: React.PropTypes.func.isRequired,
  leftIcon: React.PropTypes.string.isRequired,
  plusIcon: React.PropTypes.string.isRequired,
  minusIcon: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
};