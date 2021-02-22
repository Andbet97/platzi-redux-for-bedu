import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

// React hooks 
// https://es.reactjs.org/docs/hooks-intro.html
const Posts = (props) => {

    const { key } = useParams();

    return (
        <div className="margen">
            <div>
                <h1>Publicaciones { key }</h1>
            </div>
        </div>
    );

};

/*const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);*/
export default Posts;
