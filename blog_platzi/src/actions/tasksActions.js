import axios from 'axios';
import {
    TRAER_TODAS,
    CARGANDO,
    ERROR,
    CAMBIO_USER_ID,
    CAMBIO_TITLE,
    SAVE,
    UPDATE
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

export const addTask = (task) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });

    try {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', task);

        console.log('saved: ', data);
        dispatch({
            type: SAVE
        });
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede agregar, intentelo más tarde.'
        });
    }
};


export const editTask = (task) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });

    try {
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);

        console.log('edited: ', data);
        dispatch({
            type: SAVE
        });
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede editar, intentelo más tarde.'
        });
    }
};

export const taskChange = (usr_id, tsk_id) => (dispatch, getState) => {
    const { tasks } = getState().tasksReducer;
    const task = tasks[usr_id][tsk_id];

    const updated_task = {
        ...tasks
    };

    updated_task[usr_id] = {
        ...tasks[usr_id]
    };

    updated_task[usr_id][tsk_id] = {
        ...tasks[usr_id][tsk_id],
        completed: !task.completed
    }

    dispatch({
        type: UPDATE,
        payload: updated_task
    });

};

export const deleteTask = (tsk_id) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });

    try {
        const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${tsk_id}`);

        console.log('deleted: ', data);
        dispatch({
            type: TRAER_TODAS,
            payload: {}
        });
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Servicio no diponible.'
        });
    }
};
