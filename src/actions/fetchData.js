import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

export const fetchData =  () => {

    return(dispatch) => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                dispatch({
                    type: FETCH_DATA,
                    payload: res.data
                });
            })

    }
};