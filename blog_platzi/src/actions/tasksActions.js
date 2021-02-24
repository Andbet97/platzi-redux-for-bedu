import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tasksTypes';

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
