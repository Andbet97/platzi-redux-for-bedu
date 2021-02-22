import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/postsTypes';

const INITIAL_STATE = {
	posts: [],
	cargando: false,
	error: ''
};

const postsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_POR_USUARIO:
			return {
				...state,
				posts: action.payload,
				cargando: false
			};

		case CARGANDO:
			return { ...state, cargando: true };

		case ERROR:
			return {
				...state,
				error: action.payload,
				cargando: false
			};

		default: return state;
	};
};

export default postsReducer;
