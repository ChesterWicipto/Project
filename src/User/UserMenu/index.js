
import {useEffect, useState} from "react";
import Axios from 'axios';
import axios from "axios";
import { useParams } from "react-router";
import firebase from '../../FireBase';
import tinutuan from '../../tinutuan.jpg';
import ayamwoku from '../../ayamwoku.jpg';
import dodol from '../../dodol.jpg';
import nasijaha from '../../nasijaha.jpg';
import nasikuning from '../../nasikuning.jpg';
import pisanggoreng from '../../pisanggoreng.jpg';
import wokublanga from '../../wokublanga.jpg';
import {useHistory} from 'react-router-dom';
// const [tinutuan]= useState('');
// const [nasikuning]= useState('');
// const [nasijaha]= useState('');
// const [pisanggoreng]= useState('');
// const [dodol]=useState('');
// const [ayamwoku]=useState('');
// const [wokublanga]=useState('');


const UserMenu = () =>
{
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     axios.get('https://cloudcomputin-6cd76-default-rtdb.firebaseio.com/', {})
    //     .then(res=>setData(res.data));

    // },[])
    // useEffect (()=>{
    //     console.log(data);
    // },[data])

    let history = useHistory();
    const onBuy = () => {
        alert ("Terima kasih sudah membeli")
        history.push('/usermenu')
    }
    return(

           <div>
               <h3>Menu</h3>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={tinutuan} className="img-thumbnail" alt="..."/>
        Tinutuan
        </div> 
        <button type="button" className="btn btn-primary">select</button>   
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={nasikuning} className="img-thumbnail" alt="..."/>
        Nasi Kuning
        </div>
        <button type="button" class="btn btn-primary">Select</button>    
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={nasijaha} className="img-thumbnail" alt="..."/>
        Nasi Jaha
        </div> 
        <button type="button" class="btn btn-primary">Select</button>   
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={dodol} className="img-thumbnail" alt="..."/>
        Dodol
        </div> 
        <button type="button" class="btn btn-primary">Select</button>   
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={ayamwoku} className="img-thumbnail" alt="..."/>
        Ayam Woku
        </div>  
        <button type="button" class="btn btn-primary">Select</button>  
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={pisanggoreng} className="img-thumbnail" alt="..."/>
        Pisang Goreng
        </div> 
        <button type="button" class="btn btn-primary">Select</button>   
        </div>
        <br/>
        <div className="form p-3 align-items-start bg-warning">
        <div className="Container card">
        <img src={wokublanga} className="img-thumbnail" alt="..."/>
        Woku Blanga
        </div> 
        <button type="button" class="btn btn-primary">Select</button>   
        </div>
        <br/>
        <div className='d-grid gap-1 col-4 mx-auto'>
        <button type="button" className="btn btn-primary" onClick={onBuy} >Buy</button>
        </div>
        

           </div>     
        
    )
}

export default UserMenu;