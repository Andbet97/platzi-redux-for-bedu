import { TRAER_TODOS } from '../types/usersTypes';

const INITIAL_STATE = {
	usuarios: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, usuarios: action.payload };

		default: return state;
	};
};

export default usersReducer;
