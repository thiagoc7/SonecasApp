import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    } = React;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  }
});

export default class Nap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={this.props.style}>
          <View style={[styles.item, {width: this.props.width}]}>
            <Text>Soneca {this.props.nap}</Text>
          </View>
          <View style={[styles.item, {width: this.props.width, flex: 1}]}>
            <Text style={{backgroundColor: '#6FBEE8'}}>Acordar - após 20min</Text>
          </View>
          <View style={[styles.item, {width: this.props.width, flex: 1}]}>
            <Text>Dormiu - 14:30</Text>
          </View>
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