import React from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';
import momentPtLocale from 'moment/locale/pt-br';

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
  },

  nextNapContainer: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default class DateControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          {this.renderDate()}
          {this.renderNextNap('Próxima soneca - em 20min - 13:55 (60min interval)')}
        </View>
    )
  }

  renderDate() {
    const swipeoutBtnsR = [
      {
        text: <Icon name="chevron-left" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onDateChange(this.props.date.subtract(1, 'day'))
      },
      {
        text: <Icon name="chevron-right" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onDateChange(this.props.date.add(1, 'day'))
      }
    ]

    const swipeoutBtnsL = [
      {
        text: <Icon name="ios-upload-outline" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => console.log('export')
      }
    ]

    return (
        <View style={[styles.item, {width: this.props.width, marginTop: 50}]}>
          <Swipeout
              backgroundColor="transparent"
              right={swipeoutBtnsR}
              left={swipeoutBtnsL}>
            <View style={[styles.swipe, {width: this.props.width}]}>
              <Text style={styles.title}>{this.props.date.locale('pt-br', momentPtLocale).format('ddd, DD/MM/YYYY')}</Text>
            </View>
          </Swipeout>
        </View>
    )
  }

  renderNextNap() {
    const nextNap = moment.unix(this.props.userData.val().lastNap).add(this.props.userData.val().nextNapInterval, 'm')

    const swipeoutBtnsR = [
      {
        text: <Icon name="minus" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onNextNapIntervalChange(this.props.userData.val().nextNapInterval - 5)
      },
      {
        text: <Icon name="plus" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => this.props.onNextNapIntervalChange(this.props.userData.val().nextNapInterval + 5)
      }
    ]

    const swipeoutBtnsL = [
      {
        text: <Icon name="android-notifications-off" size={30} color="rgba(217, 217, 217, 0.55)" />,
        backgroundColor: 'transparent',
        onPress: () => console.log('toggle alarm')
      }
    ]

    return (
        <View style={[styles.item, {width: this.props.width, marginBottom: 50}]}>
          <Swipeout
              backgroundColor="transparent"
              right={swipeoutBtnsR}
              left={swipeoutBtnsL}>
            <View style={[styles.swipe, {width: this.props.width}]}>
              <Text style={styles.nextNapContainer}>
                Próxima {nextNap.fromNow()}
              </Text>
              <Text style={[styles.nextNapContainer, {fontSize: 12}]}>+ {this.props.userData.val().nextNapInterval}min</Text>
            </View>
          </Swipeout>
        </View>
    )
  }
}

DateControl.propTypes = {
  date: React.PropTypes.number.isRequired,
  userData: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
  onNextNapIntervalChange: React.PropTypes.func.isRequired
};