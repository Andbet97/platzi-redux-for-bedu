import React from 'react';
import { connect } from 'react-redux';
import Error from '../General/Error';
import Spinner from '../General/Spinner';

const Comments = (props) => {
    const {
        com_cargando,
        com_error,
        comments
    } = props;

    if (com_error.length) {
        return <Error error={com_error} />
    }

    if (com_cargando && !comments.length) {
        return <Spinner />;
    }

    const ponerComentarios = () => (
        comments.map((comentario) => (
            <li key={comentario.id}>
                <b><u>{comentario.email}</u></b>
                <br />
                { comentario.body}
            </li>
        ))
    );

    return (
        <ul>
            {ponerComentarios()}
        </ul>
    );
};

const mapStateToProps = ({ postsReducer }) => {
    return postsReducer;
};

export default connect(mapStateToProps, {})(Comments);
