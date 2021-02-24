import axios from 'axios';
import {
	ACTUALIZAR,
	CARGANDO,
	ERROR,
	COM_ACTUALIZAR,
	COM_CARGANDO,
	COM_ERROR
} from '../types/postsTypes';

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

        const news = data.map((post) => ({
            ...post,
            comentarios: [],
            abierto: false
        }));

        const posts_updated = [
            ...posts,
            news
        ];

        dispatch({
            type: ACTUALIZAR,
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


export const openClose = (key, com_key) => (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const selected = posts[key][com_key];

    const updated = {
        ...selected,
        abierto: !selected.abierto
    };

    const posts_updated = [...posts];
    posts_updated[key] = [...posts[key]];
    posts_updated[key][com_key] = updated;

    dispatch({
        type: ACTUALIZAR,
        payload: posts_updated
    });
};

export const getComments = (key, com_key) => async (dispatch, getState) => {
    dispatch({
        type: COM_CARGANDO
    });

    const { posts } = getState().postsReducer;
    const selected = posts[key][com_key];

    try {
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + selected.id;
        const { data } = await axios.get(url);

        const updated = {
            ...selected,
            comentarios: data
        };

        const posts_updated = [...posts];
        posts_updated[key] = [...posts[key]];
        posts_updated[key][com_key] = updated;

        dispatch({
            type: COM_ACTUALIZAR,
            payload: posts_updated
        });

    } catch (error) {
        console.log(error.message);
        dispatch({
            type: COM_ERROR,
            payload: 'Comentarios no disponibles.'
        });
    }
};
