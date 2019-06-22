import React, {Component} from "react";

import Header from './Components/Header/Header';
import CurrencyInfo from './Components/CurrencyInfo/CurrencyInfo'
import Orderbook from './Components/Orderbook/Orderbook'
import Chart from './Components/Chart/Chart'

const styles = require('./app.scss');

export default class App extends Component {
    state = {
        ask: 'Ask',
        bid: 'Bid',
    };

    render(){
        return(
            <div className={styles.App}>
                <Header/>
                <CurrencyInfo/>
                <div>
                    <Orderbook text={this.state}/>
                    <Chart/>
                </div>

            </div>

        )
    }
}

