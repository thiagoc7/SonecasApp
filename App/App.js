import React from 'react-native';

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

import Date from './Date'
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
      date: 1
    };
  }

  onDateChange(number) {
    this.setState({date: this.state.date + number})
  }

  render() {
    return (
        <Image source={require('image!back-blue')} style={styles.container}>
          <Date date={this.state.date}
                width={width}
                height={height}
                onDateChange={this.onDateChange.bind(this)}
          />

          <Naps date={this.state.date}
                width={width}
                height={height}
                onDateChange={this.onDateChange.bind(this)}
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