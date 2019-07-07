import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from './Components/Header/Header';
import CurrencyInfo from './Components/CurrencyInfo/CurrencyInfo'
import Orderbook from './Components/Orderbook/Orderbook'
import Chart from './Components/Chart/Chart'
import {fetchData, fetchOrderbookData} from "./actions/fetchData";


const styles = require('./app.scss');

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
        this.props.fetchOrderbookData();
        // setInterval(() => {
        //     this.props.fetchData();
        // }, 10000)
    }


    render(){
        const names = {
            ask: 'Ask',
            bid: 'Bid',
        };

        console.log(this.props, '3');
        return(
            <div className={`${styles.App} ${styles.container}`}>
                <Header/>
                <CurrencyInfo data={this.props.BTCData}/>
                <div className={"row"}>
                    <Orderbook text={names} data={this.props}/>
                    <Chart/>
                </div>

            </div>

        )
    }
}



function mapDispatchToProps(dispatch){
    return {
        fetchData: () => dispatch(fetchData()),
        fetchOrderbookData: () => dispatch(fetchOrderbookData()),
    }
}

function mapStateToProps(state) {
    console.log(state, 'w mapstetjtoprops')
    const {BTCData, BTCOrderbook} = state;
    return {
        BTCData,
        BTCOrderbook: BTCOrderbook

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

