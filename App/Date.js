import React from 'react-native';

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
    alignSelf: 'center',
    backgroundColor: '#97CAE5'
  }
});

export default class Date extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    this.props.onDateChange(2);
  }

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <TouchableHighlight onPress={this.onPress.bind(this)}>
            <Text>{this.props.date}</Text>
          </TouchableHighlight>
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