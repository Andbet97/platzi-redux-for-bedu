import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Error from '../General/Error';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Posts = (props) => {

    const { key } = useParams();

    useEffect(() => {
        const { traerTodos, traerPostsPorUsuario } = props
        async function fetchData() {
            if (!props.usersReducer.usuarios.length) {
                await traerTodos();
                return;
            }
            if (props.usersReducer.error) {
                return;
            }
            if (!('posts_key' in props.usersReducer.usuarios[key])) {
                await traerPostsPorUsuario(key);
            }
        }

        fetchData();
    }, [props.usersReducer.usuarios])

    const ponerUsuario = () => {
        const {
            usersReducer
        } = props;

        if (usersReducer.cargando) {
            return <Spinner />;
        }

        if (!usersReducer.usuarios.length || usersReducer.error) {
            return <Error error={usersReducer.error} />;
        }

        const { name } = usersReducer.usuarios[key];

        return (
            <h1>
                Publicaciones de { name}
            </h1>
        );
    };

    const ponerPosts = () => {
        const {
            usersReducer,
            postsReducer,
        } = props;

        if (!usersReducer.usuarios.length) return;
        if (usersReducer.error) return;

        if (postsReducer.cargando) {
            return <Spinner />;
        }

        if (postsReducer.error) {
			return <Error error={ postsReducer.error } />
		}

        if (!postsReducer.posts.length) return;
        if (!('posts_key' in usersReducer.usuarios[key])) return;

        const { posts_key } = usersReducer.usuarios[key];

        return postsReducer.posts[posts_key].map((post) => (
            <div
				key={post.id}
				className='pub_titulo'
				onClick={ ()=>alert(post.id) }
			>
				<h2>
					{ post.title }
				</h2>
				<h3>
					{ post.body }
				</h3>
			</div>
        ));
    };

    console.log(props);
    return (
        <div>
            {ponerUsuario()}
            {ponerPosts()}
        </div>
    );

};

const mapStateToProps = (reducers) => {
    const { usersReducer, postsReducer } = reducers;
    return {
        usersReducer,
        postsReducer
    };
};

const mapDispatchToProps = {
    ...usersActions,
    ...postsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
