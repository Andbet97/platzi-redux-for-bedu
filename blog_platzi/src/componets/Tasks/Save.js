import React from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../actions/tasksActions';

const Save = (props) => {

    const { user_id, title, changeUserId, changeTitle } = props;

    const userIdHandler = (event) => {
        changeUserId(event.target.value);
    };

    const titleHandler = (event) => {
        changeTitle(event.target.value);
    };

    return (
        <div>
            <h1>
                Guardar tarea
            </h1>
            Usuario id:
            <input
                type="number"
                value={user_id}
                onChange={userIdHandler}
            />
            <br /><br />
            Titulo:
            <input
                type="text"
                value={title}
                onChange={titleHandler}
            />
            <br /><br />
            <button>
                Guardar
            </button>
        </div>
    );
};

const mapStateToProps = ({ tasksReducer }) => {
    return tasksReducer;
};

const mapDispatchToProps = {
    ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Save)
