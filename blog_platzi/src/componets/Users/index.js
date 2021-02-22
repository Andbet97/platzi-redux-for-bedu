import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchUsers,
  selectUsers
} from '../../slices/usersSlice';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Users = () => {

  // 
  const usuarios = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

	const ponerFilas = () => usuarios.map((usuario) => (
		<tr>
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
  console.log(usuarios);
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

export default Users;
