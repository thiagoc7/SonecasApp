import React from 'react-native';
import moment from 'moment';

const {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
    } = React;

let {
    width,
    height
    } = Dimensions.get('window');

import DateControl from './DateControl'
import Naps from './Naps'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor: 'transparent'
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      naps: [1, 2, 3],
      lastNap: moment(),
      nextNapInterval: 40
    };
  }

  onDateChange(newDate) {
    this.setState({date: newDate})
  }

  onNapsChange(newNaps) {
    this.setState({date: newNaps})
  }

  render() {
    return (
        <Image source={require('image!back-blue')} style={styles.container}>
          <DateControl
              date={this.state.date}
              lastNap={this.state.lastNap}
              nextNapInterval={this.state.nextNapInterval}
              width={width}
              height={height}
              onDateChange={this.onDateChange.bind(this)}
              onNextNapIntervalChange={newInterval => this.setState({nextNapInterval: newInterval})}
          />

          <Naps
              naps={this.state.naps}
              width={width}
              height={height}
              onDateChange={this.onNapsChange.bind(this)}
          />
        </Image>
    )
  }
}

App.propTypes = {
  initialCount: React.PropTypes.number
};

App.defaultProps = {
  initialCount: 0
};