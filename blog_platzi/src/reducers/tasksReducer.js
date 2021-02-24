import {
	TRAER_TODAS,
	CARGANDO,
	ERROR,
	CAMBIO_USER_ID,
	CAMBIO_TITLE 
} from '../types/tasksTypes';

const INITIAL_STATE = {
	tasks: {},
	cargando: false,
	error: '',
	user_id: '',
	title: ''
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
		
		case CAMBIO_USER_ID:
			return {
				...state,
				user_id: action.payload
			};

		case CAMBIO_TITLE:
			return {
				...state,
				title: action.payload
			};
			
		default: return state;
	};
};

export default tasksReducer;
