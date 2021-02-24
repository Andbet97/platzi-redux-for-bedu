import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../General/Spinner';
import Error from '../General/Error';
import { Redirect, useParams } from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions';

const Save = (props) => {

    const {
        user_id,
        title,
        cargando,
        error,
        changeUserId,
        changeTitle,
        addTask,
        editTask,
        cleanForm
    } = props;

    const { usr_id, tsk_id } = useParams();

    useEffect(() => {
        const { tasks } = props;
        if (usr_id && tsk_id) {
            const task = tasks[usr_id][tsk_id];
            changeUserId(task.userId);
            changeTitle(task.title);
        } else {
            cleanForm();
        }
    }, []);

    const userIdHandler = (event) => {
        changeUserId(event.target.value);
    };

    const titleHandler = (event) => {
        changeTitle(event.target.value);
    };

    const saveHandler = () => {
        const { tasks } = props;
        const new_task = {
            userId: user_id,
            title,
            completed: false
        };
        if (usr_id && tsk_id) {
            const task = tasks[usr_id][tsk_id];
            const edited_task = {
                ...new_task,
                completed: task.completed,
                id: task.id
            }
            editTask(edited_task);
        } else {
            addTask(new_task);
        }
    };

    const deshabilitar = () => {
        if (cargando) {
            return true;
        }
        if (!user_id || !title) {
            return true;
        }
        return false;
    };

    const mostrarAccion = () => {
        if (cargando) {
            return <Spinner />;
        }
        if (error) {
            return <Error error={error} />;
        }
    };

    return (
        <div>
            {(props.regresar) ? <Redirect to='/tareas' /> : ''}
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
            <button
                onClick={saveHandler}
                disabled={deshabilitar()}
            >
                Guardar
            </button>
            {mostrarAccion()}
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
