import React, { Component } from 'react';
import store from './index.js'

class H extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
    }
    add() {
        let self = this
        store.dispatch(self.addToCart('Coffee 500gm', 1, 250))
        console.log(store.getState())
    }

    addToCart(product, quantity, unitCost) {
        return {
            type: 'ADD_TO_CART',
            payload: {
                product,
                quantity,
                unitCost
            }
        }
    }
    render() {
        return (
            <div onClick={this.add}>点我</div>
        );
    }
}

export default H;
