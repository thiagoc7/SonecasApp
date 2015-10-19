import React from 'react-native';

const {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions,
    } = React;

let {
    width,
    height
    } = Dimensions.get('window');

import Date from './Date'
import Nap from './Nap'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 1
    };
  }

  onDateChange(number) {
    this.setState({date: this.state.date + number})
  }

  render() {
    return (
        <View style={styles.container}>
          <Date date={this.state.date}
                width={width}
                height={height}
                onDateChange={this.onDateChange.bind(this)}
          />

          <Nap date={this.state.date}
                width={width}
                height={height}
                onDateChange={this.onDateChange.bind(this)}
          />
        </View>
    )
  }
}

App.propTypes = {
  initialCount: React.PropTypes.number
};

App.defaultProps = {
  initialCount: 0
};