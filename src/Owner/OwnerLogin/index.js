import React,{useState, useEffect} from 'react';
const OwnerLogin = ({title}) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            email: email,
            password: password,
                    }
        console.log('Email:',email);
        console.log('Password:',password);

    }
    //componetDidMount
    useEffect (()=>{
        console.log('componentDidmount dijalankan')
    },[]);
    return(
    <div className="container"> 
    <br/>
        <div  className="container Container card p-4  d-grid gap-2 col-6 mx-auto text-white bg-dark shadow" >
        <h3> Owner Login</h3>
        <p>Email </p>
        <input placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p>Password </p>
        <input placeholder='Enter Password' type="password" value={password} onChange={(p)=>setPassword(p.target.value)}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
       

        
    
    </div>
    )

}

export default OwnerLogin;