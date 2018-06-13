import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { combineReducers } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Tips from './tips.js'
import Hello from './hello.js'

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

const ADD_TO_CART = 'ADD_TO_CART';

function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

function addToProd(prod) {
    return {
        type: 'prod',
        payload: prod
    }
}


const reducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }

        default:
            return state;
    }
}

const productsReducer = function (state, action) {
    switch (action.type) {
        case 'prod': {
            state = action.payload
            return state
        }

        default:
            return false;
    }
}

const allReducers = {
    products: productsReducer,
    shoppingCart: reducer
}

const rootReducer = combineReducers(allReducers);

const store = createStore(rootReducer);

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToProd(true))

unsubscribe()
export default store


ReactDOM.render((<BrowserRouter><App>
    <Route path="/tips" component={Tips} >
    </Route>
    <Route path="/hello" component={Hello} />
    </App></BrowserRouter>), document.getElementById('root'));
registerServiceWorker();



