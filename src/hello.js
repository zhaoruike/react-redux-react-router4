import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div onClick={this.add}>hello</div>
        );
    }
}

export default Hello;
