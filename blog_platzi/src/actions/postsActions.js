import axios from 'axios';
import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/postsTypes';

import * as usersTypes from '../types/usersTypes';

const { TRAER_TODOS: USERS_TRAER_TODOS } = usersTypes;

export const traerPostsPorUsuario = (key) => async (dispatch, getState) => {
    dispatch({
        type: CARGANDO
    });

    let { usuarios } = getState().usersReducer;
    const { posts } = getState().postsReducer;
    const id = usuarios[key].id;

    try {
        const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + id;
        const { data } = await axios.get(url);

        const posts_updated = [
            ...posts,
            data
        ];

        dispatch({
            type: TRAER_POR_USUARIO,
            payload: posts_updated
        });

        const posts_key = posts_updated.length - 1;
        const users_updated = [...usuarios];
        users_updated[key] = {
            ...usuarios[key],
            posts_key
        };

        dispatch({
            type: USERS_TRAER_TODOS,
            payload: users_updated
        });
    } catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Publicaciones no disponibles.'
		});
	}

};
