import React from 'react-native';
import  PageControl from 'react-native-page-control';

const {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    } = React;

import Swipe from './Swipe';
import Nap from './Nap';
import NapWeakUp from './NapWeakUp'

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'transparent'
  },

  card: {
    flex: 1,
    margin: 10,
    borderRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(34,34,34,0.5)',
  },

  createButton: {
    backgroundColor: 'rgba(34,34,34,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    borderRadius: 3
  },

  createText: {
    color: 'rgba(231, 231, 231, 0.8)',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default class Naps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: this.props.pageKeys.length - 1,
      scrollEnabled: true
    }
  }

  onPress() {
    this.props.onDateChange(2);
  }

  onScroll(e) {
    var offsetX = e.nativeEvent.contentOffset.x,
        pageWidth = this.props.width;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  }

  onCreatePage() {
    this.props.onDateNapCreate({start: 1, end: 2})
  }

  renderPage(nap, idx) {
    return (
        <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
          <Nap
              style={styles.card}
              width={this.props.width}
              scroll={e => this.setState({scrollEnabled: e})}
              key={idx}
              nap={idx}
          />
        </View>
    )
  }

  renderWeakUp() {
    return (
        <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
          <NapWeakUp
              style={styles.card}
              width={this.props.width}
              onDateWakeUpChange={this.props.onDateWakeUpChange}
          />
        </View>
    )
  }


  render() {
    let offSet = 0
    if (this.props.pageKeys.length > 0) {
      offSet = this.props.width * (this.props.pageKeys.length - 1)
    }

    return (
        <View>

          <Swipe
              onScroll={this.onScroll.bind(this)}
              scrollEnabled={this.state.scrollEnabled}
              xOffset={offSet}>

            {this.props.pageKeys.length > 0 ?
                this.props.pageKeys.map((pageKey, idx) => this.renderPage(pageKey, idx)) :
                this.renderWeakUp()
            }

            <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
              <View style={[styles.card, {justifyContent: 'center'}]}>

                <TouchableHighlight
                    style={styles.createButton}
                    activeOpacity={0.5}
                    underlayColor='rgba(34,34,34,0.7)'
                    onPress={this.onCreatePage.bind(this)}>
                  <Text style={styles.createText}>Nova Soneca</Text>
                </TouchableHighlight>

              </View>
            </View>

          </Swipe>

          <PageControl
              style={{position:'absolute', left:0, right:0, bottom:20}}
              numberOfPages={this.props.pageKeys.length + 1}
              currentPage={this.state.currentPage}
              hidesForSinglePage={true}
              pageIndicatorTintColor='rgba(151, 151, 151, 0.25)'
              indicatorSize={{width:5, height:5}}
              currentPageIndicatorTintColor='rgba(170, 170, 170, 0.75)'
          />
        </View>
    )
  }
}

Naps.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  dateObj: React.PropTypes.object.isRequired,
  pages: React.PropTypes.object.isRequired,
  pageKeys: React.PropTypes.array.isRequired,
  onDateWakeUpChange: React.PropTypes.func.isRequired,
  onDateNapCreate: React.PropTypes.func.isRequired
};