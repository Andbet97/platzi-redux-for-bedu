import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Error from '../General/Error';

import * as tasksActions from '../../actions/tasksActions';

const Tasks = (props) => {

    const { traerTodas } = props;

    // useEffect de forma similar a componentDidMount y componentDidUpdate
    // https://es.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        traerTodas();
    }, [traerTodas]);

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
        const { tasks } = props;
        const to_user = {
            ...tasks[user_id]
        }

        return Object.keys(to_user).map((task_id) => (
            <div key={task_id}>
                <input type="checkbox" defaultChecked={to_user[task_id].completed} />
                {to_user[task_id].title}
            </div>
        ));
    };

    console.log(props);

    return (
        <div>
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
