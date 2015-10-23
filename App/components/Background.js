import React from 'react-native';

const {
    Component,
    StyleSheet,
    Image,
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'transparent'
  }
});

export default class Background extends Component {

  render() {
    return (
        <Image source={require('image!back-blue')} style={styles.container}>
          {this.props.children}
        </Image>
    )
  }
}

Background.propTypes = {
  children: React.PropTypes.object.isRequired
};