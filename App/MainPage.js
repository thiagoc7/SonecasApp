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
import SignIn from './SignIn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor: 'transparent'
  }
});

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }


  onNapsChange(newNaps) {
    this.setState({date: newNaps})
  }

  render() {
    var { dateObj, ...others } = this.props;

    return (
        <Image source={require('image!back-blue')} style={styles.container}>
          <DateControl
              {...others}
              width={width}
              height={height}
          />

          <Naps
              dateObj={dateObj}
              width={width}
              height={height}
          />
        </Image>
    )
  }
}

MainPage.propTypes = {
  date: React.PropTypes.string.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
  userData: React.PropTypes.func.isRequired,
  dateObj: React.PropTypes.func.isRequired,
  onNextNapIntervalChange: React.PropTypes.func.isRequired
};