import React from 'react';

const Loader = (props) =>{
    console.log(props);
    let loadClass = (props.isLoading===true)?"custom-loader":"";
    return (
        <div className={loadClass}></div>
    )
}

export default Loader;