import React, { Component } from 'react';
import F from './footer.js'
import H from './header.js'
import store from './index.js'
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    let self = this
    this.state = {
      data: [{ product: '123' },
      { product: '123' }]
    }
    this.add = this.add.bind(this)
    store.subscribe(function () {
      let state = store.getState()
      console.log(state)
      self.setState({ data: [{ product: '123' }, { product: '123' }] })
    })
  }
  getMsg(data) {
    console.log(data)
  }
  add() {
    let data = this.state.data
    data.push({ product: '123' })
    this.setState({ data: data })
  }
  componentWillMount() {

  }
  render() {
    return (
      <div className="App">
        <Link to="/tips">tips</Link>
        <Link to="/hello">hello</Link>
        {this.props.children}
        <H></H>
        <F data={this.state.data} msg={this.getMsg} log={store.getState()}></F>
      </div>
    );
  }
}

export default App;
