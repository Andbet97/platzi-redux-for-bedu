import React from 'react';

// React components documentation
// https://es.reactjs.org/docs/components-and-props.html
class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      usuarios: [
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
      ]
    }
  }

	ponerFilas = () => this.state.usuarios.map((usuario) => (
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

  render () {
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
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  }
	
};

export default App;
