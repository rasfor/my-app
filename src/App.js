import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogContainer from './components/Dialogs/DialogContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='App-content' >
          <Routes >
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route path='/dialogs/*' element={<DialogContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
