import React from 'react';

const App = () => {

	const ponerFilas = () => [
		<tr>
			<td>
				Rodolfo
			</td>
			<td>
				Rodolfo@platzi.com
			</td>
			<td>
				Rodolfo.com
			</td>
		</tr>,
		<tr>
			<td>
				Antonio
			</td>
			<td>
				Antonio@platzi.com
			</td>
			<td>
				Antonio.com
			</td>
		</tr>
	];

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
	)
};

export default App;
