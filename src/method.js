import React from 'react';

class Method extends React.Component {
   
    // this.state
    // this.props

    _handleSubmit = async e => {
        e.preventDefault();
        this.props.method(e.target.name)         
    }
    
    render () {
        return (
            <>
                <button onClick={this._handleSubmit} name="GET">GET</button>
                <button onClick={this._handleSubmit} name="POST">POST</button>
                <button  onClick={this._handleSubmit} name="PUT">PUT</button>
                <button  onClick={this._handleSubmit} name="DELETE">DELETE</button>
            </>
         
        )
    }
}

export default Method;