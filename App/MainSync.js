import React from 'react-native'
import Firebase from 'firebase'
import moment from 'moment'

const {
    Component,
    StyleSheet,
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
      settingsSnapshot: null,
      dateSnapshot: null
    };
  }

  componentDidMount() {
    this.getDateSnapshot()
    this.getSettingsSnapshot()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date) {
      this.getDateSnapshot(nextProps.date)
    }
  }

  getDateSnapshot() {
    this.firebaseRef
        .child('dates')
        .child(moment(this.props.date).format('YYYY-MM-DD'))
        .on('value', result => {
      this.setState({dateSnapshot: result})
    })
  }

  getSettingsSnapshot() {
    this.firebaseRef.child('settings').on('value', result => {
      this.setState({settingsSnapshot: result})
      if (!result.exists()) {
        this.firebaseRef.child('settings').update({
          nextNapInterval: 60,
          lastNap: moment().subtract(20, 'm').unix()
        })
      }
    })
  }

  render() {
    if (!this.state.settingsSnapshot || !this.state.dateSnapshot) {
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
        settingsSnapshot={this.state.settingsSnapshot}
        dateSnapshot={this.state.dateSnapshot}
    />
  }
}

MainSync.propTypes = {
  user: React.PropTypes.string.isRequired,
  date: React.PropTypes.object.isRequired,
  onDateChange: React.PropTypes.func.isRequired
};