import React from 'react-native';
import moment from 'moment';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Card from './../components/Card'
import Button from './../components/Button'
import Text from './../components/Text'

export default class NapCreate extends Component {

  render() {
    return (
        <Card>
          <View>
            <Button onPress={() => this.props.dateSnapshot.ref().child('naps').push({
                isSleeping: false,
                lastTime: moment().unix()
              })
            }>
              <Text>Nova Soneca</Text>
            </Button>
          </View>
        </Card>
    )
  }
}

NapCreate.propTypes = {
  dateSnapshot: React.PropTypes.object.isRequired
};