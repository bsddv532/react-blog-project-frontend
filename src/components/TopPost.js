import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';


const TopPost = ({rows}) => {

    const { cat } = useParams()

    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {rows.filter((value) => value.ID === "1" && value.Category === cat).map((val, index) => (
                    <div  key={index}>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='LatestContainer'>
                                <img src={val.Image} alt="blogs" className='LatestImg' />
                                <div className='flexBox'>
                                    <div>
                                        <p className='blogTitle'>{val.Title}</p>
                                        <p className='blogCategory'>{val.Category}</p>
                                    </div>
                                    <p className='LatestId'>{val.ID}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {rows.filter((value) => value.ID >= "2" && value.ID <= "4" && value.Category === cat).map((val,index) => (
                    <div key={index}>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='SubContainer' >
                                <img src={val.Image} alt="blog" className='SubImg' />
                                <div>
                                    <p className='blogTitle'>{val.Title}</p>
                                    <p className='blogCategory'>{val.Category}</p>
                                </div>
                                <p className='LatestId'>{val.ID}</p>
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default TopPost
