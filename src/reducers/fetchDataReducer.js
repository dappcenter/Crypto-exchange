import { FETCH_DATA } from "../actions/fetchData";

export default (state = {}, action) => {
        switch (action.type) {
            case FETCH_DATA:
                return action.payload;
            default:
                return state;
        }
}