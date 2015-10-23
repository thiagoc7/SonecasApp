import React from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Text from './../components/Text'
import ButtonIcon from './../components/ButtonIcon'
import NapCardComment from './NapCardComment'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default class NapCardTitle extends Component {

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <Text fontSize={16}>Soneca {this.props.idx + 1}</Text>
          <Text fontSize={14} >{this.totalTime()}</Text>

          <NapCardComment napSnapshot={this.props.napSnapshot}/>

        </View>
    )
  }

  totalTime() {
    const intervals = this.props.napSnapshot.child('intervals')
    if (!intervals.hasChildren()) { return '---' }

    let result = 0
    intervals.forEach(interval => {
      let obj = interval.val()
      if (obj.end) { result += obj.end - obj.start}
    })
    return Math.round(result / 60) + "min"
  }
}

NapCardTitle.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  idx: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};