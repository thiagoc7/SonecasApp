import React from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Text from './../components/Text'
import ButtonControl from './../components/ButtonControl'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});

export default class NapCardActions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nextTime: moment()
    };
  }

  setNewTime() {
    const nextTime = this.state.nextTime.unix()
    if (this.props.activeIntervalSnapshot) {
      this.props.activeIntervalSnapshot.ref().update({end: nextTime})
      this.props.napSnapshot.ref().update({lastTime: nextTime, isSleeping: false})
      this.props.settingsSnapshot.ref().update({lastNap: nextTime})
    } else {
      this.props.napSnapshot.ref().child('intervals').push({start: nextTime})
      this.props.napSnapshot.ref().update({lastTime: nextTime, isSleeping: true})
    }
  }

  manageTime(addMinutes) {
    let result = moment(this.state.nextTime).add(addMinutes, 'm')
    const minuteReminder = (5 - result.minute()) % 5;
    result.add(minuteReminder, 'm')
    return result;
  }

  render() {
    let buttonColor = 'rgba(68, 118, 151, 0.8)';
    if (this.props.activeIntervalSnapshot) {
      buttonColor = 'rgba(190, 55, 9, 0.8)';
    }

    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <ButtonControl
              buttonColor={buttonColor}
              onPress={this.setNewTime.bind(this)}
              onPressPlus={() => this.setState({nextTime: this.manageTime(5)})}
              onPressMinus={() => this.setState({nextTime: this.manageTime(-5)})}>
            {this.renderText()}
          </ButtonControl>
        </View>
    )
  }

  renderText() {
    let text = "Dormiu"
    if (this.props.napSnapshot.val().isSleeping) {
      text = "Acordou"
    }

    const infoMin = Math.round((this.state.nextTime.unix() - this.props.napSnapshot.val().lastTime) / 60)

    return (
        <View style={{alignItems: 'center'}}>
          <Text fontSize={14}>{text} - {this.state.nextTime.format("HH:mm")}</Text>
          {this.props.napSnapshot.val().isSleeping ? <Text fontSize={10}>{infoMin}min</Text> : undefined}
        </View>
    )
  }


}

NapCardActions.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  activeIntervalSnapshot: React.PropTypes.object,
  width: React.PropTypes.number.isRequired
};