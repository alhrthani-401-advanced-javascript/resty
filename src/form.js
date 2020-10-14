import React from 'react';
import { render } from 'react-dom'

class Form extends React.Component {
   _handleSubmit = async e => {
    e.preventDefault();
    // this.props.toggleLoading();
    let userUrl = e.target.userUrl.value;
    let data=e.target.body.value;
    console.log('userUrl>>', userUrl );
    // let userUrl='https://swapi.dev/api/people';
    let method=this.props.method;
    console.log('method >>>>',method);
    console.log('body>>', data );



  
    // let body={
    //     "name": "reactuser",
    //     "password": "123",
    //     "email": "user@11",
    //     "nationalNo": "901566123",
    //     "payPal": "palpalyAccount",
    //     "dob": "2020-01-01T22:00:00.000+00:00",
    //     "familyCount": "3",
    //     "socialStatus": "married",
    //     "income": 1000,
    //     "healthStatus": "good",
    //     "healthDesc": "good",
    //     "expencsies": 400
    // };

    // console.log(getData(method,userUrl,data));
    let results=getData(method,userUrl,data);



    // let raw = await fetch(userUrl);
    // let data = await raw.json();
    // let head;
    // raw.headers.forEach(value => {
    //     head = { 'Content-Type': value }
    // })
    // let results = { Headers: head, Response: data }


    // let count = 0;
    // // send people to the parent
    this.props.handler(results);
    // this.props.toggleLoading();
}

render() {
    return (
        <form onSubmit={this._handleSubmit}>
            <label>URL</label>
            <input type="text" name="userUrl"></input>
            <label>Body</label>
            <textarea placeholder="Add body here" rows="20" cols="40" name="body"></textarea>            
            <button>Go</button>

        </form>
    )
}
}



  
    async function getData(method,url, data) {
        // Default options are marked with *
        console.log(method,url + data);
        let req={
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        };
        if (method !== 'GET'){
            req.body=JSON.stringify(data)// body data type must match "Content-Type" header

        }
        const response = await fetch(url, req);
        console.log('response.json() >>> ',response);
        return response; // parses JSON response into native JavaScript objects
    }

export default Form;