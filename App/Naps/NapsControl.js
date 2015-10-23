import React from 'react-native';
import PageControl from 'react-native-page-control';

const {
    Component,
    StyleSheet,
    View,
    Text
    } = React;

import Swipe from './../components/Swipe';
import NapCard from './NapCard';
import NapCreate from './NapCreate'

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  card: {
    flex: 1
  }
});

export default class NapsControl extends Component {
  constructor(props) {
    super(props);

    const snap = this.props.dateSnapshot.child('naps')

    this.state = {
      currentPage: snap.hasChildren() ? snap.numChildren() - 1 : 0
    }
  }

  onScroll(e) {
    var offsetX = e.nativeEvent.contentOffset.x,
        pageWidth = this.props.width;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  }

  render() {
    return (
        <View style={[styles.container, {width: this.props.width}]}>
          {
            this.props.dateSnapshot.child('naps').hasChildren() ?
                this.renderNaps() :
                <NapCreate dateSnapshot={this.props.dateSnapshot}/>
          }
        </View>
    )
  }

  renderNaps() {
    return (
        <View>

          <Swipe
              onScroll={this.onScroll.bind(this)}
              xOffset={this.props.width * (this.props.dateSnapshot.child('naps').numChildren() - 1)}
          >

            {this.getNaps().map((nap, idx) => {
              return (
                  <View key={nap.key()} style={[styles.card, {width: this.props.width, height: this.props.height / 7 * 4}]}>
                    <NapCard napSnapshot={nap} idx={idx} width={this.props.width} />
                  </View>
              )
            })}

            <View style={[styles.card, {width: this.props.width, height: this.props.height / 7 * 4}]}>
              <NapCreate dateSnapshot={this.props.dateSnapshot}/>
            </View>

          </Swipe>

          <PageControl
              style={{position:'absolute', left:0, right:0, bottom:20}}
              numberOfPages={this.props.dateSnapshot.child('naps').numChildren() + 1}
              currentPage={this.state.currentPage}
              hidesForSinglePage={true}
              pageIndicatorTintColor='rgba(151, 151, 151, 0.25)'
              indicatorSize={{width:5, height:5}}
              currentPageIndicatorTintColor='rgba(170, 170, 170, 0.75)'
          />
        </View>
    )
  }

  getNaps() {
    let result = []
    this.props.dateSnapshot.child('naps').forEach(nap => {
      result.push(nap)
    })
    return result
  }
}

NapsControl.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  dateSnapshot: React.PropTypes.object.isRequired
};