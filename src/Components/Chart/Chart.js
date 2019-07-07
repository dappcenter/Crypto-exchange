import React from 'react';

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default () => {
    return (
        <div className={"col-sm-8"}>
            <TradingViewWidget
                symbol="Binance:BTCUSDT"
                theme={Themes.DARK}
                locale="fr"
                autosize
            />
        </div>
    )
}