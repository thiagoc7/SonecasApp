import React from 'react-native'
import moment from 'moment'

const {
    Component,
    StyleSheet,
    Image,
    } = React;

import SignIn from './SignIn'
import MainSync from './MainSync'

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
      user: null,
      date: moment().format('YYYY-MM-DD')
    };
  }

  render() {
    return (
        <Image source={require('image!back-blue')} style={styles.container}>
          {
            this.state.user ?
                <MainSync
                    user={this.state.user}
                    date={moment(this.state.date, 'YYYY-MM-DD')}
                    onDateChange={date => this.setState({date: date.format('YYYY-MM-DD')})}
                /> :
                <SignIn onGetUser={user => this.setState({user: user})} />
          }
        </Image>
    )
  }
}