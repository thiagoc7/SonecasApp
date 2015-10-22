import React from 'react-native';
import moment from 'moment';

const {
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    } = React;

let {
    width,
    height
    } = Dimensions.get('window');

import DateControl from './DateControl'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class MainPage extends Component {

  render() {

    return (
        <View style={styles.container}>
          <DateControl
              settingsSnapshot={this.props.settingsSnapshot}
              date={this.props.date}
              onDateChange={this.props.onDateChange}
              width={width}
          />
        </View>


    )
  }
}

MainPage.propTypes = {
  date: React.PropTypes.object.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
  settingsSnapshot: React.PropTypes.func.isRequired,
  dateSnapshot: React.PropTypes.func.isRequired
};