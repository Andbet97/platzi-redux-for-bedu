import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as tasksActions from '../../actions/tasksActions';

const Tasks = (props) => {

    const { tasks, traerTodas } = props;

    // useEffect de forma similar a componentDidMount y componentDidUpdate
    // https://es.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        traerTodas();
    }, []);

    console.log(props);

    return (
        <div>
            Tareas Saludr
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
