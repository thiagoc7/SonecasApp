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
import NapsControl from './Naps/NapsControl'

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

          <NapsControl
              settingsSnapshot={this.props.settingsSnapshot}
              dateSnapshot={this.props.dateSnapshot}
              width={width}
              height={height}
          />
        </View>


    )
  }
}

MainPage.propTypes = {
  date: React.PropTypes.object.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
  settingsSnapshot: React.PropTypes.object.isRequired,
  dateSnapshot: React.PropTypes.object.isRequired
};