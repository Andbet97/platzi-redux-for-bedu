import React, { useEffect } from 'react';
import Spinner from '../General/Spinner';
import Error from '../General/Error';
import Tabla from './Tabla';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Users = (props) => {

  const { usuarios, traerTodos } = props;

  // useEffect de forma similar a componentDidMount y componentDidUpdate
  // https://es.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    if (!usuarios.length) {
      traerTodos();
    }
  }, [traerTodos, usuarios]);

  const ponerContenido = () => {
    if (props.cargando) {
      return <Spinner />;
    }

    if (props.error) {
      return <Error error={props.error} />;
    }

    return (
      <Tabla />
    );
  }

  return (
    <div className="margen">
      <div>
        <h1>Usuarios</h1>
        {ponerContenido()}
      </div>
    </div>
  );

};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
