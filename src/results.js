import React from 'react';
import ReactJson from 'react-json-view' 


const Results = (props) => {

    return (
        <div className={`loading-${props.loading}`} >
              
              <ReactJson src={{ response: props.results }} theme='monokai' />
        </div>
    )

}

export default Results;