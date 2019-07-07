import { FETCH_ORDERBOOK_DATA } from "../actions/fetchData";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ORDERBOOK_DATA:
            return state = action.orderbook
        default:
            return state;
    }
}