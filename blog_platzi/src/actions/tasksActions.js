import axios from 'axios';
import {
    TRAER_TODAS,
    CARGANDO,
    ERROR,
    CAMBIO_USER_ID,
    CAMBIO_TITLE
} from '../types/tasksTypes';

export const traerTodas = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tasks = {};

        data.map((task) => (
            tasks[task.userId] = {
                ...tasks[task.userId],
                [task.id]: {
                    ...task
                }
            }
        ));

        dispatch({
            type: TRAER_TODAS,
            payload: tasks
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Tareas no disponibles.'
        });
    }
};

export const changeUserId = (value) => (dispatch) => {
    dispatch({
        type: CAMBIO_USER_ID,
        payload: value
    });
};

export const changeTitle = (value) => (dispatch) => {
    dispatch({
        type: CAMBIO_TITLE,
        payload: value
    });
};
