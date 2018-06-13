import React, { Component } from 'react';

class F extends Component {
    constructor(props){
        super(props)
        this.sendMsg = this.sendMsg.bind(this)

    }
    footerList() {
        return this.data.shoppingCart.cart.map(function (item, index) {
            return <div k={'F' + index}>{item.product}</div>
        })
    }
    sendMsg(data){
        this.props.msg(data)
    }
    componentWillReceiveProps(data){
        console.log(data)
    }
    render() {
        let sendMsg = this.sendMsg
        return (
            <div>
                <div>{JSON.stringify(this.props.data)}</div>
                {this.props.data.map(function (item, index) {
                    return <div key={index} onClick={sendMsg.bind(null,index)}>{item.product}</div>
                })}
            </div>
        );
    }
}

export default F;
