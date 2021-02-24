import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tasksTypes';

export const traerTodas = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: TRAER_TODAS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Tareas no disponibles.'
        });
    }
};
