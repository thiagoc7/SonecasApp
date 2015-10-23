import React from 'react-native';
import moment from 'moment';

const {
    Component,
    StyleSheet,
    View,
    ScrollView,
    } = React;

import Text from './../components/Text'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    height: 70
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class NapCardIntervals extends Component {

  render() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            style={[styles.container, {width: this.props.width}]}>
          {this.getIntervals().map((interval, idx) => this.renderText(interval.val(), idx))}
        </ScrollView>
    )
  }

  renderText(obj, idx) {
    return (
        <Text key={idx} textSize={8} fontWeight="normal">
          {this.formatDate(obj.start)} - {this.formatDate(obj.end)}     {this.calcDiff(obj)}
        </Text>
    )
  }

  calcDiff(obj) {
    if (!obj.end) {return ''}
    return Math.round((obj.end - obj.start) / 60) + "min"
  }

  getIntervals() {
    let result = []
    this.props.napSnapshot.child('intervals').forEach(interval => {
      result.push(interval)
    })
    return result;
  }

  formatDate(date) {
    if (!date) {return ''}
    return moment.unix(date).format('HH:mm')
  }
}

NapCardIntervals.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired
};