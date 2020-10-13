import React from 'react';

class Method extends React.Component {
   
    // this.state
    // this.props

    _handleSubmit = async e => {
        e.preventDefault();
        
        // loader must show 
        this.props.toggleLoading();

        let raw = await fetch('https://swapi.dev/api/people');
        let data = await raw.json();

        let count = data.count; 

        let people = data.results.reduce((list, person) => {
            list[person.name] = person.url;
            return list;
        }, {});


        // send people to the parent
        this.props.handler(count, people);
        this.props.toggleLoading();
    }
    
    render () {
        return (
            <>
                <button>GET</button>
                <button>POST</button>
                <button>PUT</button>
                <button>DELETE</button>
            </>
         
        )
    }
}

export default Method;