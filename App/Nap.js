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

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
});

export default class Nap extends Component {
  constructor(props) {
    super(props);

    const pages = [1, 2, 3]

    this.state = {
      currentPage: pages.length - 1,
      pages: pages
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

  renderPage(page) {
    return (
        <View style={[styles.container, {width: this.props.width, height: this.props.height / 7 * 4}]}>
          <TouchableHighlight onPress={this.onPress.bind(this)}>
            <Text>pg {page}</Text>
          </TouchableHighlight>
        </View>
    )
  }


  render() {
    return (
        <View>

          <Swipe onScroll={this.onScroll.bind(this)} xOffset={this.props.width * (this.state.pages.length - 1) }>

            {this.state.pages.map(page => this.renderPage(page))}

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
              pageIndicatorTintColor='gray'
              indicatorSize={{width:8, height:8}}
              currentPageIndicatorTintColor='blue'
          />
        </View>
    )
  }
}

Nap.propTypes = {
  date: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onDateChange: React.PropTypes.func.isRequired
};