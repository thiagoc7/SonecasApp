import React from 'react-native'
import moment from 'moment'

const {
    Component,
    View,
    } = React;

import SignIn from './SignIn'
import MainSync from './MainSync'
import Background from './components/Background'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'user1',
      //date: moment().format('YYYY-MM-DD')
      date: '2015-10-22'
    };
  }

  render() {
    return (
        <Background>
          {
            this.state.user ?
                <MainSync
                    user={this.state.user}
                    date={moment(this.state.date, 'YYYY-MM-DD')}
                    onDateChange={date => this.setState({date: date.format('YYYY-MM-DD')})}
                /> :
                <SignIn onGetUser={user => this.setState({user: user})} />
          }
        </Background>
    )
  }
}