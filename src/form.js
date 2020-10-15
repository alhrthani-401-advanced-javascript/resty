import React from 'react';
import { render } from 'react-dom'

class Form extends React.Component {
    _handleSubmit = async e => {
        e.preventDefault();
        // this.props.toggleLoading();
        let userUrl = e.target.userUrl.value;
        let data = e.target.body.value;
        let method = this.props.method;
        console.log('userUrl in form before get method>>', userUrl);
        console.log('method in form before get method >>>>', method);
        console.log('body in form before get method>>', data);

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
        getData(method, userUrl, data).then(results=>{
            console.log('results in form>>>',results);
            this.props.handler(results);
        })


        getData(method, userUrl, data).then(result => {
            try {
                console.log('before', result);
                result.json().then(result => {
                    console.log('after', result);
                    // this.setState({ result, loading: false })
                    this.props.handler({result});

                    // console.log('update2 :', this.state.loading);
                    // let hitsHistory = JSON.parse(localStorage.getItem('hitsHistory'));
                    // hitsHistory.push({ method: this.state.method, url: this.state.url, body: this.state.body })
                    // localStorage.setItem('hitsHistory', JSON.stringify(hitsHistory));
                })
            } catch (error) {
                console.log(error);
            }
        })




        // let raw = await fetch(userUrl);
        // let data = await raw.json();
        // let head;
        // raw.headers.forEach(value => {
        //     head = { 'Content-Type': value }
        // })
        // let results = { Headers: head, Response: data }


        // let count = 0;
        // send people to the parent
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




  
async function getData(method, url, data) {
    // this.setState({ loading: true });
    // console.log('update1 :', this.state.loading);
    // Default options are marked with *
    let req = {
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
    }
    //check if the requist has body or if it is a GET requist
    if (Object.keys(data).length > 0 && method != 'GET') {
        console.log('klfklsnmdlfjnsjfnbdklfnsdlknflsdnfls', Object.keys(data).length);
        req.body = data
    }
    console.log(method, url + data);
    const response = await fetch(url, req);
    // console.log('response.json() >>> ', response);
    return response; // parses JSON response into native JavaScript objects
}

export default Form;