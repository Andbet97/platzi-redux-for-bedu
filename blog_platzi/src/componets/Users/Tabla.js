import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

const Tabla = (props) => {

    const { usuarios } = props;

    const ponerFilas = () => usuarios.map((usuario) => (
        <tr key={usuario.id}>
            <td>
                {usuario.name}
            </td>
            <td>
                {usuario.email}
            </td>
            <td>
                {usuario.website}
            </td>
        </tr>
    ));

    return (
        <div>
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
                    {ponerFilas()}
                </tbody>
            </table>

        </div>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Tabla);
