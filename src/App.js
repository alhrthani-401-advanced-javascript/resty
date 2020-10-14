import React from 'react';

import Form from './form.js';
import Method from './method.js';

import People from './results.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            count: 0,
            results: {},
            method:""
        };
    }

    toggleLoading = () => {
        this.setState({loading: !this.state.loading})
    }

    setMethod=(method)=>{
        this.setState({method});
    }

    updateHandler = (results) => {
        this.setState({results});
    }

    render() {
        return (
            <>
                <Form method={this.state.method} msg="Get me Startwars people!!" toggleLoading={this.toggleLoading} handler={this.updateHandler}  />
                <Method method={this.setMethod}/>
                <People loading={this.state.loading} people={this.state.results} />
            </>
        )
    }
}

export default App;