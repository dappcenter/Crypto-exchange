import React from 'react';

const styles = require('./orderbook.scss');

export default (props) => {
    const renderAskList = (orderbook, askIndex) => {
        console.log(orderbook, 'przed if/else');
        if(orderbook.length !== 0){
            console.log('iffka')
            return orderbook.asks.map((ask, index) => {
                console.log(ask);
                return <li key={index}
                           className="list-group-item"
                           style={{color: 'white', backgroundColor: 'black'}}>
                            {(+ask[askIndex]).toFixed(2)}
                           </li>
            })
        } else {
            console.log('elska')
            return <p>Loading ask data</p>
        }

    };
    console.log(props, 'propsiaki')
    return (
        <div className="col-sm-4">
            <div className={styles.orderBox}>
                <h1>{props.text.ask}</h1>
                <div className="row">
                    <ul className="list-group col-sm-6">
                        Price
                        {renderAskList(props.data.BTCOrderbook, 0)}
                    </ul>
                    <ul className="list-group col-sm-6">
                        Amount
                        {renderAskList(props.data.BTCOrderbook, 1)}
                    </ul>
                </div>

            </div>
            <div className={styles.orderBox}>
                <h1>{props.text.bid}</h1>
                <ul>
                    <li>bid</li>
                    <li>bid</li>
                    <li>bid</li>
                </ul>
            </div>
        </div>
    )
}