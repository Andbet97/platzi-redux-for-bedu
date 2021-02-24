import React, { Component } from 'react'
import { connect } from 'react-redux'

const Save = () => {
    return (
        <div>
            <h1>
                Guardar tarea
            </h1>
            Usuario id:
            <input type="number"/>
            <br/><br/>
            Titulo:
            <input type="text"/>
            <br/><br/>
            <button>
                Guardar
            </button>
        </div>
    );
};

export default Save;

/*const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Save)*/
