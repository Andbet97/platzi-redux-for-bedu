import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Users = () => {

  const [usuarios, setUsuarios] = useState([]);

  // useEffect de forma similar a componentDidMount y componentDidUpdate
  // https://es.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsuarios(data);
    }
    fetchData();
  }, []);

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
