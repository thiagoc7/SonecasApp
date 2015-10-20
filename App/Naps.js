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

const styles = StyleSheet.create({
  container: {
    flex: 4,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'transparent'
  },

  card: {
    flex: 1,
    margin: 10,
    borderRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(34,34,34,0.5)',
  }
});

export default class Naps extends Component {
  constructor(props) {
    super(props);

    const pages = [1, 2, 3]

    this.state = {
      currentPage: pages.length - 1,
      pages: pages,
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
    let pages = this.state.pages
    const lastPage = pages.slice(-1)[0]
    this.setState({
      pages: [...pages, lastPage + 1]
    })
  }

  renderPage(nap, idx) {
    return (
        <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
          <Nap
              style={styles.card}
              width={this.props.width}
              scroll={e => this.setState({scrollEnabled: e})}
              key={idx}
              nap={nap}
          />
        </View>
    )
  }


  render() {
    return (
        <View>

          <Swipe
              onScroll={this.onScroll.bind(this)}
              scrollEnabled={this.state.scrollEnabled}
              xOffset={this.props.width * (this.state.pages.length - 1) }>

            {this.state.pages.map((page, idx) => this.renderPage(page,idx))}

            <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
              <TouchableHighlight onPress={this.onCreatePage.bind(this)}>
                <Text>Criar</Text>
              </TouchableHighlight>
            </View>

          </Swipe>

          <PageControl
              style={{position:'absolute', left:0, right:0, bottom:20}}
              numberOfPages={this.state.pages.length + 1}
              currentPage={this.state.currentPage}
              hidesForSinglePage={true}
              pageIndicatorTintColor={styles.card.backgroundColor}
              indicatorSize={{width:5, height:5}}
              currentPageIndicatorTintColor='rgba(151, 151, 151, 0.25)'
          />
        </View>
    )
  }
}

Naps.propTypes = {
  date: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onDateChange: React.PropTypes.func.isRequired
};