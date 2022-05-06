import React, {useState, useEffect} from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { BsHandThumbsUp } from "react-icons/bs";
import MoreFromSiren from './MoreFromSiren';
import axios from 'axios';



const Article = () => {

    const[rows, setRows] = useState([])
    const { Id } = useParams()
    const { cat } = useParams()

    useEffect(()=>{
        axios.get(`https://blog-backend-data.herokuapp.com/api/v1/blog/${cat}`).then(
            data => setRows(data.data)
        )
    },[cat])

    // console.log(rows)

    return (
        <div>
            {rows.filter((value) => (value.ID === Id && value.Category === cat)).map((val,index) => (
                <div className='articleContainer' key={index}>
                    <p className='articleTitle'>{val.Title}</p>
                    <div className='articleProfileBox'>
                        <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div>
                    </div>
                    <img src={val.Image} alt='' className='articleImg' />
                    <p>{val.Body}{val.Body}</p>
                    <p><BsHandThumbsUp />  <b>9.3k Like</b></p>
                    <hr />

                    <div className='articleProfileBox'>
                        <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p>Written By</p>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

        <MoreFromSiren rows={rows} />

        </div>
    );
};

export default Article;
