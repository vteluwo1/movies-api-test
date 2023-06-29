import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig'
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';



function App() {

  const [movies, setMovies] = useState();

  async function getMovies() {
    try {
      const response = await api.get("/api/v1/movies")
      console.log(response.data);
      setMovies(response.data)
    
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>

        <Route path='/' element={<Home movies={movies}/>} > </Route>

        </Route>
      </Routes>
     
    </div>
  );
}

export default App;

