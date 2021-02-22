import React from 'react'

const Error = (props) => {
    return (
        <h1 className="center rojo">
            { props.error }
        </h1>
    )
}

export default Error;