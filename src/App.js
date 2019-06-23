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
    constructor(props){
        super(props);

        this.state = {
            ask: 'Ask',
            bid: 'Bid',
            BTCData: ''
        }
    }

    componentDidMount() {
        this.props.fetchData();
    }


    render(){
        return(
            <div className={`${styles.App} ${styles.container}`}>
                <Header/>
                <CurrencyInfo/>
                <div className={"row"}>
                    <Orderbook text={this.state}/>
                    <Chart/>
                </div>

            </div>

        )
    }
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchData}, dispatch);
}

function mapStateToProps({ BTCData }) {
    return {
        BTCData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

