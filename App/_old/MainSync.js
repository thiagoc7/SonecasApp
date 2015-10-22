import React from 'react-native'
import Firebase from 'firebase'
import moment from 'moment'

const {
    Component,
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    } = React;

import MainPage from './MainPage'

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default class MainSync extends Component {
  constructor(props) {
    super(props);

    this.firebaseRef = new Firebase("https://sonecas-app.firebaseio.com/users/" + this.props.user + "/");

    this.state = {
      userData: null,
      dateObj: null
    };
  }

  componentDidMount() {
    this.findByDate()
    this.getUserData()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date) {
      this.findByDate(nextProps.date)
    }
  }

  findByDate() {
    this.firebaseRef
        .child('dates')
        .child(moment(this.props.date).format('YYYY-MM-DD'))
        //.child('naps')
        .on('value', result => {
      this.setState({dateObj: result})
    })
  }

  getUserData() {
    this.firebaseRef.child('data').on('value', result => {
      this.setState({userData: result})
      if (!result.val()) {
        this.firebaseRef.child('data').update({
          nextNapInterval: 60,
          lastNap: moment().subtract(20, 'm').unix()
        })
      }
    })
  }

  onNextNapIntervalChange(newInterval) {
    this.firebaseRef.child('data').update({nextNapInterval: newInterval})
  }

  onDateWakeUpChange(newValue) {
    this.firebaseRef
        .child('dates')
        .child(moment(this.props.date).format('YYYY-MM-DD'))
        .update({wakeUp: newValue}, () => this.onDateNapCreate({dumb: 1}))
  }

  onDateNapCreate(nap) {
    this.firebaseRef
        .child('dates')
        .child(moment(this.props.date).format('YYYY-MM-DD'))
        .child('naps').push(nap)
  }

  render() {
    if (!this.state.userData || !this.state.dateObj) {
      return (
          <View style={styles.spinner}>
            <ActivityIndicatorIOS
                animating={true}
                size="large"
            />
          </View>
      )
    }

    return <MainPage
        {...this.props}
        userData={this.state.userData}
        dateObj={this.state.dateObj}
        onNextNapIntervalChange={this.onNextNapIntervalChange.bind(this)}
        onDateWakeUpChange={this.onDateWakeUpChange.bind(this)}
        onDateNapCreate={this.onDateNapCreate.bind(this)}
    />
  }
}

MainSync.propTypes = {
  user: React.PropTypes.object.isRequired,
  date: React.PropTypes.string.isRequired,
  onDateChange: React.PropTypes.func.isRequired
};