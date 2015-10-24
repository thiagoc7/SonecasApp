import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },

  titleContainer: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  textTitle: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 15,
    fontWeight: 'bold',
  },

  textTitleInfo: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 12,
    //fontWeight: 'bold',
  },

  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -60
  },

  controlButton: {
    backgroundColor: 'rgba(34,34,34,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    borderRadius: 3
  },

  controlButtonText: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 12,
  },

  napIntervalText: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 12,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -30,
    marginRight: 50
  },
});

export default class Nap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={[this.props.style, {justifyContent: 'space-between'}]}>
          {this.renderTitle()}
          {this.renderControl()}
          {this.renderNapsIntervals()}
          {this.renderActions()}
        </View>
    )
  }

  renderActions() {
    return (
        <View style={[styles.actionsContainer, {width: this.props.width}]}>

          <TouchableHighlight
              activeOpacity={0.5}
              underlayColor='transparent'>
            <Icon name="ios-trash-outline" size={30} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>
        </View>
    )
  }

  renderNapsIntervals() {
    return (
        <View style={[styles.item, {width: this.props.width, marginTop: -50}]}>
          <Text style={styles.napIntervalText}>Dormiu - 14:30</Text>
          <Text style={styles.napIntervalText}>Dormiu - 14:30</Text>
          <Text style={styles.napIntervalText}>Dormiu - 14:30</Text>
          <Text style={styles.napIntervalText}>Dormiu - 14:30</Text>
          <Text style={styles.napIntervalText}>Dormiu - 14:30</Text>
        </View>
    )
  }

  renderControl() {
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

  renderTitle() {
    return (
        <View style={[styles.item, styles.titleContainer, {width: this.props.width}]}>
          <Text style={styles.textTitle}>Soneca {this.props.nap}</Text>
          <Text style={styles.textTitleInfo}>30min</Text>
          <TouchableHighlight
              activeOpacity={0.5}
              underlayColor='transparent'>
            <Icon name="edit" size={20} color="rgba(217, 217, 217, 0.55)" />
          </TouchableHighlight>
        </View>
    )
  }
}

Nap.propTypes = {
  nap: React.PropTypes.object,
  width: React.PropTypes.number,
  scroll: React.PropTypes.func
};

Nap.defaultProps = {
  initialCount: 0
};