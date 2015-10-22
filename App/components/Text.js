import React from 'react-native';

const {
    Component,
    StyleSheet,
    Text,
    } = React;

const styles = StyleSheet.create({
  container: {
    color: 'rgba(231, 231, 231, 0.8)'
  }
});

export default class TextContainer extends Component {

  render() {
    return (
        <Text style={[styles.container, {fontSize: this.props.fontSize, fontWeight: this.props.fontWeight}]}>
          {this.props.children}
        </Text>
    )
  }
}

TextContainer.propTypes = {
  children: React.PropTypes.array.isRequired,
  fontSize: React.PropTypes.number.isRequired,
  fontWeight: React.PropTypes.number.isRequired
};

TextContainer.defaultProps = {
  fontSize: 14,
  fontWeight: 'bold'
};