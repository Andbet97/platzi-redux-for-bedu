import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Posts = (props) => {

    const { key } = useParams();

    const { usuarios, traerTodos, traerPosts } = props;

    useEffect(() => {
        if (!usuarios.length){
            traerTodos();
        }
        traerPosts();
    }, [usuarios, traerTodos, traerPosts])
    console.log(props);
    return (
        <div className="margen">
            <div>
                <h1>Publicaciones { key }</h1>
            </div>
        </div>
    );

};

const mapStateToProps = (reducers) => {
    const {usersReducer, postsReducer} = reducers;
  return {
      ...usersReducer,
      ...postsReducer
    };
};

const mapDispatchToProps = {
	...usersActions,
	...postsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
