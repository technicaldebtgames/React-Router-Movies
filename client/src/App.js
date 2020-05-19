import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]); {/* Used in stretch? */}
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch> {/* Important to remember the order here so home renders first */}
        <Route path='/movies/:id'>
          <Movie movies={movieList}></Movie>
        </Route>
        <Route path='/'>
          <MovieList movies={movieList}></MovieList>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
