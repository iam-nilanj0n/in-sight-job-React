import React from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import IndexPage from './commponents/WebPageComponents/IndexPage/IndexPage';
import LoginRegistrationPage from './commponents/WebPageComponents/LoginRegistrationPage/LoginRegistrationPage';
import SearchResultPage from './commponents/WebPageComponents/SearchResultPage/SearchResultPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/login' element={<LoginRegistrationPage/>}/>
        <Route path='/searchResult' element={<SearchResultPage/>} />
      </Routes>
    </div>
  );
};

export default App;

