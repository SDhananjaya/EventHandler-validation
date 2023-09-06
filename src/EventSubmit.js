import react,{Fragment, useState} from 'react'
const EventSubmit =()=>{
    const[data,setData]=useState({
        Email:'',
        password:''
    })
    const chanHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        if(data.password.length<5){
            alert("provide minimum 5 charecters..")
        }else{
            console.log(data);
        }
    }
    return(
        <Fragment>
            <h2>This is OnSubmit handler & form handler & validation</h2>
            <form onSubmit={submitHandler}>
                <lable>Email</lable> <br/>
                <input type="text" name='email' onChange={chanHandler} /> <br/>
                <lable>password:</lable> <br/>
                <input type="password" name='password' onChange={chanHandler} /> <br/>
                <input type='submit' value='login'/>

            </form>
        </Fragment>
    )
}
export default EventSubmit