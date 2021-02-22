import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Users = (props) => {
  
  const { usuarios, traerTodos } = props;

  // useEffect de forma similar a componentDidMount y componentDidUpdate
  // https://es.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    traerTodos();
  }, [traerTodos]);

	const ponerFilas = () => usuarios.map((usuario) => (
		<tr key = { usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
          { ponerFilas() }
        </tbody>
      </table>
    </div>
  );
	
};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
