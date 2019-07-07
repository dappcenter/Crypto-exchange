import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ORDERBOOK_DATA = 'FETCH_ORDERBOOK_DATA';

export const fetchData =  () => {

    return(dispatch) => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                dispatch({
                    type: FETCH_DATA,
                    currencyData: res.data
                });
            })

    }
};

export const fetchOrderbookData = () => {
    return(dispatch) => {
        axios.get('http://localhost:8000/api/orderbook')
            .then(res => {
                dispatch({
                    type: FETCH_ORDERBOOK_DATA,
                    orderbook: res.data
                });
            })
    }
};