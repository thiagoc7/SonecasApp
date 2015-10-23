import React from 'react-native';
import moment from 'moment';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    ActionSheetIOS,
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
          <View style={{marginRight: 30, marginBottom: 10}}>
            <ButtonIcon underlayColor="transparent" onPress={this.showActionSheet.bind(this)}>
              <Icon name="ios-trash-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
            </ButtonIcon>
          </View>

        </View>
    )
  }

  showActionSheet() {
    let buttons = []
    let intervals = this.getIntervals()
    let totalItens = this.props.napSnapshot.child('intervals').numChildren()

    intervals.forEach(interval => {
      buttons.push(this.formatDate(interval.val().start) + ' - ' + this.formatDate(interval.val().end))
    })

    buttons.push('apaga tudo')
    buttons.push('cancelar')

    ActionSheetIOS.showActionSheetWithOptions({
          options: buttons,
          cancelButtonIndex: totalItens + 1,
          destructiveButtonIndex: totalItens,
        },
        (buttonIndex) => {
          if (buttonIndex == totalItens) {
            this.props.napSnapshot.ref().remove()
          } else if (buttonIndex < totalItens) {
            intervals[buttonIndex].ref().remove()
          }
        });
  }

  getIntervals() {
    let result = []
    this.props.napSnapshot.child('intervals').forEach(interval => {
      console.log(interval.key())
      result.push(interval)
    })
    return result
  }

  formatDate(date) {
    if (!date) {return ''}
    return moment.unix(date).format('HH:mm')
  }
}

NapCardTrash.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired
};