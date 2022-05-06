import './App.css';
import NavComponent from './components/NavComponent';
// import { BlogProvider } from './components/BlogContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCategory from './components/AllCategory';
import Home from './components/Home';
import Article from './components/Article';

function App() {
  return (

      <div className="App">
        <Router>
        <NavComponent />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:cat" element={<AllCategory />} />
            <Route path="/article/:cat/:Id" element={<Article />} />
          </Routes>
        </Router>

      </div>

  );
}

export default App;
