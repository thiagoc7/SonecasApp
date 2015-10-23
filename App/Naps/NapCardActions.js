import React from 'react-native';
import moment from 'moment';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

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
      nextTime: moment.unix(this.props.napSnapshot.val().lastTime).add(40, 'm')
    };
  }

  setNewTime() {
    const nextTime = this.state.nextTime.unix()
    if (this.props.activeIntervalSnapshot) {
      this.props.activeIntervalSnapshot.ref().update({end: nextTime})
      this.props.napSnapshot.ref().update({lastTime: nextTime, isSleeping: false})
    } else {
      this.props.napSnapshot.ref().child('intervals').push({start: nextTime})
      this.props.napSnapshot.ref().update({lastTime: nextTime, isSleeping: true})
    }
  }

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <ButtonControl
              onPress={this.setNewTime.bind(this)}
              onPressPlus={() => this.setState({nextTime: this.state.nextTime.add(5, 'm')})}
              onPressMinus={() => this.setState({nextTime: this.state.nextTime.subtract(5, 'm')})}>
            {this.renderText()}
          </ButtonControl>
        </View>
    )
  }

  renderText() {
    let text = "Dormiu"
    let infoText = "Acordado"
    if (this.props.napSnapshot.val().isSleeping) {
      text = "Acordou"
      infoText = "Dormindo"
    }

    const infoMin = Math.round((this.state.nextTime.unix() - this.props.napSnapshot.val().lastTime) / 60)

    return (
        <View style={{alignItems: 'center'}}>
          <Text fontSize={14}>{text} - {this.state.nextTime.format("HH:mm")}</Text>
          <Text fontSize={12}>{infoText} {infoMin}min</Text>
        </View>
    )
  }


}

NapCardActions.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  activeIntervalSnapshot: React.PropTypes.object,
  width: React.PropTypes.number.isRequired
};