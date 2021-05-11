import logo from '../ManadoMerch.png';
import Container from '../App.css';
import UserLogin from '../User/UserLogin';
import OwnerLogin from '../Owner/OwnerLogin';
import {useHistory} from 'react-router-dom';


const Design = () => {

    let history= useHistory();
    const handleUser=() => {
        return(
            history.push("/login")
        );

    }
    const handleOwner =()=> {
        return(
            history.push("/register")
        )
    }
   
    
    return(
        <div>
            <div className='from p-2 bg-secondary'>
            <div className='card Dashboard d-grid gap-1 col-4 mx-auto bg-warning'>
            <h3>Welcome</h3>
            <div className="border p-3 bg-dark">
                <div>
            <img src={logo} className="img-thumbnail" alt="..."/>
            <div className="container d-grid gap-1 col-4 mx-auto"> <a/>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleUser}>Login</button> <a/>
            <button type="button" className="btn btn-secondary btn-lg" onClick={handleOwner}>Register</button>
            </div>
            </div>
            </div>

        </div>
        </div>
        </div>
        
        
    )
}


export default Design;