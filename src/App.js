import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialog from './components/Dialogs/Dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='content'>
          <Header />
          <Navbar />
          <div className='App-content' >
            <Routes >
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs' element={<Dialog />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
