import React from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    } = React;

import Swipe from './Swipe';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },

  swipe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  title: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default class Date extends Component {
  constructor(props) {
    super(props);
  }

  renderDate(text, textStyle) {
    const swipeoutBtnsR = [
      {
        text: <Icon name="chevron-left" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onDateChange(-1)
      },
      {
        text: <Icon name="chevron-right" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onDateChange(1)
      }
    ]

    const swipeoutBtnsL = [
      {
        text: <Icon name="android-notifications" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onDateChange(10)
      }
    ]

    return (
        <View style={[styles.item, {width: this.props.width, marginTop: 50}]}>
          <Swipeout
              backgroundColor="transparent"
              right={swipeoutBtnsR}
              left={swipeoutBtnsL}>
            <View style={[styles.swipe, {width: this.props.width}]}>
              <Text style={textStyle}>{text}</Text>
            </View>
          </Swipeout>
        </View>
    )
  }

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          {this.renderDate('Quarta, 19/10/2014', styles.title)}
          {this.renderDate('Próxima soneca - em 20min - 13:55 (60min interval)')}
        </View>
    )
  }
}

Date.propTypes = {
  date: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onDateChange: React.PropTypes.func.isRequired
};