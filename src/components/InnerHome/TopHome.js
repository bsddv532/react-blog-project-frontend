import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom';


const TopHome = ({rows}) => {

    return (
        <div className='topHomeContainer'>
            <div className='topHomeContainer-1'>
                {rows.filter((value) => value.ID === "4" && value.Category === "Food").map((val,index) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} key={index}>
                        <img src={val.Image} alt='blogs' className='topHomeImg1' />
                        <div className='topHomeContent1'>
                            <p className='topHomeTitle1'>{val.Title}</p>
                            <p className='topHomeCat1'>{val.Category} / {val.Date}</p>
                        </div>
                    </Link>
                ))}
            </div>


            <div className='topHomeContainer-2'>
                {rows.filter((value) => value.ID === "3" && (value.Category === "Technology" || value.Category === "Fitness")).map((val,index) => (
                    <div className='box' key={index}>
                        <Link to={`/article/${val.Category}/${val.ID}`}>
                            <img src={val.Image} alt='blogs' className='topHomeImg2' />
                            <div className='topHomeContent2'>
                                <p className='topHomeTitle2'>{val.Title}</p>
                                <p className='topHomeCat2'>{val.Category} / {val.Date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default TopHome;
