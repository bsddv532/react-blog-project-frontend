import React,{useState, useEffect} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const MoreFromSiren = () => {

    const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://blog-backend-data.herokuapp.com/api/v1/blog`).then(
            data => setRows(data.data)
        )
    },[])

    return (
        <div className='MoreFromSirenContainer'>
            <p className='mainCategory'>More From The Siren</p>
            <hr />

            <div className='TheLatestBox'>
                {rows.filter((value) => value.ID === "2" && (value.Category === "Bollywood" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val, index) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} key={index} className='TheLatestContent'>
                        <p className='body'>Related reads</p>
                        <img src={val.Image} alt="blogs" className='TheLatestImg'  />
                        <p className='title'>{val.Title}</p>
                        <p className='body'><strong>{val.Category}</strong>/ {val.Date}</p>

                        <div className='articleProfileBox'>
                            <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='blogs' className='articleProfileImg' />
                            <div>
                                <p><b>{val.Author}</b></p>
                                <p>{val.Date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

             



        </div>
    );
};

export default MoreFromSiren;
