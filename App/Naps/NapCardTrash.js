import React from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    } = React;

import Text from './../components/Text'
import ButtonIcon from './../components/ButtonIcon'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default class NapCardTrash extends Component {

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          <View style={{marginRight: 30, marginBotton: 20}}>
            <ButtonIcon underlayColor="transparent">
              <Icon name="ios-trash-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
            </ButtonIcon>
          </View>

        </View>
    )
  }

}

NapCardTrash.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  idx: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};