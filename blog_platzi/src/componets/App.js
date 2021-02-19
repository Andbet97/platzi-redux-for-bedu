import React, { useState, useEffect } from 'react';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const App = () => {

  const [usuarios, setUsuarios] = useState([]);

  // useEffect de forma similar a componentDidMount y componentDidUpdate
  // https://es.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    setUsuarios([
      {
        nombre: 'Rodolfo',
        correo: 'Rodolfo@platzi.com',
        enlace: 'Rodolfo.com'
      },
      {
        nombre: 'Antonio',
        correo: 'Antonio@platzi.com',
        enlace: 'Antonio.com'
      },
      {
        nombre: 'Ricardo',
        correo: 'Ricardo@platzi.com',
        enlace: 'Ricardo.com'
      },
    ]);
  });

	const ponerFilas = () => usuarios.map((usuario) => (
		<tr>
			<td>
				{ usuario.nombre }
			</td>
			<td>
				{ usuario.correo }
			</td>
			<td>
				{ usuario.enlace }
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

export default App;
