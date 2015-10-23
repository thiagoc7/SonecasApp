import React from 'react-native';

const {
    Component,
    StyleSheet,
    ScrollView
    } = React;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column'
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Swipe extends Component {

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
            scrollEnabled={this.props.scrollEnabled}
            horizontal={true}>
          {this.props.children}
        </ScrollView>
    )
  }
}

Swipe.propTypes = {
  onScroll: React.PropTypes.func,
  xOffset: React.PropTypes.number,
  scrollEnabled: React.PropTypes.bool
};

Swipe.defaultProps = {
  xOffset: 0,
  scrollEnabled: true
};