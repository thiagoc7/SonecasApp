import React from 'react-native';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Card from './../components/Card'
import NapCardTitle from './NapCardTitle'

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
            <NapCardTitle {...this.props}/>
          </View>
        </Card>
    )
  }
}

NapCard.propTypes = {
  napSnapshot: React.PropTypes.object.is,
  idx: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};