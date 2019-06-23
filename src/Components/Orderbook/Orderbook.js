import React from 'react';

const styles = require('./orderbook.scss');

export default (props) => {
    console.log(props, 'orderbuk');
    return (
        <div className="col-sm-2">
            <div className={styles.orderBox}>
                <h1>{props.text.ask}</h1>
                <ul>
                    <li>ask</li>
                    <li>ask</li>
                    <li>ask</li>
                </ul>
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