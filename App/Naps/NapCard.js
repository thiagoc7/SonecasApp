import React from 'react-native';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Card from './../components/Card'
import Button from './../components/Button'
import Text from './../components/Text'

export default class NapCard extends Component {

  render() {
    return (
        <Card>
          <View>
            <Button onPress={() => this.props.dateSnapshot.ref().child('naps').push({dumb: 1})}>
              <Text>card</Text>
            </Button>
          </View>
        </Card>
    )
  }
}

NapCard.propTypes = {
  dateSnapshot: React.PropTypes.object.isRequired
};