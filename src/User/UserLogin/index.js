import React,{useState, useEffect} from 'react';
import firebase from '../../FireBase';
import {useHistory} from "react-router-dom";
const UserLogin = ({title}) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    let history = useHistory();
    // menyimpan data yang di input
    const handleSubmit = ()=>{
        const data = {
            email: email,
            password: password,
                    }
        // console.log('Email:',email);
        // console.log('Password:',password);
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    alert ('Login Succes');
    history.push("/usermenu")
    // ...
  })
  .catch((error) =>{
      alert(error.message);
  });


    }
    //componetDidMount
    useEffect (()=>{
        console.log('componentDidmount dijalankan')
    },[]);
    const onBack=()=> {
        return(
            history.push("/")
        )
    }
    return(
    <div className="Dashboard d-grid gap-1 col-4 mx-auto"> 
    <br/>
        <div  className="card p-4 text-white bg-dark shadow" >
        <h3>User Login</h3>
        <p>Email </p>
        <input placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p>Password </p>
        <input placeholder='Enter Password' type="password" value={password} onChange={(p)=>setPassword(p.target.value)}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <br/>
        <button type="button" className="btn btn-warning" onClick={onBack}>Back</button>
        </div>

       

        
    
    </div>
    )

}

export default UserLogin;