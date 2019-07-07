import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from './Components/Header/Header';
import CurrencyInfo from './Components/CurrencyInfo/CurrencyInfo'
import Orderbook from './Components/Orderbook/Orderbook'
import Chart from './Components/Chart/Chart'
import {fetchData} from "./actions/fetchData";


const styles = require('./app.scss');

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
        // setInterval(() => {
        //     this.props.fetchData();
        // }, 10000)
    }


    render(){
        const names = {
            ask: 'Ask',
            bid: 'Bid',
        };

        console.log(this.props, '1');
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
    return bindActionCreators({fetchData}, dispatch);
}

function mapStateToProps({BTCData}) {
    // console.log(state, 'w mapstetjtoprops')
    return {
        BTCData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

