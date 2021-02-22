import React from 'react';
import { connect } from 'react-redux';
import { FaEye } from "react-icons/fa";
import * as usersActions from '../../actions/usersActions';
import { Link } from 'react-router-dom';

const Tabla = (props) => {

    const { usuarios } = props;

    const ponerFilas = () => usuarios.map((usuario, key) => (
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
            <td>
                <Link className="link" to={ `/publicaciones/${key}` }>
                    <FaEye />
                </Link>
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
