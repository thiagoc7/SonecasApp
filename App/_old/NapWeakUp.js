import React from 'react-native';
import moment from 'moment';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },

  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  controlButton: {
    backgroundColor: 'rgba(34,34,34,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    borderRadius: 3,
    margin: 30
  },

  controlButtonText: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 15,
  },
});

export default class NapWeakUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weakUp: moment()
    }
  }

  onDateWakeUpChange(minutes) {
    const newTime = moment(this.state.weakUp).add(minutes, 'm')
    const remainder = (10 - newTime.minute()) % 10
    newTime.add(remainder, 'm')

    this.setState({weakUp: newTime})
  }

  render() {
    return (
        <View style={[this.props.style, {justifyContent: 'center'}]}>
          <View style={[styles.item, styles.controlContainer, {width: this.props.width}]}>
            <TouchableHighlight
                activeOpacity={0.5}
                onPress={() => this.onDateWakeUpChange(-10)}
                underlayColor='transparent'>
              <Icon name="ios-minus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.controlButton}
                activeOpacity={0.5}
                onPress={() => this.props.onDateWakeUpChange(this.state.weakUp.unix())}
                underlayColor='rgba(34,34,34,0.7)'
            >
              <View style={{alignItems: 'center'}}>
                <Text style={styles.controlButtonText}>Despertar - {this.state.weakUp.format('HH:mm')}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
                activeOpacity={0.5}
                onPress={() => this.onDateWakeUpChange(10)}
                underlayColor='transparent'>
              <Icon name="ios-plus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

NapWeakUp.propTypes = {
  width: React.PropTypes.number,
  onDateWakeUpChange: React.PropTypes.func.isRequired,
};