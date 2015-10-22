import React from 'react-native';

import moment from 'moment';
import momentPtLocale from 'moment/locale/pt-br';

import SlideControl from './components/SlideControl'
import Text from './components/Text'

const {
    Component,
    StyleSheet,
    View,
    } = React;


const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

export default class DateControl extends Component {

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>

          {this.renderDate()}

          {this.renderNextNap()}

        </View>
    )
  }

  renderDate() {
    return (
        <SlideControl
            leftIcon="ios-upload-outline"
            plusIcon="chevron-right"
            minusIcon="chevron-left"
            onPressLeft={() => console.log('export')}
            onPressPlus={() => this.props.onDateChange(this.props.date.add(1, 'day'))}
            onPressMinus={() => this.props.onDateChange(this.props.date.subtract(1, 'day'))}
            width={this.props.width}>
          <Text fontSize={20}>{this.props.date.locale('pt-br', momentPtLocale).format('ddd, DD/MM/YYYY')}</Text>
        </SlideControl>
    )
  }

  renderNextNap() {
    const interval = this.props.settingsSnapshot.val().nextNapInterval
    const nextNap = moment.unix(this.props.settingsSnapshot.val().lastNap).add(interval, 'm')

    return (
        <SlideControl
            leftIcon="android-notifications-off"
            plusIcon="plus"
            minusIcon="minus"
            onPressLeft={() => console.log('toggle alarm')}
            onPressPlus={() => this.props.settingsSnapshot.ref().update({nextNapInterval: interval + 5})}
            onPressMinus={() => this.props.settingsSnapshot.ref().update({nextNapInterval: interval - 5})}
            width={this.props.width}>

          <Text fontSize={15}>
            Próxima {nextNap.fromNow()}
          </Text>
          <Text fontSize={12}>
            + {this.props.settingsSnapshot.val().nextNapInterval}min
          </Text>

        </SlideControl>
    )
  }
}

DateControl.propTypes = {
  date: React.PropTypes.number.isRequired,
  settingsSnapshot: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
  onNextNapIntervalChange: React.PropTypes.func.isRequired
};