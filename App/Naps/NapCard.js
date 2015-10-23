import React from 'react-native';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Card from './../components/Card'
import NapCardTitle from './NapCardTitle'
import NapCardActions from './NapCardActions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  }
});

export default class NapCard extends Component {

  render() {
    return (
        <Card>
          <View style={styles.container}>

            <View style={{marginTop: 20}}>
              <NapCardTitle {...this.props}/>
            </View>

            <View>
              <NapCardActions
                  width={this.props.width}
                  napSnapshot={this.props.napSnapshot}
                  activeIntervalSnapshot={this.activeInterval()}
              />
            </View>

            <View style={{marginTop: 20}}>
              <NapCardTitle {...this.props}/>
            </View>


          </View>
        </Card>
    )
  }

  activeInterval() {
    console.log(this.props.napSnapshot.key())
    let result = null
    const intervals = this.props.napSnapshot.child('intervals')
    if (intervals.hasChildren()) {
      intervals.forEach(interval => {
        console.log(interval.val().end)
        if (!interval.val().end) { result = interval }
      })
    }
    console.log(result)
    return result;
  }
}

NapCard.propTypes = {
  napSnapshot: React.PropTypes.object.is,
  idx: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};