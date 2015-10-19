import React from 'react-native';

const {
    Component,
    StyleSheet,
    Text,
    ScrollView
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    //backgroundColor: 'red'
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class Swipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            onScroll={this.props.onScroll}
            scrollEventThrottle={16}
            directionalLockEnabled={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentOffset={{x: this.props.xOffset, y: 0}}
            horizontal={true}>
          {this.props.children}
        </ScrollView>
    )
  }
}

Swipe.propTypes = {
  onScroll: React.PropTypes.func.isRequired,
  xOffset: React.PropTypes.number
};