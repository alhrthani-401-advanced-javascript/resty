import React from 'react';

class Form extends React.Component {

    // this.state
    // this.props

    _handleSubmit = async e => {
        e.preventDefault();

        // loader must show 
        this.props.toggleLoading();




        let userUrl = e.target.userUrl.value;
        console.log({ userUrl });
        // let userUrl='https://swapi.dev/api/people';


        let raw = await fetch(userUrl);
        let data = await raw.json();
        let head;
        raw.headers.forEach(value => {
            head = { 'Content-Type': value }
        })
        let results = { Headers: head, Response: data }


        let count = 0;
        // send people to the parent
        this.props.handler(results);
        this.props.toggleLoading();
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <label>URL</label>
                <input type="text" name="userUrl"></input>
                {/* <button>{this.props.msg}</button> */}
                <button>Go</button>

            </form>
        )
    }
}

export default Form;