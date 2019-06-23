import React from 'react';


function CurrencyInfo(props) {
    console.log(props, 'propsy w c info');
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
                    <td>9000</td>
                    <td>100 +1%</td>
                    <td>9200</td>
                    <td>8900</td>
                    <td>10000 USDT</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyInfo;