import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tasksTypes';

const INITIAL_STATE = {
	tasks: {},
	cargando: false,
	error: ''
};

const tasksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODAS:
			return {
				...state,
				tasks: action.payload,
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

export default tasksReducer;
