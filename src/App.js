import React from 'react';

import Form from './form.js';
import Method from './method.js';

import Results from './results.js';
import Nav from './Nav';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            count: 0,
            results: "",
            method:"GET"
        };
    }

    toggleLoading = () => {
        this.setState({loading: !this.state.loading})
    }

    setMethod=(method)=>{
        console.log('method>>>',method);
        this.setState({method});
    }

    updateHandler = (results) => {
        console.log('typeof results>>>', results);
        this.setState({results});
    }

    render() {
        return (
            <Router>
            <Nav/>
                <Switch>
                    <Route exact path="/">
                        
                        <Form method={this.state.method} toggleLoading={this.toggleLoading} handler={this.updateHandler}  />
                        <Method method={this.setMethod}/>
                        <Results loading={this.state.loading} results={this.state.results} />
                        
                    </Route>
                    <Route exact path="/history">
                        <h1>history</h1>
                    </Route>
                    <Route exact path="/help">
                        <h1>help</h1>
                    </Route>
                   
                </Switch>
            </Router>
        )
    }
}

export default App;




