import React from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    View,
    Modal,
    TextInput
    } = React;

import ButtonIcon from './../components/ButtonIcon'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(203, 213, 219, 0.8)',
    padding: 20
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30
  }
});

export default class NapCardTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      text: this.props.napSnapshot.comments
    };
  }

  saveText() {
    this.props.napSnapshot.ref().update({comments: this.state.text})
    this.setState({modalVisible: false})
  }

  render() {
    return (
        <View>
          <ButtonIcon underlayColor="transparent" onPress={() => this.setState({modalVisible: true})}>
            <Icon name="edit" size={20} color="rgba(217, 217, 217, 0.55)" />
          </ButtonIcon>

          <Modal
              animated={true}
              transparent={true}
              visible={this.state.modalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <TextInput
                    style={{height: 150, borderColor: 'gray', borderWidth: 1, backgroundColor: '#fff', fontSize: 14, padding: 10}}
                    onChangeText={(text) => this.setState({text})}
                    multiline={true}
                    value={this.state.text}
                />
                <View style={{marginTop: 20}}>
                  <ButtonIcon underlayColor="transparent" onPress={this.saveText.bind(this)}>
                    <Icon name="checkmark" size={50} color="rgba(30, 82, 129, 0.8)" />
                  </ButtonIcon>
                </View>
              </View>
            </View>
          </Modal>

        </View>
    )
  }

}

NapCardTitle.propTypes = {
  napSnapshot: React.PropTypes.object.isRequired,
};