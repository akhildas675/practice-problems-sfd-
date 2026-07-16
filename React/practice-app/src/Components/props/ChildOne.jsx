import React from 'react';


const ChildOne = (props) => {
    return (
        <div>

            <h1>Child Component</h1>

            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            
        </div>
    );
}

export default ChildOne;
