import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usersTypes';

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_TODOS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};
