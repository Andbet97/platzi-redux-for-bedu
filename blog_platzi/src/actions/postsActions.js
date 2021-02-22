import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/postsTypes';

export const traerPosts = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: TRAER_TODOS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal, intetnte más tarde.'
        });
    }
};

