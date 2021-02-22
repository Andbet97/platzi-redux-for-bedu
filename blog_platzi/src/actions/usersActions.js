import axios from 'axios';
import { TRAER_TODOS } from '../types/usersTypes';

export const traerTodos = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_TODOS,
            payload: data
        })
    }
    catch (error) {
        console.log('Error: ', error.message);
    }
};
