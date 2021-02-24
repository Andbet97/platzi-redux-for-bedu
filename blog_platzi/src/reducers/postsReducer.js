import {
	ACTUALIZAR,
	CARGANDO,
	ERROR,
	COM_ACTUALIZAR,
	COM_CARGANDO,
	COM_ERROR
} from '../types/postsTypes';

const INITIAL_STATE = {
	posts: [],
	cargando: false,
	error: '',
	com_cargando: false,
	com_error: ''
};

const postsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTUALIZAR:
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

		case COM_ACTUALIZAR:
			return {
				...state,
				posts: action.payload,
				com_cargando: false
			};

		case COM_CARGANDO:
			return { ...state, com_cargando: true };

		case COM_ERROR:
			return {
				...state,
				com_error: action.payload,
				com_cargando: false
			};

		default: return state;
	};
};

export default postsReducer;
