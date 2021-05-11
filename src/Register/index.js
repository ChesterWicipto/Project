import {useState} from 'react';
import firebase from '../FireBase';
import {useHistory} from 'react-router-dom';


const  Register = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [fullname, setFullname]= useState('');

    let history= useHistory();
    // menyimpan data yang di input
    const onSubmit = ()=>{
        const data = {
            fullname: fullname,
            email: email,
            password: password,
                    }
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                     const userId = userCredential.user.uid
                     firebase.database().ref('users/' + userId).set(data)
                     history.push("/")
                    }
                    )
                    .catch((error) => {
                        alert(error.message);                      // ..
                    });
                }
                const onBack=()=>{
                    return(
                        history.push("/")
                    )
                }
    return(
        <div className="Dashboard d-grid gap-1 col-4 mx-auto"> 
        <br/>
        <div  className="card p-4 text-white bg-dark shadow" >
        <h3> Register</h3>
        <p>FullName</p>
        <input placeholder='Enter FullName' value={fullname} onChange={(e)=> setFullname(e.target.value)}/>
        <p>Email</p>
        <input placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p>Password </p>
        <input placeholder='Enter Password' value={password} onChange={(p)=>setPassword(p.target.value)}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        <br/>
        <button type="button" className="btn btn-warning" onClick={onBack}>Back</button>
        </div>
        </div>
    )
}
export default Register;