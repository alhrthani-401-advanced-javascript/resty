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
            results: {}
        };
    }

    toggleLoading = () => {
        this.setState({loading: !this.state.loading})
    }

    updateHandler = (results) => {
        this.setState({results});
    }

    render() {
        return (
            <>
                <Form msg="Get me Startwars people!!" toggleLoading={this.toggleLoading} handler={this.updateHandler}  />
                <Method/>
                <People loading={this.state.loading} people={this.state.results} />
            </>
        )
    }
}

export default App;