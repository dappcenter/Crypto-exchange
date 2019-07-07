import React from 'react';


function CurrencyInfo(props) {
    console.log(props.data, 'propsy w c info');
    if(props.data.askPrice){
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">BTC/USDT</th>
                        <th scope="col">Aktualna cena</th>
                        <th scope="col">Zmiana - 24h</th>
                        <th scope="col">Najwyższa - 24h</th>
                        <th scope="col">Najniższa - 24h</th>
                        <th scope="col">Wolumen - 24h</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Bitcoin (logo)</th>
                        <td>{(+props.data.lastPrice).toFixed(2) + ' USDT'}</td>
                        <td>{(+props.data.priceChangePercent).toFixed(2)+'%'}</td>
                        <td>{(+props.data.highPrice).toFixed(2) + ' USDT'}</td>
                        <td>{(+props.data.lowPrice).toFixed(2) + ' USDT'}</td>
                        <td>{(+props.data.volume).toFixed(2) + ' BTC'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
                <p>Loading data</p>
            )
    }


}

export default CurrencyInfo;