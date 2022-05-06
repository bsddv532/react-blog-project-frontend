import React, {useState ,useEffect} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavComponent = () => {

    const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://blog-backend-data.herokuapp.com/api/v1/blog`).then(
            data => setRows(data.data)
        )
    },[])

    return(
      <div>
          <div className='heading'>
              <p className='the'>The</p>
              <p className='siren'>Siren</p>
          </div>

          <div className='navContainer' >
              <Link to="/"  className='NavCategory'>Home</Link>

              {rows.filter((value)=> value.ID === "1").map((val, index)=> (

              <Link to={`/${val.Category}`} className='NavCategory' key={index}>{val.Category}</Link>
              
              ))}
          </div>
          <hr className='navHr'/>

      </div>
  );
};

export default NavComponent;
