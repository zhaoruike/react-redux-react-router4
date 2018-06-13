import React, { Component } from 'react';

class Tip extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div onClick={this.add}>{this.props.match.url}</div>
        );
    }
}

export default Tip;
