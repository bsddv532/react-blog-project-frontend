import React,{useState, useEffect} from 'react';
import TopHome from './InnerHome/TopHome';
import TheLatest from './InnerHome/TheLatest';
import LatestArticles from './InnerHome/LatestArticles';
import LatestStories from './InnerHome/LatestStories';
import axios from 'axios';

const Home = () => {

  const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://blog-backend-data.herokuapp.com/api/v1/blog`).then(
            data => setRows(data.data)
        )
    },[])

    // console.log(rows)

  return (
    <div>
      <TopHome rows={rows}/>
      <TheLatest rows={rows}/>
      <LatestArticles rows={rows}/>
      <LatestStories rows={rows}/>
    </div>
  );
};

export default Home;
