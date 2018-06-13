import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Tip from './tip.js'
class Tips extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (<div>
            <div onClick={this.add}>tips</div>
            <Link to="/tips/1">tips-1</Link>
            <Link to="/tips/2">tips-2</Link>
            <Route path="/tips/:id" component={Tip}></Route>
        </div>

        );
    }
}

export default Tips;
