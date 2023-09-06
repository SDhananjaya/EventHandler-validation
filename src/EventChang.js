import React,{Fragment, useState} from 'react'

const EventChang =()=>{
    const [data,setData]=useState('');
    return(
        <Fragment>
            <center>
                <h2>This is a OnChang Event handler</h2>
                Nmae:{data} <br/>
                <input type="text" name="name" onChange={(e)=>setData(e.target.value)}/>
                
            </center>
        </Fragment>
    )
}
export default EventChang
