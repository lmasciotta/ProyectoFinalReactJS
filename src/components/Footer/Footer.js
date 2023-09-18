    import React from 'react'
    import "./style.css"


    const fecha = new Date()
    const footer = () =>{   
        return(
        <div className='Footer'>
        <h4>Lucas Masciotta | React JS Coderhouse | {fecha.getFullYear()}</h4> 
        </div>
        )
    }

    export default footer;