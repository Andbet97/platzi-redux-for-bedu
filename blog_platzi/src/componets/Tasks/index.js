import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Error from '../General/Error';
import { Link } from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions';

const Tasks = (props) => {

    const { traerTodas, deleteTask } = props;

    // useEffect de forma similar a componentDidMount y componentDidUpdate
    // https://es.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        if (!Object.keys(props.tasks).length) {
            traerTodas();
        }
    }, [props.tasks]);

    const mostrarContenido = () => {
        const { tasks, cargando, error } = props;

        if (cargando) {
            return <Spinner />;
        }

        if (error) {
            return <Error error={error} />
        }

        return Object.keys(tasks).map((user_id) => (
            <div key={user_id}>
                <h2>
                    Usuario {user_id}
                </h2>
                <div className="contenedor_tareas">
                    {ponerTareas(user_id)}
                </div>
            </div>
        ));
    };

    const ponerTareas = (user_id) => {
        const { tasks, taskChange } = props;
        const to_user = {
            ...tasks[user_id]
        }

        return Object.keys(to_user).map((task_id) => (
            <div key={task_id}>
                <input
                    type="checkbox"
                    defaultChecked={to_user[task_id].completed}
                    onChange={ () => taskChange(user_id, task_id) }
                />
                {to_user[task_id].title}
                <button className="m_left">
                    <Link className="link" to={`/tareas/guardar/${user_id}/${task_id}`}>
                        Editar
                    </Link>
                </button>
                <button className="m_left" onClick={() => deleteTask(task_id) }>
                    Eliminar
                </button>
            </div>
        ));
    };

    return (
        <div>
            <button>
                <Link className="link" to="/tareas/guardar">
                    Agregar
                </Link>
            </button>
            {mostrarContenido()}
        </div>
    );
};

const mapStateToProps = (reducers) => {
    const { tasksReducer } = reducers;
    return tasksReducer;
};

const mapDispatchToProps = {
    ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
