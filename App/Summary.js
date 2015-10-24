import React from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    Text,
    Modal
    } = React;

import ButtonIcon from './components/ButtonIcon'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(203, 213, 219, 0.95)',
    padding: 20
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    fontSize: 16
  }
});

export default class Summary extends Component {

  render() {
    return (
        <Modal
            animated={true}
            transparent={true}
            visible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>{moment(this.props.date).format('dddd, DD/MM/YYYY')}</Text>

              <ButtonIcon underlayColor="transparent" onPress={this.props.onModalHide}>
                <Icon name="checkmark" size={50} color="rgba(30, 82, 129, 0.8)" />
              </ButtonIcon>

            </View>
          </View>
        </Modal>
    )
  }
}

Summary.propTypes = {
  date: React.PropTypes.string.isRequired,
  dateSnapshot: React.PropTypes.func.isRequired,
  modalVisible: React.PropTypes.bool.isRequired,
  onModalHide: React.PropTypes.func.isRequired
};