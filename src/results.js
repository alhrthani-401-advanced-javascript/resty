import React from 'react';
import ReactJson from 'react-json-view' 


const People = (props) => {

    return (
        <div className={`loading-${props.loading}`} >
            {props.people}
            {/* <ReactJson src={props.people} theme="Adventure Time" />  */}

            

            {/* <ul>
  
                {Object.keys(props.people).map((key, indx)=> {
                    return (
                        
                        <li key={indx}>
                            <a href={props.people[key]}>{key}</a>
                        </li>
                    );
                })}
            </ul> */}
        </div>
    )

}

export default People;