import React from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Card from './../components/Card'
import NapCardTitle from './NapCardTitle'
import NapCardActions from './NapCardActions'
import NapCardIntervals from './NapCardIntervals'
import NapCardTrash from './NapCardTrash'

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

            <View>
              <NapCardIntervals
                  width={this.props.width}
                  napSnapshot={this.props.napSnapshot}
              />
            </View>

            <View>
              <NapCardTrash
                  width={this.props.width}
                  napSnapshot={this.props.napSnapshot}
              />
            </View>


          </View>
        </Card>
    )
  }

  activeInterval() {
    let result = null
    const intervals = this.props.napSnapshot.child('intervals')
    if (intervals.hasChildren()) {
      intervals.forEach(interval => {
        if (!interval.val().end) { result = interval }
      })
    }
    return result;
  }
}

NapCard.propTypes = {
  napSnapshot: React.PropTypes.object.is,
  idx: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};