import React from 'react-native';

const {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class NapControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 1
    };
  }

  render() {
    return (
        <View style={[styles.item, styles.controlContainer, {width: this.props.width}]}>
          <TouchableHighlight
              activeOpacity={0.5}
              underlayColor='transparent'>
            <Icon name="ios-minus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>

          <TouchableHighlight
              style={styles.controlButton}
              activeOpacity={0.5}
              underlayColor='rgba(34,34,34,0.7)'
          >
            <View style={{alignItems: 'center'}}>
              <Text style={styles.controlButtonText}>Acordou - 14:30</Text>
              <Text style={[styles.controlButtonText, {fontSize: 8}]}>dormindo 30min</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
              activeOpacity={0.5}
              underlayColor='transparent'>
            <Icon name="ios-plus-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>
        </View>
    )
  }
}

NapControl.propTypes = {
  lastSleep: React.PropTypes.number,
  lastWakeUp: React.PropTypes.number,
  refFirebase: React.PropTypes.object.isRequired
};